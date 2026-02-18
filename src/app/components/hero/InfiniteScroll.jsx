import React, { useMemo } from 'react';
import { GoShieldCheck } from 'react-icons/go';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { LuWheatOff } from 'react-icons/lu';
import { TbCandyOff, TbCertificate, TbAward } from 'react-icons/tb';

const InfiniteScroll = () => {
  const benefits = useMemo(
    () => [
      'INCREASES STAMINA',
      'BOOSTS TESTOSTERONE',
      'ELIMINATES WEAKNESS',
      'IMPROVES PERFORMANCE',
      'STRONGER ERECTION',
      'INCREASES SPERM COUNT',
      'REDUCES STRESS',
      'NATURAL ENERGY',
      'ENHANCES LIBIDO',
      'MUSCLE RECOVERY',
    ],
    []
  );

  const ingredients = useMemo(
    () => [
      { title: '100% Ayurvedic', description: 'Natural healing', icon: <GoShieldCheck className="text-2xl md:text-3xl" /> },
      { title: 'Clinically Proven', description: 'Scientific validation', icon: <BiSolidBadgeCheck className="text-2xl md:text-3xl" /> },
      { title: 'Gluten Free', description: 'Safe for all diets', icon: <LuWheatOff className="text-2xl md:text-3xl" /> },
      { title: 'No Added Sugar', description: 'Pure & natural', icon: <TbCandyOff className="text-2xl md:text-3xl" /> },
      { title: 'GMP Certified', description: 'Quality standard', icon: <TbCertificate className="text-2xl md:text-3xl" /> },
      { title: 'ISO Certified', description: 'International standards', icon: <TbAward className="text-2xl md:text-3xl" /> },
    ],
    []
  );

  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden py-6 md:gap-6 md:py-8">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .gpu-accelerate {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>

      {/* Row 1: Benefits (Text) */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div
          className="gpu-accelerate flex gap-8 whitespace-nowrap md:gap-24"
          style={{ animation: 'scrollLeft 90s linear infinite' }}
        >
          {[...benefits, ...benefits, ...benefits].map((text, i) => (
            <span
              key={`ben-${i}`}
              className="cursor-default select-none text-xl font-black tracking-wider text-white/70 transition-all duration-300 hover:text-orange-500 md:text-4xl"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Ingredients & Certifications (Cards) */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div
          className="gpu-accelerate flex gap-4 whitespace-nowrap md:gap-8"
          style={{ animation: 'scrollRight 70s linear infinite' }}
        >
          {[...ingredients, ...ingredients, ...ingredients].map((item, i) => (
            <div
              key={`ing-${i}`}
              className="group flex cursor-default items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 transition-all duration-300 hover:bg-white/10 md:gap-4 md:px-6 md:py-3"
            >
              <div className="text-orange-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-300">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-100 transition-colors duration-300 group-hover:text-white md:text-base">
                  {item.title}
                </span>
                <span className="text-[10px] font-medium text-gray-400 transition-colors duration-300 group-hover:text-orange-200 md:text-xs">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(InfiniteScroll);