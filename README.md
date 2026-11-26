# Apogee

A journey through the solar system, seen from an astronaut's visor.

**Live:** https://maximusdigitals.github.io/apogee/

- Start zoomed out on the whole solar system, then scroll, swipe or tap to travel: Sun, eight planets and the asteroid belt.
- Every planet spins and orbits; major moons orbit with them. Drag to look around, tap a planet for its card.
- Earth is the only world you can go into: turn the globe, read the continents and cities, and find the green signal.
- Zoom into the signal to land beside a glossy 3D monument of the Hyperliquid logo. Walk around it, tap it for the story.

Built with three.js (bundled), custom shaders, bloom and a hand-built lens flare. Ambient sound is generated live with Web Audio.

## Credits
- Planet, Moon, Sun, star and Saturn ring textures: [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC BY 4.0), based on NASA imagery.
- Hyperliquid blob mark from the official [Hyperliquid brand kit](https://hyperliquid.gitbook.io/hyperliquid-docs/brand-kit). Hyperliquid and the blob logo are trademarks of Hyper Foundation; this is an unofficial fan piece.
- Facts: NASA Science, NASA Space Place (moon counts, 2026), Hyperliquid Docs.
- Fonts: Inter Tight and JetBrains Mono (SIL OFL).

## Build
`npm i && ./build.sh` bundles `src/` into `app.js` and stamps cache-busting versions into `index.html` and `style.css`.
