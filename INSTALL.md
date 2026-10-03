# Install Testimonial.to MCP Server & CLI

One package contains 10 shared tools, both named binaries and a bundled desktop extension. Node 22+ is required.

## Requirements

Install [Node](https://nodejs.org/en/download) and verify node --version/npm --version in your actual runtime. Windows may require npm.cmd if PowerShell policy blocks npm.ps1. Do not weaken execution policy or use sudo. GUI, container and remote settings are independent.

## CLI

~~~bash
npm install -g @thenavidm/testimonial-mcp-cli@latest
testimonial-cli --version
testimonial-cli tools
testimonial-cli login
~~~

Alternatively use npx -y --package @thenavidm/testimonial-mcp-cli@latest testimonial-cli tools. Make the shipped SKILL.md available in the supported private agent skill location; npm does not register skills automatically.

## Private Space setup

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


## Codex

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

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user testimonial -- npx -y @thenavidm/testimonial-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `testimonial-2.0.1.mcpb` from [GitHub Releases](https://github.com/thenavidm/testimonial-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter a private Space API key in the sensitive setting, OR an absolute private token-only file path. Leave the unused method empty. Requests use Authorization: Bearer. Named profiles require private manual runtime settings.
4. Enable read-only if you want only the 5 read operations. Reconnect and verify the intended Space with one deliberate read.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

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

## Cursor

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

## VS Code and Copilot

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

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Testimonial.to in Cascade; Space files must not contain secrets.

## Zed

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

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its Space settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/testimonial-mcp-cli.git
cd testimonial-mcp-cli
docker build -t testimonial-mcp-cli .
docker run --rm -i -e TESTIMONIAL_API_KEY testimonial-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/testimonial-mcp-cli@latest`, stdio transport, and private local TESTIMONIAL_API_KEY or TESTIMONIAL_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use Testimonial.to's official server rather than this local stdio command.





## Verify

~~~bash
testimonial-cli --version
testimonial-cli tools
testimonial-cli list-accounts --agent
testimonial-cli doctor
testimonial-cli doctor --network
testimonial-cli list-testimonials --limit 1 --agent
~~~

Only the last two commands contact the provider. Account outcomes, desktop GUI and actual Codex task/token usage are separate evidence. Never send email/import public proof during install verification.

## Updates and removal

Restart npx@latest registrations to resolve the current version; it does not hot-replace a running process. Global installs require npm install -g again; desktop bundles require manual newer-version installation. Remove only requested registrations/package/skill/bundle, and revoke native credentials separately. Prior emails, imported proof and exports remain.

~~~bash
npm install -g @thenavidm/testimonial-mcp-cli@latest
testimonial-cli --version
# Remove only when requested
npm uninstall -g @thenavidm/testimonial-mcp-cli
~~~

## Troubleshooting

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

## Development

~~~bash
git clone https://github.com/thenavidm/testimonial-mcp-cli.git
cd testimonial-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run check:discovery
npm run sync:api -- --check
npm run build:mcpb
~~~

Source mode uses node /absolute/path/testimonial-mcp-cli/dist/index.js after building. Keep private keys out of the checkout/archive.
