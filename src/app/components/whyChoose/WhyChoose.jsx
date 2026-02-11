import React from 'react';
import { FaRunning, FaMortarPestle, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBalance } from 'react-icons/md';
import { PhoneIcon } from 'lucide-react';
import CallButton from '../CallButton';
// Reusable component for each feature item
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <div className="shrink-0 text-4xl text-orange-500">{icon}</div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="leading-relaxed text-gray-200">{description}</p>
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
    <section className="">
      <div className="mx-auto">
        {/* Main card container with dark, semi-transparent background */}
        <div className="rounded-4xl bg-black/60 p-8 text-center backdrop-blur-md md:p-16">
          {/* Headings */}
          <h2 className="mb-6 text-3xl leading-tight font-extrabold text-orange-500 md:text-5xl">
            Why Choose LIV MUZTANG Over Other Men’s Health Supplements?
          </h2>
          <p className="mx-auto mb-12 max-w-4xl text-lg text-white md:text-xl">
            Choosing the right men’s health supplement can be overwhelming, but here’s why LIV
            MUZTANG stands out:
          </p>

          {/* Grid for features */}
          <div className="mb-12 grid grid-cols-1 gap-x-12 gap-y-12 text-left md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
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

export default WhyChoose;
