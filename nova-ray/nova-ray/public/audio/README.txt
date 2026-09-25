This folder holds the audio files used by the sticky music player.

placeholder-silent.mp3 is a real, valid, silent 5-second MP3. It exists
so the player works out of the box (play, pause, seek, progress bar)
without crashing on a missing file — but it makes no sound.

To use your real songs:
1. Add your .mp3 files to this folder, e.g. after-midnight.mp3
2. Open src/data/tracks.js
3. Change the `src` field for each track from
     "/audio/placeholder-silent.mp3"
   to
     "/audio/after-midnight.mp3"  (etc.)

No other code changes are needed — the player reads track info from
src/data/tracks.js automatically.
