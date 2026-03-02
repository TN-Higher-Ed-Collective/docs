# Tennessee Higher Ed Tech Collective (TN HETC)

A community documentation site connecting IT professionals across Tennessee's colleges and universities.

**Live site:** [tn-higher-ed-collective.github.io](https://tn-higher-ed-collective.github.io/docs/)

## About

The Tennessee Higher Ed Tech Collective exists to foster collaboration and knowledge sharing among IT professionals in Tennessee's higher education institutions. We provide shared resources, best practices, and a supportive community for solving common technology challenges.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX for documentation content
- [Pagefind](https://pagefind.app/) - Full-text search
- [GitHub Pages](https://pages.github.com/) - Hosting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/TN-Higher-Ed-Collective/thetc-community.git
cd thetc-community

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Available Commands

| Command           | Description                              |
| :---------------- | :--------------------------------------- |
| `npm run dev`     | Start local dev server                   |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview the production build locally     |

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── content/docs/     # Documentation pages (MDX)
├── data/             # Theme configuration
├── layouts/          # Page layouts
├── lib/              # Utility functions
├── pages/            # Route pages
└── styles/           # Global CSS and theme files
```

Documentation content lives in `src/content/docs/` as MDX files organized by section (about, get-started, resources, community, events).

## Community

- **Discord:** [Join our server](https://discord.gg/EWRBRJrC)
- **GitHub:** [TN-Higher-Ed-Collective](https://github.com/TN-Higher-Ed-Collective)

## Contributing

We welcome contributions from IT professionals across Tennessee's higher education institutions. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
