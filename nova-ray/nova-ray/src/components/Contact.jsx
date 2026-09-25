import { useState } from "react";
import { artistData } from "../data/artistData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Contact.css";

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a front-end-only demo form — no message is actually sent.
    // Connect it to a real endpoint (Formspree, a backend route, etc.)
    // before going live.
    setStatus("Thanks — this is a demo form, so nothing was actually sent.");
    e.target.reset();
  };

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <p className="section-label">Booking</p>

        <div className={`contact-grid reveal ${visible ? "is-visible" : ""}`}>
          <div className="contact-intro">
            <h2>Book Nova Ray</h2>
            <p>{artistData.contactNote}</p>
            <div className="contact-socials">
              <a href={artistData.socials.instagram}>Instagram</a>
              <a href={artistData.socials.tiktok}>TikTok</a>
              <a href={artistData.socials.youtube}>YouTube</a>
              <a href={artistData.socials.spotify}>Spotify</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="full">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" />
            </div>
            <div className="full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required />
            </div>
            <button className="btn btn-solid contact-submit" type="submit">
              Send Inquiry
            </button>
            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
