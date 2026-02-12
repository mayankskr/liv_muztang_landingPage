import React, { useState } from 'react';

/* ---------- Helpers ---------- */
const optimizeCloudinary = (url, w = 400) => {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes('cloudinary.com') && url.includes('/upload/')) {
      return url.replace('/upload/', `/upload/q_auto,f_auto,w_${w}/`);
    }
  } catch (e) {
    // invalid URL fallback
  }
  return url;
};

/* ---------- StarIcon ---------- */
const StarIcon = ({ filled = false, half = false, gradId = 'grad' }) => (
  <svg
    className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    {half ? (
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#4B5563" />
        </linearGradient>
      </defs>
    ) : null}

    <path
      fill={half ? `url(#${gradId})` : 'currentColor'}
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
);

/* ---------- ProgressBar ---------- */
const ProgressBar = ({ label, count, total }) => {
  const percentage = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="mb-2 flex items-center gap-3 text-sm">
      <span className="w-3 font-bold text-white">{label}</span>
      <StarIcon filled={true} />
      <div className="h-4 flex-1 overflow-hidden rounded-md bg-[#F0E4D2]">
        <div
          className="h-full rounded-r-sm bg-orange-500 transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-10 text-right font-mono font-bold text-white">{count}</span>
    </div>
  );
};

/* ---------- ReviewCard (avatar always initial; image shown only below text) ---------- */
const ReviewCard = ({ name, rating = 0, text, img = null }) => {
  const thumb = optimizeCloudinary(img, 256);
  const full = img;

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className="relative flex flex-col gap-3 rounded-2xl border border-white/6 bg-black/6 p-5 shadow-lg backdrop-blur-md transition-all duration-300 md:w-[48%]">
      <div className="flex items-start gap-3">
        {/* Avatar: always initial (no image) */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
          {name?.charAt(0) || 'U'}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white md:text-base">{name}</h4>
            <span className="rounded border border-teal-500/20 bg-teal-500/10 px-2 py-1 text-xs font-semibold text-teal-300">
              Verified
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1">
            {[...Array(totalStars)].map((_, i) => {
              const idx = i;
              const isFull = idx < fullStars;
              const isHalf = idx === fullStars && hasHalf;
              const gradId = `g-${name.replace(/\s+/g, '-')}-${idx}`;
              return <StarIcon key={idx} filled={isFull} half={isHalf} gradId={gradId} />;
            })}
            <span className="ml-2 text-xs text-gray-300"> {rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gray-300 italic">"{text}"</p>

      {/* Image: shown only below text (thumbnail clickable -> full image in new tab) */}
      {thumb && (
        <div className="mt-2">
          <a
            href={full}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block overflow-hidden rounded-lg ring-1 ring-white/5"
          >
            <img
              src={thumb}
              alt={`full-${name}`}
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs object-cover"
            />
          </a>
        </div>
      )}
    </div>
  );
};

/* ---------- Main Testimonials ---------- */
const Testimonials = () => {
  const ratingStats = {
    average: 4.8,
    total: 2409,
    breakdown: [
      { stars: 5, count: 1825 },
      { stars: 4, count: 450 },
      { stars: 3, count: 113 },
      { stars: 2, count: 15 },
      { stars: 1, count: 6 },
    ],
  };

  const reviews = [
    {
      name: 'Ashwini Gupta',
      img: 'https://res.cloudinary.com/dym1rigju/image/upload/v1770870282/yshjdqadqv2yhr1yveek-scaled-1_s2u0xo.png',
      rating: 5,
      text: 'Play More lene ke baad performance aur stamina dono mein improvement feel hua. Aaj ise use karte huye mujhe 1 mahina ho gaya.',
    },

    {
      name: 'Deepak Sahu',
      img: 'https://res.cloudinary.com/dym1rigju/image/upload/q_auto,f_auto,w_800,c_limit/v1770870281/nsjahwowtql5hsbgpzqe-scaled-1_xn4vec.png',
      rating: 5,
      text: 'This Product increased my testosterone levels dramatically. Highly recommended.',
    },
    {
      name: 'Shreesh Sharma',
      img: null,
      rating: 4.5,
      text: 'It’s made with ayurvedic herbs- Safe and Natural. Result thoda slow hai par permanent hai.',
    },
    {
      name: 'Vikram S',
      img: null,
      rating: 5,
      text: 'This helps to increase my size and timing. Delivery was also fast.',
    },
    {
      name: 'Sawan Tomar',
      img: null,
      rating: 5,
      text: 'Nice product, really effective. Packaging was discreet.',
    },
    {
      name: 'Vipin Joshi',
      img: null,
      rating: 4.5,
      text: 'Badhiya product hai. Price thoda kam ho sakta tha.',
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section className="relative z-10 w-full overflow-hidden px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="w-full space-y-2 text-center md:w-1/2 md:text-left">
            <h2 className="mb-1 text-xl font-bold tracking-widest text-orange-400 uppercase">
              Customer Feedback
            </h2>
            <h3 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">2000+ Reviews</h3>

            <div className="flex items-center justify-center gap-4 md:justify-start">
              <span className="text-6xl font-black text-white">{ratingStats.average}</span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={`top-${i}`} filled={true} gradId={`top-${i}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-400">Out of 5 Stars</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Based on {ratingStats.total.toLocaleString()} ratings from verified users
            </p>
          </div>

          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:w-1/2 lg:w-5/12">
            {ratingStats.breakdown.map((item) => (
              <ProgressBar
                key={item.stars}
                label={item.stars}
                count={item.count}
                total={ratingStats.total}
              />
            ))}
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:flex md:shrink md:flex-wrap">
          {visibleReviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3 font-bold tracking-wider text-white uppercase transition-all duration-500 hover:bg-white hover:text-orange-500"
          >
            {showAll ? 'Show Less' : 'Read All Reviews'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
