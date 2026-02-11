import React from 'react';
import { FaMars } from 'react-icons/fa'; // Standard Male Symbol

const About = () => {
  return (
    <div className="">
      <div className="relative m-1 flex flex-col items-center gap-6 rounded-3xl border-2 border-white p-2 text-center text-white shadow-2xl backdrop-blur-md md:p-10">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-amber-500 drop-shadow-sm md:text-4xl">
          What is Liv Muztang?
        </h2>

        {/* Paragraph Text */}
        <p className="text-lg leading-relaxed text-gray-100 md:text-xl">
          Liv Muztang stands as a global benchmark in holistic male wellness, representing the
          perfect fusion of{' '}
          <span className="font-semibold text-orange-400">rare African super-herbs</span> and
          cutting-edge nutritional science. Born from a commitment to restore vitality naturally,
          our formula is scientifically designed to address the root causes of fatigue and stress,
          helping men reclaim their strength without side effects. We believe every man deserves to
          live with peak energy and unshakeable confidence, which is why{' '}
          <span className="font-bold text-white">Liv Muztang</span>—trusted by millions worldwide
          and now available in India—remains your steadfast partner in achieving a healthier, more
          vigorous, and performance-driven life.
        </p>

        {/* Icon Composite: Simulating the icon in the image */}
        <div className="relative my-4">
          {/* The base Male symbol */}
          <div className="inline-flex items-center justify-center rounded-full border-4 border-white p-3">
            <FaMars className="text-5xl text-white" />
            {/* Overlay checkmark to match the 'verified' look */}
          </div>
        </div>

        {/* Call to Action Button */}
        <a
          href="tel:+910000000000"
          className="animate-pulse rounded-full bg-orange-100 px-10 py-3 text-lg font-semibold text-black"
        >
          CALL NOW
        </a>
      </div>
    </div>
  );
};

export default About;
