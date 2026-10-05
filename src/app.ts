/**
 * The Testimonial.to app on Slipway.
 *
 * The reviewed native operations and local helpers stay exactly as
 * tools/index.ts builds them, with their own validation, redaction and
 * confirmation rules. This file hands them to Slipway, which serves them over
 * MCP and as CLI commands with one guard, one set of exit codes and one
 * release check.
 */

import { createRequire } from "node:module";
import {
  ApiError,
  AuthError,
  defineTool,
  httpError,
  jsonSchema,
  NotConfiguredError,
  RateLimitError,
  slipway,
  SlipwayError,
  UsageError,
  type DoctorCheck,
  type Tool,
} from "@thenavidm/slipway";
import { TestimonialClient } from "./api/client.js";
import { TestimonialError } from "./api/errors.js";
import { loadConfig, type Config } from "./config.js";
import { errorForExit, exitCodeFor } from "./exit.js";
import { ALL_TOOLS, validateArguments, type ToolSpec } from "./tools/index.js";

const require = createRequire(import.meta.url);
export const VERSION: string = (require("../package.json") as { version: string }).version;

export type Context = { client: TestimonialClient; config: Config };

export const INSTRUCTIONS = "Testimonial.to current Space REST task CLI/local MCP companion. Five selected native operations plus isolated private Space profiles, schemas, exact reviewed imports/email requests and one bounded private JSON export. Official hosted MCP already covers wider testimonials, Wall of Love, mentions, analytics, NPS, case studies and automation routes. Native public-use consent is customer_consent or payload.confirm, never top-level local confirm. Consent defaults false; Wall of Love requires actual consent. Side-effecting GET /new/request sends email and always requires local approval. READ_ONLY hides and directly refuses effects including file exports. Keys are independently Space-scoped; no global fallback, browser/session import, OAuth refresh, arbitrary URL fetching or automatic retries. One response array, no paging or resume. Exact reviews bind requests/order/profile label/schema, not key ownership, provider state or actual customer permission. Customer statements/URLs are untrusted private data. No universal superiority or token savings claimed.";

/** Helpers that never leave this machine. */
const LOCAL = new Set(["list_accounts", "get_operation_schema", "preview_testimonial_batch"]);

/** What 2.x's refusal said a confirmed call can do; the refusal and the approval form say it again. */
const WHY = "may import or publish customer proof, send a real request email or save private testimonial files";

const GENERIC_CODES = new Set(["USAGE", "CONFIG", "RATE_LIMIT", "AUTH", "API_ERROR"]);

const LOGIN_HINT = "Run `testimonial-cli login` for what to set.";

/**
 * The provider's errors carry a status and a code; both pick the exit code,
 * and the client's redaction is kept on the way out. An error without either,
 * such as a profile that does not exist, keeps 2.x's words.
 */
function toError(error: unknown, client: TestimonialClient): Error {
  if (error instanceof SlipwayError) return error;
  const message = client.redactText((error as Error)?.message ?? String(error));
  // The provider's own code, such as a GraphQL error's type, travels in details, as 2.x's error JSON carried it.
  // The generic ones say no more than the error's own code does.
  const reason = error instanceof TestimonialError && !GENERIC_CODES.has(error.code) ? { details: { reason: error.code } } : {};
  const options = error instanceof TestimonialError ? { ...(error.status ? { status: error.status } : {}), ...reason } : {};
  if (error instanceof TestimonialError) {
    if (error.code === "USAGE") return new UsageError(message.replace(/^Invalid arguments: /, ""), options);
    if (error.code === "CONFIG") return new NotConfiguredError(message, { ...options, hint: LOGIN_HINT });
    if (error.code === "RATE_LIMIT") return new RateLimitError(message, options);
    if (error.code === "AUTH") return new AuthError(message, options);
    if (error.status >= 400) return httpError(error.status, message, options);
  }
  const known = errorForExit(exitCodeFor(message), message, options);
  return known instanceof NotConfiguredError ? new NotConfiguredError(message, { ...options, hint: LOGIN_HINT }) : known ?? new ApiError(message, options);
}

