// ============================================================
// TRACKS — the sticky player's playlist.
//
// IMPORTANT: `src` currently points at /audio/placeholder-silent.mp3,
// a real (silent) MP3 so the player works without crashing.
// To add real audio: drop an .mp3 file into /public/audio/ and
// change the matching `src` below to "/audio/your-file.mp3".
// ============================================================

const PLACEHOLDER_AUDIO = "/audio/placeholder-silent.mp3";

export const tracks = [
  {
    id: "after-midnight",
    title: "After Midnight",
    duration: "3:42",
    cover:
      "https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&w=800&q=80",
    src: PLACEHOLDER_AUDIO,
  },
  {
    id: "velvet-rain",
    title: "Velvet Rain",
    duration: "4:05",
    cover:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    src: PLACEHOLDER_AUDIO,
  },
  {
    id: "no-signal",
    title: "No Signal",
    duration: "3:18",
    cover:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
    src: PLACEHOLDER_AUDIO,
  },
  {
    id: "city-lights",
    title: "City Lights",
    duration: "3:57",
    cover:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80",
    src: PLACEHOLDER_AUDIO,
  },
  {
    id: "echoes",
    title: "Echoes",
    duration: "4:22",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    src: PLACEHOLDER_AUDIO,
  },
  {
    id: "last-dance",
    title: "Last Dance",
    duration: "3:34",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    src: PLACEHOLDER_AUDIO,
  },
];
