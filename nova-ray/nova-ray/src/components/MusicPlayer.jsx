import { useState } from "react";
import { tracks } from "../data/tracks";
import { artistData } from "../data/artistData";
import "./MusicPlayer.css";

function formatTime(seconds) {
  if (!seconds || Number.isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function MusicPlayer({ player }) {
  const [queueOpen, setQueueOpen] = useState(false);
  const {
    track,
    isPlaying,
    currentTime,
    duration,
    volume,
    toggle,
    next,
    prev,
    selectTrack,
    seek,
    setVolume,
  } = player;

  return (
    <div className="player">
      <div className="player-main">
        <div className="player-track">
          <img
            className="player-cover"
            src={track.cover}
            alt={`${track.title} cover art`}
          />
          <div className="player-track-meta">
            <p className="player-track-title">{track.title}</p>
            <p className="player-track-artist">{artistData.name}</p>
          </div>
          {isPlaying && (
            <span className="eq-bars player-eq" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
          )}
        </div>

        <div className="player-controls">
          <button onClick={prev} aria-label="Previous track">
            ⏮
          </button>
          <button
            className="player-play"
            onClick={toggle}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button onClick={next} aria-label="Next track">
            ⏭
          </button>

          <div className="player-progress-wrap">
            <span>{formatTime(currentTime)}</span>
            <input
              className="player-progress"
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              aria-label="Seek"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-right">
          <div className="player-volume">
            <span aria-hidden="true">🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volume"
            />
          </div>
          <button
            className="player-queue-toggle"
            onClick={() => setQueueOpen((o) => !o)}
            aria-expanded={queueOpen}
          >
            <span className="label">Tracklist </span>
            {queueOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>

      <div className={`player-queue ${queueOpen ? "open" : ""}`}>
        <ul>
          {tracks.map((t, i) => (
            <li key={t.id} className={t.id === track.id ? "active" : ""}>
              <button onClick={() => selectTrack(t.id)}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <img
                  className="player-queue-cover"
                  src={t.cover}
                  alt=""
                  aria-hidden="true"
                />
                <span>{t.title}</span>
                <span className="player-queue-duration">{t.duration}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
