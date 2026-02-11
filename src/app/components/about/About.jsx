import React from 'react';
import { FaMars } from "react-icons/fa"; // Standard Male Symbol

const About = () => {
  return (
    <div className="">
      <div 
        className="
            relative
            p-2
            m-1
            md:p-10
            rounded-3xl
            backdrop-blur-md
            border-2 border-white
            text-center
            text-white
            shadow-2xl
            flex flex-col items-center gap-6
        "

      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-500 drop-shadow-sm">
          What is Liv Muztang?
        </h2>

        {/* Paragraph Text */}
       <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
          Liv Muztang stands as a global benchmark in holistic male wellness, representing the perfect fusion of <span className="text-orange-400 font-semibold">rare African super-herbs</span> and cutting-edge nutritional science. Born from a commitment to restore vitality naturally, our formula is scientifically designed to address the root causes of fatigue and stress, helping men reclaim their strength without side effects. We believe every man deserves to live with peak energy and unshakeable confidence, which is why <span className="text-white font-bold">Liv Muztang</span>—trusted by millions worldwide and now available in India—remains your steadfast partner in achieving a healthier, more vigorous, and performance-driven life.
        </p>

        {/* Icon Composite: Simulating the icon in the image */}
        <div className="relative my-4">
            {/* The base Male symbol */}
            <div className="border-4 border-white rounded-full p-3 inline-flex items-center justify-center">
                 <FaMars className="text-5xl text-white" />
                 {/* Overlay checkmark to match the 'verified' look */}
            </div>
        </div>

        {/* Call to Action Button */}
        <a 
          href="tel:+910000000000"
          className="
            bg-orange-100 
            text-black font-semibold text-lg
            px-10 py-3 
            rounded-full 
            animate-pulse
          "
        >
          CALL NOW
        </a>
      </div>
    </div>
  );
};

export default About;