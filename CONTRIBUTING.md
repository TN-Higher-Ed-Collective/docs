# Contributing to TN HETC

Thank you for your interest in contributing to the Tennessee Higher Ed Tech Collective! Whether you're fixing a typo, adding documentation, or sharing best practices from your institution, every contribution helps the community.

## Ways to Contribute

- **Documentation:** Add or improve guides, best practices, and how-to articles
- **Bug reports:** Found something broken on the site? [Open an issue](https://github.com/TN-Higher-Ed-Collective/thetc-community/issues/new?template=bug_report.md)
- **Feature requests:** Have an idea for the site? [Suggest it](https://github.com/TN-Higher-Ed-Collective/thetc-community/issues/new?template=feature_request.md)
- **Best practices:** Share what works at your institution
- **Scripts and tools:** Contribute to our shared script library

## Getting Set Up

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/thetc-community.git
   cd thetc-community
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your work:
   ```bash
   git checkout -b your-branch-name
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```

## Adding Documentation

Documentation pages are MDX files in `src/content/docs/`. Each file needs frontmatter:

```mdx
---
title: "Your Page Title"
description: "A brief description of the page"
order: 1
---

Your content here...
```

### File Organization

Place files in the appropriate section directory:

| Directory                        | Content                        |
| :------------------------------- | :----------------------------- |
| `src/content/docs/about/`        | Mission, values, governance    |
| `src/content/docs/get-started/`  | Onboarding and setup guides    |
| `src/content/docs/resources/`    | Best practices and tools       |
| `src/content/docs/community/`    | Code of conduct, committees    |
| `src/content/docs/events/`       | Meetups and summits            |

## Submitting Changes

1. Commit your changes with a clear message:
   ```bash
   git commit -m "Add VMware backup best practices guide"
   ```
2. Push to your fork:
   ```bash
   git push origin your-branch-name
   ```
3. Open a Pull Request against the `main` branch
4. Describe what you changed and why

## Pull Request Guidelines

- Keep PRs focused on a single change
- Include a clear description of what the PR does
- Make sure the site builds without errors (`npm run build`)
- Update the CHANGELOG if your change is user-facing

## Writing Style

- Write in plain, accessible language
- Use second person ("you") when addressing the reader
- Include practical examples where possible
- Keep institutional jargon to a minimum - remember, we span many colleges

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](https://tn-higher-ed-collective.github.io/docs/docs/community/code-of-conduct/). Be respectful, collaborative, and constructive.

## Questions?

- Join us on [Discord](https://discord.gg/EWRBRJrC)
- Open a [discussion](https://github.com/TN-Higher-Ed-Collective/thetc-community/discussions) on GitHub
