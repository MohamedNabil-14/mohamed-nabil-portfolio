/* ============================================================
   EXPERIENCE.JS — WORK HISTORY + ABOUT CONTENT (edit like JSON)
   ------------------------------------------------------------
   "current": true → highlighted timeline node.
   Newest job first. Add/remove objects freely.
   ============================================================ */

window.DATA = window.DATA || {};

window.DATA.experience = [
  {
    "role": "UI/UX Designer",
    "company": "Global Brands Group (GBG)",
    "period": "Aug 2025 — Present",
    "current": true,
    "location": "Cairo, Egypt",
    "highlights": [
      "Lead end-to-end product design for enterprise platforms spanning HR, CRM, and administration workflows, aligning UX decisions with business objectives and user needs.",
      "Established and maintain a scalable design system and component library, standardizing UI patterns and accelerating developer handoff across products.",
      "Redesigned complex enterprise workflows to reduce navigation complexity and improve task-completion efficiency.",
      "Conduct UX audits and translate findings into prioritized, data-informed design improvements.",
      "Collaborated with Product Managers, Developers, QA Engineers, and Business Stakeholders throughout the product lifecycle."
    ],
    "tech": ["Figma", "SharePoint", "Microsoft Power Apps", "Nintex", "Design Systems"],
    "products": ["HR Platform", "HR Request", "Manage Tasks", "Memo", "Administration Platform", "Session Management", "Event System", "Brands Intranet", "Academy"]
  },
  {
    "role": "UI/UX Designer",
    "company": "CoreVine",
    "period": "Feb 2025 — Sep 2025",
    "current": false,
    "location": "Cairo, Egypt",
    "highlights": [
      "Owned end-to-end design for two flagship products, Foxus and Gowa Elmanhag, from discovery through high-fidelity delivery.",
      "Translated business requirements into user flows, wireframes and interactive prototypes validated with stakeholders.",
      "Optimized user journeys and interaction patterns, reducing friction across core tasks."
    ],
    "tech": ["Figma", "FigJam", "Prototyping", "UX Research"],
    "products": ["Foxus", "Gowa Elmanhag"]
  },
  {
    "role": "UI/UX Designer",
    "company": "Freelance / Independent",
    "period": "Jan 2024 — Present",
    "current": true,
    "location": "Egypt",
    "highlights": [
      "Deliver end-to-end UX/UI for web and mobile clients, leading discovery, scoping, and design roadmap definition.",
      "Conduct user research and build personas, journey maps, and information architecture to ground design decisions.",
      "Produce wireframes, high-fidelity interfaces, and interactive prototypes aligned to brand systems and accessibility standards.",
      "Maintain stakeholder alignment and on-time delivery through structured design reviews and clear communication."
    ],
    "tech": ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Miro"],
    "products": ["Alkan", "Sotrech CRM", "Cafeccino", "Medi App", "The Traveler"]
  },
  {
    "role": "UI/UX Design Intern",
    "company": "UNEEQ Interns · Google Developer Student Clubs",
    "period": "Apr 2024 — Jul 2024",
    "current": false,
    "location": "Egypt",
    "highlights": [
      "Won first place in the GDSC design competition applying user research and human-centered design.",
      "Graduated top of the UX Design Track (Google DSC, EELU Ain Shams University).",
      "Shipped multiple concepts featured on Behance — Register/Login, E-Learning, Popcorn Party."
    ],
    "tech": ["Figma", "Photoshop", "Illustrator"],
    "products": ["E-learning Platform", "Register & Login", "Popcorn Party"]
  },
  {
    "role": "Document Control & Coordination",
    "company": "SEG · Hassan Allam · DORRA · Dar Al-Alamia · Huna Khidmah",
    "period": "2019 — 2025",
    "current": false,
    "location": "Egypt",
    "highlights": [
      "Designed and standardized document-control systems and workflows to ISO 9001 across large-scale construction projects.",
      "Led cross-team coordination — including an 18-person translation team — driving process improvement and stakeholder reporting.",
      "The origin story: years inside enterprise operations is why I design enterprise software that actually fits how companies work."
    ],
    "tech": ["DMS", "ISO 9001", "Process Design", "Reporting"],
    "products": []
  }
];

/* ── About page content ─────────────────────────────────── */
window.DATA.about = {
  "title": "I turn complex business workflows into products people actually enjoy using.",
  "paragraphs": [
    "I'm a UI/UX designer with experience designing enterprise web, mobile, SharePoint and Microsoft Power Apps solutions — the high-stakes software that runs companies, across HR, CRM, ERP and internal business platforms. I transform business requirements into intuitive experiences through user flows, wireframes, prototypes and scalable design systems, with usability and accessibility built in from day one.",
    "My path here is unusual, and it's my advantage: before design, I spent years in document control on large construction projects, standardizing workflows to ISO 9001 and coordinating teams under audit pressure. I learned how enterprises actually operate from the inside. Now I design for those same operators — and I never mistake the org chart for the user.",
    "I work end-to-end: discovery, research, journey mapping, information architecture, wireframes, high-fidelity UI, design systems, and handoff that engineers thank you for."
  ],
  "beliefs": [
    { "title": "Clarity is a feature",    "text": "In enterprise software, reducing cognitive load is the single highest-leverage design decision." },
    { "title": "Research over opinion",   "text": "Interviews, usability tests and data settle debates faster than taste ever will." },
    { "title": "Systems, not screens",    "text": "A good component library outlives any single redesign — I build for the tenth product, not the first." },
    { "title": "Accessible by default",   "text": "WCAG isn't a checklist at the end; it's a constraint that makes the design better from day one." }
  ],
  "education": { "degree": "Bachelor of Management Sciences", "school": "Sadat Academy", "year": "2016" },
  "languages": ["Arabic — Native", "English — Professional Working Proficiency"]
};
