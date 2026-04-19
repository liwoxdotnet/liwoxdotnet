# LiwoxDotNet

<p align="center">
  <strong>LiwoxDotNet</strong> — Building scalable digital systems that work in the real world.
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-6.0-bc52ee?logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://pages.cloudflare.com"><img src="https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white" alt="Cloudflare Pages" /></a>
  <a href="https://github.com/ArmstrongLiwox/liwoxdotnet"><img src="https://img.shields.io/github/stars/ArmstrongLiwox/liwoxdotnet?style=flat&label=%E2%AD%90%20Star%20on%20GitHub&color=f59e0b" alt="Star on GitHub" /></a>
</p>

---

## About

**[liwox.net](https://liwox.net)** is the official website for LiwoxDotNet — a UK-based digital engineering practice founded by Armstrong Uzoagwa.

We help businesses design, build, and scale modern digital systems. From websites and dashboards to full cloud-based platforms — built fast, built properly, and built to grow.

**Core services:**
- Web and application development
- Cloud infrastructure and DevOps (AWS, GCP, Kubernetes)
- Automation and workflow optimisation

---

## Tech Stack

This site is built on the [Astro Rocket](https://github.com/hansmartens68/astro-rocket) theme by Hans Martens, customised and deployed for LiwoxDotNet.

| Layer | Technology |
|-------|------------|
| **Framework** | Astro 6 |
| **Styling** | Tailwind CSS v4 |
| **Language** | TypeScript |
| **Deployment** | Cloudflare Pages |
| **Email** | Resend |
| **CMS** | Astro Content Collections |

---

## Project Structure

```
liwoxdotnet/
├── public/                  # Static assets (fonts, favicon)
├── src/
│   ├── assets/              # Images and icons
│   ├── components/
│   │   ├── ui/              # UI component library
│   │   ├── patterns/        # Composed patterns (ContactForm, etc.)
│   │   ├── layout/          # Header, Footer, Navigation, ThemeToggle
│   │   ├── seo/             # SEO, JsonLd, Breadcrumbs
│   │   ├── blog/            # Blog components
│   │   └── landing/         # Landing page components
│   ├── content/             # Content collections
│   │   ├── blog/            # Blog posts
│   │   ├── projects/        # Portfolio projects
│   │   ├── authors/         # Author profiles
│   │   └── faqs/            # FAQ entries
│   ├── layouts/             # Page layouts
│   ├── pages/               # Routes and API endpoints
│   │   ├── api/             # Contact, newsletter endpoints
│   │   └── blog/            # Blog routes
│   ├── styles/              # Global CSS and design tokens
│   └── config/              # Site and navigation configuration
├── astro.config.mjs         # Astro + Cloudflare adapter config
├── wrangler.toml            # Cloudflare Pages config
├── package.json
└── tsconfig.json
```

---

## Local Development

### Prerequisites

- **Node.js 22.12.0+**
- **pnpm 9.x+**

### Setup

```bash
# Clone the repository
git clone https://github.com/ArmstrongLiwox/liwoxdotnet.git
cd liwoxdotnet

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

Visit `http://localhost:4321`

### Environment Variables

| Variable | Description |
|----------|-------------|
| `SITE_URL` | Your live domain e.g. `https://liwox.net` |
| `RESEND_API_KEY` | Resend API key for contact form and newsletter |
| `RESEND_FROM_EMAIL` | Verified sending address e.g. `admin@liwox.net` |
| `RESEND_AUDIENCE_ID` | Resend audience ID for newsletter signups |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID (optional) |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification (optional) |
| `BING_SITE_VERIFICATION` | Bing Webmaster verification (optional) |

---

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally via Wrangler |
| `pnpm deploy` | Build and deploy to Cloudflare Pages |
| `pnpm check` | Run Astro type checker |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run Vitest tests |

---

## Deployment

This site deploys automatically to **Cloudflare Pages** on every push to `main`.

```bash
# Manual deploy
pnpm deploy
```

Environment variables are set in the Cloudflare Pages dashboard under **Settings → Variables & Secrets**.

---

## API Routes

### Contact Form

**POST** `/api/contact`

```typescript
// Request (FormData)
{
  name: string,      // 2–100 chars
  email: string,     // Valid email
  subject: string,   // Optional
  message: string,   // 10–5000 chars
  honeypot: string   // Must be empty (spam check)
}

// Response
{ success: true }
// or
{ success: false, errors: { field: ["message"] } }
```

### Newsletter

**POST** `/api/newsletter`

```typescript
// Request (FormData)
{ email: string }

// Response
{ success: true }
// or
{ success: false, error: "message" }
```

---

## Performance

- **Lighthouse Score**: 95+ across all categories
- **Zero JavaScript** by default (Astro islands architecture)
- **Optimised fonts** with `font-display: swap`
- **Image optimisation** via Astro's built-in processing
- **Edge deployment** via Cloudflare's global network

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Credits

Built on [Astro Rocket](https://github.com/hansmartens68/astro-rocket) by [Hans Martens](https://hansmartens.dev), which is itself built on [Velocity](https://github.com/southwellmedia/velocity) by [Southwell Media](https://southwellmedia.com). Full credit to both teams for the foundation.

---

## Links

- [liwox.net](https://liwox.net) — Live site
- [GitHub](https://github.com/ArmstrongLiwox) — Armstrong Uzoagwa
- [LinkedIn](https://www.linkedin.com/in/armstrong-uzoagwa)
- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages](https://pages.cloudflare.com)

---

**LiwoxDotNet** is designed and maintained by [Armstrong Uzoagwa](https://github.com/ArmstrongLiwox).