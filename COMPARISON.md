# Testimonial.to comparison

Checked 2026-10-03.

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

MCP can load all schemas, defer discovery or load selected tools; the client mode changes input overhead. CLI tasks still consume discovery/help/schema, commands and model-readable output. --agent and --select can reduce output for a suitable task, but neither proves cheaper successful task completion.

Codex is the active client. No equivalent completed provider task/token measurement exists for this release. Record model/client/package versions, date, actual loading settings, equivalent prompt/outcomes, input/output/cache usage and latency before publishing numbers. Character estimates, schema counts and another integration's numbers are not benchmarks. Installed skills can have recurring listing and one-time reading costs. Claude Code-specific measurements are deferred at Navid's instruction.
