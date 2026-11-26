// All facts checked against NASA Solar System Exploration, NASA Space Place (moon counts, 2026) and the Hyperliquid docs.
export const STOPS = [
  { id: 'overview', name: 'Solar System', short: 'System' },
  {
    id: 'sun', name: 'The Sun', short: 'Sun', kind: 'G-type main-sequence star', idx: '00',
    stats: [['Diameter', '1,392,700 km'], ['Surface', '≈ 5,500 °C'], ['Core', '≈ 15 million °C'], ['Age', '4.6 billion yrs']],
    tele: ['0.00 AU', 'Light to Earth 8 m 20 s'],
    desc: 'A 4.6-billion-year-old ball of hydrogen and helium that holds 99.8% of all the mass in the solar system. Every second its core fuses about 600 million tonnes of hydrogen into helium.',
    facts: ['Around 1.3 million Earths could fit inside it.', 'The light hitting your visor left its surface about 8 minutes and 20 seconds ago.', 'Its outer atmosphere, the corona, is hundreds of times hotter than its visible surface, and nobody fully knows why.']
  },
  {
    id: 'mercury', name: 'Mercury', short: 'Mercury', kind: 'Terrestrial planet · 1st from the Sun', idx: '01',
    stats: [['Diameter', '4,879 km'], ['Day', '176 Earth days'], ['Year', '88 Earth days'], ['Moons', '0']],
    tele: ['0.39 AU', 'Orbit 47.4 km/s'],
    desc: 'The smallest planet and the closest to the Sun. With almost no atmosphere to hold heat, days reach 430 °C and nights drop to −180 °C.',
    facts: ['One full day–night cycle on Mercury lasts two of its years.', 'Despite the heat, water ice hides in permanently shadowed craters at its poles.', 'It is slowly shrinking as its iron core cools, wrinkling the crust into cliffs hundreds of kilometres long.']
  },
  {
    id: 'venus', name: 'Venus', short: 'Venus', kind: 'Terrestrial planet · 2nd from the Sun', idx: '02',
    stats: [['Diameter', '12,104 km'], ['Day', '243 Earth days'], ['Year', '225 Earth days'], ['Moons', '0']],
    tele: ['0.72 AU', 'Orbit 35.0 km/s'],
    desc: 'Earth’s near-twin in size, wrapped in a crushing carbon-dioxide atmosphere and clouds of sulphuric acid. A runaway greenhouse effect makes it the hottest planet, around 465 °C.',
    facts: ['It spins backwards, so the Sun rises in the west.', 'A single rotation takes longer than its whole year.', 'Surface pressure is about 90 times Earth’s, like being 900 m under the ocean.']
  },
  {
    id: 'earth', name: 'Earth', short: 'Earth', kind: 'Terrestrial planet · 3rd from the Sun', idx: '03',
    stats: [['Diameter', '12,742 km'], ['Day', '23 h 56 m'], ['Year', '365.25 days'], ['Moons', '1']],
    tele: ['1.00 AU', 'Orbit 29.8 km/s'],
    desc: 'Home. The only world known to hold life, with liquid water across 71% of its surface and a magnetic field that shields it from the solar wind.',
    facts: ['It is the densest planet in the solar system.', 'The Moon drifts about 3.8 cm farther away every year.', 'Somewhere on the surface, a green signal is shining. Go in and find it.'],
    enter: true
  },
  {
    id: 'mars', name: 'Mars', short: 'Mars', kind: 'Terrestrial planet · 4th from the Sun', idx: '04',
    stats: [['Diameter', '6,779 km'], ['Day', '24 h 37 m'], ['Year', '687 Earth days'], ['Moons', '2']],
    tele: ['1.52 AU', 'Orbit 24.1 km/s'],
    desc: 'A cold desert world coloured by iron oxide dust. Dry river valleys and lake beds show that water once flowed across its surface.',
    facts: ['Olympus Mons is about 22 km tall, roughly two and a half times the height of Everest.', 'Valles Marineris stretches about 4,000 km, the length of the United States.', 'Its two small moons, Phobos and Deimos, may be captured asteroids.']
  },
  {
    id: 'belt', name: 'Asteroid Belt', short: 'Belt', kind: 'Between Mars and Jupiter', idx: '··',
    stats: [['Width', '≈ 1 AU'], ['Largest', 'Ceres, 940 km'], ['Objects', 'Millions'], ['Total mass', '≈ 3% of the Moon']],
    tele: ['2.2 – 3.2 AU', 'Leftovers of creation'],
    desc: 'A ring of rocky leftovers from the birth of the solar system, kept from forming a planet by Jupiter’s gravity. The dwarf planet Ceres alone holds about a quarter of its mass.',
    facts: ['It is far emptier than in films: asteroids are typically hundreds of thousands of kilometres apart.', 'NASA’s Dawn spacecraft orbited both Vesta and Ceres.', 'All of it combined weighs less than our Moon.']
  },
  {
    id: 'jupiter', name: 'Jupiter', short: 'Jupiter', kind: 'Gas giant · 5th from the Sun', idx: '05',
    stats: [['Diameter', '139,820 km'], ['Day', '9 h 56 m'], ['Year', '11.9 Earth years'], ['Moons', '115']],
    tele: ['5.20 AU', 'Orbit 13.1 km/s'],
    desc: 'The king of the planets, more than twice as massive as all the others combined. Its stripes are bands of ammonia clouds torn apart by winds and a ten-hour day.',
    facts: ['The Great Red Spot is a storm wider than Earth that has raged for centuries.', 'Io, one of its moons, is the most volcanically active body in the solar system.', 'Ganymede is the largest moon in the solar system, bigger than Mercury.']
  },
  {
    id: 'saturn', name: 'Saturn', short: 'Saturn', kind: 'Gas giant · 6th from the Sun', idx: '06',
    stats: [['Diameter', '116,460 km'], ['Day', '10 h 33 m'], ['Year', '29.4 Earth years'], ['Moons', '293']],
    tele: ['9.58 AU', 'Orbit 9.7 km/s'],
    desc: 'The jewel of the solar system. Its rings span about 280,000 km but are often only around 10 m thick, made of countless chunks of water ice.',
    facts: ['It is less dense than water.', 'A six-sided jet stream, the hexagon, circles its north pole.', 'Its moon Titan has rivers and seas of liquid methane, and Enceladus sprays water geysers into space.']
  },
  {
    id: 'uranus', name: 'Uranus', short: 'Uranus', kind: 'Ice giant · 7th from the Sun', idx: '07',
    stats: [['Diameter', '50,724 km'], ['Day', '17 h 14 m'], ['Year', '84 Earth years'], ['Moons', '29']],
    tele: ['19.2 AU', 'Orbit 6.8 km/s'],
    desc: 'An ice giant knocked onto its side, spinning at a tilt of about 98°. Methane in its atmosphere gives it a calm, pale cyan glow.',
    facts: ['Each pole gets about 42 years of continuous sunlight, then 42 years of darkness.', 'It was the first planet found with a telescope, by William Herschel in 1781.', 'Its moons are named after characters from Shakespeare and Alexander Pope.']
  },
  {
    id: 'neptune', name: 'Neptune', short: 'Neptune', kind: 'Ice giant · 8th from the Sun', idx: '08',
    stats: [['Diameter', '49,244 km'], ['Day', '16 h 6 m'], ['Year', '165 Earth years'], ['Moons', '16']],
    tele: ['30.1 AU', 'Orbit 5.4 km/s'],
    desc: 'The farthest planet, dark, cold and whipped by supersonic winds. It was found in 1846 by mathematics before anyone saw it through a telescope.',
    facts: ['Its winds reach about 2,000 km/h, the fastest in the solar system.', 'It completed its first full orbit since its discovery in 2011.', 'Its largest moon, Triton, orbits backwards and is probably a captured Kuiper Belt object.']
  }
];

