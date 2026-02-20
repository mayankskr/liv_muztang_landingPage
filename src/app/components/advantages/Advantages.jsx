import React from 'react';
import { FaCheck } from 'react-icons/fa';
import CallButton from '../CallButton';

// Reusable component for each advantage item - Upgraded to mobile-friendly glass cards
const AdvantageItem = ({ title, description }) => {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-black/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] md:flex-row md:items-center md:gap-6 md:p-6">
      {/* Glowing Checkmark Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-500/20 to-amber-500/5 text-xl text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14 md:text-2xl">
        <FaCheck />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold text-white md:text-xl">{title}</h3>
        <p className="text-sm font-medium leading-relaxed text-gray-300 md:text-base md:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const advantages = [
  {
    title: 'टेस्टोस्टेरोन को नैचुरली बढ़ाता है:',
    description: 'शरीर में टेस्टोस्टेरोन की मात्रा को बढ़ाकर ऊर्जा और जोश को बढ़ाता है।',
  },
  {
    title: 'बेहतर इरेक्शन:',
    description:
      'Mondia Whitei के जरिए ब्लड सर्कुलेशन बेहतर होता है, जिससे इरेक्शन मज़बूत और लंबे समय तक बना रहता है।',
  },
  {
    title: 'इच्छा शक्ति में बढ़ोतरी:',
    description: 'यौन इच्छा और जुनून को दोबारा जगाता है।',
  },
  {
    title: 'ज्यादा ऊर्जा और स्टैमिना:',
    description: 'दिन और रात दोनों समय आपको एक्टिव और एनर्जेटिक रखता है।',
  },
  {
    title: 'फर्टिलिटी में सुधार:',
    description: 'स्पर्म क्वालिटी और प्रजनन स्वास्थ्य को सपोर्ट करता है।',
  },
  {
    title: 'परफॉरमेंस एंग्जायटी कम करता है:',
    description: 'आत्मविश्वास बढ़ाता है और तनाव को कम करता है।',
  },
  {
    title: 'संपूर्ण ताकत में सुधार:',
    description: 'इम्यून सिस्टम को मज़बूत बनाता है और सेहत को बेहतर करता है।',
  },
];

const Advantages = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-8 md:gap-12 md:py-12">
      
      {/* Main card container with premium glassmorphism */}
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-black/40 p-6 text-center shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
        
        {/* Headings */}
        <h2 className="mb-4 bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-3xl font-extrabold leading-tight tracking-wide text-transparent md:mb-6 md:text-5xl">
          Advantages
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-base font-medium leading-relaxed text-gray-300 md:mb-12 md:text-xl md:leading-loose">
          Our Men’s health supplements offer a range of benefits designed to improve your overall
          Men’s wellness:
        </p>

        {/* List of Advantages */}
        <div className="mx-auto mb-10 flex max-w-4xl flex-col gap-4 text-left md:mb-12 md:gap-6">
          {advantages.map((item, index) => (
            <AdvantageItem key={index} {...item} />
          ))}
        </div>

        {/* Call to Action Button - Untouched per your request */}
        <div className="mx-auto w-fit animate-pulse rounded-3xl bg-white p-2">
          <CallButton></CallButton>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {/* Image 1: Benefits (Added subtle shadow and hover effect) */}
      <div className="mx-auto w-full max-w-4xl px-2">
       <div className='h-full rounded-4xl overflow-hidden'>
         <img
          src="https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_700/v1770870285/Benefits_webp_odnqw9.webp"
          alt="Liv Muztang Benefits"
          loading="lazy"
          width="700"
          height="700"
          className="mx-auto h-full rounded-3xl object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        />
       </div>
      </div>

      {/* Image 2: How To Use (Upgraded to a premium glass container) */}
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10">
        <img
          src="https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_600/v1770870279/How_To_Use_qdwxto"
          srcSet="
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_400/v1770870279/How_To_Use_qdwxto 400w,
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_800/v1770870279/How_To_Use_qdwxto 800w,
          "
          sizes="(max-width: 768px) 100vw, 800px"
          alt="How to use Liv Muztang"
          loading="lazy"
          width="800"
          height="600"
          className="mx-auto h-auto w-full object-contain p-2 md:p-6"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Advantages;