/* ============================================================
   PORTFOLIO.JS — CONTENT RENDERERS
   ------------------------------------------------------------
   Generates every dynamic section from window.DATA (assets/data).
   Each renderer looks for a container id and does nothing if the
   page doesn't contain it — so all pages share this one file.

   Containers used:
   #stats  #domains-marquee  #featured-projects  #enterprise-grid
   #behance-banner  #testimonials-grid  #projects-grid
   #experience-timeline  #about-story  #beliefs-grid
   #skills-grid  #tools-cloud  #process  #certificates-grid
   #case (project-details)  #channels (contact)
   ============================================================ */

"use strict";

/* ── Shared card builders ────────────────────────────────── */

/** Premium project card (used on home + projects grid). */
function projectCardHTML(p, revealDelay = 0, wide = false) {
  const tags = (p.tags || []).slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
  return `
  <article class="project-card filter-item${wide ? " card-wide" : ""}" data-categories="${esc((p.categories || []).join("|"))}" data-reveal data-reveal-delay="${revealDelay}">
    <a class="project-card__media" href="project-details.html?slug=${encodeURIComponent(p.slug)}" aria-label="${esc(p.title)} — view case study">
      <img src="${esc(hiRes(p.cover))}" onerror="this.onerror=null;this.src='${esc(p.cover)}'" alt="${esc(p.title)} — project cover" loading="lazy">
      <span class="project-card__category">${esc(p.category)}</span>
      ${p.featured ? '<span class="project-card__featured">★ Featured</span>' : ""}
    </a>
    <div class="project-card__body">
      <div style="display:flex;justify-content:space-between;gap:0.75rem;align-items:baseline">
        <h3 class="project-card__title">${esc(p.title)}</h3>
        <span class="project-card__year">${esc(p.year)}</span>
      </div>
      <p class="project-card__desc">${esc(p.description)}</p>
      <div class="project-card__tags">${tags}</div>
      <div class="project-card__footer">
        <a class="project-card__cta" href="project-details.html?slug=${encodeURIComponent(p.slug)}">View case study ${ICONS.arrow}</a>
        <div class="project-card__meta">
          ${p.readingTime ? `<span>${esc(p.readingTime)}</span>` : ""}
          ${p.behanceUrl ? `<a class="behance-chip" href="${esc(p.behanceUrl)}" target="_blank" rel="noopener noreferrer" data-outbound="behance" aria-label="View ${esc(p.title)} on Behance (opens in new tab)">${ICONS.behance}</a>` : ""}
        </div>
      </div>
    </div>
  </article>`;
}

/** Graphic design card — identical premium card language; the cover
    opens a fullscreen viewer instead of a case-study page. */
function graphicCardHTML(g, i, revealDelay = 0) {
  return `
  <article class="project-card filter-item" data-categories="Graphic Design|${esc(g.kind)}" data-reveal data-reveal-delay="${revealDelay}">
    <button type="button" class="project-card__media" data-lightbox="graphics" data-index="${i}" aria-label="${esc(g.title)} — open fullscreen preview">
      <img src="${esc(hiRes(g.cover))}" onerror="this.onerror=null;this.src='${esc(g.cover)}'" alt="${esc(g.title)} — ${esc(g.kind)}" loading="lazy">
      <span class="project-card__category">Graphic · ${esc(g.kind)}</span>
    </button>
    <div class="project-card__body">
      <div style="display:flex;justify-content:space-between;gap:0.75rem;align-items:baseline">
        <h3 class="project-card__title">${esc(g.title)}</h3>
      </div>
      <p class="project-card__desc">${esc(g.description)}</p>
      <div class="project-card__footer">
        <button type="button" class="project-card__cta project-card__cta--plain" data-lightbox="graphics" data-index="${i}">View project ${ICONS.expand}</button>
        <div class="project-card__meta">
          ${g.behanceUrl ? `<a class="behance-chip" href="${esc(g.behanceUrl)}" target="_blank" rel="noopener noreferrer" data-outbound="behance" aria-label="View ${esc(g.title)} on Behance (opens in new tab)">${ICONS.behance}</a>` : ""}
        </div>
      </div>
    </div>
  </article>`;
}

