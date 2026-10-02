# UNECE-website-checker

UNECE R155 / R156 legislative requirements hub prototype website.

This project is a single-page prototype website for navigating and tracking UNECE R155 (CSMS) and R156 (SUMS) requirements, official references, legislative milestones, and readiness checks.

## Purpose

The prototype provides a lightweight dashboard for:
- exploring requirements by regulation and category
- reviewing official UNECE/EUR-Lex references
- tracking key regulatory timeline changes
- monitoring selected external sources via a manual watchdog
- keeping a readiness checklist for implementation progress

The content is informational and should be validated against the official UN regulations and relevant legal texts.

## Project structure

- `unece-r155-r156-hub.html` – main single-page application
- `index.html` – landing page redirecting to the main app
- `styles.css` – dashboard styling and responsive layout
- `script.js` – app logic, filtering, CSV export, checklist, watchdog, timeline

## How to run

Open `unece-r155-r156-hub.html` in a browser. It can also be hosted as a static site in SharePoint or any web server.

## Notes

- This is a browser-only prototype.
- It intentionally avoids `localStorage`, `sessionStorage`, and `indexedDB` because some preview environments (for example SharePoint preview) block those APIs.
- State is kept in an in-memory object for the current page session only.

## Acceptance checks

- JavaScript loads without syntax errors.
- Filtering and search work correctly.
- CSV export produces the requirement catalog.
- Watchdog can record manual checks.
- Checklist progress updates and reset works as expected.
