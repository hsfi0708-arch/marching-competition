import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoCarousel from '../components/PhotoCarousel';
import Rules from '../components/Rules';
import Gallery from '../components/Gallery';
import FloatingButton from '../components/FloatingButton';

export default function Home() {
  return (
    <div className="bg-white-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PhotoCarousel />
        <Rules />
        <Gallery />
      </main>
      <FloatingButton />
    </div>
  );
}