/* ============================================================
   PROJECTS.JS — UI/UX PROJECTS (edit like JSON)
   ------------------------------------------------------------
   HOW TO ADD A PROJECT: copy any object { ... } in the array,
   paste it, change the values, save. It appears everywhere
   automatically (home, projects grid, its own details page).
   - "slug" must be unique (used in project-details.html?slug=…)
   - "cover": image URL or local path (assets/images/projects/…)
   - "gallery": extra screenshots for the details page
   - "featured": true → shows on the home page
   - "categories": used by the filter bar on projects.html
   - "caseStudy" is optional — without it, the details page
     shows the overview + a Behance button only.
   HOW TO DELETE: remove the whole { ... } object (and the comma).
   ============================================================ */

window.DATA = window.DATA || {};

window.DATA.projects = [
  /* Parked (not in the current CV's Selected Projects): Popcorn Party,
     Portfolio v1 — both remain on Behance; re-add here anytime. */
  {
    "slug": "gowa-elmanhag",
    "title": "Gowa Elmanhag — جوا المنهج",
    "category": "Education · Mobile",
    "categories": ["Mobile", "Educational", "Web"],
    "featured": true,
    "year": "2025",
    "role": "Lead UI/UX Designer — end-to-end",
    "readingTime": "6 min read",
    "tools": ["Figma", "FigJam", "Miro"],
    "tags": ["EdTech", "Mobile App", "Arabic UX", "RTL", "Design System"],
    "description": "An Arabic-first e-learning platform that brings the full school curriculum into one place — designed end-to-end at CoreVine, from discovery workshops to a validated, developer-ready design.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/bfcbec246101703.Y3JvcCwzMTcwLDI0ODAsMTcyLDA.jpg",
    "gallery": [],
    "behanceUrl": "https://www.behance.net/gallery/246101703/_",
    "stats": { "appreciations": 11, "views": 1414 },
    "deliverables": ["UX research", "Personas & journeys", "Information architecture", "Wireframes", "UI design & design system", "Interactive prototype"],
    "caseStudy": {
      "problem": "Students juggling school, private tutoring and printed booklets had no single trusted place to study the official curriculum. Existing platforms were cluttered, poorly localized for Arabic (RTL), and designed around content dumps rather than learning journeys.",
      "goal": "Create an Arabic-first learning product where a student can find their exact grade, subject and lesson in under three taps — and where parents can trust the content matches the official curriculum.",
      "research": "Ran stakeholder workshops and student/parent interviews, mapped competitor platforms across the Egyptian EdTech market, and synthesized findings into personas and a journey map that exposed the biggest drop-off: navigation between grade → subject → lesson.",
      "process": [
        "Discovery workshops with founders to align business goals with learner needs",
        "Competitive analysis of regional EdTech products",
        "Personas and user journey mapping for students and parents",
        "Information architecture built around the official curriculum tree",
        "Low-fi wireframes tested with target users, then high-fidelity RTL UI",
        "Component library and handoff documentation for the development team"
      ],
      "solution": "A curriculum-mirrored IA (grade → term → subject → unit → lesson), a distraction-free lesson player, and a warm, confident visual language that feels native in Arabic. Every screen was built from a reusable RTL-ready component library.",
      "results": [
        "Grade-to-lesson navigation reduced to 3 taps",
        "Validated prototype with target students before a line of code was written",
        "RTL-first component library reused across the product",
        "1,400+ views on Behance — the most viewed project on my profile"
      ],
      "lessons": "Designing RTL-first (not translating an LTR design) changed every layout decision — from number alignment to progress indicators. Localization is architecture, not a coat of paint."
    }
  },
  {
    "slug": "foxus",
    "title": "Foxus",
    "category": "Mobile · Web App",
    "categories": ["Web", "Dashboard", "Mobile"],
    "featured": true,
    "year": "2025",
    "role": "Lead UI/UX Designer — end-to-end",
    "readingTime": "5 min read",
    "tools": ["Figma", "FigJam"],
    "tags": ["SaaS", "Web App", "Product Design", "Design System"],
    "description": "A flagship SaaS web application designed end-to-end at CoreVine — translating ambiguous business requirements into validated flows, a scalable UI kit and a developer-ready design.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/06c769244415039.Y3JvcCw1NzYwLDQ1MDUsMCwyMDY3.png",
    "gallery": [],
    "behanceUrl": "https://www.behance.net/gallery/244415039/Foxus",
    "stats": { "appreciations": 0, "views": 5 },
    "deliverables": ["Product discovery", "User flows", "Wireframes", "High-fidelity UI", "Prototype", "Handoff"],
    "caseStudy": {
      "problem": "The product started as a set of feature ideas without a defined user journey. Stakeholders each held a different mental model of what the core workflow should be — a recipe for a fragmented interface.",
      "goal": "Align the team on one core user journey, then design a focused product around it with a UI system that could absorb future features without redesigns.",
      "research": "Facilitated requirement-mapping sessions with stakeholders, converted feature wishlists into jobs-to-be-done, and pressure-tested early flows in review cycles with the founding team.",
      "process": [
        "Discovery & requirements workshops",
        "Jobs-to-be-done definition and user flow mapping",
        "Wireframes for the core loop, validated with stakeholders",
        "High-fidelity UI with a token-based component kit",
        "Interactive prototype for investor and stakeholder demos"
      ],
      "solution": "A clean, task-first workspace with a persistent primary action, progressive disclosure for advanced options, and a component kit (buttons, tables, forms, empty states) documented for the dev team.",
      "results": [
        "Single agreed user journey replacing three competing stakeholder visions",
        "Component kit adopted as the product's design source of truth",
        "Prototype used directly in stakeholder demos"
      ],
      "lessons": "In early-stage products, the designer's first deliverable isn't a screen — it's alignment. The wireframe reviews saved weeks of high-fidelity rework."
    }
  },
  {
    "slug": "power-plus",
    "title": "Power Plus",
    "category": "Health & Fitness · Mobile",
    "categories": ["Mobile"],
    "featured": true,
    "year": "2024",
    "role": "UI/UX Designer — end-to-end",
    "readingTime": "4 min read",
    "tools": ["Figma", "Photoshop", "Illustrator", "Miro"],
    "tags": ["Fitness", "Mobile App", "Personalization", "Figma"],
    "description": "A personalized workout app that helps users create and follow customized training plans tailored to their fitness level — designed with a bold, energetic visual identity.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/d439d6204019745.Y3JvcCwxODAwLDE0MDcsMCw0.png",
    "gallery": ["https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3fd181204019745.66a16785f3b39.png"],
    "behanceUrl": "https://www.behance.net/gallery/204019745/Power-Pluse",
    "stats": { "appreciations": 7, "views": 103 },
    "deliverables": ["UX research", "User flows", "Wireframes", "UI design", "Prototype"],
    "caseStudy": {
      "problem": "Generic workout apps overwhelm beginners with one-size-fits-all plans, causing early abandonment. Users needed plans that adapt to their actual fitness level and goals.",
      "goal": "Design an onboarding and plan-builder experience that makes the first workout feel achievable within minutes of installing.",
      "research": "Analyzed leading fitness apps, mapped onboarding drop-off patterns, and defined three fitness personas (beginner, returner, athlete) with distinct motivation triggers.",
      "process": [
        "Competitive analysis of fitness app onboarding",
        "Personas and motivation mapping",
        "Flow design: goal → level → schedule → plan",
        "High-energy UI language with strong progress feedback",
        "Interactive prototype and usability review"
      ],
      "solution": "A four-step personalization flow that outputs a ready plan, workout cards with clear per-exercise guidance, and progress visualization designed to reward consistency over intensity.",
      "results": [
        "Onboarding-to-first-workout designed in under 2 minutes",
        "Persona-based plans replacing one-size-fits-all templates",
        "7 appreciations and 100+ views on Behance"
      ],
      "lessons": "Motivation is a design material: progress feedback and celebratory micro-moments matter as much as the workout content itself."
    }
  },
  {
    "slug": "elearning-platform",
    "title": "E-learning Platform",
    "category": "Education · Web",
    "categories": ["Web", "Educational"],
    "featured": true,
    "year": "2024",
    "role": "UI/UX Designer",
    "readingTime": "4 min read",
    "tools": ["Figma", "Photoshop"],
    "tags": ["EdTech", "Web Design", "Virtual Classroom", "Figma"],
    "description": "A virtual-classroom website where learners and instructors meet — course discovery, lesson delivery and progress tracking in one calm, focused interface.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/0b2b28203720999.Y3JvcCw5ODUsNzcxLDIwMCww.png",
    "gallery": ["https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e74b59203720999.669c29e9eb861.png"],
    "behanceUrl": "https://www.behance.net/gallery/203720999/elearning-platform",
    "stats": { "appreciations": 7, "views": 146 },
    "deliverables": ["User flows", "Wireframes", "UI design", "Prototype"],
    "caseStudy": {
      "problem": "Online course platforms often bury the actual learning behind marketing pages, cluttered dashboards and noisy navigation — students lose momentum before reaching the content.",
      "goal": "Design a platform where the distance between 'I want to learn X' and 'I'm in the lesson' is as short as possible.",
      "research": "Reviewed learner journeys across major course platforms and identified the highest-friction moments: course evaluation, enrollment and lesson resumption.",
      "process": [
        "Journey mapping for learner and instructor roles",
        "IA design separating discovery from the learning workspace",
        "Wireframes for course, lesson and progress views",
        "High-fidelity UI with a calm, content-first aesthetic"
      ],
      "solution": "A two-mode experience: a rich discovery layer for evaluating courses, and a minimal learning workspace with linear lesson flow, visible progress and one-click resume.",
      "results": [
        "'Resume learning' promoted to the primary dashboard action",
        "Course evaluation condensed to a single scannable page",
        "One of my most appreciated Behance projects (146 views, 7 appreciations)"
      ]
    }
  },
  {
    "slug": "medi-app",
    "title": "Medi App",
    "category": "Healthcare · Mobile",
    "categories": ["Mobile"],
    "featured": true,
    "year": "2024",
    "role": "UI/UX Designer — end-to-end",
    "readingTime": "4 min read",
    "tools": ["Figma"],
    "tags": ["Healthcare", "Mobile App", "Booking", "Accessibility"],
    "description": "A healthcare companion app for booking doctors, managing prescriptions and staying on top of appointments — designed for stressed users who need answers fast.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/15236e188333173.Y3JvcCwyNjA4LDIwNDAsODMsMA.jpg",
    "gallery": [],
    "behanceUrl": "https://www.behance.net/gallery/188333173/medi-app",
    "stats": { "appreciations": 10, "views": 114 },
    "deliverables": ["UX research", "Personas", "User flows", "Wireframes", "UI design", "Prototype"],
    "caseStudy": {
      "problem": "Healthcare apps are used at the worst possible moment — when people are anxious or unwell. Dense forms and unclear next steps turn a stressful situation into an abandoned task.",
      "goal": "Make finding and booking the right doctor feel effortless, with zero ambiguity about what happens next.",
      "research": "Interviewed users about recent healthcare experiences, mapped the emotional journey from symptom to appointment, and identified trust signals (doctor credentials, reviews, availability) as the key decision drivers.",
      "process": [
        "Emotional journey mapping",
        "Persona definition around urgency levels",
        "Booking flow design with progressive disclosure",
        "High-contrast, legible UI tuned for stressed contexts"
      ],
      "solution": "A search-first home screen, doctor profiles that surface trust signals above the fold, a three-step booking flow with explicit confirmations, and reminders designed around real appointment behavior.",
      "results": [
        "Booking flow reduced to 3 explicit steps with a visible confirmation",
        "Trust-signal-first doctor cards validated with test users",
        "10 appreciations and 114 views on Behance"
      ],
      "lessons": "Designing for stress means over-communicating state: every action needs a loud, unambiguous 'it worked'."
    }
  },
  {
    "slug": "fashion-box",
    "title": "Fashion Box",
    "category": "E-commerce · Mobile",
    "categories": ["Mobile"],
    "featured": true,
    "year": "2024",
    "role": "UI/UX Designer",
    "readingTime": "3 min read",
    "tools": ["Figma", "Photoshop", "Milanote", "Notion"],
    "tags": ["E-commerce", "Fashion", "Mobile App", "Figma"],
    "description": "A sleek fashion e-commerce experience pairing editorial visuals with frictionless shopping — designed to make browsing feel like flipping through a lookbook.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/9df650190371785.Y3JvcCwxMjI3LDk2MCw1MTAsMA.png",
    "gallery": ["https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0b37ff190371785.65b9fbbd36ece.png"],
    "behanceUrl": "https://www.behance.net/gallery/190371785/fashion-box",
    "stats": { "appreciations": 12, "views": 84 },
    "deliverables": ["Moodboards", "User flows", "UI design", "Prototype"],
    "caseStudy": {
      "problem": "Fashion shoppers browse for inspiration but buy on impulse — most store UIs optimize for one or the other, losing users at the transition between inspiration and checkout.",
      "goal": "Blend editorial, imagery-led browsing with a checkout that never breaks the mood.",
      "research": "Built visual research boards in Milanote, benchmarked premium fashion apps, and mapped the inspiration-to-purchase journey.",
      "process": [
        "Visual direction and moodboarding",
        "Browse → product → checkout flow design",
        "Image-forward UI with large photography and restrained chrome"
      ],
      "solution": "A lookbook-style feed, product pages where photography leads and details follow, and a condensed checkout that keeps the visual language consistent to the last tap.",
      "results": [
        "12 appreciations on Behance — strong response from the design community",
        "A reusable image-led card system across feed, product and cart"
      ]
    }
  },
  {
    "slug": "alkan",
    "title": "Alkan Insurance Platform",
    "category": "Insurance · Web App",
    "categories": ["Web"],
    "featured": false,
    "year": "2024",
    "role": "UI/UX Designer (YILDIZ)",
    "readingTime": "4 min read",
    "tools": ["Figma", "Miro"],
    "tags": ["Insurance", "Web App", "Enterprise", "UX Research"],
    "description": "An insurance platform designed at YILDIZ — full lifecycle from client onboarding and user research through personas, flows, wireframes and high-fidelity UI.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/e68787205081411.Y3JvcCwxODAwLDE0MDcsMCwxNw.png",
    "gallery": [],
    "behanceUrl": "https://www.behance.net/gallery/205081411/Alkan",
    "stats": { "appreciations": 2, "views": 74 },
    "deliverables": ["User research", "Personas", "Sitemaps & flowcharts", "Wireframes", "UI design", "Prototype"],
    "caseStudy": {
      "problem": "Insurance products are trust-sensitive and jargon-heavy; users abandon flows they don't understand, and agents work around tools that don't match their process.",
      "goal": "Design a platform that explains itself — clear plans, transparent steps, and flows that mirror how clients actually decide.",
      "research": "Conducted interviews, surveys and usability testing; produced personas, user flowcharts and sitemaps to ground the architecture in real decision journeys.",
      "process": [
        "Client onboarding and requirement definition",
        "Interviews, surveys and usability testing",
        "Personas, flowcharts and sitemap",
        "Wireframes → high-fidelity mockups → interactive prototype"
      ],
      "solution": "A plain-language plan comparison, a stepper-based application flow with progress persistence, and a visual system tuned for credibility and calm.",
      "results": [
        "Research-validated IA replacing an assumption-driven structure",
        "Full design delivered from research to interactive prototype"
      ]
    }
  },
  {
    "slug": "register-login",
    "title": "Register & Login — UX Case Study",
    "category": "Web · Auth UX",
    "categories": ["Web"],
    "featured": false,
    "year": "2024",
    "role": "UI/UX Designer",
    "readingTime": "3 min read",
    "tools": ["Figma", "Photoshop"],
    "tags": ["Case Study", "Auth UX", "Mobile", "Micro-interactions"],
    "description": "A focused case study on the most-used flow in any product: authentication. 22 appreciations on Behance — my most appreciated project.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/c03f2e203719419.Y3JvcCwxODAwLDE0MDcsMCw2Mg.png",
    "gallery": ["https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/908881203719419.669c30f266735.png"],
    "behanceUrl": "https://www.behance.net/gallery/203719419/Register-login",
    "stats": { "appreciations": 22, "views": 292 },
    "deliverables": ["Flow analysis", "Wireframes", "UI design"],
    "caseStudy": {
      "problem": "Registration is where products lose users they already convinced — every unnecessary field and unclear error compounds into churn.",
      "goal": "Design an auth flow with the fewest possible decisions and the clearest possible errors.",
      "research": "Benchmarked auth patterns across leading apps; catalogued error-state and validation best practices.",
      "process": ["Pattern research", "Flow reduction exercise", "Inline validation design", "Hi-fi UI with micro-interaction specs"],
      "solution": "Social-first sign-in, progressive profiling instead of long forms, real-time inline validation, and forgiving error recovery.",
      "results": ["292 views and 22 appreciations — my most appreciated Behance project"]
    }
  },
  {
    "slug": "the-traveler",
    "title": "The Traveler",
    "category": "Travel · Mobile",
    "categories": ["Mobile"],
    "featured": false,
    "year": "2024",
    "role": "UI/UX Designer",
    "readingTime": "2 min read",
    "tools": ["Figma"],
    "tags": ["Travel", "Mobile App", "Discovery"],
    "description": "A travel companion app for discovering destinations and planning trips — bold photography, effortless itineraries.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/ec1178187388471.Y3JvcCw4MDgsNjMyLDAsMA.png",
    "gallery": [],
    "behanceUrl": "https://www.behance.net/gallery/187388471/The-Traveler",
    "stats": { "appreciations": 8, "views": 86 },
    "deliverables": ["User flows", "UI design", "Prototype"]
  },
  {
    "slug": "cafeccino",
    "title": "Cafeccino",
    "category": "F&B · Web",
    "categories": ["Web"],
    "featured": false,
    "year": "2025",
    "role": "UI/UX Designer",
    "readingTime": "2 min read",
    "tools": ["Figma", "Photoshop"],
    "tags": ["F&B", "Web Design", "Branding"],
    "description": "A coffee-brand web experience — warm identity, appetizing product presentation and a smooth ordering journey.",
    "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/b58284220462973.Y3JvcCwxMDE2LDc5NCw4MDcsMzA.png",
    "gallery": [],
    "behanceUrl": "https://www.behance.net/gallery/220462973/cafeccino",
    "stats": { "appreciations": 1, "views": 38 },
    "deliverables": ["UI design", "Visual identity", "Prototype"]
  }
];