export const CONTINENTS = [
  { name: 'Africa', lat: 4, lon: 20, area: '30.3 million km²', desc: 'The cradle of humanity, where our species first walked. Home to 54 countries, the Sahara and the Nile, the longest river on Earth.' },
  { name: 'Asia', lat: 46, lon: 92, area: '44.6 million km²', desc: 'The largest continent, home to about 60% of all people and to Mount Everest, 8,849 m, the highest point on Earth.' },
  { name: 'Europe', lat: 52, lon: 18, area: '10.2 million km²', desc: 'A small, dense continent of around 44 countries, where democracy, the printing press and the Industrial Revolution took shape.' },
  { name: 'North America', lat: 47, lon: -102, area: '24.7 million km²', desc: 'From Arctic tundra to tropical rainforest, with Greenland, the world’s largest island, and the Grand Canyon.' },
  { name: 'South America', lat: -14, lon: -60, area: '17.8 million km²', desc: 'Home to the Amazon, the largest tropical rainforest, and the Andes, the longest continental mountain range at about 7,000 km.' },
  { name: 'Australia', lat: -25, lon: 134, area: '8.5 million km²', desc: 'The smallest continent and the only one that is a single country. The Great Barrier Reef off its coast is the largest coral reef system on Earth.' },
  { name: 'Antarctica', lat: -78, lon: 40, area: '14.2 million km²', desc: 'The coldest, windiest, driest continent. Its ice sheet holds about 70% of the world’s fresh water; Vostok Station recorded −89.2 °C.' }
];