/* ── Home page sections ──────────────────────────────────── */

function renderStats() {
  const host = $("#stats");
  if (!host) return;
  host.innerHTML = DATA.site.stats.map((s) => `
    <div class="stats__item">
      <span class="stats__value" data-counter="${s.value}" data-suffix="${esc(s.suffix)}">0</span>
      <p class="stats__label">${esc(s.label)}</p>
    </div>`).join("");
}

function renderDomainsMarquee() {
  const host = $("#domains-marquee");
  if (!host) return;
  const spans = DATA.site.domains.map((d) => `<span>${esc(d)}</span>`).join("");
  host.innerHTML = `<div class="marquee__track">${spans}${spans}</div>`; // duplicated for a seamless loop
}

function renderFeatured() {
  const host = $("#featured-projects");
  if (!host) return;
  host.innerHTML = DATA.projects.filter((p) => p.featured)
    .map((p, i) => projectCardHTML(p, (i % 3) * 90)).join("");
}

/** Enterprise / NDA card (no cover image — premium typographic card). */
function enterpriseCardHTML(w, i, forGrid = false) {
  return `
    <div class="info-card enterprise-card${forGrid ? " filter-item" : ""}" ${forGrid ? `data-categories="${esc((w.categories || []).join("|"))}"` : ""} data-reveal data-reveal-delay="${(i % 3) * 90}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <span class="badge-accent">${esc(w.category)}</span>
        <span title="Under NDA" aria-label="Under NDA">🔒</span>
      </div>
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.description)}</p>
      <div class="tags">${w.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${forGrid ? '<p class="enterprise-card__note">Enterprise work — full walkthrough available on request.</p>' : ""}
    </div>`;
}

function renderEnterprise() {
  const host = $("#enterprise-grid");
  if (!host) return;
  host.innerHTML = DATA.enterprise.map((w, i) => enterpriseCardHTML(w, i)).join("");
}

function renderBehanceBanner() {
  const host = $("#behance-banner");
  if (!host) return;
  const s = DATA.site;
  const b = s.behanceStats;
  const stat = (label, value) => `<div><dt>${label}</dt><dd data-counter="${value}">0</dd></div>`;
  host.innerHTML = `
    <div class="behance-banner" data-reveal>
      <div class="behance-banner__inner">
        <img src="${esc(s.profileImage)}" alt="${esc(s.fullName)} on Behance" loading="lazy">
        <div>
          <p class="muted-light">behance.net/mohamednabil94 · member since ${esc(b.memberSince)}</p>
          <h2>This site is an extension of my Behance.</h2>
          <p class="muted-light" style="margin-top:0.4rem">${esc(b.fields.join(" · "))} — every project links straight back to the original.</p>
          <dl class="behance-banner__stats">
            ${stat("Projects", b.projects)}
            ${stat("Appreciations", b.appreciations)}
            ${stat("Followers", b.followers)}
            ${stat("Project views", b.projectViews)}
          </dl>
        </div>
        <a class="btn btn--behance" href="${esc(s.social.behance)}" target="_blank" rel="noopener noreferrer" data-outbound="behance">
          ${ICONS.behance} Visit my Behance
        </a>
      </div>
    </div>`;
}

