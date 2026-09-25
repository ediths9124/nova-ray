import { galleryImages } from "../data/galleryImages";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Gallery.css";

export default function Gallery() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="gallery" ref={ref}>
      <div className="container">
        <p className="section-label">Visual World</p>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-item ${img.size} reveal ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-caption">{img.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
