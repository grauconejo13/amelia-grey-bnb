# Amelia Grey BNB

A fictional bed-and-breakfast **frontend UI prototype**, built to demonstrate room discovery, storytelling, responsive design, and reservation-style interactions. It is not a real accommodation or booking service.

## Features
- Home, room listings, individual room details, information, and contact pages
- Room and gallery components backed by static JavaScript data
- Mock reservation form and modal, clearly identified as demos
- Responsive presentation using Bootstrap and React

**Important:** Room inventory and booking interactions are simulated. No real availability is checked, no inquiry is transmitted, and no reservation or payment is taken.

## Stack
- React 19, React Router 7, JavaScript
- Vite 7
- Bootstrap 5 and React Bootstrap
- Local/static data only; no application backend or authentication

## Local development
Requires Node.js 22 and npm.

```bash
npm ci
npm run dev
```

For quality checks:

```bash
npm run lint
npm run build
```

There is no automated test suite yet. CI runs lint and build, not functional tests.

## Project map
```text
src/
  App.jsx                  # Routes and shared layout
  pages/                   # Page views
  components/              # UI and mock booking components
  data/                    # Static content
  App.css, index.css       # Styles
docs/                      # Architecture, decisions, roadmap, testing
.project/                  # Searchable project metadata
.github/                   # CI and pull request template
```

## Project discovery
**Tags:** `web-app`, `creative-media`, `accessibility`

- [Machine-readable manifest](.project/manifest.json)
- [Implemented, simulated, and planned capabilities](.project/capabilities.md)

## Documentation
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Decisions](docs/DECISIONS.md)
- [Testing guide](docs/TESTING.md)

## Status
Frontend prototype with a stable foundation and planned UI/accessibility improvements. Implementation notes are based on repository inspection; passing local checks and real browser behavior must be verified separately.

## Scope
Keep real reservations, payments, logins, personal-data storage, and external integrations out of scope unless the product direction is explicitly reconsidered.
