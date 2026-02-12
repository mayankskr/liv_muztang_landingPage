import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Video from '../components/video/Video';
import About from '../components/about/About';
import WhyChoose from '../components/whyChoose/WhyChoose';
import Advantages from '../components/advantages/Advantages';
import Testimonials from '../components/testimonials/Testimonials';

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
      <section className="WhyChoose container mx-auto py-2">
        <WhyChoose></WhyChoose>
      </section>
      <section className="Advantages container mx-auto py-2">
        <Advantages></Advantages>
      </section>
      <section className="Testimonials container mx-auto py-2">
        <Testimonials></Testimonials>
      </section>
    </div>
  );
}
