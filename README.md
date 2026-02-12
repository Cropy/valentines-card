# valentines-card

Small React app (created with Create React App) that shows a playful Valentine card.

## Quick start

Install dependencies and start the dev server:

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser. Or change port accordingly

## What this repo contains

- `src/App.js` — main React component with the Yes/No interactions.
- `src/App.css` — project styles: layout, image sizing, and the No-button hide animation.
- `src/assets/` — image assets: `thinking_penguin.png`, `holding_penguins.png`.
- `public/` — standard CRA public files (`index.html`, icons, `manifest.json`, `robots.txt`).

## Behaviour summary

- Clicking **No** increments a counter and progressively enlarges the **Yes** button; after several clicks the **No** button fades and collapses.
- Clicking **Yes** clears the card content and shows a confirmation message with the `holding_penguins` image.