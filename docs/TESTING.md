# Testing

## Current scripts
Run on Node.js 22:
```sh
npm ci
npm run lint
npm run build
```

GitHub Actions runs these commands on pushes and pull requests. A passing lint/build check is **not** equivalent to functional, accessibility, or end-to-end testing.

## Manual checks
- Navigate Home, Rooms, Room Detail, Info, Contact, and a nonexistent URL.
- Verify room data, gallery images, and responsive layouts on mobile and desktop.
- Check keyboard focus, navigation semantics, form labels, and modal dismissal.
- Confirm reservation UI clearly says it is a demo, and does not submit a real booking.
- Verify no unexpected network submissions or personal-data storage.

## Missing test automation
There is no `test` script in the inspected package.json. Add Vitest and React Testing Library (or an equivalent setup) only when actual test files are introduced, then update CI to run them.
