import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MusicPlayer from "./components/MusicPlayer";
import FeaturedRelease from "./components/FeaturedRelease";
import ReleasesGrid from "./components/ReleasesGrid";
import ArtistSection from "./components/ArtistSection";
import Gallery from "./components/Gallery";
import VisualsSection from "./components/VisualsSection";
import TourSection from "./components/TourSection";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useMusicPlayer } from "./hooks/useMusicPlayer";

export default function App() {
  const player = useMusicPlayer();

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar player={player} />
      <main>
        <Hero onPlay={player.play} />
        <FeaturedRelease player={player} />
        <ReleasesGrid player={player} />
        <ArtistSection />
        <Gallery />
        <VisualsSection />
        <TourSection />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer player={player} />
    </>
  );
}
