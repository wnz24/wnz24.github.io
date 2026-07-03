# Alex Rivera — Data Analyst Portfolio

A simple, single-page portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Open `index.html` in a browser, or deploy the folder as-is to GitHub Pages, Netlify, or Vercel.

## Folder structure

```
data-analyst-portfolio/
├── index.html          → all page content & structure
├── css/
│   └── style.css       → design tokens + all styling
├── js/
│   └── script.js       → nav, scroll-spy, animations, form validation
├── assets/
│   └── resume-placeholder.pdf   → replace with your real résumé
└── README.md
```

## What to customize

1. **Your name & title** — in `index.html`, update the `<title>`, the hero section (`#hero`), and the footer.
2. **About section** (`#about`) — replace the bio text and the quick-facts list.
3. **Skills** (`#skills`) — edit the skill names and `data-level` percentages on each `.skill-bar` div; the bar fills automatically based on that number.
4. **Projects** (`#projects`) — duplicate a `.project-card` block to add a project. Update the title, description, stack tags, result line, and links.
5. **Certificates** (`#certificates`) — duplicate a `.cert-card` block per certificate.
6. **Contact** (`#contact`) — update the email, LinkedIn, and GitHub links. The form currently shows a success message but does not send anywhere — see below.
7. **Résumé download** — replace `assets/resume-placeholder.pdf` with your actual résumé, keeping the same filename (or update the `href` in `index.html` if you rename it).
8. **Colors & fonts** — all design tokens live at the top of `css/style.css` under `:root`. Change `--accent`, `--highlight`, `--bg`, etc. to re-theme the entire site from one place.

## Connecting the contact form

The form validates input client-side but doesn't send email on its own (this is a static site with no backend). To make it functional, pick one:

- **Formspree** (easiest): create a free form at formspree.io, then set the form's `action` to your Formspree endpoint and add `method="POST"`.
- **Netlify Forms**: if hosting on Netlify, add `data-netlify="true"` to the `<form>` tag and Netlify handles the rest.
- **Your own API**: replace the `setTimeout` block in `js/script.js` (inside the `submit` handler) with a `fetch()` call to your endpoint.

## Browser support

Built with standard HTML5, CSS custom properties, and vanilla JS (`IntersectionObserver`). Works in all modern browsers. No dependencies beyond Google Fonts (loaded via CDN in `index.html`).
