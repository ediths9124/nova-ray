import { useEffect, useState } from "react";
import { artistData, navLinks } from "../data/artistData";
import "./Navbar.css";

export default function Navbar({ player }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="navbar-logo">
          {artistData.name}
        </a>

        <nav>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-right">
          <button
            className="navbar-mini-play"
            onClick={player.toggle}
            aria-label={player.isPlaying ? "Pause" : "Play"}
          >
            {player.isPlaying ? (
              <span className="eq-bars">
                <span />
                <span />
                <span />
                <span />
              </span>
            ) : (
              "▶"
            )}
            <span className="label">{player.track.title}</span>
          </button>

          <button
            className={`navbar-burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`navbar-mobile-panel ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
