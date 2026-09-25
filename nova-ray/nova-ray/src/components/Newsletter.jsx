import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Newsletter.css";

export default function Newsletter() {
  const { ref, visible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("Enter a valid email address.");
      return;
    }
    // This is a front-end-only demo form. Wire it up to a real
    // provider (Mailchimp, ConvertKit, etc.) before going live.
    setStatus("You're on the list. Welcome to the night.");
    setEmail("");
  };

  return (
    <section className="section newsletter" ref={ref}>
      <div className="container newsletter-inner">
        <div className={`reveal ${visible ? "is-visible" : ""}`}>
          <h2>Enter The Night.</h2>
          <p>Get new music, visuals and exclusive updates from NOVA RAY.</p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn btn-solid" type="submit">
              Subscribe
            </button>
          </form>
          {status && <p className="newsletter-status">{status}</p>}
        </div>
      </div>
    </section>
  );
}
