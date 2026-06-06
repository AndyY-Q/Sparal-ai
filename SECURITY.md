# Security Policy

LaunchKit AI executes generated code inside E2B sandboxes. Treat provider keys, user prompts, generated files, and sandbox URLs as sensitive application data.

## Reporting Issues

Please open a private security advisory on GitHub when the repository is public, or contact the maintainer directly if advisories are not yet enabled.

## Maintainer Notes

- Never commit real `.env.local` values.
- Keep OpenAI, Clerk, E2B, Inngest, and database credentials server-side.
- Review sandbox template changes carefully.
- Avoid logging secrets, full prompts with private data, or provider responses containing sensitive content.