export const CITIES = [
  { name: 'Lagos', lat: 6.52, lon: 3.38, desc: 'Africa’s most populous city by most estimates, spread across islands and lagoons. The engine of Nollywood and Afrobeats.' },
  { name: 'Cairo', lat: 30.04, lon: 31.24, desc: 'On the Nile, minutes from the Pyramids of Giza, the last surviving wonder of the ancient world.' },
  { name: 'Nairobi', lat: -1.29, lon: 36.82, desc: 'A capital with a national park inside its city limits, where giraffes graze with skyscrapers behind them.' },
  { name: 'Cape Town', lat: -33.92, lon: 18.42, desc: 'Wrapped around Table Mountain near Africa’s south-western tip.' },
  { name: 'London', lat: 51.51, lon: -0.13, desc: 'Founded by the Romans as Londinium almost 2,000 years ago. Greenwich marks 0° longitude.' },
  { name: 'Paris', lat: 48.86, lon: 2.35, desc: 'The Eiffel Tower was built for the 1889 World’s Fair and was meant to stand for only 20 years.' },
  { name: 'Moscow', lat: 55.76, lon: 37.62, desc: 'Built around the Kremlin; its ornate metro stations were designed as “palaces for the people”.' },
  { name: 'Dubai', lat: 25.2, lon: 55.27, desc: 'Home of the Burj Khalifa, the tallest building in the world at 828 m.' },
  { name: 'Mumbai', lat: 19.08, lon: 72.88, desc: 'India’s financial capital and the home of Bollywood, built on what were once seven islands.' },
  { name: 'Beijing', lat: 39.9, lon: 116.4, desc: 'China’s capital for most of the last eight centuries, centred on the Forbidden City.' },
  { name: 'Tokyo', lat: 35.68, lon: 139.69, desc: 'One of the largest metropolitan areas on Earth, with around 37 million people.' },
  { name: 'Sydney', lat: -33.87, lon: 151.21, desc: 'Its Opera House, with sail-like shells, took 14 years to build and opened in 1973.' },
  { name: 'New York', lat: 40.71, lon: -74.0, desc: 'Home of Wall Street and the New York Stock Exchange, the world’s largest by market value.' },
  { name: 'Los Angeles', lat: 34.05, lon: -118.24, desc: 'The capital of film and TV; early studios came west for year-round sunshine.' },
  { name: 'Mexico City', lat: 19.43, lon: -99.13, desc: 'Built on the ruins of the Aztec capital Tenochtitlan, on a drained lake bed 2,240 m above sea level.' },
  { name: 'São Paulo', lat: -23.55, lon: -46.63, desc: 'The largest city in the Southern Hemisphere, with the biggest Japanese community outside Japan.' }
];

// The green signal. Hidden on the far side of the globe from where you arrive.
export const SIGNAL = { lat: 1.29, lon: 103.85 };

export const HYPER = {
  title: 'Hyperliquid',
  kicker: 'Layer 1 · Onchain finance',
  desc: 'A high-performance layer-one blockchain built from first principles for a fully onchain, open financial system, where liquidity, apps and trading share one chain.',
  sections: [
    ['HyperBFT', 'A custom consensus algorithm inspired by HotStuff, with the algorithm and networking stack built from the ground up for the chain.'],
    ['HyperCore', 'Fully onchain perpetual futures and spot order books. Every order, cancel, trade and liquidation is transparent, with one-block finality and up to 200,000 orders per second.'],
    ['HyperEVM', 'A general-purpose smart-contract layer, like Ethereum’s, that lets builders use HyperCore’s liquidity as permissionless building blocks.'],
    ['HYPE', 'The native token. It secures the network through staking, pays network costs and gives trading-fee discounts. Over $1B in annualised fees go to buying back HYPE.']
  ],
  facts: [['Throughput', '200k orders / s'], ['Finality', 'One block'], ['Funding', 'No VCs, self-funded'], ['Best known for', 'Perps DEX']],
  url: 'https://hyperliquid.xyz'
};
