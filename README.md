# Doméa — Luxury Interior Design Studio

> *Designing Spaces That Speak Luxury.*

A fully responsive, single-page website for **Doméa**, a luxury interior design studio crafting timeless, elegant, and high-end residential interiors. Built with a focus on refined typography, generous whitespace, and premium-feeling motion.

---

## 🌐 Live Preview
https://domea-interiors-production.up.railway.app/
```

---

## Features

- **Fullscreen cinematic hero** with staggered text reveal and parallax imagery
- **Custom gold cursor** (dot + ring) with hover states on interactive elements
- **Lenis smooth scroll** synchronised with GSAP ScrollTrigger
- **Rotating brand marquee** with five tagline variations
- **Category-filtered portfolio** — Living Room, Bedroom, Kitchen, Wardrobe, Prayer Room, Bath, Dining
- **Drag-to-reveal Before / After slider** with animated entrance
- **4-step Process** section on dark ink background
- **Floating-label contact form** with success feedback
- **Luxury loading screen** with brand reveal animation
- **Mobile-first responsive layout** with elegant hamburger menu
- **Sticky translucent navbar** that shifts to light-glass on scroll
- **SEO-ready** — semantic HTML, meta title / description, Open Graph tags

---

## Design System

| Token | Value |
|---|---|
| Primary serif | Cormorant Garamond |
| Primary sans | Inter |
| Accent (gold) | `#B8935A` |
| Accent (gold light) | `#D4B684` |
| Background (pearl) | `#FAF7F2` |
| Background (cream) | `#F5F1EB` |
| Ink / charcoal | `#1C1C1C` / `#0A0A0A` |
| Luxury letter-spacing | `0.28em` |

Typography is spaced and light-weighted throughout to communicate restraint — the core visual language of quiet luxury.

---

## Tech Stack

- **HTML5** — semantic markup
- **Tailwind CSS** (via Play CDN) — utility-first styling
- **Custom CSS** — luxury-specific animation, typography, and components
- **GSAP 3 + ScrollTrigger** — scroll-triggered reveals and parallax
- **Lenis** — buttery-smooth inertial scroll
- **Vanilla JavaScript** — cursor, filter, slider, form, mobile menu

No build step required. The site is pure static assets.

---

## Getting Started

### Clone

```bash
git clone https://github.com/<your-username>/domea.git
cd domea
```

### Run locally

Any static HTTP server will do. For example, with Python:

```bash
python -m http.server 8080
```

Or with Node:

```bash
npx serve .
```

Then visit `http://localhost:8080`.

---

## Project Structure

```
domea/
├── index.html          # Full single-page site
├── css/
│   └── custom.css      # Luxury styling layer on top of Tailwind
├── js/
│   └── main.js         # GSAP animations, Lenis, cursor, filter, slider
└── README.md
```

---

## Sections

1. Loading screen
2. Navbar (transparent → sticky glass)
3. Hero — "Designing Spaces That Speak Luxury"
4. Rotating brand marquee
5. About Doméa (with studio stats)
6. Projects — filterable portfolio
7. Services — six offerings
8. Process — four chapters
9. The Doméa Experience — eight luxury features
10. Before / After transformation slider
11. Testimonials
12. Journal (blog previews)
13. Contact — "Start Your Dream Space"
14. Footer

---

## Customisation

### Brand colours

Edit the Tailwind config block inside `index.html`:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        gold: '#B8935A',
        cream: '#F5F1EB',
        // ...
      }
    }
  }
}
```

### Typography

Swap the Google Fonts `<link>` in `<head>` and update the `fontFamily` tokens.

### Imagery

Hero and section images reference Unsplash CDN URLs for reliability. Replace any `src` with your own CDN URLs — Pinterest (`i.pinimg.com`), Cloudinary, or a self-hosted `/images/` directory — the proportions and aspect ratios will hold.

### Content

All copy lives directly in `index.html`. Replace project names, testimonials, blog titles, and contact details inline.

---

## Production Notes

- Replace the **Tailwind Play CDN** with a compiled build for production:
  ```bash
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
  ```
- Host fonts locally (or via a single `font-display: swap` preload) to avoid FOUT.
- Connect the contact form to a form endpoint (Formspree, Netlify Forms, or a custom serverless function) — the current submit handler is a front-end demo.
- Add `rel="preload"` hints for the hero image to improve LCP.

---

## Browser Support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). The floating-label contact form relies on CSS `:has()` which is supported in all current versions.

---

## License

Design and code © Doméa Interior Studio. Fonts and imagery are licensed from their respective providers (Google Fonts, Unsplash).

---

*Crafted with care — Designed for Life.*