function renderTestimonials() {
  const host = $("#testimonials-grid");
  if (!host) return;

  // Only render entries whose real post text has been filled in
  // (see assets/data/site.js). No text yet -> hide the whole section.
  const items = DATA.site.testimonials.filter((t) => t.quote && t.quote.trim());
  if (!items.length) {
    const section = host.closest("section");
    if (section) section.hidden = true;
    return;
  }

  host.innerHTML = items.map((t, i) => `
    <figure class="quote-card testimonial-card" data-reveal data-reveal-delay="${i * 90}">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="quote-mark" aria-hidden="true">“</div>
        <span class="testimonial-card__li" aria-hidden="true">${ICONS.linkedin}</span>
      </div>
      <blockquote>${esc(t.quote)}</blockquote>
      <figcaption>
        ${t.avatar ? `<img class="testimonial-card__avatar" src="${esc(t.avatar)}" alt="${esc(t.name)}" loading="lazy">` : ""}
        <span>
          <strong>${esc(t.name)}</strong>
          ${t.role || t.company ? `<span class="muted" style="display:block;font-size:var(--text-xs)">${esc([t.role, t.company].filter(Boolean).join(" — "))}</span>` : ""}
        </span>
      </figcaption>
      ${t.url ? `<a class="btn btn--outline testimonial-card__link" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer" aria-label="View original LinkedIn post (opens in new tab)">View original post ↗</a>` : ""}
    </figure>`).join("");
}

/* ── Projects page ───────────────────────────────────────── */

function renderProjectsGrid() {
  const host = $("#projects-grid");
  if (!host) return;

  // Priority order: featured SharePoint / Power Apps / web / mobile /
  // dashboard work leads, then remaining UI/UX projects, then the
  // Graphic Design collection (Design / Logo / Drawing).
  const sorted = [...DATA.projects].sort((a, b) => (b.featured === true) - (a.featured === true));

  host.innerHTML =
    DATA.enterprise.map((w, i) => enterpriseCardHTML(w, i, true)).join("") +
    sorted.map((p, i) => projectCardHTML(p, (i % 3) * 80)).join("") +
    DATA.graphics.map((g, i) => graphicCardHTML(g, i, (i % 3) * 60)).join("");

  // Two-level filter bar (filters.js): top categories + a Graphic
  // Design sub-level (Design / Logo / Drawing) that slides in.
  if (window.initProjectFilters) {
    initProjectFilters({
      topBar: $("#projects-filters"),
      subBar: $("#graphics-subfilters"),
      grid: host,
      topCats: ["All", "Web", "Mobile", "Dashboard", "Educational", "SharePoint", "Power Apps", "Graphic Design"],
      subCats: ["Printing", "Drawing", "Social Media & Branding"]
    });
  }

  // Fullscreen viewer for the graphic design cards
  if (window.registerLightbox) {
    registerLightbox("graphics", DATA.graphics.map((g) => ({
      src: hiRes(g.cover), srcFallback: g.cover, title: g.title, subtitle: `${g.kind} — ${g.description}`, href: g.behanceUrl, gallery: g.gallery
    })));
  }
}

/* ── Experience + About ──────────────────────────────────── */

function renderExperience() {
  const host = $("#experience-timeline");
  if (!host) return;
  host.innerHTML = DATA.experience.map((job, i) => `
    <li class="timeline__item" data-reveal data-reveal-delay="${i * 60}">
      <span class="timeline__dot${job.current ? " is-current" : ""}" aria-hidden="true"></span>
      <div class="timeline__head">
        <h3 class="timeline__role">${esc(job.role)}</h3>
        <span class="timeline__period${job.current ? " is-current" : ""}">${esc(job.period)}</span>
      </div>
      <p class="timeline__company">💼 ${esc(job.company)} · ${esc(job.location)}</p>
      <ul class="timeline__highlights">${job.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      <div class="timeline__tech">${job.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${job.products?.length ? `<p class="timeline__products"><strong>PRODUCTS:</strong> ${esc(job.products.join(" · "))}</p>` : ""}
    </li>`).join("");
}

function renderAbout() {
  const story = $("#about-story");
  const beliefs = $("#beliefs-grid");
  if (story) {
    story.innerHTML = DATA.about.paragraphs
      .map((p, i) => `<p class="muted" data-reveal data-reveal-delay="${i * 80}" style="margin-bottom:1.2rem">${esc(p)}</p>`).join("");
    const title = $("#about-title");
    if (title) title.textContent = DATA.about.title;
  }
  if (beliefs) {
    beliefs.innerHTML = DATA.about.beliefs.map((b, i) => `
      <div class="info-card" data-reveal data-reveal-delay="${i * 80}">
        <div style="color:var(--accent);margin-bottom:0.8rem" aria-hidden="true">✦</div>
        <h3>${esc(b.title)}</h3>
        <p>${esc(b.text)}</p>
      </div>`).join("");
  }
}

/* ── Skills + tools + process ────────────────────────────── */

function renderSkills() {
  const host = $("#skills-grid");
  if (!host) return;
  host.innerHTML = DATA.skills.map((group, gi) => `
    <div class="skill-group" data-reveal data-reveal-delay="${gi * 70}">
      <h3>${esc(group.group)}</h3>
      ${group.skills.map((s) => `
        <div class="skill">
          <div class="skill__head"><span>${esc(s.name)}</span><small>${s.level}%</small></div>
          <div class="skill__track" role="img" aria-label="${esc(s.name)}: ${s.level} percent">
            <div class="skill__bar" data-skill-bar="${s.level}"></div>
          </div>
        </div>`).join("")}
    </div>`).join("");

  const cloud = $("#tools-cloud");
  if (cloud) cloud.innerHTML = DATA.tools.map((t) => `<span>${esc(t)}</span>`).join("");
}

function renderProcess() {
  const host = $("#process");
  if (!host) return;
  const steps = DATA.site.process;
  host.innerHTML = `
    <div class="process-steps" role="tablist" aria-label="Design process steps">
      ${steps.map((p, i) => `
        <button class="filter-btn${i === 0 ? " is-active" : ""}" role="tab" aria-selected="${i === 0}" data-step="${i}">
          <small style="opacity:0.65;margin-right:0.3rem">${p.step}</small>${esc(p.title)}
        </button>`).join("")}
    </div>
    <div class="process-detail" id="process-detail" aria-live="polite"></div>
    <div class="process-progress"><div class="process-progress__bar" id="process-bar"></div></div>`;

  const detail = $("#process-detail");
  const bar = $("#process-bar");
  const buttons = $$("[data-step]", host);

  const show = (i) => {
    const p = steps[i];
    detail.innerHTML = `
      <div class="process-detail__num" aria-hidden="true">${p.step}</div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>`;
    bar.style.width = `${((i + 1) / steps.length) * 100}%`;
    buttons.forEach((b, bi) => {
      b.classList.toggle("is-active", bi === i);
      b.setAttribute("aria-selected", String(bi === i));
    });
  };
  buttons.forEach((b) => b.addEventListener("click", () => show(parseInt(b.dataset.step, 10))));
  show(0);
}

/* ── Certificates page ───────────────────────────────────── */

function renderCertificates() {
  const host = $("#certificates-grid");
  if (!host) return;
  host.innerHTML = DATA.certificates.map((c, i) => `
    <div class="cert-card" data-reveal data-reveal-delay="${(i % 3) * 80}">
      <button class="cert-card__media" data-lightbox="certs" data-index="${i}" aria-label="${esc(c.title)} — open fullscreen preview" style="width:100%">
        <img src="${esc(c.image)}" alt="${esc(c.title)} — certificate from ${esc(c.institution)}" loading="lazy">
      </button>
      <div class="cert-card__body">
        <h3>${esc(c.title)}</h3>
        <p class="cert-card__org">${esc(c.institution)}</p>
        <p class="cert-card__date">${esc(c.date)}</p>
        ${c.note ? `<span class="badge-accent" style="margin-top:0.7rem">${esc(c.note)}</span>` : ""}
        <div class="cert-card__actions">
          <a class="btn btn--outline" style="padding:0.5rem 1rem;font-size:var(--text-xs)" href="${esc(c.file || c.image)}" download aria-label="Download ${esc(c.title)}">${ICONS.download} Download</a>
          ${c.credentialUrl ? `<a class="btn btn--outline" style="padding:0.5rem 1rem;font-size:var(--text-xs)" href="${esc(c.credentialUrl)}" target="_blank" rel="noopener noreferrer">Credential ↗</a>` : ""}
        </div>
      </div>
    </div>`).join("");

  // Register the fullscreen viewer set (gallery.js)
  if (window.registerLightbox) {
    registerLightbox("certs", DATA.certificates.map((c) => ({
      src: c.image, title: c.title, subtitle: `${c.institution} · ${c.date}`, download: c.image
    })));
  }
}


/* ── Project details page (?slug=…) ──────────────────────── */

function renderCaseStudy() {
  const host = $("#case");
  if (!host) return;

  const slug = new URLSearchParams(location.search).get("slug");
  const idx = DATA.projects.findIndex((p) => p.slug === slug);
  const p = idx >= 0 ? DATA.projects[idx] : DATA.projects[0]; // fallback: first project
  const next = DATA.projects[(DATA.projects.indexOf(p) + 1) % DATA.projects.length];
  const cs = p.caseStudy;

  document.title = `${p.title} — ${DATA.site.name}`;

  const section = (title, body) => body ? `
    <section class="case-section" aria-label="${esc(title)}">
      <h2>${esc(title)}</h2>${body}
    </section>` : "";

  const related = DATA.projects
    .filter((r) => r.slug !== p.slug && r.categories.some((c) => p.categories.includes(c)))
    .slice(0, 3);

  host.innerHTML = `
    <div class="container container--narrow case-hero">
      <a href="projects.html" class="muted" style="font-size:var(--text-sm)">← All projects</a>
      <p class="badge-accent" style="display:inline-block;margin-top:1.4rem">${esc(p.category)}</p>
      <h1 class="display" style="font-size:clamp(2.2rem,5.5vw,3.8rem);margin-top:0.8rem" data-words>${esc(p.title)}</h1>
      <p class="muted" style="font-size:var(--text-lg);margin-top:1.2rem;max-width:38rem">${esc(p.description)}</p>

      <!-- Key facts -->
      <dl class="case-meta">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
        <div><dt>Tools</dt><dd>${esc((p.tools || []).join(" · "))}</dd></div>
        ${p.stats ? `<div><dt>On Behance</dt><dd>♥ ${p.stats.appreciations} · 👁 ${p.stats.views}</dd></div>` : ""}
      </dl>
    </div>

    <div class="container">
      <figure class="case-cover" data-reveal="zoom">
        <img src="${esc(p.cover)}" alt="${esc(p.title)} — hero cover" data-lightbox="case" data-index="0" style="cursor:zoom-in">
      </figure>
    </div>

    <div class="container container--narrow case-layout">
      <div>
        ${cs ? `
          ${section("The Problem", `<p>${esc(cs.problem)}</p>`)}
          ${section("Business Goal", `<p>${esc(cs.goal)}</p>`)}
          ${section("Research", `<p>${esc(cs.research)}</p>`)}
          ${section("Process", `<ol class="case-steps">${cs.process.map((s, i) => `<li><strong>${String(i + 1).padStart(2, "0")}</strong>${esc(s)}</li>`).join("")}</ol>`)}
          ${section("The Solution", `<p>${esc(cs.solution)}</p>`)}
          ${section("Results", `<ul class="case-results">${cs.results.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`)}
          ${cs.lessons ? `<blockquote class="case-lessons"><strong>Lessons learned</strong>${esc(cs.lessons)}</blockquote>` : ""}
        ` : `
          <p class="info-card" style="display:block">The full visual story of this project — every screen, exploration and final
          deliverable — lives on Behance. Use the button to view the complete project in its original form.</p>
        `}
        ${p.gallery?.length ? section("Gallery", `<div class="case-gallery">${p.gallery.map((g, gi) =>
          `<img src="${esc(g)}" alt="${esc(p.title)} — screen ${gi + 1}" loading="lazy" data-lightbox="case" data-index="${gi + 1}">`).join("")}</div>`) : ""}
      </div>

      <!-- Sticky sidebar -->
      <aside class="case-aside" aria-label="Project details">
        ${p.deliverables?.length ? `<div class="panel"><h3>Deliverables</h3><ul>${p.deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>` : ""}
        <div class="panel"><h3>Tags</h3><div style="display:flex;flex-wrap:wrap;gap:0.4rem">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>
        ${p.behanceUrl ? `<a class="btn btn--behance" style="justify-content:center" href="${esc(p.behanceUrl)}" target="_blank" rel="noopener noreferrer" data-outbound="behance">${ICONS.behance} View on Behance ↗</a>` : ""}
      </aside>
    </div>

    ${related.length ? `
    <div class="container" style="margin-top:4.5rem">
      <h2 class="display" style="font-size:var(--text-2xl);margin-bottom:1.6rem">Related projects</h2>
      <div class="grid grid--3">${related.map((r, i) => projectCardHTML(r, i * 80)).join("")}</div>
    </div>` : ""}

    <a class="next-project" href="project-details.html?slug=${encodeURIComponent(next.slug)}" style="margin-top:4.5rem">
      <small>Next project</small>
      <p class="display">${esc(next.title)} →</p>
    </a>`;

  // Fullscreen viewer for cover + gallery
  if (window.registerLightbox) {
    registerLightbox("case", [
      { src: p.cover, title: p.title, subtitle: "Cover", href: p.behanceUrl },
      ...(p.gallery || []).map((g, gi) => ({ src: g, title: p.title, subtitle: `Screen ${gi + 1}`, href: p.behanceUrl }))
    ]);
  }
}

/* ── Contact page ────────────────────────────────────────── */

function renderContact() {
  const host = $("#channels");
  if (!host) return;
  const s = DATA.site;
  const channels = [
    { label: "Email",    value: s.email,                       href: `mailto:${s.email}`, icon: "✉️", blurb: "Best for project inquiries and roles — I reply within 24h." },
    { label: "LinkedIn", value: "linkedin.com/in/mnabil14",    href: s.social.linkedin,   icon: "in", blurb: "For recruiters: full history, endorsements and references." },
    { label: "Behance",  value: "behance.net/mohamednabil94",  href: s.social.behance,    icon: "Bē", blurb: "The complete visual portfolio, in its natural habitat." },
    { label: "WhatsApp", value: s.phone,                       href: s.whatsapp,          icon: "💬", blurb: "Fastest channel for quick questions and freelance scoping." }
  ];
  host.innerHTML = channels.map((c, i) => `
    <a class="info-card channel-card" href="${esc(c.href)}" ${c.href.startsWith("mailto") ? "" : 'target="_blank" rel="noopener noreferrer"'} data-reveal data-reveal-delay="${i * 70}">
      <span class="channel-icon" aria-hidden="true">${c.icon}</span>
      <span>
        <strong>${esc(c.label)} <span aria-hidden="true">↗</span></strong>
        <span class="channel-value">${esc(c.value)}</span>
        <p>${esc(c.blurb)}</p>
      </span>
    </a>`).join("");

  // Copy-email button
  const copyBtn = $("#copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(s.email);
        copyBtn.textContent = "✓ Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy email"), 1600);
      } catch { copyBtn.textContent = s.email; }
    });
  }
}

/* ── Boot: run every renderer (each exits if not on its page) */

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderDomainsMarquee();
  renderFeatured();
  renderEnterprise();
  renderBehanceBanner();
  renderTestimonials();
  renderProjectsGrid();
  renderExperience();
  renderAbout();
  renderSkills();
  renderProcess();
  renderCertificates();
  renderCaseStudy();
  renderContact();

  // New nodes were injected — (re)arm scroll animations & counters.
  if (window.initWordReveal) initWordReveal();   // headline reveal on injected titles
  if (window.refreshReveals) refreshReveals();
  if (window.refreshCounters) refreshCounters();
  if (window.refreshSkillBars) refreshSkillBars();
});
