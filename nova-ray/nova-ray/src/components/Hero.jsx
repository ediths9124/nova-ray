import { artistData } from "../data/artistData";
import "./Hero.css";

export default function Hero({ onPlay }) {
  return (
    <section className="hero" id="top">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${artistData.heroImage})` }}
        role="img"
        aria-label="Cinematic portrait of NOVA RAY in low light"
      />
      <div className="hero-content">
        <p className="hero-eyebrow">{artistData.tagline}</p>
        <h1 className="hero-title">{artistData.headline}</h1>
        <p className="hero-sub">
          The debut record from {artistData.name} — eleven songs for the
          hour after everyone else has gone home.
        </p>
        <div className="hero-actions">
          <button className="btn btn-solid" onClick={onPlay}>
            Enter Experience
          </button>
          <a className="btn" href="#about">
            Explore
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>SCROLL</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