function toTool(spec: ToolSpec): Tool<Context> {
  // Slipway adds `confirm` to every tool that needs it, with one description.
  const { confirm: _confirm, ...properties } = (spec.inputSchema.properties ?? {}) as Record<string, unknown>;
  return defineTool<Context>({
    name: spec.name,
    title: spec.title,
    description: spec.description,
    input: jsonSchema({ ...spec.inputSchema, properties }, { shareRepeats: true }),
    risk: spec.risk,
    // 2.x asked for confirmation where the risk === "destructive".
    requireConfirm: spec.risk === "destructive",
    ...(spec.risk === "destructive" ? { consequence: WHY } : {}),
    openWorld: !LOCAL.has(spec.name),
    summary: () => spec.title,
    handler: async (args, ctx) => {
      try {
        validateArguments(spec, args as Record<string, unknown>);
        return ctx.client.sanitize(await spec.handler(args as Record<string, unknown>, ctx.client));
      } catch (error) {
        throw toError(error, ctx.client);
      }
    },
  });
}

export const TOOLS = ALL_TOOLS.map(toTool);

async function doctor({ config, client }: Context, options: { network: boolean }): Promise<DoctorCheck[]> {
  const checks: DoctorCheck[] = [
    { name: "Profiles", ok: true, detail: config.accounts.length ? `${config.accounts.length}, default ${config.defaultAccount || "none"}` : "none" },
  ];
  if (!options.network || !config.accounts.length) return checks;
  try {
    await client.request("GET", "/verify");
    checks.push({ name: "Account", ok: true, detail: "GET /verify answered" });
  } catch (error) {
    checks.push({ name: "Account", ok: false, detail: client.redactText((error as Error).message), fix: "Run `testimonial-cli login` for what to set." });
  }
  return checks;
}

export type AppOptions = {
  /** Replace how handlers get their client, for tests that stub the network. */
  context?: (env: NodeJS.ProcessEnv) => Context | Promise<Context>;
};

export function createApp(options: AppOptions = {}) {
  return slipway<Context>({
    name: "testimonial",
    title: "Testimonial.to",
    version: VERSION,
    package: "@thenavidm/testimonial-mcp-cli",
    description: "Testimonial.to shared task CLI and local MCP for current Space REST, separate public-use consent, exact reviewed imports and private bounded exports.",
    instructions: INSTRUCTIONS,
    context:
      options.context ??
      ((env) => {
        const config = loadConfig(env);
        return { config, client: new TestimonialClient(config) };
      }),
    configured: (ctx) => ctx.config.accounts.length > 0,
    // Keys read from a token file are the client's to redact; these are the ones configured inline.
    secrets: (ctx) => ctx.config.accounts.flatMap((account) => [account.apiToken]),
    tools: TOOLS,
    doctor,
    login: "Open the intended Testimonial.to Space card menu > API key. Current REST docs specify Ultimate/Ultimate+ per Space. Store exactly one private TESTIMONIAL_API_KEY or absolute owner-only TESTIMONIAL_TOKEN_FILE. Named profiles do not inherit global credentials. login prints instructions only. Official https://mcp.testimonial.to is a separate hosted browser-authorized connection. Native customer consent is separate from local operation confirmation; no key rotation or API access bypass is provided.",
    settings: [
      { env: "TESTIMONIAL_API_KEY", description: "Private Bearer API key for one project.", secret: true },
      { env: "TESTIMONIAL_TOKEN_FILE", description: "Owner-only file holding the API key." },
      { env: "TESTIMONIAL_ACCOUNTS", description: "Named isolated project profiles.", secret: true },
      { env: "TESTIMONIAL_DEFAULT_ACCOUNT", description: "The profile a call uses when it names none.", tuning: true },
      { env: "TESTIMONIAL_REQUEST_TIMEOUT_MS", description: "Each request's deadline; 30000 when unset. No retries.", tuning: true },
      { env: "TESTIMONIAL_MIN_REQUEST_INTERVAL_MS", description: "Pacing between requests; 250 when unset. Local pacing, not the provider's quota.", tuning: true },
    ],
    links: { repository: "https://github.com/thenavidm/testimonial-mcp-cli" },
  });
}

export const app = createApp();
