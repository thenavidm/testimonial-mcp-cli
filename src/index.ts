#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Testimonial MCP and shared task CLI ${VERSION}
testimonial-mcp                         Local stdio MCP
testimonial-cli <command> --help         Actual shared arguments
testimonial-cli schema <command>         Actual JSON input schema
testimonial-cli doctor [--network]       Local settings / explicit Space key verification
testimonial-cli login                   Private setup instructions only
TESTIMONIAL_API_KEY / TESTIMONIAL_TOKEN_FILE   One private Bearer API key source
TESTIMONIAL_ACCOUNTS                    Named isolated project profiles
TESTIMONIAL_DEFAULT_ACCOUNT             Exact profile label
TESTIMONIAL_READ_ONLY=1                 Hide and directly refuse mutations/file writes
TESTIMONIAL_ALLOW_DESTRUCTIVE=0          Refuse all confirmed mutations/file writes
TESTIMONIAL_REQUEST_TIMEOUT_MS          Default30000; no retries
TESTIMONIAL_MIN_REQUEST_INTERVAL_MS     Default250; local pacing, not provider quota
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Open the intended Testimonial.to Space card menu > API key. Current REST docs specify Ultimate/Ultimate+ per Space. Store exactly one private TESTIMONIAL_API_KEY or absolute owner-only TESTIMONIAL_TOKEN_FILE. Named profiles do not inherit global credentials. login prints instructions only. Official https://mcp.testimonial.to is a separate hosted browser-authorized connection. Native customer consent is separate from local operation confirmation; no key rotation or API access bypass is provided.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('testimonial-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
