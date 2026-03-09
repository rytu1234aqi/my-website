# AGENTS.md — AI Coding Agent Guide

## Project Overview

This is a **personal portfolio website** for a Game Developer & Computer Science Student. It is a static site built with [Astro](https://astro.build/), featuring a modern dark theme design inspired by Apple's aesthetic.

The website showcases:
- Game development projects (Unity, C#)
- AI/ML projects (Computer Vision, Dance Recognition)
- A technical blog with Markdown support
- Contact information and personal bio

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [Astro](https://astro.build/) | ^5.17.1 |
| Language | TypeScript | Strict mode |
| Styling | CSS3 with CSS Variables | - |
| Build Output | Static HTML | `dist/` |

**Key Design Decisions:**
- No frontend UI frameworks (React, Vue, Svelte) - uses pure Astro components with scoped styles
- Google Fonts: Inter (sans-serif) and JetBrains Mono (monospace)
- Dark theme with Apple-inspired glassmorphism effects
- Chinese language meta (`lang="zh-CN"`) but English content

## Project Structure

```
my-website/
├── src/
│   ├── layouts/           # Astro layout components
│   │   ├── Layout.astro   # Base layout with nav, footer, global styles
│   │   └── BlogPost.astro # Layout for individual blog posts
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Homepage with hero, terminal, projects preview
│   │   ├── about.astro    # About page with skills, education, interests
│   │   ├── contact.astro  # Contact page with external links
│   │   ├── projects.astro # Projects listing page
│   │   └── blog/          # Blog routes
│   │       ├── index.astro    # Blog listing (dynamic from .md files)
│   │       └── first-post.md  # Sample blog post
│   └── styles/
│       └── global.css     # Design system, CSS variables, utilities
├── public/                # Static assets (copied to dist/)
│   ├── favicon.ico
│   └── favicon.svg
├── dist/                  # Build output (gitignored)
├── .astro/                # Astro generated types (gitignored)
├── astro.config.mjs       # Astro configuration (minimal/default)
├── tsconfig.json          # TypeScript strict config
└── package.json           # Dependencies and scripts
```

### Routing

Astro uses file-based routing:
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/blog/index.astro` → `/blog`
- `src/pages/blog/first-post.md` → `/blog/first-post`

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- --help
```

### VS Code Integration

The project includes VS Code configurations:
- Recommended extension: `astro-build.astro-vscode`
- Debug launch configuration for development server

## Design System

### CSS Variables (defined in `src/styles/global.css`)

**Colors:**
```css
--bg-primary: #000000
--bg-secondary: #0a0a0a
--bg-surface: #111111
--bg-surface-hover: #1a1a1a
--bg-glass: rgba(17, 17, 17, 0.72)

--text-primary: #f5f5f7
--text-secondary: #86868b
--text-tertiary: #6e6e73

--accent-blue: #2997ff
--accent-purple: #a855f7
--accent-gradient: linear-gradient(135deg, #2997ff, #a855f7)

--border-subtle: rgba(255, 255, 255, 0.08)
--border-light: rgba(255, 255, 255, 0.12)
```

**Typography:**
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
--font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace
```

**Border Radius:**
```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 20px
--radius-xl: 24px
```

**Transitions:**
```css
--transition-fast: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-smooth: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-spring: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.container` | Max-width 1080px, centered with padding |
| `.gradient-text` | Blue-to-purple gradient text |
| `.tag` | Pill-style tag/badge |
| `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-link` | Button styles |
| `.section` | Standard section padding (120px vertical) |
| `.section-label` | Mono uppercase label (e.g., "// Projects") |
| `.card` | Surface card with hover lift effect |
| `.animate-slide-up`, `.animate-fade-in` | Entrance animations |
| `.delay-1` through `.delay-5` | Animation delay utilities |

## Code Style Guidelines

### Astro Components

**Frontmatter (TypeScript):**
```astro
---
interface Props {
  title?: string;
  description?: string;
}

const { title = 'Default', description } = Astro.props;
---
```

**Scoped Styles:**
- Use `<style>` blocks within `.astro` files for component-specific styles
- Use CSS modules approach (no `scoped` attribute needed in Astro)
- Global styles for Markdown content use `:global()` selector

### Import Conventions

```astro
---
// Layout imports
import Layout from '../layouts/Layout.astro';

// Style imports
import '../styles/global.css';

// Current path for active nav state
const currentPath = Astro.url.pathname;
---
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet/Mobile */
@media (max-width: 768px) { ... }

/* Small desktop */
@media (max-width: 640px) { ... }
```

## Content Management

### Adding Blog Posts

Create a new `.md` file in `src/pages/blog/`:

```markdown
---
title: Your Post Title
date: 2026-03-09
layout: ../../layouts/BlogPost.astro
---

Your content here...
```

The blog index (`src/pages/blog/index.astro`) automatically discovers all `.md` files using `import.meta.glob()`.

### Adding Projects

Edit `src/pages/projects.astro` and add to the `projects` array:

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    icon: '🎮',
    status: 'Completed', // or 'In Progress'
  },
  // ...
];
```

## Animation Conventions

The site uses CSS animations with a staggered entrance pattern:

1. Add `.animate-slide-up` to elements that should animate in
2. Add delay classes (`.delay-1` to `.delay-5`) for staggered effects
3. Animation duration: 0.8s with ease-out timing

## Mobile Menu

The navigation includes a hamburger menu for mobile:
- Toggle button: `#nav-toggle`
- Mobile menu: `#mobile-menu`
- JavaScript in `Layout.astro` handles toggle state
- Menu closes automatically when a link is clicked

## Testing

**No automated tests are currently configured.**

For manual testing:
1. Run `npm run dev` and verify at `http://localhost:4321`
2. Check responsive behavior at different viewport sizes
3. Verify all navigation links work
4. Test mobile menu toggle

## Deployment

The project builds to static HTML in the `dist/` directory. Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Environment Variables

The project currently does not use environment variables. If needed in the future:
1. Create `.env` file (gitignored)
2. Reference in code with `import.meta.env.VAR_NAME`

## Security Considerations

- No user input forms (contact uses external links)
- No server-side processing
- External links use `rel="noopener"` for security
- Content Security Policy can be added via `astro.config.mjs` if needed
