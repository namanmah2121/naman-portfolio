# Naman Asawa Portfolio

## Purpose

Present Naman Asawa as a React Native developer through real product work, direct contact paths and a downloadable resume.

## User flow

Visitor
  -> Hero
  -> Optional Naman OS project library
  -> Skills and work history
  -> Project cards
  -> Project detail modal
  -> Email, GitHub, LinkedIn, phone or resume

## Content rules

- All project content comes from the supplied resume and screenshots.
- No Play Store links or unverified product metrics are shown.
- Mantae is the final project name. Do not rename it to Delyfy.
- Contact data is shown only as explicit user-facing links. Development logs must not include it.

## Implementation

- src/data/projects.js owns project, skills, evidence-backed capabilities, flows and technology content.
- src/main.jsx renders the portfolio, device mockups, project-detail modal and Naman OS route.
- src/styles.css owns responsive layout, device emulator visuals, animation and visual tokens.
- public/work contains user-supplied screenshots and profile photo.
- There is no database, backend, auth flow or third-party data source.
- docs/project-evidence.md records the source-backed business flows and implementation evidence for every showcased product.

## Technical decisions

Decision: React with Vite.

Reason: small maintainable portfolio with a fast production build.

Impact: deploy as a static site to Netlify, Firebase Hosting or Vercel.

Decision: project details use accessible modals in v1.

Reason: project evidence stays near the home page and does not need route configuration.

Impact: individual case-study pages can be introduced later without changing project data.

Decision: interactive Naman OS project library.

Reason: Replaced by an approved Naman OS project library after user confirmation.

Impact: /os uses real project content and screenshots; it does not simulate product features.

Decision: Netlify SPA fallback.

Reason: the Naman OS page is available at /os and must load correctly on direct visits.

Impact: netlify.toml redirects application routes to the React entry point.

## Edge cases

- Clipboard API unavailable: show "Use email link" instead of claiming success.
- JavaScript disabled: no app content renders; static deployment still serves the document shell.
- Reduced-motion preference: CSS disables non-essential motion.
- Very narrow viewport: navigation becomes a full-screen menu and project layouts stack.
