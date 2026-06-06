# Contributing

Thanks for helping improve Sparal.

## Development Flow

1. Fork the repository and create a feature branch.
2. Copy `.env.example` to `.env.local`.
3. Install dependencies with `npm install`.
4. Run the app with `npm run dev`.
5. Before opening a pull request, run:

```bash
npm run ci
```

## Pull Request Guidelines

- Explain the problem and the chosen fix.
- Include screenshots or a short screen recording for UI changes.
- Mention any provider setup needed to test the change.
- Keep unrelated refactors out of the PR.

## Good First Contributions

- Improve setup docs and screenshots.
- Add tests around tRPC procedures.
- Improve agent error states.
- Add examples for new sandbox templates.
