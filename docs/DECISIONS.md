# Decisions

## 2026-11-01: Keep this a fictional frontend demonstration
**Decision:** Preserve the existing scope: client-side storytelling, room browsing, and simulated booking interaction.

**Rationale:** The project demonstrates web UI and UX without the cost, privacy impact, or operational responsibility of taking real reservations.

**Consequence:** Do not advertise demo forms as live booking services. Review this decision if the product is ever repurposed.

## 2026-11-01: Adopt Paracosm repository metadata
**Decision:** Add a small `.project/manifest.json` and `.project/capabilities.md` to make the repository searchable by purpose and capabilities.

**Rationale:** Compare new ideas with existing implementations before starting overlapping repositories.

## 2026-11-01: Start CI with existing scripts
**Decision:** Run dependency installation, ESLint, and Vite build. Add a test job when an actual test runner and tests are present.
