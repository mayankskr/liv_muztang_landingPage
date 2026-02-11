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
    <section className="">
      <div className="mx-auto">
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
      </div>
    </section>
  );
};

export default Advantages;
