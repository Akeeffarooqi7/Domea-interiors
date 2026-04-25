# Doméa — Luxury Interior Design Studio

> *Crafted with intention. Designed for Life.*

**Doméa** is a luxury interior design studio crafting timeless, elegant living spaces that tell your story. We specialize in bespoke interiors, blending refined aesthetics with functional design—from concept to completion, delivering premium, detail-driven spaces tailored to modern lifestyles.

🌐 **[Experience Doméa →](https://domea-interiors-production.up.railway.app/)**

---

## ✨ Highlights

- **Fullscreen cinematic hero** with staggered text reveal and parallax imagery
- **Custom luxury cursor** (dot + ring) with intuitive hover states
- **Buttery smooth scroll** with Lenis + GSAP ScrollTrigger integration
- **Rotating brand marquee** with dynamic tagline variations
- **Category-filtered portfolio** — Living Room, Bedroom, Kitchen, Wardrobe, Prayer Room, Bath, Dining
- **Before / After transformation slider** with drag-to-reveal interaction
- **Four-step design process** elegantly presented (Consultation → Concept Design → Execution → Final Styling)
- **Client testimonials** showcasing real luxury projects and satisfied clients
- **Floating-label contact form** with real-time validation and success feedback
- **Luxury loading animation** with brand reveal
- **Mobile-first responsive design** with refined hamburger navigation
- **Sticky translucent navbar** that elegantly transitions on scroll
- **Fully optimized** — semantic HTML, meta tags, Open Graph support

---

## 🎨 Design Philosophy

A home is more than a space—it is a reflection of identity. At Doméa, we believe every home tells a story. Each project is thoughtfully crafted to balance elegance, comfort, and functionality, where form meets feeling, and every surface is a quiet invitation to live beautifully.

### Brand Colors & Typography

| Element | Value |
|---------|-------|
| **Primary Serif** | Cormorant Garamond |
| **Primary Sans** | Inter |
| **Accent Gold** | `#B8935A` |
| **Light Gold** | `#D4B684` |
| **Pearl Background** | `#FAF7F2` |
| **Cream Background** | `#F5F1EB` |
| **Ink / Charcoal** | `#1C1C1C` / `#0A0A0A` |
| **Letter Spacing** | `0.28em` (quiet luxury) |

The design language emphasizes restraint—light typography, generous spacing, and a sophisticated gold accent create an atmosphere of quiet, timeless luxury.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 (semantic) |
| **Styling** | Tailwind CSS (Play CDN) + Custom CSS |
| **Animation** | GSAP 3 + ScrollTrigger |
| **Smooth Scroll** | Lenis (inertial scroll) |
| **Interactivity** | Vanilla JavaScript |
| **Hosting** | Railway |

*No build step required—pure static assets, optimized for production.*

---

## 📂 Project Structure

```
domea-interiors/
├── index.html              # Full single-page site
├── css/
│   └── custom.css          # Luxury styling layer
├── js/
│   └── main.js             # GSAP, Lenis, interactions
├── images/                 # Project imagery
└── README.md
```

---

## 📖 Page Sections

1. **Loading Screen** — Luxury brand reveal animation
2. **Navbar** — Transparent to sticky glass effect
3. **Hero** — "Clients on Doméa" with staggered text reveal
4. **Rotating Marquee** — Five-tagline brand loop
5. **About Doméa** — Studio story + key stats (120+ Projects, 15+ Years, 48+ Cities)
6. **Projects** — Filterable portfolio by category
7. **Services** — Six core offerings
8. **The Process** — Four quiet chapters (Consultation, Concept Design, Execution, Final Styling)
9. **Luxury Features** — Eight experiential markers
10. **Transformation Slider** — Before / After with drag interaction
11. **Testimonials** — Real client stories from Mumbai, Lonavala, and beyond
12. **Journal** — Blog / insights previews
13. **Contact** — "Start Your Dream Space" form
14. **Footer** — Links + studio info

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Akeeffarooqi7/Domea-interiors.git
cd Domea-interiors
```

### Run Locally

Using Python:
```bash
python -m http.server 8080
```

Using Node:
```bash
npx serve .
```

Then visit **`http://localhost:8080`**

---

## ⚙️ Customization

### Brand Colors

Edit the Tailwind config in `index.html`:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        gold: '#B8935A',
        'gold-light': '#D4B684',
        cream: '#F5F1EB',
        pearl: '#FAF7F2',
        ink: '#1C1C1C'
      }
    }
  }
}
```

### Typography

Replace Google Fonts `<link>` in `<head>` and update font families in CSS.

### Content & Images

- All copy is inline in `index.html`—easy to update
- Images reference CDN URLs (Unsplash, Pinterest, Cloudinary)
- Replace with your own CDN or self-hosted `/images/` directory
- Portfolio projects, testimonials, and blog previews are fully customizable

---

## 🔧 Production Checklist

- [ ] Replace **Tailwind Play CDN** with compiled build:
  ```bash
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
  ```
- [ ] Host fonts locally with `font-display: swap` preload
- [ ] Connect contact form to backend (Formspree, Netlify Forms, or serverless)
- [ ] Add image preload hints for LCP optimization
- [ ] Test across browsers (Chrome, Safari, Firefox, Edge)
- [ ] Enable gzip compression on hosting

---

## 🌐 Browser Support

All modern evergreen browsers. CSS `:has()` selector and modern ES6 JavaScript required.

---

## 📊 Tech Composition

- HTML: 55.8%
- CSS: 27.9%
- JavaScript: 16.3%

---

## 📜 License

Design and code © Doméa Interior Studio. Fonts and imagery licensed from respective providers (Google Fonts, Unsplash).

---

## 💫 Philosophy

*"At Doméa, we believe every home tells a story. Materials, light, silence—we compose interiors the way musicians write symphonies. Drawing from the Latin domus, meaning home, we shape refined interiors for those who understand that luxury is not an ornament—it is an atmosphere."*

---

**Crafted with care. Designed for Life. ✨**