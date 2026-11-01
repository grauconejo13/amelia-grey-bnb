# Architecture

## Purpose
Amelia Grey BNB is a fictional bed-and-breakfast UI demonstration. It is a client-side React application, not a real reservation service.

## Stack
- React 19 and React Router 7 for interface and routes
- Vite 7 for development and production builds
- Bootstrap 5 and React Bootstrap for presentation
- JavaScript and static/local data; no server-side application or database

## Structure
- `src/App.jsx`: application routes, shared navigation and footer
- `src/pages/`: Home, Rooms, RoomDetail, InfoPage, Contact, and supporting information UI
- `src/components/`: room cards, galleries, booking form/modal, navigation, footer
- `src/data/`: static room, gallery, navigation, and contact information
- `src/App.css` and `src/index.css`: application styling

## Data flow
Static data is imported by React components. Room details and booking UI are rendered client-side. The reservation form is an explicitly labeled demo and does not submit or store reservations.

## Boundaries
Do not imply real inventory, live availability, payment collection, confirmation, or booking transmission. Any actual booking functionality would need a separate, reviewed architecture and privacy requirements.
