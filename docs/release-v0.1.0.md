# v0.1.0 Release Notes

LaunchKit AI v0.1.0 is the first OSS hardening release.

## Highlights

- Repositioned LaunchKit AI as an open-source AI app builder powered by sandboxed coding agents.
- Added a polished public home screen with a product-native agent workflow preview.
- Added CI for lint, typecheck, and production build.
- Added smoke-test mode for build verification without real Clerk credentials.
- Added MIT license, contribution guide, security policy, roadmap, changelog, issue templates, and PR template.
- Documented provider setup for Clerk, OpenAI, E2B, Inngest, Prisma, and Postgres.

## Verification

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZHVtbXkuY2xlcmsuYWNjb3VudHMuZGV2JA \
CLERK_SECRET_KEY=sk_test_ZHVtbXk \
npm run ci
```

## Known Gaps

- A real hosted demo still requires provider credentials.
- Project and sandbox screenshots should be captured after a full provider-backed run.
- Dependency audit follow-up is tracked separately.
