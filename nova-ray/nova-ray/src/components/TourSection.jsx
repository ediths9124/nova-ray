import { tourDates } from "../data/tourDates";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./TourSection.css";

export default function TourSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section tour-section" id="tour" ref={ref}>
      <div className="container">
        <p className="section-label">Live</p>

        <div className={`tour-list reveal ${visible ? "is-visible" : ""}`}>
          {tourDates.map((event) => (
            <div className="tour-row" key={event.id}>
              <span className="tour-date">{event.date}</span>
              <div className="tour-place">
                <strong>{event.city}</strong>
                <span>{event.event}</span>
              </div>
              <span className="tour-venue">{event.venue}</span>
              <a
                className="btn"
                href="#contact"
                onClick={(e) => e.preventDefault()}
              >
                Tickets
              </a>
            </div>
          ))}
        </div>
        <p className="tour-note">
          Sample fictional tour dates for demonstration — replace with real
          shows and ticketing links in src/data/tourDates.js.
        </p>
      </div>
    </section>
  );
}
