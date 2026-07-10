# Mohamed Nabil — UI/UX Designer Portfolio

Premium personal portfolio for **Mohamed Nabil Ahmed**, UI/UX Designer specializing in
enterprise Web, Mobile, SharePoint and Microsoft Power Apps experiences.

**Pure static site — no frameworks, no build, no npm.** Open `index.html` and it works.

🔗 Behance: <https://www.behance.net/mohamednabil94> · LinkedIn: <https://www.linkedin.com/in/mnabil14/>

---

## ✨ Overview

A recruiter-focused, Behance-integrated portfolio: every project card links back to its
original Behance project, enterprise (NDA) work is summarized in dedicated cards, and all
content is generated at runtime from small JSON-style data files — updating the site never
requires touching HTML or JavaScript logic.

## 🚀 Features

- Dark / light mode (saved preference) · custom cursor · page loader · scroll progress bar
- Animated hero (word-by-word headline, rotating specialties, availability badge)
- Two-level animated project filters (Web / Mobile / Dashboard / Educational / SharePoint / Power Apps / Graphic Design → Printing / Drawing / Social Media & Branding)
- Case-study pages rendered from data (`project-details.html?slug=…`)
- Fullscreen lightbox with keyboard navigation for graphics & certificates
- Professional Recognition & Testimonials section linked to real LinkedIn posts
- High-res Behance covers with automatic fallback · lazy-loaded images
- Accessibility: skip link, ARIA labels, visible focus states, `prefers-reduced-motion`
- SEO: per-page meta, Open Graph + Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`, favicon

## 🛠 Technologies

HTML5 · CSS3 (custom properties, grid, glassmorphism) · Vanilla JavaScript (ES6+) ·
Google Fonts (Inter + Space Grotesk, with system fallbacks). Nothing else.

## 📁 Folder Structure

```
portfolio/
├── index.html               Home
├── about.html               Story, beliefs, skills
├── experience.html          Timeline
├── projects.html            UI/UX + Graphic Design (two-level filters)
├── project-details.html     One template renders every case study (?slug=…)
├── certificates.html        Certificates + fullscreen + download
├── contact.html             Channels, CV, Calendly
├── favicon.ico  ·  robots.txt  ·  sitemap.xml  ·  LICENSE  ·  README.md
└── assets/
    ├── css/           variables · style · responsive · animations
    ├── js/            main · animations · portfolio · filters · gallery
    ├── data/          site · projects · graphics · certificates · experience · skills  ← EDIT THESE
    ├── images/        profile/ · projects/ · graphics/ · certificates/ · icons/
    ├── certificates/  original certificate PDFs (downloads)
    ├── files/         Mohamed_Nabil_UI_UX_Designer_CV.pdf
    ├── fonts/         (self-host fonts here if desired)
    └── videos/
```

## ✏️ How to Edit Content

All content lives in `assets/data/*.js` — each file is plain JSON wrapped in one line
(`window.DATA.x = {...}`) so the site also works when opened directly from `file://`
(browsers block `fetch()` of `.json` there). Edit values, save, refresh.

| File | Controls |
|---|---|
| `site.js` | Name, title, availability, contacts, socials, hero text, stats, process, testimonials, Calendly, CV path |
| `projects.js` | UI/UX projects + case studies + enterprise (NDA) cards |
| `graphics.js` | Graphic design (Printing / Drawing / Social Media & Branding) |
| `certificates.js` | Certificates grid |
| `experience.js` | Work timeline + About page text |
| `skills.js` | Skill bars + tools cloud |

### Add a New Project
Copy any `{ ... }` block in `assets/data/projects.js`, change the values (unique `slug`,
`cover`, `categories`, `behanceUrl`, optional `caseStudy`). It automatically appears on the
home page (if `"featured": true`), in the filterable grid, and gets its own details page.

### Update Certificates
Drop the scan into `assets/images/certificates/` (and the original PDF into
`assets/certificates/`), then add one block to `certificates.js` with `title`,
`institution`, `date`, `image`, optional `file` (PDF for the Download button) and
`credentialUrl`.

### Update the CV
Replace `assets/files/Mohamed_Nabil_UI_UX_Designer_CV.pdf` (same name = zero edits), or use
a new name and update `"cvUrl"` in `site.js` — every Download CV button reads that one value.

### Update Graphic Design Projects
Add/edit blocks in `graphics.js`. `kind` places the item under Printing, Drawing, or
Social Media & Branding. `"behanceUrl": ""` hides the Behance button until published.
Drawing items display in a larger art-gallery layout automatically.

### Change Colors / Fonts / Navigation
Design tokens: `assets/css/variables.css`. Menus: the `NAV_LINKS` array at the top of
`assets/js/main.js` (header, mobile menu and footer update together).

## 🌍 Deployment

No build step anywhere — upload the folder as-is.

- **GitHub Pages**: push the repo → Settings → Pages → Deploy from branch → `main` / root.
- **Netlify**: drag-and-drop the folder at app.netlify.com, or connect the repo (no build command, publish directory = root).
- **Vercel**: import the repo, framework preset **Other**, no build command, output = root.
- **Shared hosting**: upload everything to `public_html/` via FTP.

After deploying, replace `https://mohamednabil.design` with your live URL in `sitemap.xml`,
`robots.txt`, the `<head>` of `index.html` (canonical / og:url / og:image) and `site.js`.

## 📄 License

Personal content © Mohamed Nabil Ahmed — see [LICENSE](LICENSE).
