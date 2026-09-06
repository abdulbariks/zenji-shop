# ZENJI

Anime-inspired streetwear for dreamers, fighters, creators, and outsiders.

Every drop is limited. No restocks. Ever.

![ZENJI](public/images/about-zenji.avif)

---

## About

ZENJI began with one belief: what you wear should tell a story.

Inspired by samurai discipline, anime art, and modern street culture, we create premium streetwear for those who choose their own path. Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism, and oversized silhouettes to express courage, creativity, and individuality.

**Brand motto:** "The warrior within refuses to fade into the crowd."

---

## Tech Stack

- **[Next.js](https://nextjs.org) 16** — App Router, React Server Components, server-side rendering
- **[React](https://react.dev) 19** — Client-side interactivity and animations
- **[TypeScript](https://www.typescriptlang.org)** — Static typing across the codebase
- **[Tailwind CSS](https://tailwindcss.com) v4** — Utility-first styling with custom OKLCH color theme
- **[GSAP](https://gsap.com)** — Scroll-triggered animations in the Collection section
- **[shadcn/ui](https://ui.shadcn.com)** — Headless UI primitives (Base UI)
- **[lucide-react](https://lucide.dev)** — Icon library
- **[pnpm](https://pnpm.io)** — Package manager

### Fonts

- **IBM Plex Mono** — Body and monospace text
- **Anton** — Headings and display text
- **JetBrains Mono** — Code and specialised UI text

### Color Palette

The project uses a black-dominated OKLCH theme with crimson red accents (`#BC0100`, `#B91C1C`) for a bold, high-contrast streetwear aesthetic. Both light and dark modes are configured.

---

## Project Structure

```
zenji-shop/
├── app/
│   ├── layout.tsx                  # Root layout — font imports and HTML body setup
│   ├── globals.css                 # Tailwind globals, theme variables, keyframes
│   └── (public)/
│       ├── layout.tsx              # Public layout — HeaderWrapper, main, Footer wrapper (black bg)
│       └── page.tsx                # Homepage — Hero, AboutZenji, Collection
├── components/
│   ├── data/
│   │   ├── Data.json               # Site-wide content: navigation, hero, about
│   │   ├── topbarData.json         # Announcement text
│   │   ├── collectionData.json     # Collection card data
│   │   └── footerData.json         # Footer links, social buttons, columns
│   ├── icons/
│   │   ├── index.ts                # Icon barrel export
│   │   ├── FacebookIcon.tsx
│   │   ├── TikTokIcon.tsx
│   │   └── InstagramIcon.tsx
│   ├── layout/
│   │   ├── HeaderWrapper.tsx       # Sticky header with scroll detection
│   │   ├── Topbar.tsx              # Marquee announcement bar
│   │   ├── Navbar.tsx              # Desktop + mobile navigation with dropdowns, search, cart, account
│   │   └── Footer.tsx              # Multi-column footer with watermark and social links
│   ├── home/
│   │   ├── Hero.tsx                # Fullscreen hero with autoplay background video
│   │   ├── AboutZenji.tsx          # Brand story with image and quote
│   │   └── Collection.tsx          # Scroll-pinned card stack with GSAP animations
│   └── ui/
│       └── button.tsx              # shadcn/ui Button component with CVA variants
├── lib/
│   └── utils.ts                    # cn() utility (clsx + tailwind-merge)
├── public/
│   ├── videos/hero.mp4             # Hero background video
│   └── images/                     # Product and editorial images
├── next.config.ts
├── tailwind.config.*
├── tsconfig.json
├── eslint.config.mjs
├── components.json                 # shadcn/ui configuration
├── pnpm-workspace.yaml
└── package.json
```

---

## Components Overview

### Layout

| Component | Description |
|---|---|
| **Topbar** | Red announcement bar with a continuously scrolling marquee displaying drop announcements and shipping info. |
| **HeaderWrapper** | Absolute-positioned header that detects scroll and signals the Navbar to switch between transparent and solid (fixed) states. |
| **Navbar** | Responsive navigation with desktop menu, dropdown submenus (for the "MORE" item), search field, cart and account icons, and a mobile slide-down menu with accordion submenus. |
| **Footer** | Full-width footer with a giant "ZENJI" background watermark, social follow buttons, multi-column navigation links, copyright, bottom links, and a live indicator tagline. |

### Home Sections

| Component | Description |
|---|---|
| **Hero** | Fullscreen section with an autoplay, muted, looping background video overlayed with a gradient, a pulsing "THE_ORIGIN_DROP // LOADING" subtitle, a split-word title ("WEAR YOUR STORY"), and a CTA button. |
| **AboutZenji** | Two-column layout: editorial showcase image on the left, brand copy with tagline, heading, paragraphs, blockquote, and CTA on the right. |
| **Collection** | Scroll-pinned card stack powered by GSAP ScrollTrigger. Cards animate in with staggered scale/opacity transitions as the user scrolls. |

### Data Sources

All static content is driven by JSON data files in `components/data/`, keeping copy and links separate from component logic:

- **Data.json** — Topbar announcement, navigation items, hero content, about section text
- **topbarData.json** — Topbar announcement string
- **collectionData.json** — Array of collection item cards (tagline, title, image, CTA)
- **footerData.json** — Footer description, social buttons, column links, copyright, tagline

---

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/installation) (v11.22.0+)
- Node.js (LTS recommended)

### Installation

```bash
git clone <repo-url>
cd zenji-shop
pnpm install
```

### Development Server

Run the development server with Turbopack:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Build

```bash
pnpm build
```

### Linting

```bash
pnpm lint
```

---

## Development Notes

- The project uses the Next.js App Router (`app/` directory structure).
- Client components are marked with `"use client"` where interactivity or browser APIs are required (HeaderWrapper, Navbar, Collection).
- GSAP plugins (ScrollTrigger) are registered only in the browser (`typeof window !== "undefined"`).
- Tailwind CSS v4 is imported via `@import "tailwindcss"` in `globals.css` — no separate `tailwind.config.js` file is needed.
- All text content is configurable via JSON data files; no code changes required to update announcements, navigation links, or collection data.

---

## Collections

### THE_ORIGIN_DROP

| Product | Description |
|---|---|
| **Will of the Sun Tee** | Bold sun-motif design |
| **Blue Flame Tee** | Limited-edition flame artwork |
| **Shadow Ninja Hoodie** | Oversized hoodie with ninja-inspired graphics |
| **Samurai Spirit Oversized Tee** | Warrior-symbol design in relaxed fit |

---

## Community

Follow ZENJI across platforms:

- [TikTok](https://tiktok.com)
- [Instagram](https://instagram.com)
- [Facebook](https://facebook.com)

---

## License

© 2026 ZENJI. All drops are final. No restocks. Ever.
