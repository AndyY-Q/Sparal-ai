# Roadmap Issues To Create

Use these issues after the repository is public and GitHub API access works.

## 1. Add provider-backed demo screenshots

Labels: `documentation`, `good first issue`

Capture and add screenshots for:

- Authenticated project view
- Inngest agent run
- E2B sandbox preview
- Generated fragment/code view

Update `README.md` and `docs/demo.md` after the screenshots are committed.

## 2. Add local demo mode for generated artifacts

Labels: `enhancement`

Create a provider-free demo mode that renders a seeded project, assistant message, generated files, and sandbox preview mock. This should help contributors inspect the core UX without Clerk, OpenAI, E2B, Inngest, or Postgres setup.

## 3. Add integration tests for tRPC project and message flows

Labels: `testing`, `help wanted`

Add tests around:

- Project creation
- Message creation
- Usage limit behavior
- Unauthorized access handling

Prefer a test setup that can run in CI with smoke-test credentials.

## 4. Document E2B sandbox template publishing

Labels: `documentation`, `help wanted`

Document how to build, publish, and update the `sandbox-templates/nextjs` E2B template used by the code agent.

## 5. Review dependency audit findings

Labels: `security`, `maintenance`

Run `npm audit`, classify findings, and update dependencies safely without breaking Next.js, Clerk, Inngest Agent Kit, or E2B integration.
