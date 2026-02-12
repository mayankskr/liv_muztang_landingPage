import React from 'react';
import { FaCheck } from 'react-icons/fa';
import CallButton from '../CallButton';
// Reusable component for each advantage item
const AdvantageItem = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4">
      {/* Orange Checkmark Icon */}
      <div className="mt-1 shrink-0 text-2xl text-orange-500">
        <FaCheck />
      </div>
      <div>
        <h3 className="mb-1 text-lg leading-snug font-bold text-white md:text-xl">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-200 md:text-base">{description}</p>
      </div>
    </div>
  );
};

const Advantages = () => {
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

  return (
    <div>
      {/* Main card container with dark, semi-transparent background */}
      <div className="rounded-4xl border border-white/10 bg-black/60 p-8 text-center shadow-2xl backdrop-blur-md md:p-16">
        {/* Headings */}
        <h2 className="mb-4 text-3xl leading-tight font-extrabold text-orange-500 md:text-5xl">
          Advantages
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-white md:text-xl">
          Our Men’s health supplements offer a range of benefits designed to improve your overall
          Men’s wellness:
        </p>

        {/* List of Advantages */}
        <div className="mx-auto mb-12 flex max-w-4xl flex-col gap-6 text-left">
          {advantages.map((item, index) => (
            <AdvantageItem key={index} {...item} />
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mx-auto w-fit animate-pulse rounded-3xl bg-orange-100 p-2">
          <CallButton></CallButton>
        </div>
      </div>
      <img
        // 1. Fallback for old browsers
        src="https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_700/v1770870285/Benefits_webp_odnqw9"
        // 2. Responsive versions (Mobile, Tablet, Desktop)
        srcSet="
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_350/v1770870285/Benefits_webp_odnqw9 350w,
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_700/v1770870285/Benefits_webp_odnqw9 700w,
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_1000/v1770870285/Benefits_webp_odnqw9 1000w
        "
        // 3. Browser logic: "If screen is < 768px, assume image is 90% of screen. Else, it's 700px wide."
        sizes="(max-width: 768px) 90vw, 700px"
        alt="Liv Muztang Benefits"
        loading="lazy"
        width="700"
        height="700"
        className="mx-auto my-2 h-auto max-w-full"
      />{' '}
      <img
        src="https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_600/v1770870279/How_To_Use_qdwxto"
        srcSet="
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_400/v1770870279/How_To_Use_qdwxto 400w,
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_800/v1770870279/How_To_Use_qdwxto 800w,
          https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto,w_1200/v1770870279/How_To_Use_qdwxto 1200w
        "
        sizes="(max-width: 768px) 100vw, 800px"
        alt="How to use Liv Muztang"
        loading="lazy"
        width="800"
        height="600"
        className="mx-auto rounded-xl object-contain"
      />
    </div>
  );
};

export default Advantages;
