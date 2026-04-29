# Zenvyra - Premium Digital Marketing Agency Website

Zenvyra is a premium multi-page digital marketing agency website built with HTML, Tailwind CSS CDN, and vanilla JavaScript. It combines a modern dark visual style with gradients, glassmorphism, smooth motion, and conversion-focused layouts to create a polished agency presence.

The project includes a full website structure with main pages for Home, About, Services, and Contact, along with dedicated service pages for SEO, Social Media Marketing, PPC, Web Development, and Content Marketing.

## Overview

- Premium responsive agency website
- Built with semantic HTML5
- Styled with Tailwind CSS via CDN and custom CSS
- Interactive behavior powered by vanilla JavaScript
- AOS scroll animations and custom micro-interactions
- SEO-friendly page structure with page-specific metadata
- Netlify-compatible contact form

## Pages Included

- `index.html` - Home page
- `about.html` - About page
- `services.html` - Services overview
- `contact.html` - Contact page
- `services/seo.html` - SEO services page
- `services/social-media.html` - Social media marketing page
- `services/ppc.html` - PPC services page
- `services/web-development.html` - Web development page
- `services/content-marketing.html` - Content marketing page

## Features

- Fully responsive layout for mobile, tablet, and desktop
- Premium dark UI with layered gradients and glassmorphism
- Sticky navbar with scroll state effect
- Mobile hamburger navigation
- Loading screen animation
- Scroll-to-top button
- Smooth scrolling
- Animated counters
- Hover tilt cards
- Spotlight hover effects
- Magnetic CTA buttons
- Lightweight parallax motion
- Internal linking across service pages
- Footer branding and structured navigation

## Tech Stack

- HTML5
- Tailwind CSS CDN
- Vanilla JavaScript
- AOS Animation Library
- Google Fonts: Barlow Condensed

## Design System Highlights

- High-contrast premium dark background
- Cyan, violet, coral, and lime accent palette
- Glass panels with soft shadows
- Strong typography hierarchy
- Premium CTA styling
- Scroll-triggered fade and zoom animations

## SEO Highlights

- Semantic HTML structure using `header`, `section`, `main`, and `footer`
- Page-specific meta titles and meta descriptions
- Keyword targeting for:
  - digital marketing agency
  - SEO services
  - social media marketing
  - PPC
  - web development
  - content marketing
- Internal links between main pages and service pages
- Clean page naming and service-based URL structure

## Project Structure

```text
Zenvyra/
|-- index.html
|-- about.html
|-- services.html
|-- contact.html
|-- favicon.svg
|-- README.md
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   |-- main.js
|   |   `-- tailwind-config.js
|   `-- img/
|       |-- about-collage.svg
|       |-- hero-dashboard.svg
|       |-- zenvyra-logo-circle.png
|       |-- zenvyra-logo.png
|       |-- zenvyra-mark.svg
|       `-- zenvyra-symbol.png
`-- services/
    |-- seo.html
    |-- social-media.html
    |-- ppc.html
    |-- web-development.html
    `-- content-marketing.html
```

## Interactions Included

- Loader hide animation on page load
- Sticky navbar background transition on scroll
- Active nav highlighting by page
- Mobile menu open and close behavior
- Animated counters using `IntersectionObserver`
- Card tilt effect on mouse movement
- Spotlight hover lighting effect
- Magnetic CTA button movement
- Decorative parallax orb motion

## Contact Form

The contact page includes a Netlify-compatible form:

- `name="contact"`
- `method="POST"`
- `data-netlify="true"`
- hidden `form-name` field
- honeypot anti-spam field

If you deploy on Netlify, the form can be connected directly without extra frontend libraries.

## Branding

The website uses the provided circular Zenvyra logo in the header and footer across all pages.

Primary branding asset:

- `assets/img/zenvyra-logo-circle.png`

## How to Run

This is a static website, so no build step is required.

### Option 1

Open `index.html` directly in your browser.

### Option 2

Use a local live server for better development workflow.

Examples:

```bash
# VS Code Live Server
Open the project folder and run with Live Server
```

```bash
# Python simple server
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

You can deploy this project easily on:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

## Customization Notes

- Update page text inside each HTML file
- Replace images in `assets/img/`
- Adjust theme colors in `assets/js/tailwind-config.js`
- Adjust advanced visual styling in `assets/css/styles.css`
- Update contact details in header, footer, and contact page

## Ideal Use Cases

- Digital marketing agency website
- SEO agency landing site
- Social media marketing agency
- PPC service portfolio
- Premium business service website
- Creative agency showcase

## GitHub Description

Premium multi-page digital marketing agency website for Zenvyra, built with HTML, Tailwind CSS CDN, and vanilla JavaScript, featuring responsive layouts, SEO-friendly structure, smooth AOS animations, and premium UI interactions.

## Suggested GitHub Topics

```text
html tailwindcss javascript responsive-website agency-website digital-marketing seo ppc social-media-marketing web-development content-marketing aos landing-page premium-ui
```

## License

This project is available for personal or client customization.
