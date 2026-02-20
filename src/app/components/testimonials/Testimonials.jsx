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
    className={`h-5 w-5 md:h-6 md:w-6 drop-shadow-sm ${filled ? 'text-yellow-400' : 'text-white/20'}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    {half ? (
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
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
    <div className="mb-3 flex items-center gap-3 text-sm md:text-base">
      <span className="w-4 text-center font-bold text-gray-200">{label}</span>
      <StarIcon filled={true} />
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-black/40 shadow-inner md:h-4">
        <div
          className="h-full rounded-full bg-linear-to-r from-orange-500 to-amber-400 transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-12 text-right font-mono font-bold text-gray-300">
        {count.toLocaleString()}
      </span>
    </div>
  );
};

/* ---------- ReviewCard ---------- */
const ReviewCard = ({ name, rating = 0, text, img = null }) => {
  const thumb = optimizeCloudinary(img, 300);
  const full = img;

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl md:w-[calc(50%-0.75rem)]">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-amber-500 text-xl font-bold text-white shadow-md md:h-14 md:w-14 md:text-2xl">
          {name?.charAt(0) || 'U'}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-white md:text-lg">{name}</h4>
            <span className="flex items-center gap-1 rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-teal-300 shadow-inner">
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
            <span className="ml-2 text-sm font-medium text-gray-300"> {rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <p className="text-base leading-relaxed text-gray-300 italic md:text-lg md:leading-relaxed">"{text}"</p>

      {/* Image Thumbnail */}
      {thumb && (
        <div className="mt-2 mx-auto overflow-hidden w-fit rounded-xl ">
          <a
            href={full}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={thumb}
              alt={`Review by ${name}`}
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-50 object-cover transition-transform duration-500 group-hover:scale-105"
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
      img: 'https://res.cloudinary.com/dym1rigju/image/upload/v1771586685/testimonial2_mra5jm.webp',
      rating: 5,
      text: 'Liv Muztang lene ke baad performance aur stamina dono mein improvement feel hua. Aaj ise use karte huye mujhe 1 mahina ho gaya.',
    },
    {
      name: 'Deepak Sahu',
      img: 'https://res.cloudinary.com/dym1rigju/image/upload/v1771586685/testimonial1_sd3a1b.webp',
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
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="mx-auto max-w-6xl space-y-10 md:space-y-14">
        
        {/* Header & Stats Container */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-stretch lg:gap-16">
          
          {/* Left: Text & Average Rating */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:justify-center md:text-left">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] text-orange-400 uppercase md:text-base">
              Customer Feedback
            </h2>
            <h3 className="mb-6 bg-linear-to-r from-white to-gray-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl">
              2000+ Reviews
            </h3>

            <div className="flex items-center gap-4 md:gap-6">
              <span className="text-6xl font-black tracking-tighter text-white drop-shadow-lg md:text-7xl">
                {ratingStats.average}
              </span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1 drop-shadow-md">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={`top-${i}`} filled={true} gradId={`top-${i}`} />
                  ))}
                </div>
                <span className="text-xs font-medium tracking-wide text-gray-400 md:text-sm uppercase">
                  Out of 5 Stars
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-gray-400 md:mt-6 md:text-base">
              Based on <span className="text-white">{ratingStats.total.toLocaleString()}</span> ratings from verified users.
            </p>
          </div>

          {/* Right: Progress Bars Box */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:w-1/2 md:p-8 lg:w-5/12">
            <div className="flex flex-col gap-1">
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
        </div>

        {/* Reviews Grid */}
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6">
          {visibleReviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center pt-2 md:pt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden rounded-full bg-linear-to-r from-orange-600 to-amber-500 px-8 py-3.5 font-bold tracking-wider text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] focus:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400/50 md:px-10 md:py-4 md:text-lg"
          >
            {/* Inner highlight for 3D effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="relative z-10 drop-shadow-md uppercase">
              {showAll ? 'Show Less' : 'Read All Reviews'}
            </span>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;