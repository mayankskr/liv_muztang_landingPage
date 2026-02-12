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
    <>
      <InfiniteScroll />
      <div className="back grid md:grid-cols-2">
        <div>
          <img
            // Fallback src (small size)
            src={`${CLOUDINARY_BASE}/f_auto,q_auto,w_400/${IMG_ID}`}
            // Responsive source set
            srcSet={`
              ${CLOUDINARY_BASE}/f_auto,q_auto,w_300/${IMG_ID} 300w,
              ${CLOUDINARY_BASE}/f_auto,q_auto,w_600/${IMG_ID} 600w,
              ${CLOUDINARY_BASE}/f_auto,q_auto,w_900/${IMG_ID} 900w
            `}
            // Browser hint for image size
            sizes="(max-width: 768px) 100vw, 50vw"
            fetchPriority="high"
            alt="Liv Muztang Bottle Product"
            width="400"
            height="400"
            className="relative z-20 mx-auto max-h-60 object-contain md:max-h-120"
          />
        </div>
        <div className="mx-1 my-auto flex h-fit flex-col gap-3 rounded-4xl bg-black/20 py-4 text-center text-white backdrop-blur-md">
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">पॉवर, जोश और टाइमिंग बढ़ाएं</h1>
          <h2 className="text-md font-bold md:text-xl lg:text-2xl">
            ज़्यादा स्टैमिना, ज़्यादा एनर्जी, ज़्यादा कॉन्फिडेन्स
          </h2>

          <div className="mx-auto bg-linear-to-r from-white to-orange-400 bg-clip-text">
            <img
              src={logoImg}
              fetchPriority="high"
              alt="Liv Muztang Logo"
              className="max-h-16 object-contain md:max-h-24"
            />
          </div>

          <p className="text-2xl font-bold">(AFRICAN HERBS)</p>

          <div className="flex items-center justify-center gap-2 md:text-lg">
            <p>Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p>4.8 Rating By 58040 Users</p>
          </div>
          <div className="mx-auto animate-pulse rounded-3xl bg-orange-100 p-2">
            <CallButton></CallButton>
          </div>
        </div>
      </div>
      <ProductDescription></ProductDescription>
    </>
  );
}
