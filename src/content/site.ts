/**
 * Single source of truth for all showcase copy and specs.
 * Facts here are drawn from the two source repositories:
 *  - NFC Party Controller: https://github.com/Haugenau20/NFC-Party-Controller
 *  - New Year Dashboard:    https://github.com/Haugenau20/new-year-dashboard
 * Edit copy here rather than in JSX.
 */

export const links = {
  nfcRepo: 'https://github.com/Haugenau20/NFC-Party-Controller',
  dashboardRepo: 'https://github.com/Haugenau20/new-year-dashboard',
  liveDashboard: 'https://new-year-dashboard.web.app',
  portfolio: 'https://haugenau20.github.io/Resume/',
} as const

export const navItems = [
  { id: 'story', label: 'The Story' },
  { id: 'system', label: 'System' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'software', label: 'Software' },
  { id: 'in-action', label: 'In Action' },
  { id: 'links', label: 'Links' },
] as const

export const hero = {
  title: 'New Year Party System',
  hook: 'Tap a card. Change the music. Let the lights follow.',
  sub: 'A full-stack IoT party system — battery-powered NFC controllers, Home Assistant automation, and a live TV dashboard — built for a real New Year’s Eve.',
  nfcGifAlt: 'A guest tapping an NFC card on the controller to change the music',
} as const

export const story = {
  paragraphs: [
    'New Year’s Eve 2025. Twelve guests spread across the living room and kitchen. One Spotify account, and the usual problem: everyone wants to change the music, so someone’s always hunting for a phone, interrupting the playlist, or nudging the volume.',
    'The fix was physical. A deck of NFC cards — playlists for the kitchen, a personal set of songs for every guest, and a handful of admin cards for the host — paired with two battery-powered readers placed where people actually gathered. Tap a card and the music responds; the lights shift to match the mood. No app, no phone, no asking the host.',
    'What started as a party hack turned into a two-part system worth telling the story of: the hardware that reads the cards, and the dashboard that put the whole thing on the TV.',
  ],
} as const

export const systemFlow = {
  intro:
    'The system is deliberately split so each layer has one job: a reader turns a card tap into an event, Home Assistant decides what that event means, and Spotify and the lights carry it out. How a tap behaves depends on the room — immediate playback in the kitchen, a shared queue in the living room.',
  steps: [
    { label: 'NFC Cards', detail: 'NTAG215 cards — playlists, personal songs, and admin actions' },
    { label: 'PN532 Reader', detail: 'Reads the card over I2C and hands the tag to the ESP32' },
    { label: 'ESP32 (ESPHome)', detail: 'Emits the tag event to Home Assistant — no logic on-device' },
    { label: 'Home Assistant', detail: 'YAML automations map each tag to an action' },
    { label: 'Spotify / Hue / Admin', detail: 'Playback, room lighting, and queue / permission controls' },
  ],
} as const

export type HardwareSpec = { name: string; detail: string }

export const hardware = {
  intro:
    'Two battery-powered devices, both built around an ESP32 running ESPHome. Device 1 (living room) adds a volume knob; Device 2 (kitchen) adds a physical pause button.',
  specs: [
    { name: 'ESP32', detail: 'Central microcontroller for both devices, running an ESPHome config (shared common.yaml + per-device extensions).' },
    { name: 'PN532 NFC reader', detail: 'Reads NTAG215 cards over I2C (GPIO 21/22).' },
    { name: 'Volume potentiometer', detail: '10kΩ pot on ADC GPIO 34 (12dB attenuation), smoothed with a sliding-window moving average + delta filter. Volume capped at 75%.' },
    { name: 'Buzzer feedback', detail: '5V passive buzzer driven from a 3.3V GPIO via a 2N7000 MOSFET (1kΩ gate resistor, 1N5818 flyback diode). Plays RTTTL tones on a scan.' },
    { name: 'Pause button', detail: 'GPIO 18 pull-up input — Device 2 (kitchen) only.' },
    { name: 'Power', detail: '18650 lithium-ion cells (dual in Device 1, single in Device 2) with a charging circuit.' },
  ] satisfies HardwareSpec[],
  power:
    'Designed for 40–60 hours on a charge at ~100–150mA per device, using WiFi light-sleep and duty-cycling the PN532 (≈1s intervals with 100–200ms active scan windows).',
} as const

export const software = {
  intro:
    'Two software layers sit above the hardware. The Home Assistant automation layer turns tag events into music and lighting; the React dashboard mirrors what’s playing on the TV. They’re intentionally independent — kept in separate repositories — so the party runs perfectly even if the dashboard never starts.',
  homeAssistant: {
    title: 'Home Assistant automation layer',
    points: [
      'Room-aware tag handling: a kitchen tap brings the song on right away, while a living-room tap adds it to a shared queue — capped at three songs with no duplicates, tracked through a Home Assistant helper updated on every tap.',
      'That “instant” kitchen playback is really a controlled inject — the song is queued and the player skips to it after a delay too short to notice, then resumes the original playlist where it left off.',
      'SpotifyPlus drives playback through the Spotify Web API — starting tracks, targeting the right speaker, and handling the queue and advanced controls.',
      'Lighting is kitchen-only: the lights shift with each playlist’s mood (energetic or relaxed). The living-room scene lives entirely on the Home Assistant side and never reacts to song changes.',
      'Admin cards reset the queue, override the room rules, start and stop playback, adjust lighting, and allow on-the-fly debugging.',
    ],
  },
  dashboard: {
    title: 'New Year Dashboard',
    points: [
      'React 18 + TypeScript + Vite, deployed on Firebase Hosting as an SPA.',
      'Cloud Functions handle the Spotify OAuth 2.0 token exchange.',
      'Adaptive Spotify polling: 3s → 5s → 10s with automatic backoff on rate limits.',
      'Large album art tuned for a 1920×1080 TV, shown via Chromecast with Google TV in kiosk mode.',
      'Highlights only the ~60 personal “favourite” song cards as they surface in the Spotify queue — ordinary playlist tracks are left unmarked.',
      'Midnight + Kongens Tale countdowns, with pre-rendered WebGL backgrounds served as MP4 and a 5-minute hue-shifting rotation.',
    ],
  },
} as const

export const inAction = {
  intro:
    'Deployed live on New Year’s Eve for 12 guests across two rooms. Photos and clips from the night:',
  // Captions describe the intended media; real assets drop into /public/media later.
  gallery: [
    { caption: 'Living-room controller — tap a song card to add it to the queue', ratio: '4 / 3' },
    { caption: 'Kitchen controller with the physical pause button', ratio: '4 / 3' },
    { caption: 'The dashboard on the TV via Chromecast (kiosk mode)', ratio: '16 / 9' },
    { caption: 'The card deck — playlists, personal song cards, and admin cards', ratio: '4 / 3' },
  ],
} as const
