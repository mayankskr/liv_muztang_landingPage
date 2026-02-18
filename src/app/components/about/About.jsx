import React from 'react';
import { FaMars } from 'react-icons/fa'; // Standard Male Symbol
import CallButton from '../CallButton';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-xl md:gap-10 md:p-12">
        
        {/* Heading */}
        <h2 className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent drop-shadow-sm md:text-4xl">
          What is Liv Muztang?
        </h2>

        {/* Paragraph Text */}
        <p className="text-base font-medium leading-relaxed text-gray-300 md:text-xl md:leading-loose">
          Liv Muztang stands as a global benchmark in holistic male wellness, representing the
          perfect fusion of{' '}
          <span className="font-bold text-orange-400">rare African super-herbs</span> and
          cutting-edge nutritional science. Born from a commitment to restore vitality naturally,
          our formula is scientifically designed to address the root causes of fatigue and stress,
          helping men reclaim their strength without side effects. We believe every man deserves to
          live with peak energy and unshakeable confidence, which is why{' '}
          <span className="font-extrabold text-white">Liv Muztang</span>—trusted by millions worldwide
          and now available in India—remains your steadfast partner in achieving a healthier, more
          vigorous, and performance-driven life.
        </p>

        {/* Icon Composite: Premium glowing badge effect */}
        

        {/* Call to Action Button Wrapper - Matched to Hero.jsx */}
        <div className="mx-auto animate-pulse rounded-3xl bg-orange-100 p-2">
                    <CallButton></CallButton>
                  </div>
        
      </div>
    </div>
  );
};

export default About;