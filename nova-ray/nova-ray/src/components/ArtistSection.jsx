import { artistData } from "../data/artistData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./ArtistSection.css";

export default function ArtistSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section artist-section" id="about" ref={ref}>
      <div className="container">
        <p className="section-label">The Artist</p>

        <div className="artist-grid">
          <div className={`reveal ${visible ? "is-visible" : ""}`}>
            <div className="artist-portrait-main">
              <img
                src={artistData.portraitPrimary}
                alt={`${artistData.name} in a dimly lit studio`}
              />
            </div>
            <div className="artist-supporting">
              <img
                src={artistData.portraitSecondary}
                alt="Supporting editorial portrait"
              />
              <img
                src={artistData.portraitTertiary}
                alt="Supporting editorial portrait"
              />
            </div>
          </div>

          <div className={`artist-copy reveal reveal-delay-1 ${visible ? "is-visible" : ""}`}>
            <h2>Meet Nova</h2>
            <div className="artist-bio">
              {artistData.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