/* ── Enterprise / NDA work (no public links) ─────────────────
   Shown on the home page. Add/remove objects freely. */
window.DATA.enterprise = [
  /* Web Applications (enterprise — no public Behance) */
  { "title": "Academy",                 "category": "Web · Education",  "categories": ["Web", "Educational"], "description": "Corporate learning platform — a responsive web application designed with end-to-end UX, from user flows to high-fidelity UI.", "tags": ["Web App", "Education", "Enterprise"] },

  /* Power Platform Design — Microsoft Power Apps (per CV) */
  { "title": "Manage Tasks",            "category": "Power Apps",       "categories": ["Power Apps"],              "description": "Task-management business application designed with Microsoft Power Apps to automate internal workflows and improve operational efficiency.", "tags": ["Power Apps", "Workflows", "Low-code"] },
  { "title": "Memo",                    "category": "Power Apps",       "categories": ["Power Apps"],              "description": "Internal memo and approvals application designed with Microsoft Power Apps, streamlining company-wide communication.", "tags": ["Power Apps", "Approvals", "Low-code"] },
  { "title": "Change Requests (Nintex)","category": "Power Apps · Nintex", "categories": ["Power Apps"],           "description": "Change-request automation designed with Microsoft Power Apps and Nintex, replacing manual processes with guided flows.", "tags": ["Power Apps", "Nintex", "Automation"] },
  { "title": "HR Platform",             "category": "Power Apps · HR",  "categories": ["Power Apps"],              "description": "HR workflows and employee self-service designed with Microsoft Power Apps — requests, approvals and records in one place.", "tags": ["Power Apps", "HR", "Enterprise"] },
  { "title": "HR Request",              "category": "Power Apps · HR",  "categories": ["Power Apps"],              "description": "Employee request and approval application designed with Microsoft Power Apps to reduce turnaround time.", "tags": ["Power Apps", "HR", "Workflows"] },
  { "title": "Administration Platform", "category": "Power Apps · Admin", "categories": ["Power Apps", "Dashboard"], "description": "Administration tooling with role-aware dashboards designed with Microsoft Power Apps for internal operations.", "tags": ["Power Apps", "Admin", "Dashboards"] },
  { "title": "Session Management",      "category": "Power Apps",       "categories": ["Power Apps"],              "description": "Session-management business application designed with Microsoft Power Apps for scheduling and tracking.", "tags": ["Power Apps", "Scheduling", "Enterprise"] },
  { "title": "Event System",            "category": "Power Apps · Events", "categories": ["Power Apps"],           "description": "Event-management system designed with Microsoft Power Apps — registration, sessions and administration.", "tags": ["Power Apps", "Events", "Enterprise"] },

  /* SharePoint Platforms Design (per CV) */
  { "title": "Brands Intranet",         "category": "SharePoint",       "categories": ["SharePoint"],              "description": "Enterprise SharePoint intranet designed to improve collaboration, communication, employee engagement and knowledge sharing.", "tags": ["SharePoint", "Intranet", "IA"] },
  { "title": "Football Company Intranet", "category": "SharePoint",     "categories": ["SharePoint"],              "description": "SharePoint intranet portal for a football organization — enhancing collaboration and the employee experience.", "tags": ["SharePoint", "Intranet", "Collaboration"] }
];
