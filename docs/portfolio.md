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
- Naman OS app icons use the supplied project-logo PNG files in public/work.
- No Play Store links or unverified product metrics are shown.
- Mantae is the final project name. Do not rename it to Delyfy.
- Contact data is shown only as explicit user-facing links. Development logs must not include it.
- Contact form submissions must not log visitor name, email, company or message content.

## Implementation

- src/data/projects.js owns project, skills, evidence-backed capabilities, flows and technology content.
- src/main.jsx renders the portfolio, device mockups, project-detail modal and Naman OS route.
- src/styles.css owns responsive layout, device emulator visuals, animation and visual tokens.
- index.html contains the static Netlify Forms definition required for deploy-time form detection.
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

Decision: shared iOS simulator previews for project screenshots.

Reason: supplied app screens need a consistent device context rather than appearing as unframed images.

Impact: src/main.jsx uses one device component for cards and detail modals; src/styles.css provides the iPhone-style bezel, Dynamic Island, controls, screen clipping and reduced-motion fallback.

Decision: Naman OS uses project logos and an iPhone-style call tile.

Reason: the OS library should identify each product visually and offer a direct mobile-native contact action.

Impact: each project has a local logo path in src/data/projects.js; the Contact tile calls the user-supplied phone number through a tel link.

Decision: Saheer-style desktop cursor.

Reason: match the approved visual reference without adding distracting cursor effects.

Impact: src/main.jsx drives an immediate 6px cursor dot and a delayed cursor ring; src/styles.css expands the 36px ring to 68px on interactive hover targets and preserves the touch fallback.

Decision: use Netlify Forms for direct messages.

Reason: mailto links depend on a visitor having a configured mail application, which is unreliable on many browsers and devices.

Impact: Say Hello, Start a Project, the Email card and the Naman OS Email dock route visitors to the contact form. The browser posts the form to Netlify; the owner must configure a submission notification in Netlify Forms.

## Edge cases

- Clipboard API unavailable: show "Use email link" instead of claiming success.
- JavaScript disabled: no app content renders; static deployment still serves the document shell.
- Reduced-motion preference: CSS disables non-essential motion.
- Touch devices and reduced-motion users: the native cursor remains active; the custom cursor is not rendered.
- Contact submission failure: show a clear fallback message and retain copy-email and phone contact options.
- Long app screenshots: the image remains clipped to the iOS display and scrolls only inside the visible app area.
- Very narrow viewport: navigation becomes a full-screen menu and project layouts stack.
