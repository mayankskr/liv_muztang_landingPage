import InfiniteScroll from './InfiniteScroll';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Import assets for better caching and performance
import bottleImg from '../../../assets/2Bottle.webp';
import logoImg from '../../../assets/LIV_MUZTANG.png';
import ProductDescription from './ProductDescription';
import CallButton from '../CallButton.jsx';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dym1rigju/image/upload';
const IMG_ID = 'v1770870277/2Bottle_mectjk';

export default function Hero() {
  return (
    <div className="overflow-hidden font-sans text-white antialiased">
      <InfiniteScroll />
      
      <div className="container mx-auto px-4 py-6 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          
          {/* Product Image Section - Mobile First */}
          <div className="mt-4 flex justify-center md:mt-0">
            <div className="group relative">
              {/* Pulsating ambient glow for mobile attention */}
              <div className="absolute -inset-4 animate-pulse rounded-full bg-linear-to-r from-orange-600 to-amber-500 opacity-30 blur-3xl transition duration-1000 md:opacity-20 md:group-hover:opacity-40"></div>
              <img
                src={`${CLOUDINARY_BASE}/f_auto,q_auto,w_400/${IMG_ID}`}
                srcSet={`
                  ${CLOUDINARY_BASE}/f_auto,q_auto,w_300/${IMG_ID} 300w,
                  ${CLOUDINARY_BASE}/f_auto,q_auto,w_600/${IMG_ID} 600w,
                  ${CLOUDINARY_BASE}/f_auto,q_auto,w_900/${IMG_ID} 900w
                `}
                sizes="(max-width: 768px) 100vw, 50vw"
                fetchPriority="high"
                alt="Liv Muztang Bottle Product"
                width="400"
                height="400"
                className="relative z-20 mx-auto max-h-64 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 md:max-h-120"
              />
            </div>
          </div>

          {/* Text & Content Section */}
          <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-xl md:gap-6 md:p-12">
            
            <div className="space-y-1 md:space-y-2">
              <h1 className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-2xl font-extrabold leading-tight tracking-wide text-transparent md:text-3xl lg:text-4xl">
                पॉवर, जोश और टाइमिंग बढ़ाएं
              </h1>
              <h2 className="text-lg font-semibold leading-snug text-orange-400 md:text-xl lg:text-2xl">
                ज़्यादा स्टैमिना, ज़्यादा एनर्जी, ज़्यादा कॉन्फिडेन्स
              </h2>
            </div>

            <div className="py-1">
              <img
                src={logoImg}
                fetchPriority="high"
                alt="Liv Muztang Logo"
                className="max-h-16 object-contain drop-shadow-lg md:max-h-24"
              />
            </div>

            <p className="text-lg font-bold uppercase tracking-widest text-amber-500/90 md:text-xl">
              (African Herbs)
            </p>

            {/* Premium Rating Pill - Optimized for touch/mobile */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5  md:px-6 md:py-3">
              <span className="text-sm font-semibold text-gray-200 md:text-base">Rating: </span>
              <div className="flex items-center text-base text-yellow-400 drop-shadow-md md:text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <span className="text-xs font-medium text-gray-300 md:text-base">
                <strong className="text-white">4.8</strong> (58,040+ Users)
              </span>
            </div>

            {/* Call Button Container - Untouched from your file */}
            <div className="mx-auto animate-pulse rounded-3xl bg-orange-100 p-2">
            <CallButton></CallButton>
          </div>

          </div>
        </div>
      </div>
      
      <ProductDescription />
    </div>
  );
}