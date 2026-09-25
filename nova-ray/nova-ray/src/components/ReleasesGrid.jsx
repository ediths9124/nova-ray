import { releases } from "../data/releases";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./ReleasesGrid.css";

export default function ReleasesGrid({ player }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="releases" ref={ref}>
      <div className="container">
        <p className="section-label">Discography</p>
        <h2 className="step-lg" style={{ fontSize: "var(--step-lg)", marginTop: "0.8rem" }}>
          Releases
        </h2>

        <div className="releases-grid">
          {releases.map((r, i) => (
            <div
              key={r.id}
              className={`release-card reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => player.selectTrack(r.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") player.selectTrack(r.id);
              }}
              aria-label={`Play ${r.title}`}
            >
              <div className="release-cover-wrap">
                <img src={r.cover} alt={`${r.title} artwork`} loading="lazy" />
                <div className="release-play">
                  <span className="release-play-btn" aria-hidden="true">
                    ▶
                  </span>
                </div>
              </div>
              <div className="release-meta">
                <p className="release-title">{r.title}</p>
                <p className="release-sub">
                  <span>{r.year}</span>
                  <span>·</span>
                  <span>{r.genre}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
