import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./VisualsSection.css";

// To add the real official video: paste a YouTube or Vimeo embed URL here.
// Example: "https://www.youtube.com/embed/VIDEO_ID"
const VIDEO_EMBED_URL = null;

const THUMBNAIL =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80";

export default function VisualsSection() {
  const { ref, visible } = useScrollReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section" id="visuals" ref={ref}>
      <div className="container">
        <p className="section-label">Visuals</p>

        <div className={`visuals-thumb reveal ${visible ? "is-visible" : ""}`}>
          {playing && VIDEO_EMBED_URL ? (
            <iframe
              src={VIDEO_EMBED_URL}
              title="After Midnight — Official Visual"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          ) : (
            <>
              <img src={THUMBNAIL} alt="After Midnight official visual thumbnail" />
              <button
                className="visuals-play"
                onClick={() => setPlaying(true)}
                aria-label="Play official visual"
              >
                <span className="visuals-play-btn">▶</span>
              </button>
              <div className="visuals-caption">
                <p className="kicker">Official Visual</p>
                <h3>After Midnight</h3>
              </div>
            </>
          )}
        </div>
        {!VIDEO_EMBED_URL && (
          <p className="visuals-note">
            No video is linked yet — this is a placeholder thumbnail. Add a
            YouTube or Vimeo embed URL to VIDEO_EMBED_URL in
            src/components/VisualsSection.jsx to make it playable.
          </p>
        )}
      </div>
    </section>
  );
}
