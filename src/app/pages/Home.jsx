import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Video from '../components/video/Video';
import About from '../components/about/About';
import WhyChoose from '../components/whyChoose/WhyChoose';
// Importing images allows Vite to optimize/hash them
import bedroomBg from '../../assets/Bedroom.webp';

export default function Home() {
  return (
    <div className="Home relative min-h-screen">
      <Header />
      <section className="Hero container mx-auto py-2">
        <Hero />
      </section>
      <section className="Video container mx-auto py-2">
        <Video></Video>
      </section>
      <section className="About container mx-auto py-2">
        <About></About>
      </section>
      <section className="About container mx-auto py-2">
        <WhyChoose></WhyChoose>
      </section>
    </div>
  );
}
