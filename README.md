# NOVA RAY — Artist Website

A cinematic, single-page website for the fictional artist **NOVA RAY**
(Afro-R&B / Alternative Soul / Electronic), built with React + Vite.

This is a fictional demo project. The artist, songs, album, tour dates
and bio are all made up, so you can safely use it as a template for a
real artist by editing the files described below.

---

## 1. Project structure

```
nova-ray/
├── index.html                 ← page shell, fonts, meta tags
├── package.json
├── vite.config.js
├── public/
│   ├── audio/                 ← audio files for the player go here
│   │   ├── placeholder-silent.mp3
│   │   └── README.txt
│   └── images/                ← optional: your own local images
│       └── README.txt
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← assembles every section, in order
    ├── styles/
    │   ├── variables.css        ← colors, type, spacing tokens
    │   └── global.css           ← resets, layout, shared utilities
    ├── data/                    ← EDIT THESE to change content
    │   ├── artistData.js        ← name, tagline, bio, hero image, socials
    │   ├── tracks.js             ← the 6 songs in the sticky player
    │   ├── releases.js           ← featured album + releases grid
    │   ├── galleryImages.js      ← "Visual World" gallery
    │   └── tourDates.js          ← tour date list
    ├── hooks/
    │   ├── useMusicPlayer.js     ← all player state (play/pause/seek/queue)
    │   └── useScrollReveal.js    ← fade-up-on-scroll animation helper
    └── components/               ← one file + one .css file per section
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── MusicPlayer.jsx / .css   (the sticky player)
        ├── FeaturedRelease.jsx / .css
        ├── ReleasesGrid.jsx / .css
        ├── ArtistSection.jsx / .css  ("Meet Nova")
        ├── Gallery.jsx / .css        ("Visual World")
        ├── VisualsSection.jsx / .css (music video)
        ├── TourSection.jsx / .css
        ├── Newsletter.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

You should almost never need to edit a `.jsx` component to change
content — change the matching file in `src/data/` instead.

---

## 2. Running it locally

You need [Node.js](https://nodejs.org) 18+ installed. Then, from
inside the `nova-ray` folder:

```bash
npm install
npm run dev
```

Open the local address it prints (usually `http://localhost:5173`).
The page hot-reloads as you edit files.

To build a production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 3. Where images live

Every image (hero background, artist portraits, album covers, gallery
photos, video thumbnail) is a hosted URL set inside the files in
`src/data/`. This is why the site already looks fully designed with
no grey placeholder boxes.

**To replace an image:**
1. Find the field in the relevant `src/data/*.js` file (e.g.
   `heroImage` in `artistData.js`, or `cover` in `tracks.js`).
2. Replace the URL with either:
   - another hosted image URL, or
   - a local file: put the image in `public/images/`, then set the
     field to `/images/your-file.jpg`.

No component code needs to change.

---

## 4. Where music files live

Audio files belong in `public/audio/`. Right now every track points
at `public/audio/placeholder-silent.mp3` — a real, silent MP3, so the
player's play/pause/seek/progress bar all work out of the box without
pretending a real song exists.

**To add real songs:**
1. Add your `.mp3` files to `public/audio/`.
2. Open `src/data/tracks.js`.
3. Change each track's `src` field to point at your file, e.g.
   `"/audio/after-midnight.mp3"`.

See `public/audio/README.txt` for the same steps.

---

## 5. Adding or changing songs

Open `src/data/tracks.js`. Each track is an object:

```js
{
  id: "after-midnight",       // unique, used to link releases to tracks
  title: "After Midnight",
  duration: "3:42",           // shown in the tracklist, not auto-calculated
  cover: "https://...",
  src: "/audio/placeholder-silent.mp3",
}
```

Add a new object to the array for a new song, or edit/remove existing
ones. The sticky player, the featured album's tracklist, and the
releases grid all read from this file (and from `src/data/releases.js`
for album/single metadata).

---

## 6. Changing the artist name

Open `src/data/artistData.js` and edit the `name` field (and
`tagline`, `headline`, and `bio` while you're there — they all appear
throughout the site: hero, navbar, footer, and the "Meet Nova"
section).

---

## 7. Deploying to GitHub + Vercel

**Push to GitHub:**

```bash
cd nova-ray
git init
git add .
git commit -m "Initial commit — NOVA RAY site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Deploy on Vercel:**

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login
   is easiest).
2. Click **Add New → Project**.
3. Select the GitHub repo you just pushed.
4. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build` (or `vite build`)
   - Output directory: `dist`
5. Click **Deploy**.

Every future `git push` to `main` will automatically redeploy the
site.

---

## 8. Notes on this build

- All copy, bio text, tour dates and the album are fictional — clearly
  written as a demo, not claims about a real person.
- Images are sourced from Unsplash for demo purposes; swap them for
  licensed or your own photography before using this commercially.
- The newsletter and contact forms are front-end only — they show a
  confirmation message but don't send anything. Connect them to a
  real service (Formspree, Mailchimp, your own backend, etc.) before
  launch.
- The site respects `prefers-reduced-motion` and is keyboard
  accessible (visible focus states, semantic buttons/labels, alt text
  throughout).
