# Changelog

## 3.0.0, 2026-10-05

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.20. The 10 tools keep their names and arguments, and every difference below was measured against 2.0.2, the last version on npm, before release.

- **A person approves each confirmed operation over MCP.** All 5 still need confirmation. Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, the model's `confirm: true` still counts, and `TESTIMONIAL_CONFIRM=model` makes it enough everywhere. The refusal and the approval form both say what 2.0 said, that the call may import or publish customer proof, send a real request email or save private testimonial files, and the audit log records who approved each one.
- **`TESTIMONIAL_ALLOW_DESTRUCTIVE=0` still refuses all 5**, confirmed or not, and `TESTIMONIAL_READ_ONLY=1` still leaves only the 5 reads.
- **Testimonial.to's status picks the exit code.** A request Testimonial.to rejects (400 or 422) exits 2 instead of 5, and a removed resource (410) 3 instead of 5. 401 and 403 still exit 4, 404 3, 429 7, a server error 5, and an unknown profile or nothing configured 10. 1 now means an unexpected error.
- **`which <words>` finds a command**, and `agent-context` describes every command, flag and setting as JSON. In Codex 0.159.3, finding the command that sends a testimonial request and its flags took a median of 71,761 input tokens over the CLI instead of 82,582 (five runs each): 2.0.2's runs read the general help, then the command list or the general help again, then the command's help, and one tried `schema` without a command first. 3.0.0's asked `which send testimonial request`, whose answer carries the command's help: three answered from it, and two read the help again.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format, and **`testimonial-mcp --http`** serves the same tools over Streamable HTTP, on 127.0.0.1:8787 unless told otherwise.
- **The tool list marks the five tools that need approval.** Each carries `anthropic/requiresUserInteraction`, which Claude Code reads and does not pass to the model, so the list a client receives is 3,630 o200k tokens instead of 3,566. With every tool loaded, Claude Code 2.1.286 spends 4,902 tokens a message on the list instead of 4,922.
- **Less work to start.** Each input and body schema now compiles on its first use rather than at load, and the entry turns on Node's compile cache. The server spends 177 ms of CPU before its first answer where 2.0.2 spent 191, and answers in 126 ms of wall time instead of 131 (median of 21 runs, taking turns on one Mac). npx installs 10 dependencies instead of 94. A test still compiles every schema.
- **`doctor --network` verifies the key**, as 2.0's did.
- **Docs.** README section 7 has the measured Claude Code and Codex costs, where 2.0 said they were pending, and the exit codes say what 2 covers.

### Upgrading

Over MCP, expect an approval prompt or form before any confirmed operation; a headless agent that should run them with `confirm: true` alone needs `TESTIMONIAL_CONFIRM=model`. A script that read exit 5 as a rejected request should read 2, and as a removed resource 3. An error is now one JSON object with `error`, Slipway's `code` (`usage`, `refused`, `auth`, `not_found`, `rate_limited`, `api`, `not_configured`) and a `hint`, plus Testimonial.to's `status` when it answered; 2.0.2 printed the tool's JSON inside the `error` string. Over MCP, an argument that fails the schema comes back as the MCP SDK's own message, "Input validation error: …", instead of JSON. With `TESTIMONIAL_READ_ONLY=1`, a client that calls a hidden tool gets "tool not found" instead of a refusal naming `TESTIMONIAL_READ_ONLY`, and that call is not in the audit log; the CLI still names the setting. The audit log's lines gain `confirmed_by`, and each allowed call is followed by a `done` or `failed` line. A script that pipes JSON-RPC into the server must keep stdin open until it reads the answer: the server now stops when its input ends, as the MCP stdio binding asks. `--http` refuses a page from another site unless `TESTIMONIAL_HTTP_ALLOWED_ORIGINS` lists it. Some terminal screens grew: the general help by 96 tokens, for `which`, `install`, what each setting is for and the exit codes; the command list by 15; and a missing argument's error by 14, for its code and a hint. `SKILL.md` is 82 tokens longer in Claude Code, because it says how approval works over MCP and how `which` finds a command, and that exit 1 is an unexpected error and 2 also an unknown command or a hidden write.

## 2.0.2, 2026-10-04

- **`npx -y @thenavidm/testimonial-mcp-cli` always starts the MCP server.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order, so an MCP client set up with this README's install line could get `testimonial-cli` and its command list instead of a server. A third binary named after the package now always starts the server, and npx picks it by name.

## 2.0.1: 2026-10-03

- Correct export confirmation help to describe the bounded private file operation.
- Clarify native testimonial payloads are JSON objects and tidy size/default labels.
- Preserve current native routes, separate consent, ten tools and tested approval behavior.

## 2.0.0: 2026-10-03

Major correction of the legacy routes/arguments to five documented Space REST operations. Four existing tool names remain; unsupported update_testimonial is excluded and replaced by documented dashboard/official MCP instructions. Add shared task CLI/local MCP, isolated profiles, separate native customer consent and local approval, side-effecting GET email guards, exact reviewed batches and single-array bounded private exports. Complete client/OS/desktop setup,10 full references,20 accordion FAQs, current official/generic-community comparisons, native retina terminal and matching CMS guide. Provider outcomes, actual GUI and matched Codex costs remain separately recorded.

## 1.0.0: private legacy

Original five-tool MCP with stale routes/argument assumptions and no task CLI. Intact private source history is excluded from fresh public refs. AGPL-3.0 preserved.
