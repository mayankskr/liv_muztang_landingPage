import React from 'react';
import { FaRunning, FaMortarPestle, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBalance } from 'react-icons/md';
import CallButton from '../CallButton';

// Reusable component for each feature item - Upgraded to a premium glass card
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-black/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg md:flex-row md:items-center md:gap-6 md:p-8">
      {/* Glowing icon container */}
      <div className="flex shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500/20 to-amber-500/5 p-4 text-4xl text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-transform duration-300 group-hover:scale-110 md:p-5 md:text-5xl">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-white md:text-xl">{title}</h3>
        <p className="text-sm font-medium leading-relaxed text-gray-300 md:text-base md:leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  const features = [
    {
      icon: <FaRunning />,
      title: 'दुनिया भर में भरोसेमंद:',
      description:
        'LIV MUZTANG को दुनियाभर में इस्तेमाल किया जा रहा है, और यह एक ग्लोबल फेवरेट बन चुका है।',
    },
    {
      icon: <FaMortarPestle />,
      title: 'शुद्ध आयुर्वेद और 100% प्राकृतिक जड़ी-बूटियाँ:',
      description:
        'यह शुद्ध अफ्रीकी हर्ब्स से बना है, जिसमें कोई हानिकारक केमिकल या मिलावट नहीं है।',
    },
    {
      icon: <MdOutlineBalance />,
      title: 'हार्मोन संतुलन के लिए मल्टी-एक्शन फॉर्मूला:',
      description:
        'यह आपकी इच्छा शक्ति, ऊर्जा, हार्मोन बैलेंस, फर्टिलिटी, मूड और साइज को नेचुरली बढ़ाने में मदद करता है।',
    },
    {
      icon: <FaHeartbeat />,
      title: 'संपूर्ण यौन स्वास्थ्य:',
      description:
        'यह फॉर्मूला पूरी तरह से सुरक्षित है और बिना किसी साइड इफेक्ट्स के असरदार रिजल्ट देता है।',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/40 p-6 text-center shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
        
        {/* Headings */}
        <h2 className="mb-4 bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-2xl font-extrabold leading-tight tracking-wide text-transparent md:mb-6 md:text-4xl lg:text-5xl">
          Why Choose LIV MUZTANG Over Other Men’s Health Supplements?
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-base font-medium leading-relaxed text-gray-300 md:mb-12 md:text-xl md:leading-loose">
          Choosing the right men’s health supplement can be overwhelming, but here’s why LIV
          MUZTANG stands out:
        </p>

        {/* Grid for features */}
        <div className="mb-8 grid grid-cols-1 gap-4 text-left md:mb-12 md:grid-cols-2 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>

        {/* Call to Action Button Wrapper - Matched to standard layout */}
        <div className="mx-auto w-fit animate-pulse rounded-3xl bg-white p-2">
                            <CallButton></CallButton>
                          </div>
        
      </div>
    </section>
  );
};

export default WhyChoose;