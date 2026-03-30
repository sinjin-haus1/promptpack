# PromptPack

> Personal library for vibe coding prompts — save, categorize, and reuse AI coding instructions across projects and agents.

## What

PromptPack is a micro-SaaS for developers who spend hours crafting AI coding prompts. Instead of losing great prompts in Notion docs or ChatGPT history, store, tag, and reuse them across Codex, Claude Code, Stitch, Google AI Studio, and more.

## Micro-Niche

- **Focus:** One specific problem — storing and retrieving AI coding prompts
- **Audience:** Developers using vibe coding tools (Codex, Claude Code, Stitch, AI Studio)
- **Trends:** Google Stitch (18M views), Codex eating market, vibe coding community exploding

## Features

- Save prompts with metadata (tool, language, framework, tags)
- Filter by tool (Codex, Claude Code, Stitch, etc.)
- Collections for organizing prompts by project
- Public gallery of curated prompts
- MCP integration for AI tool access

## Tech Stack

- **Backend:** NestJS + GraphQL + MongoDB
- **Frontend:** Next.js + Material UI (future)
- **API:** GraphQL (auto-schema from code)

## Getting Started

```bash
npm install
cp .env.example .env  # Edit with your MongoDB URI
npm run start:dev
```

GraphQL Playground: http://localhost:3000/graphql

## Revenue Model

- Free: 50 prompts, basic search
- Pro ($9/mo): Unlimited prompts, collections, team sharing
- Team ($19/mo): MCP integration, API access, priority support

## License

MIT