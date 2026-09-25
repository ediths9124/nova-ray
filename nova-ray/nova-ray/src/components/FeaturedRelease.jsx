import { featuredRelease } from "../data/releases";
import { tracks } from "../data/tracks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./FeaturedRelease.css";

export default function FeaturedRelease({ player }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section featured" id="featured" ref={ref}>
      <div className="container">
        <p className="section-label">Featured Release</p>

        <div className="featured-grid">
          <div className={`featured-cover-wrap reveal ${visible ? "is-visible" : ""}`}>
            <img
              src={featuredRelease.cover}
              alt={`${featuredRelease.title} album cover`}
            />
          </div>

          <div className={`reveal reveal-delay-1 ${visible ? "is-visible" : ""}`}>
            <h2 className="featured-title">{featuredRelease.title}</h2>
            <div className="featured-meta">
              <span>{featuredRelease.type}</span>
              <span>{featuredRelease.releaseDate}</span>
              <span>{featuredRelease.genre}</span>
            </div>
            <p className="featured-desc">{featuredRelease.description}</p>

            <ol className="featured-tracklist">
              {featuredRelease.trackList.map((title, i) => {
                const t = tracks[i];
                return (
                  <li key={title}>
                    <button onClick={() => t && player.selectTrack(t.id)}>
                      <span className="index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="featured-actions">
              <button
                className="btn btn-solid"
                onClick={() => player.selectTrack(tracks[0].id)}
              >
                Play Album
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
