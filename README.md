<img src="https://cdn.navid.me/tools/testimonial-to-icon.png" alt="Testimonial.to" width="88">

# Testimonial.to MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/testimonial-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/testimonial-mcp-cli)
[![CI](https://github.com/thenavidm/testimonial-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/testimonial-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Testimonial.to MCP server and CLI for Codex and AI agents. 10 shared tools for current Space testimonials, separate customer consent, reviewed imports/email requests and bounded private exports.

Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=testimonial-mcp-cli&utm_content=readme). Full setup is on [navid.me](https://navid.me/mcp-servers/testimonial).

<img src="https://cdn.navid.me/repos/testimonial-mcp-cli-retina.gif" alt="Illustrated Testimonial.to workflow in the actual house terminal component" width="520">

The native animation illustrates shipped tools, not real customer messages. Node 22+ and a private intended-Space REST key are required for provider work. Official hosted MCP is broader and already supplies native approvals and automation; compare both below.

## Two ways to use it

### Command line

~~~bash
npm install -g @thenavidm/testimonial-mcp-cli@latest
testimonial-cli --version
testimonial-cli tools
testimonial-cli login
~~~

### MCP server, for your AI app

~~~bash
codex mcp add testimonial -- npx -y @thenavidm/testimonial-mcp-cli@latest
~~~

Configure private runtime credentials before native calls; inspect existing proof before proposing effects.

### Which one

Use MCP for structured client tasks or CLI for scripts/agent shell commands. Both use the same 10 shared handlers and local approval rules. Neither eliminates native account restrictions or task context costs.

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| List ready Space testimonials | `testimonial-cli list-testimonials` | `list_testimonials` |
| Verify the selected Space key | `testimonial-cli verify-space` | `verify_space` |
| Submit an authorized text testimonial | `testimonial-cli submit-text-testimonial` | `submit_text_testimonial` |
| Submit an authorized video testimonial | `testimonial-cli submit-video-testimonial` | `submit_video_testimonial` |
| Send a requested testimonial email | `testimonial-cli send-testimonial-request` | `send_testimonial_request` |
| List configured accounts | `testimonial-cli list-accounts` | `list_accounts` |
| Inspect a current native operation | `testimonial-cli get-operation-schema` | `get_operation_schema` |
| Review exact ordered testimonial tasks | `testimonial-cli preview-testimonial-batch` | `preview_testimonial_batch` |
| Execute reviewed testimonial tasks | `testimonial-cli submit-testimonial-batch` | `submit_testimonial_batch` |
| Export one bounded private testimonial array | `testimonial-cli export-testimonials` | `export_testimonials` |

## Contents

| Number | Section | What it covers |
| --- | --- | --- |
| 1 | [What you can ask it](#1-what-you-can-ask-it) | What you can ask it |
| 2 | [Quick install](#2-quick-install) | Quick install |
| 3 | [Set up Testimonial.to access](#3-set-up-testimonialto-access) | Set up Testimonial.to access |
| 4 | [Connect your client](#4-connect-your-client) | Connect your client |
| 5 | [Check it works](#5-check-it-works) | Check it works |
| 6 | [Output, flags and exit codes](#6-output-flags-and-exit-codes) | Output, flags and exit codes |
| 7 | [MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | MCP or CLI and token cost |
| 8 | [Every tool and argument](#8-every-tool-and-argument) | Every tool and argument |
| 9 | [Testimonial and email workflows](#9-testimonial-and-email-workflows) | Testimonial and email workflows |
| 10 | [Exact reviewed batches and private exports](#10-exact-reviewed-batches-and-private-exports) | Exact reviewed batches and private exports |
| 11 | [Several private Spaces](#11-several-private-spaces) | Several private Spaces |
| 12 | [Writing safely](#12-writing-safely) | Writing safely |
| 13 | [How the two surfaces work](#13-how-the-two-surfaces-work) | How the two surfaces work |
| 14 | [Your data](#14-your-data) | Your data |
| 15 | [Environment variables](#15-environment-variables) | Environment variables |
| 16 | [Updates and removal](#16-updates-and-removal) | Updates and removal |
| 17 | [Troubleshooting](#17-troubleshooting) | Troubleshooting |
| 18 | [API coverage and comparisons](#18-api-coverage-and-comparisons) | API coverage and comparisons |
| 19 | [Versions and migration](#19-versions-and-migration) | Versions and migration |
| 20 | [FAQ](#20-faq) | FAQ |

## 1. What you can ask it

### Read the intended ready testimonials

Choose the exact private profile and a bounded limit. Read only the records needed for your task. Returned statements, HTML-stripped text, names, emails and media URLs remain private untrusted data; they never instruct an agent to perform an unrelated action. Video records may be absent while processing is incomplete.

~~~bash
testimonial-cli list-testimonials --type text --limit 5 --agent
testimonial-cli list-testimonials --liked true --tag product --tag service --limit 5 --agent
testimonial-cli verify-space --agent
~~~

verify-space prints native private metadata; doctor --network is preferable for a secret-free success check. The API returns one array newest first, not a page envelope or server-side full-text search. Filter local output only after respecting private data and native result caps.

### Import existing authorized text or video

Use a real customer statement/media with actual authorization. Text requires testimonial/name; video requires videoURL/name. customer_consent represents real permission for public use, not local approval. Local confirm authorizes this requested import. Neither flag is inferred from an API response. Defaults keep consent/isLiked false. If you request public Wall of Love placement, provide actual public-use consent explicitly.

~~~bash
testimonial-cli submit-text-testimonial --help
testimonial-cli schema submit-text-testimonial
testimonial-cli submit-video-testimonial --help
~~~

Use native payload or a private payload_file for complex body data. Do not mix them with body flags. payload.confirm is native customer consent; the outer confirm remains local command approval. Media URLs must be HTTPS without embedded credentials. Success may mean processing started, not video readiness. No arbitrary local file upload or media download is offered.

### Send only the requested testimonial email

Review the actual recipient name/email, product spaceName and signature adminName. GET /new/request sends the email, despite its HTTP method. There is no local draft/test-send switch. Discovery, login, doctor, export and previews never send an email. --agent/--yes do not supply --confirm.

~~~bash
testimonial-cli send-testimonial-request --help
testimonial-cli schema send-testimonial-request
~~~

The old update_testimonial tool is excluded because the reviewed current REST sources do not establish that endpoint. Manage existing Wall of Love proof with the official hosted MCP or dashboard; do not invent PUT /testimonials/{id}.


## 2. Quick install

~~~bash
npm install -g @thenavidm/testimonial-mcp-cli@latest
testimonial-cli --version
testimonial-cli tools
testimonial-cli login
~~~

## 3. Set up Testimonial.to access

### Select the intended Space

1. Sign into [Testimonial.to](https://testimonial.to) and identify the Space whose proof you intend to read or import. Each REST API key belongs to one Space. It does not select another Space through spaceId, nor does it inherit a browser session.
2. On the dashboard Space card, open its three-dot menu and choose **API key**, then **Copy API Key**. The current [REST list documentation](https://help.testimonial.to/en/articles/6223143-api-get-all-testimonials) specifies Ultimate and Ultimate+ per Space; Free/Starter API Key controls require an upgrade. Verify the current plan and access in your own account. The wrapper grants no plan bypass.
3. Configure exactly one of TESTIMONIAL_API_KEY or TESTIMONIAL_TOKEN_FILE in the private process settings. The client sends Authorization: Bearer. Do not include the word Bearer in the value, use your password, or copy a hosted MCP access-token URL as a Space key.
4. Token files must be absolute, regular, non-symlink, token-only files outside repositories, at most 64 KiB. On macOS/Linux the file must be owned by your runtime user and mode 0600; restrict its parent directory too. Windows users must restrict file and directory ACLs separately. GUI apps, containers and remote machines need readable private credentials in their own runtime.
5. Run testimonial-cli doctor to inspect local profile configuration. Deliberate doctor --network calls GET /verify but prints success metadata without echoing the native account email or Space id. It proves one key request, not ownership, all tool permission, successful media processing or delivered email.

login prints these instructions only. The package never loads .env files, opens sign-in, creates or rotates keys, imports cookies or refreshes OAuth. Do not put credentials or customer statements in public issues, screenshots, repositories, prompts or exported public examples.

### Separate profiles and revocation

TESTIMONIAL_ACCOUNTS is a private JSON array of unique {name,api_key,token_file} profiles. Configure one credential source per profile. TESTIMONIAL_DEFAULT_ACCOUNT selects the default label; --account selects an exact label. An incomplete named profile never falls back to a global key, another Space or hosted connection. list_accounts shows labels/default/auth/source, without keys, file paths or provider identity.

Token files cache until process restart. Update private credentials and restart every dependent process when replacing them. Remove/revoke the intended Space key through the provider's current account controls, and verify revocation deliberately. The reviewed key guide documents copying, not a guaranteed rotation button or grace period, so neither is invented here. Hosted MCP authorization is separate. Removing a package or connection never removes saved files, retracts published proof or unsends a request email.

### Native effects and local limits

The REST subset is five documented operations. Native list returns a single array; there is no page, offset or cursor. Only processed ready videos are returned. Repeated tag query values match any listed display name. limit is a result cap. The local maximum 10,000 is an implementation bound, not a documented native quota.

All imports, side-effecting GET request emails, reviewed execution and file exports require local confirm. Native customer permission is customer_consent or payload.confirm, independently defaulting false. isLiked adds proof to the Wall of Love and is refused locally unless actual native customer consent is true. This stricter local policy does not create or verify permission. Retain actual authorization for the statement/media and public use; never manufacture it to get a command to pass.

Requests are spaced 250 ms by default with a 30-second timeout, 1 MiB bodies and 5 MiB responses. Other processes may share native limits. Redirects and retries are disabled. The provider may retrieve the supplied media URL and process video asynchronously; the package does not download/follow it. A failed write can have an unknown outcome. Inspect provider state before a deliberate repeat.


## 4. Connect your client

Full client/OS/private credentials and desktop steps are in [INSTALL.md](INSTALL.md).

### Codex

Codex is the current validation priority. Private token paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add testimonial -- npx -y @thenavidm/testimonial-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.testimonial]
command = "npx"
args = ["-y", "@thenavidm/testimonial-mcp-cli@latest"]
env_vars = ["TESTIMONIAL_API_KEY", "TESTIMONIAL_TOKEN_FILE", "TESTIMONIAL_ACCOUNTS", "TESTIMONIAL_DEFAULT_ACCOUNT", "TESTIMONIAL_READ_ONLY", "TESTIMONIAL_ALLOW_DESTRUCTIVE"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

### Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user testimonial -- npx -y @thenavidm/testimonial-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

### Claude Desktop

#### Install the .mcpb extension

1. Download `testimonial-2.0.1.mcpb` from [GitHub Releases](https://github.com/thenavidm/testimonial-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter a private Space API key in the sensitive setting, OR an absolute private token-only file path. Leave the unused method empty. Requests use Authorization: Bearer. Named profiles require private manual runtime settings.
4. Enable read-only if you want only the 5 read operations. Reconnect and verify the intended Space with one deliberate read.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

#### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "testimonial": {
      "command": "npx",
      "args": ["-y", "@thenavidm/testimonial-mcp-cli@latest"],
      "env": {
        "TESTIMONIAL_API_KEY": "YOUR_PRIVATE_API_KEY",
        "TESTIMONIAL_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/testimonial-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

### Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "testimonial": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/testimonial-mcp-cli@latest"],
      "env": {
        "TESTIMONIAL_API_KEY": "${env:TESTIMONIAL_API_KEY}",
        "TESTIMONIAL_TOKEN_FILE": "${env:TESTIMONIAL_TOKEN_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A Space's .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

### VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type": "promptString", "id": "testimonial-api-token", "description": "Testimonial.to API key (leave empty for a private token file)", "password": true},
    {"type": "promptString", "id": "testimonial-token-file", "description": "Optional private token-file path (leave empty for API key)"}
  ],
  "servers": {
    "testimonial": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/testimonial-mcp-cli@latest"],
      "env": {
        "TESTIMONIAL_API_KEY": "${input:testimonial-api-token}",
        "TESTIMONIAL_TOKEN_FILE": "${input:testimonial-token-file}"
      }
    }
  }
}
~~~

Start Testimonial.to through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

### Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Testimonial.to in Cascade; Space files must not contain secrets.

### Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "testimonial": {
      "command": "npx",
      "args": ["-y", "@thenavidm/testimonial-mcp-cli@latest"],
      "env": {
        "TESTIMONIAL_API_KEY": "YOUR_PRIVATE_API_KEY",
        "TESTIMONIAL_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

### Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its Space settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

### Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/testimonial-mcp-cli.git
cd testimonial-mcp-cli
docker build -t testimonial-mcp-cli .
docker run --rm -i -e TESTIMONIAL_API_KEY testimonial-mcp-cli
```


### Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/testimonial-mcp-cli@latest`, stdio transport, and private local TESTIMONIAL_API_KEY or TESTIMONIAL_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use Testimonial.to's official server rather than this local stdio command.





## 5. Check it works

~~~bash
testimonial-cli --version
testimonial-cli tools
testimonial-cli list-accounts --agent
testimonial-cli doctor
testimonial-cli doctor --network
~~~

Only explicit network verification contacts the provider. No email, import or publication is performed during setup.

## 6. Output, flags and exit codes

~~~bash
testimonial-cli tools --agent
testimonial-cli schema submit-text-testimonial
testimonial-cli list-testimonials --limit 5 --agent --select id,type
~~~

Both underscore and kebab tool spellings route through the same handler. Repeated tag flags collect strings; each tasks flag is one JSON object. --agent means JSON/compact/no-input/no-color/yes, not confirm. Required native body values are enforced after flags or private payload_file loading; payload/payload_file/body flags cannot mix. Customer consent maps separately from outer local approval.

| Exit | Meaning |
| --- | --- |
| 0 | Success |
| 2 | Usage/schema/refused effect |
| 3 | Not found |
| 4 | Authentication/permission |
| 5 | Native API error |
| 7 | Rate limited |
| 10 | Missing private configuration |

## 7. MCP or CLI and token cost

MCP can load all schemas, defer discovery or load selected tools; the client mode changes input overhead. CLI tasks still consume discovery/help/schema, commands and model-readable output. --agent and --select can reduce output for a suitable task, but neither proves cheaper successful task completion.

Codex is the active client. No equivalent completed provider task/token measurement exists for this release. Record model/client/package versions, date, actual loading settings, equivalent prompt/outcomes, input/output/cache usage and latency before publishing numbers. Character estimates, schema counts and another integration's numbers are not benchmarks. Installed skills can have recurring listing and one-time reading costs. Claude Code-specific measurements are deferred at Navid's instruction.


## 8. Every tool and argument

#### list_testimonials

Read one native JSON array. Only ready video assets are included; no page, cursor or offset parameters.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `type` | string | Optional | Exact schema value. {"enum": ["text", "video"]} |
| `liked` | boolean | Optional | Native Wall of Love filter. |
| `highlighted` | boolean | Optional | Native highlighted filter. |
| `tag` | array | Optional | Repeated native tag display names; native OR match. {"maxItems": 100} |
| `limit` | integer | Optional | Native result cap; 10000 is a local maximum, not a documented provider quota. No pagination. {"minimum": 1, "maximum": 10000} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |

~~~bash
testimonial-cli list-testimonials --help
testimonial-cli schema list-testimonials
~~~

~~~json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "text",
        "video"
      ]
    },
    "liked": {
      "type": "boolean",
      "description": "Native Wall of Love filter."
    },
    "highlighted": {
      "type": "boolean",
      "description": "Native highlighted filter."
    },
    "tag": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "description": "Repeated native tag display names; native OR match."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 10000,
      "description": "Native result cap; 10000 is a local maximum, not a documented provider quota. No pagination."
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /testimonials**. No native JSON body.

~~~json
{
  "name": "list_testimonials",
  "method": "GET",
  "path": "/testimonials",
  "title": "List ready Space testimonials",
  "description": "Read one native JSON array. Only ready video assets are included; no page, cursor or offset parameters.",
  "group": "testimonials",
  "risk": "read",
  "params": [
    {
      "name": "type",
      "key": "type",
      "schema": {
        "type": "string",
        "enum": [
          "text",
          "video"
        ]
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "liked",
      "key": "liked",
      "schema": {
        "type": "boolean",
        "description": "Native Wall of Love filter."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "highlighted",
      "key": "highlighted",
      "schema": {
        "type": "boolean",
        "description": "Native highlighted filter."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "tag",
      "key": "tag",
      "schema": {
        "type": "array",
        "maxItems": 100,
        "items": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "description": "Repeated native tag display names; native OR match."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    },
    {
      "name": "limit",
      "key": "limit",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 10000,
        "description": "Native result cap; 10000 is a local maximum, not a documented provider quota. No pagination."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": true
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "source": "https://help.testimonial.to/en/articles/6223143-api-get-all-testimonials"
}
~~~

#### verify_space

Explicit native key verification. Response includes Space id and account email; private metadata, not ownership or all-action proof.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |

~~~bash
testimonial-cli verify-space --help
testimonial-cli schema verify-space
~~~

~~~json
{
  "type": "object",
  "properties": {
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /verify**. No native JSON body.

~~~json
{
  "name": "verify_space",
  "method": "GET",
  "path": "/verify",
  "title": "Verify the selected Space key",
  "description": "Explicit native key verification. Response includes Space id and account email; private metadata, not ownership or all-action proof.",
  "group": "space",
  "risk": "read",
  "params": [],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "source": "https://help.testimonial.to/en/articles/6223143-api-get-all-testimonials"
}
~~~

#### submit_text_testimonial

Import a real authorized customer statement. Local confirm approves the API call; customer_consent or payload.confirm represents actual public-use permission.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `name` | string | Optional | Actual submitter name. |
| `email` | string | Optional | {"format": "email"} |
| `title` | string | Optional | Native combined title/company. |
| `socialLink` | string | Optional | Native social profile value. |
| `customer_consent` | boolean | Optional | Native customer permission for public use, false by default. Independent from local command approval. |
| `isLiked` | boolean | Optional | Add to Wall of Love, false by default; local public-use consent is required if true. |
| `testimonial` | string | Optional | Actual authorized statement. |
| `rating` | integer | Optional | Exact schema value. {"minimum": 1, "maximum": 5} |
| `avatarURL` | string | Optional | {"format": "uri"} |
| `attachedImageURL` | string | Optional | {"format": "uri"} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Must be true for the requested mutation or exclusive private output file. |
| `payload` | object | Optional | Complete native testimonial JSON object; do not mix with body flags or payload_file. |
| `payload.name` | string | Required | Actual submitter name. |
| `payload.email` | string | Optional | {"format": "email"} |
| `payload.title` | string | Optional | Native combined title/company. |
| `payload.socialLink` | string | Optional | Native social profile value. |
| `payload.confirm` | boolean | Optional | Native customer permission for public use, false by default. Independent from local command approval. |
| `payload.isLiked` | boolean | Optional | Add to Wall of Love, false by default; local public-use consent is required if true. |
| `payload.testimonial` | string | Required | Actual authorized statement. |
| `payload.rating` | integer | Optional | Exact schema value. {"minimum": 1, "maximum": 5} |
| `payload.avatarURL` | string | Optional | {"format": "uri"} |
| `payload.attachedImageURL` | string | Optional | {"format": "uri"} |
| `payload_file` | string | Optional | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. |

~~~bash
testimonial-cli submit-text-testimonial --help
testimonial-cli schema submit-text-testimonial
~~~

~~~json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Actual submitter name."
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "description": "Native combined title/company."
    },
    "socialLink": {
      "type": "string",
      "minLength": 1,
      "description": "Native social profile value."
    },
    "customer_consent": {
      "type": "boolean",
      "description": "Native customer permission for public use, false by default. Independent from local command approval."
    },
    "isLiked": {
      "type": "boolean",
      "description": "Add to Wall of Love, false by default; local public-use consent is required if true."
    },
    "testimonial": {
      "type": "string",
      "minLength": 1,
      "description": "Actual authorized statement."
    },
    "rating": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    },
    "avatarURL": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "uri"
    },
    "attachedImageURL": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "uri"
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    },
    "payload": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1,
          "description": "Actual submitter name."
        },
        "email": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "email"
        },
        "title": {
          "type": "string",
          "minLength": 1,
          "description": "Native combined title/company."
        },
        "socialLink": {
          "type": "string",
          "minLength": 1,
          "description": "Native social profile value."
        },
        "confirm": {
          "type": "boolean",
          "description": "Native customer permission for public use, false by default. Independent from local command approval."
        },
        "isLiked": {
          "type": "boolean",
          "description": "Add to Wall of Love, false by default; local public-use consent is required if true."
        },
        "testimonial": {
          "type": "string",
          "minLength": 1,
          "description": "Actual authorized statement."
        },
        "rating": {
          "type": "integer",
          "minimum": 1,
          "maximum": 5
        },
        "avatarURL": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "uri"
        },
        "attachedImageURL": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "uri"
        }
      },
      "required": [
        "testimonial",
        "name"
      ],
      "additionalProperties": false,
      "description": "Complete native testimonial JSON object; do not mix with body flags or payload_file."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /submit/text**. Native body requires testimonial, name. Top-level confirm is local approval; body/payload.confirm is native consent.

~~~json
{
  "name": "submit_text_testimonial",
  "method": "POST",
  "path": "/submit/text",
  "title": "Submit an authorized text testimonial",
  "description": "Import a real authorized customer statement. Local confirm approves the API call; customer_consent or payload.confirm represents actual public-use permission.",
  "group": "testimonials",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
        "description": "Actual submitter name."
      },
      "email": {
        "type": "string",
        "minLength": 1,
        "description": "",
        "format": "email"
      },
      "title": {
        "type": "string",
        "minLength": 1,
        "description": "Native combined title/company."
      },
      "socialLink": {
        "type": "string",
        "minLength": 1,
        "description": "Native social profile value."
      },
      "confirm": {
        "type": "boolean",
        "description": "Native customer permission for public use, false by default. Independent from local command approval."
      },
      "isLiked": {
        "type": "boolean",
        "description": "Add to Wall of Love, false by default; local public-use consent is required if true."
      },
      "testimonial": {
        "type": "string",
        "minLength": 1,
        "description": "Actual authorized statement."
      },
      "rating": {
        "type": "integer",
        "minimum": 1,
        "maximum": 5
      },
      "avatarURL": {
        "type": "string",
        "minLength": 1,
        "description": "",
        "format": "uri"
      },
      "attachedImageURL": {
        "type": "string",
        "minLength": 1,
        "description": "",
        "format": "uri"
      }
    },
    "required": [
      "testimonial",
      "name"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "source": "https://help.testimonial.to/en/articles/6451677-api-submit-a-text-testimonial"
}
~~~

#### submit_video_testimonial

Import a real publicly accessible authorized video. Provider retrieves/processes the URL; this package never downloads it. Success does not mean processing finished.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `name` | string | Optional | Actual submitter name. |
| `email` | string | Optional | {"format": "email"} |
| `title` | string | Optional | Native combined title/company. |
| `socialLink` | string | Optional | Native social profile value. |
| `customer_consent` | boolean | Optional | Native customer permission for public use, false by default. Independent from local command approval. |
| `isLiked` | boolean | Optional | Add to Wall of Love, false by default; local public-use consent is required if true. |
| `videoURL` | string | Optional | Existing public HTTPS video URL without credentials. {"format": "uri"} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Must be true for the requested mutation or exclusive private output file. |
| `payload` | object | Optional | Complete native testimonial JSON object; do not mix with body flags or payload_file. |
| `payload.name` | string | Required | Actual submitter name. |
| `payload.email` | string | Optional | {"format": "email"} |
| `payload.title` | string | Optional | Native combined title/company. |
| `payload.socialLink` | string | Optional | Native social profile value. |
| `payload.confirm` | boolean | Optional | Native customer permission for public use, false by default. Independent from local command approval. |
| `payload.isLiked` | boolean | Optional | Add to Wall of Love, false by default; local public-use consent is required if true. |
| `payload.videoURL` | string | Required | Existing public HTTPS video URL without credentials. {"format": "uri"} |
| `payload_file` | string | Optional | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. |

~~~bash
testimonial-cli submit-video-testimonial --help
testimonial-cli schema submit-video-testimonial
~~~

~~~json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Actual submitter name."
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "description": "Native combined title/company."
    },
    "socialLink": {
      "type": "string",
      "minLength": 1,
      "description": "Native social profile value."
    },
    "customer_consent": {
      "type": "boolean",
      "description": "Native customer permission for public use, false by default. Independent from local command approval."
    },
    "isLiked": {
      "type": "boolean",
      "description": "Add to Wall of Love, false by default; local public-use consent is required if true."
    },
    "videoURL": {
      "type": "string",
      "minLength": 1,
      "description": "Existing public HTTPS video URL without credentials.",
      "format": "uri"
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    },
    "payload": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1,
          "description": "Actual submitter name."
        },
        "email": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "email"
        },
        "title": {
          "type": "string",
          "minLength": 1,
          "description": "Native combined title/company."
        },
        "socialLink": {
          "type": "string",
          "minLength": 1,
          "description": "Native social profile value."
        },
        "confirm": {
          "type": "boolean",
          "description": "Native customer permission for public use, false by default. Independent from local command approval."
        },
        "isLiked": {
          "type": "boolean",
          "description": "Add to Wall of Love, false by default; local public-use consent is required if true."
        },
        "videoURL": {
          "type": "string",
          "minLength": 1,
          "description": "Existing public HTTPS video URL without credentials.",
          "format": "uri"
        }
      },
      "required": [
        "videoURL",
        "name"
      ],
      "additionalProperties": false,
      "description": "Complete native testimonial JSON object; do not mix with body flags or payload_file."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /submit/video**. Native body requires videoURL, name. Top-level confirm is local approval; body/payload.confirm is native consent.

~~~json
{
  "name": "submit_video_testimonial",
  "method": "POST",
  "path": "/submit/video",
  "title": "Submit an authorized video testimonial",
  "description": "Import a real publicly accessible authorized video. Provider retrieves/processes the URL; this package never downloads it. Success does not mean processing finished.",
  "group": "testimonials",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
        "description": "Actual submitter name."
      },
      "email": {
        "type": "string",
        "minLength": 1,
        "description": "",
        "format": "email"
      },
      "title": {
        "type": "string",
        "minLength": 1,
        "description": "Native combined title/company."
      },
      "socialLink": {
        "type": "string",
        "minLength": 1,
        "description": "Native social profile value."
      },
      "confirm": {
        "type": "boolean",
        "description": "Native customer permission for public use, false by default. Independent from local command approval."
      },
      "isLiked": {
        "type": "boolean",
        "description": "Add to Wall of Love, false by default; local public-use consent is required if true."
      },
      "videoURL": {
        "type": "string",
        "minLength": 1,
        "description": "Existing public HTTPS video URL without credentials.",
        "format": "uri"
      }
    },
    "required": [
      "videoURL",
      "name"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "source": "https://help.testimonial.to/en/articles/6236786-api-submit-a-video-testimonial"
}
~~~

#### send_testimonial_request

Side-effecting GET sends a real request email. Explicit local confirmation is mandatory. No dry run, retry or delivery guarantee.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `name` | string | Required | Actual approved email context. |
| `email` | string | Required | Actual approved email context. {"format": "email"} |
| `spaceName` | string | Required | Actual approved email context. |
| `adminName` | string | Required | Actual approved email context. |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Must be true for the requested mutation or exclusive private output file. |

~~~bash
testimonial-cli send-testimonial-request --help
testimonial-cli schema send-testimonial-request
~~~

~~~json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Actual approved email context."
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "Actual approved email context.",
      "format": "email"
    },
    "spaceName": {
      "type": "string",
      "minLength": 1,
      "description": "Actual approved email context."
    },
    "adminName": {
      "type": "string",
      "minLength": 1,
      "description": "Actual approved email context."
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true for the requested mutation or exclusive private output file."
    }
  },
  "required": [
    "name",
    "email",
    "spaceName",
    "adminName"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /new/request**. No native JSON body. Side-effecting GET email still needs approval.

~~~json
{
  "name": "send_testimonial_request",
  "method": "GET",
  "path": "/new/request",
  "title": "Send a requested testimonial email",
  "description": "Side-effecting GET sends a real request email. Explicit local confirmation is mandatory. No dry run, retry or delivery guarantee.",
  "group": "testimonials",
  "risk": "destructive",
  "params": [
    {
      "name": "name",
      "key": "name",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Actual approved email context."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": true
    },
    {
      "name": "email",
      "key": "email",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Actual approved email context.",
        "format": "email"
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": true
    },
    {
      "name": "spaceName",
      "key": "spaceName",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Actual approved email context."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": true
    },
    {
      "name": "adminName",
      "key": "adminName",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Actual approved email context."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": true
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "source": "https://help.testimonial.to/en/articles/6223146-api-send-request"
}
~~~

#### list_accounts

Local profile labels/default/auth method only. No keys, token paths, provider identity or network request.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |

~~~bash
testimonial-cli list-accounts --help
testimonial-cli schema list-accounts
~~~

~~~json
{
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false
}
~~~

#### get_operation_schema

Local reviewed method/path/query/body schema and provenance for one native tool. No credentials or provider request.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `operation` | string | Required | Exact native tool name, e.g. submit_text_testimonial or send_testimonial_request. {"enum": ["list_testimonials", "verify_space", "submit_text_testimonial", "submit_video_testimonial", "send_testimonial_request"]} |

~~~bash
testimonial-cli get-operation-schema --help
testimonial-cli schema get-operation-schema
~~~

~~~json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "list_testimonials",
        "verify_space",
        "submit_text_testimonial",
        "submit_video_testimonial",
        "send_testimonial_request"
      ],
      "description": "Exact native tool name, e.g. submit_text_testimonial or send_testimonial_request."
    }
  },
  "required": [
    "operation"
  ],
  "additionalProperties": false
}
~~~

#### preview_testimonial_batch

Local validation and SHA-256 of exact ordered text/video import/email work, selected profile label and reviewed schema. No provider reads, key load, identity check, price or rollback guarantee.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `tasks` | array | Required | One to twenty exact ordered supported text/video import/email operations. Each task is one exact native import or one email request. Customer consent is separate from local approval. {"minItems": 1, "maxItems": 20} |
| `tasks[].tool` | string | Required | Exact schema value. {"enum": ["submit_text_testimonial", "submit_video_testimonial", "send_testimonial_request"]} |
| `tasks[].arguments` | object | Required | Actual native tool arguments without account, confirm, payload_file or output_file. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |

~~~bash
testimonial-cli preview-testimonial-batch --help
testimonial-cli schema preview-testimonial-batch
~~~

~~~json
{
  "type": "object",
  "properties": {
    "tasks": {
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "description": "One to twenty exact ordered supported text/video import/email operations. Each task is one exact native import or one email request. Customer consent is separate from local approval.",
      "items": {
        "type": "object",
        "properties": {
          "tool": {
            "type": "string",
            "enum": [
              "submit_text_testimonial",
              "submit_video_testimonial",
              "send_testimonial_request"
            ]
          },
          "arguments": {
            "type": "object",
            "description": "Actual native tool arguments without account, confirm, payload_file or output_file."
          }
        },
        "required": [
          "tool",
          "arguments"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    }
  },
  "required": [
    "tasks"
  ],
  "additionalProperties": false
}
~~~

#### submit_testimonial_batch

Confirmed one-to-twenty ordered text/video import/email tasks. Prevalidate all and verify exact hash before first request. Stop on first failure with known results/failed index/unattempted indices; no retries, rollback or implicit continuation.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `tasks` | array | Required | One to twenty exact ordered supported text/video import/email operations. Each task is one exact native import or one email request. Customer consent is separate from local approval. {"minItems": 1, "maxItems": 20} |
| `tasks[].tool` | string | Required | Exact schema value. {"enum": ["submit_text_testimonial", "submit_video_testimonial", "send_testimonial_request"]} |
| `tasks[].arguments` | object | Required | Actual native tool arguments without account, confirm, payload_file or output_file. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |
| `confirm` | boolean | Optional | Explicit approval for this exact requested ordered batch. |
| `review_sha256` | string | Required | Exact preview_testimonial_batch hash for identical requests, profile label, schema and order. {"pattern": "^[a-f0-9]{64}$"} |

~~~bash
testimonial-cli submit-testimonial-batch --help
testimonial-cli schema submit-testimonial-batch
~~~

~~~json
{
  "type": "object",
  "properties": {
    "tasks": {
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "description": "One to twenty exact ordered supported text/video import/email operations. Each task is one exact native import or one email request. Customer consent is separate from local approval.",
      "items": {
        "type": "object",
        "properties": {
          "tool": {
            "type": "string",
            "enum": [
              "submit_text_testimonial",
              "submit_video_testimonial",
              "send_testimonial_request"
            ]
          },
          "arguments": {
            "type": "object",
            "description": "Actual native tool arguments without account, confirm, payload_file or output_file."
          }
        },
        "required": [
          "tool",
          "arguments"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this exact requested ordered batch."
    },
    "review_sha256": {
      "type": "string",
      "pattern": "^[a-f0-9]{64}$",
      "description": "Exact preview_testimonial_batch hash for identical requests, profile label, schema and order."
    }
  },
  "required": [
    "tasks",
    "review_sha256"
  ],
  "additionalProperties": false
}
~~~

#### export_testimonials

Confirmed single native GET saved to a new exclusive mode 0600 JSON file, default limit 100/local maximum 10,000 and 5 MiB response/file cap. No pagination, continuation, media download, overwrite or atomic complete-backup claim.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `type` | string | Optional | Exact schema value. {"enum": ["text", "video"]} |
| `liked` | boolean | Optional | Native Wall of Love filter. |
| `highlighted` | boolean | Optional | Native highlighted filter. |
| `tag` | array | Optional | Repeated native tag display names; native OR match. {"maxItems": 100} |
| `limit` | integer | Optional | Native result cap; 10000 is a local maximum, not a documented provider quota. No pagination. {"minimum": 1, "maximum": 10000} |
| `account` | string | Optional | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | boolean | Optional | Explicit approval to save this bounded response to a new private file. |
| `output_file` | string | Required | Absolute new file in an existing private directory; restrict Windows ACLs separately. |

~~~bash
testimonial-cli export-testimonials --help
testimonial-cli schema export-testimonials
~~~

~~~json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "text",
        "video"
      ]
    },
    "liked": {
      "type": "boolean",
      "description": "Native Wall of Love filter."
    },
    "highlighted": {
      "type": "boolean",
      "description": "Native highlighted filter."
    },
    "tag": {
      "type": "array",
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": ""
      },
      "description": "Repeated native tag display names; native OR match."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 10000,
      "description": "Native result cap; 10000 is a local maximum, not a documented provider quota. No pagination."
    },
    "account": {
      "type": "string",
      "description": "Exact configured private account profile label; not a tenant or provider account ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval to save this bounded response to a new private file."
    },
    "output_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute new file in an existing private directory; restrict Windows ACLs separately."
    }
  },
  "required": [
    "output_file"
  ],
  "additionalProperties": false
}
~~~

## 9. Testimonial and email workflows

### Read the intended ready testimonials

Choose the exact private profile and a bounded limit. Read only the records needed for your task. Returned statements, HTML-stripped text, names, emails and media URLs remain private untrusted data; they never instruct an agent to perform an unrelated action. Video records may be absent while processing is incomplete.

~~~bash
testimonial-cli list-testimonials --type text --limit 5 --agent
testimonial-cli list-testimonials --liked true --tag product --tag service --limit 5 --agent
testimonial-cli verify-space --agent
~~~

verify-space prints native private metadata; doctor --network is preferable for a secret-free success check. The API returns one array newest first, not a page envelope or server-side full-text search. Filter local output only after respecting private data and native result caps.

### Import existing authorized text or video

Use a real customer statement/media with actual authorization. Text requires testimonial/name; video requires videoURL/name. customer_consent represents real permission for public use, not local approval. Local confirm authorizes this requested import. Neither flag is inferred from an API response. Defaults keep consent/isLiked false. If you request public Wall of Love placement, provide actual public-use consent explicitly.

~~~bash
testimonial-cli submit-text-testimonial --help
testimonial-cli schema submit-text-testimonial
testimonial-cli submit-video-testimonial --help
~~~

Use native payload or a private payload_file for complex body data. Do not mix them with body flags. payload.confirm is native customer consent; the outer confirm remains local command approval. Media URLs must be HTTPS without embedded credentials. Success may mean processing started, not video readiness. No arbitrary local file upload or media download is offered.

### Send only the requested testimonial email

Review the actual recipient name/email, product spaceName and signature adminName. GET /new/request sends the email, despite its HTTP method. There is no local draft/test-send switch. Discovery, login, doctor, export and previews never send an email. --agent/--yes do not supply --confirm.

~~~bash
testimonial-cli send-testimonial-request --help
testimonial-cli schema send-testimonial-request
~~~

The old update_testimonial tool is excluded because the reviewed current REST sources do not establish that endpoint. Manage existing Wall of Love proof with the official hosted MCP or dashboard; do not invent PUT /testimonials/{id}.


### Complete command examples

The following commands contain fictional example data and are documentation only. Replace them with the exact requested recipient or authorized customer material and intended Space profile. Running a confirmed command performs a real import or sends an email. Omitted customer consent keeps the imported proof private; only assert customer_consent when actual public-use permission exists.

~~~bash
testimonial-cli submit-text-testimonial --name "Example customer" --testimonial "An authorized customer statement" --confirm --agent
testimonial-cli submit-video-testimonial --name "Example customer" --videoURL "https://example.com/authorized-video.mp4" --confirm --agent
~~~

Email request example (four native required fields):

~~~bash
testimonial-cli send-testimonial-request --name "Example customer" --email "customer@example.com" --spaceName "Example product" --adminName "Example sender" --confirm --agent
~~~

A local preview makes no provider request. Record its reviewSha256, inspect the exact work, then use the same task JSON/profile with submit-testimonial-batch --review-sha256 "SHA256_FROM_YOUR_PREVIEW" --confirm only when that work is requested:

~~~bash
testimonial-cli preview-testimonial-batch --tasks '{"tool":"submit_text_testimonial","arguments":{"name":"Example customer","testimonial":"An authorized customer statement"}}' --agent
~~~

## 10. Exact reviewed batches and private exports

### Review exact ordered imports and request emails

preview_testimonial_batch locally validates 1–20 ordered native mutations and produces a reviewSha256. Each task has tool/arguments; nested arguments cannot override account, local confirm, payload_file or output_file. Native payload.confirm and customer_consent remain consent fields. No network call or private key load occurs during preview.

submit_testimonial_batch requires outer confirm and the matching review_sha256 with identical requests/order/profile label/schema. Every task is prepared before the first network call. Changing any consent, recipient, statement, account label, order or native schema invalidates the hash. Review hashes do not bind a credential fingerprint, prove Space ownership, lock native state, establish customer consent, expire or become single-use provider approvals.

On first failure execution stops with knownResults, failedIndex and unattemptedIndices. HTTP 200 status failed is an error, not a successful imported record. Failed effects may have unknown outcomes; no retry, rollback or automatic continuation occurs. Do not promise emailed delivery or processed video based on native request acceptance.

~~~bash
testimonial-cli preview-testimonial-batch --help
testimonial-cli schema preview-testimonial-batch
testimonial-cli submit-testimonial-batch --help
~~~

### Save a bounded private export

export_testimonials performs one GET /testimonials with default limit 100, local maximum 10,000 and 5 MiB response/file cap. It saves {testimonials,receipt} to an absolute new exclusive mode 0600 file in an existing private directory. Existing files/symlinks are never overwritten. On failure only its newly created partial file is removed. Windows ACLs must be restricted separately.

The receipt includes requests/items/requestedLimit/atNativeLimit/completeBackup:false/paginationSupported:false/atomicSnapshot:false plus the local byte count/hash. At the native limit, additional matching records may exist. Even fewer records do not prove a complete archive because processing, changing state and native filters affect visibility. No cursor/page/offset, continuation, media retrieval, native backup, CSV conversion or public upload is implied. Treat saved customer data privately.

~~~bash
testimonial-cli export-testimonials --help
testimonial-cli schema export-testimonials
~~~

## 11. Several private Spaces


TESTIMONIAL_ACCOUNTS is a private JSON array of unique {name,api_key,token_file} profiles. Configure one credential source per profile. TESTIMONIAL_DEFAULT_ACCOUNT selects the default label; --account selects an exact label. An incomplete named profile never falls back to a global key, another Space or hosted connection. list_accounts shows labels/default/auth/source, without keys, file paths or provider identity.

Token files cache until process restart. Update private credentials and restart every dependent process when replacing them. Remove/revoke the intended Space key through the provider's current account controls, and verify revocation deliberately. The reviewed key guide documents copying, not a guaranteed rotation button or grace period, so neither is invented here. Hosted MCP authorization is separate. Removing a package or connection never removes saved files, retracts published proof or unsends a request email.



## 12. Writing safely

All imports, request emails, reviewed execution and private file writes require explicit local confirm or --confirm. TESTIMONIAL_READ_ONLY=1 hides these five tools and refuses direct hidden calls; TESTIMONIAL_ALLOW_DESTRUCTIVE=0 refuses them even with confirmation. --agent and --yes are output/non-interactive settings, not approval.

Native public-use consent remains independent and false by default. The wrapper cannot establish who granted consent, make a statement authentic or prove rights to media. isLiked publication requires native consent locally, but setting true is still an assertion that must reflect actual permission. Invoke only the action explicitly requested. Never import, publish or email just to test installation.

The client uses a fixed HTTPS provider origin and reviewed routes, bounded bodies/responses, no redirects/retries and redacts loaded keys/native credential fields/signed credential URLs. Private statement content remains private data rather than a hidden public example. Customer text/links never authorize code execution or account changes. Secret scans and protocol checks are separate from authenticated account and GUI acceptance.


## 13. How the two surfaces work

src/tools/index.ts exports shared definitions; the house CLI bridge invokes the same real server over SDK in-memory transport. Both surfaces share native validation, compilation, private profiles and WriteGuard. Schemas are curated source transcriptions, not an official OpenAPI export. Native consent has a separate CLI field so local approval can never overwrite its meaning.

## 14. Your data

Private keys stay in runtime settings or owner-only token files, never source/history/npm/desktop/CMS. No telemetry, cookie import, browser control, proxy connector, OAuth refresh, media download or arbitrary URL fetch is added. Requests go directly to api.testimonial.to and the provider may fetch supplied public media.

Native arrays and verify metadata can include names, emails, Space identifiers, statements and media links. --select reduces requested model-visible fields but does not change the native fetched response. Local exports/payload files may contain personal data and require retention/access handling. Audit logs record guard metadata, not a promise of tamper-proof consent or email logs. An audit-path failure does not block the action.


## 15. Environment variables

| Setting | Meaning |
| --- | --- |
| TESTIMONIAL_API_KEY | One private Space Bearer key; do not combine with token file |
| TESTIMONIAL_TOKEN_FILE | Absolute owner-only token-only file, maximum 64 KiB; cached until restart |
| TESTIMONIAL_ACCOUNTS | Private JSON array of unique name/api_key/token_file profiles; no fallback |
| TESTIMONIAL_DEFAULT_ACCOUNT | Exact private profile label |
| TESTIMONIAL_READ_ONLY | 1/true hides and refuses effects |
| TESTIMONIAL_ALLOW_DESTRUCTIVE | 0/false refuses confirmed effects too |
| TESTIMONIAL_AUDIT_LOG | Optional private append-only guard decisions |
| TESTIMONIAL_REQUEST_TIMEOUT_MS | 100–300000, default 30000 ms; no retry |
| TESTIMONIAL_MIN_REQUEST_INTERVAL_MS | 0–10000, default 250 ms; local spacing, not quota |

## 16. Updates and removal

Restart after credential changes; update npx/global/bundle installations using [INSTALL.md](INSTALL.md#updates-and-removal). Uninstalling does not undo native effects or files.

## 17. Troubleshooting

| Problem | What to check |
| --- | --- |
| No credentials/exit10 | Run login; configure exactly one intended Space source in this runtime |
| 401/403 | Actual Space key and current plan/permission; never fall back across profiles |
| No video returned | Native list only includes ready assets; check processing in the dashboard |
| page/spaceId rejected | Current Space-scoped list is a single array without pagination |
| Native status failed | Treat as operation error even with HTTP 200; no automatic repeat |
| Email refused | Actual four query fields and explicit local approval; GET is a write |
| Consent/publication refused | Local approval does not establish customer public-use permission |
| Batch hash mismatch | Review exact unchanged inputs/order/profile/schema again |
| Output exists or is too large | Choose a new private path and smaller native limit; no overwrite/resume |
| GUI cannot find Node/private file | Check actual runtime/absolute path/ACLs, then reconnect |
| 429/timeout | Respect native limits and inspect possible outcomes before deliberate repeat |

## 18. API coverage and comparisons

### Official hosted account MCP

[Testimonial's official MCP](https://help.testimonial.to/en/articles/16529003-connect-testimonial-with-ai-agents) at https://mcp.testimonial.to already browses/searches testimonials, manages Wall of Love, mentions and keywords, analyzes trends and NPS, creates/browses case studies, checks usage and configures standing routes. Routes keep running after a chat and already default to confirmation before publishing. Browser sign-in is the default; Notion uses a header token, and Advanced tokens are a fallback for clients without browser authorization.

Use the official connector for that wider native experience. REST Space keys and hosted access tokens are different integration paths. Current provider material specifies REST Ultimate/Ultimate+ per Space; reviewed hosted help snapshots differ in explicit plan wording, so verify eligibility in AI & Agents and Settings > Plan instead of treating the absence of an upgrade label as unrestricted access. This package neither creates standing routes nor exposes undocumented analytics/NPS/keyword endpoints.

### Real terminal alternatives

A dedicated provider task CLI was not identified in the reviewed sources on October 3, 2026. That does not mean the official MCP cannot be used from a terminal. [wong2/mcp-cli](https://github.com/wong2/mcp-cli/tree/7d12b4648b1c3e2a7341113407002c1b0f700d1b), pinned at 7d12b4648b1c3e2a7341113407002c1b0f700d1b, supports remote Streamable HTTP/SSE, OAuth and non-interactive tool calls. The official MCP Inspector also supports CLI calls. They can call the broad official connector using its native authorization and approved tools.

Searches for Testimonial-specific public MCP/task-CLI repositories did not identify an independent source suitable to pin; this is a search finding, not evidence none exist. The private old five-tool repo is separately reviewed, not misrepresented as an independent community implementation.

### Why offer this companion

This owned implementation supplies a focused shared task CLI/local MCP, isolated Space credentials, separate local approval/customer consent, direct read-only refusal even for a side-effecting GET, exact locally reviewed imports/emails and a bounded exclusive private export. These behaviors are exercised through the actual handlers and CLI; provider outcomes, actual desktop GUI and matched Codex costs remain separate evidence.

No universal superiority, more-total-provider-coverage or measured token saving is claimed. The official MCP remains broader. This REST companion cannot update existing Wall of Love items, manage mentions/keywords, create case studies or run standing automation through undocumented endpoints.
| Capability | This package | Existing alternatives |
| --- | --- | --- |
| Task interface | 10 shared CLI/local MCP tasks | Official hosted MCP plus generic terminal clients |
| Native scope | 5 reviewed REST operations | Hosted tools cover additional product areas |
| Consent | Local confirm separated from actual customer public-use permission | Official provider/client controls remain native |
| Profiles | Private named Space keys with no fallback | Hosted browser authorization or native token connection |
| Reviewed work | Exact ordered imports/emails, prevalidation and stop on failure | No provider-state lock or replacement for customer permission |
| Exports | One bounded array to a new private file | No pagination, atomic backup or media download |
| Token costs | Actual matched Codex task measurement pending | No blanket MCP-versus-CLI percentage |

## 19. Versions and migration

| Legacy tool | Current 2.0.1 contract |
| --- | --- |
| list_testimonials | Same name, selected Space key, native single-array filters; no spaceId/page/per_page |
| submit_text_testimonial | Same name, POST/submit/text with testimonial/name and separate consent |
| submit_video_testimonial | Same name, POST/submit/video with videoURL/name and separate consent |
| update_testimonial | Excluded: current reviewed REST contract not established; use hosted MCP/dashboard |
| send_testimonial_request | Same name, confirmed GET/new/request with four required fields |

Private five-tool 1.0.0 history stays intact and out of public refs. Version 2.0.1 is a major native argument/route correction, not a claim every legacy capability remains valid. AGPL-3.0 is preserved.

| Component | Reviewed version |
| --- | --- |
| Package/desktop | 2.0.1 |
| Native REST | v1, five operations checked 2026-10-03 |
| Generic MCP CLI | 7d12b4648b1c3e2a7341113407002c1b0f700d1b |
| Node | >=22 |
| Behavior/bridge checks | 54 passing tests |
| Actual Codex task/token use | Pending |

[CHANGELOG.md](CHANGELOG.md) records dated changes. Version 2.0.0 introduced the current REST companion; 2.0.1 corrects export approval and payload help. Native routes, approval behavior and ten-tool coverage are unchanged.

## 20. FAQ

<details>
<summary><b>Does Testimonial.to already have an official MCP?</b></summary>

Yes. Its hosted connector already covers broader testimonials, Wall of Love, mentions/keywords, analytics, NPS, case studies and standing routes. Browser authorization is the default, with native token fallbacks. This package is a focused REST task companion, not a replacement for all official tools.

</details>

<details>
<summary><b>Why offer a CLI alongside the official MCP?</b></summary>

The useful addition is a shared task CLI/local MCP with isolated Space keys, separate local approval/customer consent, explicit read-only refusal, exact reviewed ordered imports/emails and private bounded JSON exports. Generic MCP CLIs already call the hosted connector; no universal absence or superiority is claimed.

</details>

<details>
<summary><b>Which plan and key do I need?</b></summary>

Current REST docs specify Ultimate/Ultimate+ per Space. Copy the intended Space key from its dashboard card menu. Hosted MCP plan wording varies in reviewed snapshots; verify current eligibility in the account. This wrapper grants no bypass and does not use a browser session as a Space key.

</details>

<details>
<summary><b>Where should credentials live?</b></summary>

Use one private TESTIMONIAL_API_KEY or absolute owner-only TESTIMONIAL_TOKEN_FILE outside repositories, at most 64 KiB. Windows ACLs need separate restriction. Never publish resolved values, token URLs, keys or customer data in source, bundles, CMS or screenshots.

</details>

<details>
<summary><b>Can I use several Spaces?</b></summary>

Yes, with private named TESTIMONIAL_ACCOUNTS profiles. A unique label selects one Space key/file, with no global or cross-Space fallback. A label is not native ownership proof. list_accounts does not make network calls or expose token paths.

</details>

<details>
<summary><b>Does login or doctor authenticate automatically?</b></summary>

login only prints setup instructions; doctor checks local settings. Explicit doctor --network requests GET /verify and prints success metadata without native email/id. It does not create keys, sign in, import cookies, verify every endpoint or send email.

</details>

<details>
<summary><b>Which native operations are included?</b></summary>

GET testimonials, GET verify, POST submit/text, POST submit/video and side-effecting GET new/request. The five helpers are list_accounts, get_operation_schema, preview_testimonial_batch, submit_testimonial_batch and export_testimonials.

</details>

<details>
<summary><b>Can this update existing Wall of Love items or manage mentions?</b></summary>

No reviewed REST contract for the legacy update endpoint was established. Use the official MCP/dashboard for existing Wall of Love, mentions, keywords, analytics, case studies and routes. No undocumented route or fake supported tool is exposed.

</details>

<details>
<summary><b>What is the difference between confirm and customer_consent?</b></summary>

Outer confirm or --confirm is local approval for this requested operation. customer_consent or native payload.confirm represents actual customer permission for public use, default false. They never imply each other. Do not manufacture consent to satisfy a command.

</details>

<details>
<summary><b>Does isLiked publish a testimonial?</b></summary>

Native isLiked adds imported proof to the Wall of Love, default false. This package refuses isLiked true without explicit actual public-use consent. It cannot establish authenticity, rights or who granted permission; native published placement remains an effect.

</details>

<details>
<summary><b>Why is the email GET treated as a write?</b></summary>

GET /new/request sends a real email using name, email, spaceName and adminName. It requires explicit local approval, is hidden/refused in read-only and is not called during discovery, setup, previews or export. There is no automatic test email or delivery guarantee.

</details>

<details>
<summary><b>Does video submission mean processing is complete?</b></summary>

No. The provider retrieves the public HTTPS video and can process it after acceptance. Native list only returns ready video assets. The package never downloads the video or treats success as completion or consent proof.

</details>

<details>
<summary><b>How do list filters and tags work?</b></summary>

The current endpoint returns one newest-first array for the selected Space key. type, liked, highlighted, repeated tag display names and limit are native filters; tags use OR matching. page, offset, cursor and spaceId are refused. No native full-text search is invented.

</details>

<details>
<summary><b>Is an export a complete backup?</b></summary>

No. One bounded native response is saved to a new private JSON file, default limit 100, local maximum 10,000 and 5 MiB cap. Receipt completeBackup and atomicSnapshot remain false. Filtering, processing and changing native state limit visibility; there is no pagination, resume or media download.

</details>

<details>
<summary><b>Can exports overwrite files?</b></summary>

No. Exclusive creation refuses existing paths/symlinks before any request. Failure removes only the new partial file. POSIX files use 0600; restrict Windows ACLs separately. Returned metadata never echoes the private customer array.

</details>

<details>
<summary><b>What does a reviewed batch guarantee?</b></summary>

Every 1–20 exact ordered operation is validated before the first request; hash binds requests/order/profile label/schema. It is not a key fingerprint, provider-state lock, customer permission record, expiry or single-use approval token. Preview makes no network call or key load.

</details>

<details>
<summary><b>What happens if a batch fails?</b></summary>

Stop immediately with knownResults, failedIndex and unattemptedIndices; HTTP 200 status failed is an error. Unknown native outcomes may remain. No retry, rollback or automatic continuation occurs; inspect native state before deliberately repeating.

</details>

<details>
<summary><b>Can an agent bypass read-only or use agent mode as approval?</b></summary>

No. READ_ONLY hides and directly refuses all five effect/file tools. ALLOW_DESTRUCTIVE=0 refuses confirmed effects too. Agent/yes formatting never supplies local confirm or customer consent.

</details>

<details>
<summary><b>Which clients and operating systems work?</b></summary>

Node 22+ local stdio clients and the CLI work on macOS, Windows and Linux; INSTALL documents Codex first, Claude Code/Desktop, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Docker and other stdio clients. Browser-only clients need a supported remote connector, such as the official MCP. Protocol/CI evidence is not actual GUI installation.

</details>

<details>
<summary><b>How are updates and token comparisons handled?</b></summary>

Restart npx@latest registrations, update global CLI installs explicitly and install newer desktop bundles manually. Actual equivalent Codex task/token measurement remains pending. Loading modes, schemas/help, output, skills and caching affect cost; no borrowed percentage, character estimate or universal superiority is claimed.

</details>

## Questions

Open a [secret-free issue](https://github.com/thenavidm/testimonial-mcp-cli/issues). Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. This Testimonial.to MCP server and CLI is one piece of that system.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=testimonial-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=testimonial-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=testimonial-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

| Dependency | Exact lock version | Role |
| --- | --- | --- |
| `@modelcontextprotocol/sdk` | 1.32.0 | Runtime |
| `ajv` | 8.20.0 | Runtime |
| `ajv-formats` | 3.0.1 | Runtime |
| `@anthropic-ai/mcpb` | 2.1.2 | Development/packaging |
| `@types/node` | 22.20.5 | Development/packaging |
| `typescript` | 7.0.2 | Development/packaging |
| `vite` | 8.3.2 | Development/packaging |
| `vitest` | 5.0.3 | Development/packaging |

These versions are from this release’s package-lock.json. Runtime dependencies ship in npm and the desktop bundle; packaging tools do not enter the desktop runtime.

## License

Preserves [AGPL-3.0](LICENSE) and existing private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Testimonial.to service terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media). Made with ❤️ by [Navid Moazzez](https://navid.me).
