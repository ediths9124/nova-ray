import { artistData, navLinks } from "../data/artistData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-logo">{artistData.name}</p>
            <p className="footer-tagline">{artistData.headline}</p>
          </div>

          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-socials">
            <li>
              <a href={artistData.socials.instagram}>Instagram</a>
            </li>
            <li>
              <a href={artistData.socials.tiktok}>TikTok</a>
            </li>
            <li>
              <a href={artistData.socials.youtube}>YouTube</a>
            </li>
            <li>
              <a href={artistData.socials.spotify}>Spotify</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {artistData.name}. All rights reserved.</span>
          <span>A fictional artist project — for demonstration purposes.</span>
        </div>
      </div>
    </footer>
  );
}
