# Naman Asawa Portfolio

## Purpose

Present Naman Asawa as a React Native developer through real product work, direct contact paths and a downloadable resume.

## User flow

Visitor
  -> Hero
  -> Optional Naman OS project library
     -> GitHub profile or local screenshot gallery
     -> Project card or verified Play Store listing
  -> Skills and work history
  -> Project cards
  -> Project detail modal
  -> Email, GitHub, LinkedIn, phone or resume

## Content rules

- All project content comes from the supplied resume and screenshots.
- Naman OS app icons use the supplied project-logo PNG files in public/work.
- Only verified Play Store links are shown: Moolyam and Mantae.
- Mantae is the final project name. Do not rename it to Delyfy.
- Naman OS shows GitHub and gallery widgets; it does not show a weather widget or fetch external weather data.
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

Decision: shared iOS simulator previews for project screenshots.

Reason: supplied app screens need a consistent device context rather than appearing as unframed images.

Impact: src/main.jsx uses one device component for cards and detail modals; src/styles.css provides the iPhone-style bezel, Dynamic Island, controls, screen clipping and reduced-motion fallback.

Decision: Naman OS uses project logos and an iPhone-style call tile.

Reason: the OS library should identify each product visually and offer a direct mobile-native contact action.

Impact: each project has a local logo path in src/data/projects.js; the Contact tile calls the user-supplied phone number through a tel link.

Decision: version replaced public logo assets.

Reason: project logos use stable public URLs and browsers can retain the previous image after a deployment.

Impact: the MyWhip logo URL includes an asset version, so the latest supplied logo loads immediately after deployment.

Decision: direct Moolyam and Mantae Naman OS tiles to their verified Play Store listings.

Reason: these are user-confirmed public destinations, while the remaining projects do not have a verified store listing.

Impact: `storeUrl` in src/data/projects.js makes only these two tiles external links; all other tiles retain their product-card modal.

Decision: Naman OS uses the dark editorial visual language of the supplied Saheer Khan reference.

Reason: it gives the project library a clear workspace structure while retaining Naman's existing project app icons and destinations.

Impact: src/main.jsx provides GitHub and gallery widgets above the unchanged app grid; src/styles.css supplies the black grid-floor, lime/cyan accents and responsive panel layout. The gallery uses existing local project screenshots, so it needs no API or additional tracking.

Decision: Saheer-style desktop cursor.

Reason: match the approved visual reference without adding distracting cursor effects.

Impact: src/main.jsx drives an immediate 6px cursor dot and a delayed cursor ring; src/styles.css expands the 36px ring to 68px on interactive hover targets and preserves the touch fallback.

## Edge cases

- Clipboard API unavailable: show "Use email link" instead of claiming success.
- JavaScript disabled: no app content renders; static deployment still serves the document shell.
- Reduced-motion preference: CSS disables non-essential motion.
- Touch devices and reduced-motion users: the native cursor remains active; the custom cursor is not rendered.
- Long app screenshots: the image remains clipped to the iOS display and scrolls only inside the visible app area.
- Very narrow viewport: navigation becomes a full-screen menu and project layouts stack.
- Play Store unavailable or listing removed: the browser handles the external-link failure; Naman OS remains usable for all other project tiles.
- GitHub unavailable: the external browser link handles the failure; gallery and app tiles remain usable.
