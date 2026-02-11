import React, { useMemo } from 'react';
import { GoShieldCheck } from "react-icons/go";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { LuWheatOff } from "react-icons/lu";
import { TbCandyOff, TbCertificate, TbAward } from "react-icons/tb"; 

const InfiniteScroll = () => {
  // useMemo prevents these arrays from being recreated on every render
  const benefits = useMemo(() => [
    "INCREASES STAMINA", "BOOSTS TESTOSTERONE", "ELIMINATES WEAKNESS",
    "IMPROVES PERFORMANCE", "STRONGER ERECTION", "INCREASES SPERM COUNT",
    "REDUCES STRESS", "NATURAL ENERGY", "ENHANCES LIBIDO", "MUSCLE RECOVERY"
  ], []);

  const ingredients = useMemo(() => [
    {
      title: "100% Ayurvedic",
      description: "Natural healing principles",
      icon: <GoShieldCheck className="text-4xl" />,
    },
    {
      title: "Clinically Proven",
      description: "Scientific validation",
      icon: <BiSolidBadgeCheck className="text-4xl" />,
    },
    {
      title: "Gluten Free",
      description: "Safe for all diets",
      icon: <LuWheatOff className="text-4xl" />,
    },
    {
      title: "No Added Sugar",
      description: "Pure & natural",
      icon: <TbCandyOff className="text-4xl" />,
    },
    {
      title: "GMP Certified",
      description: "Quality standard",
      icon: <TbCertificate className="text-4xl" />,
    },
    {
      title: "ISO Certified",
      description: "International standards",
      icon: <TbAward className="text-4xl" />,
    },
  ], []);

  return (
    <div className="w-full py-4 gap-2 flex flex-col overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        /* Performance class to promote to GPU layer */
        .gpu-accelerate {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>

      {/* Row 1: Benefits (Text) */}
      <div 
        className="relative flex w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)' }}
      >
        <div 
          className="flex whitespace-nowrap gap-10 md:gap-20 gpu-accelerate"
          style={{ animation: 'scrollLeft 120s linear infinite' }}
        >
          {[...benefits, ...benefits, ...benefits].map((text, i) => (
            <span 
              key={`ben-${i}`} 
              className="text-2xl md:text-4xl font-black text-amber-100 shadow-xl cursor-default transition-all duration-300 hover:text-orange-500 hover:scale-105 select-none"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Ingredients & Certifications (Cards) */}
      <div 
        className="relative flex w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 35%, black 65%, transparent)' }}
      >
        <div 
          className="flex whitespace-nowrap gap-6 md:gap-10 gpu-accelerate"
          style={{ animation: 'scrollRight 60s linear infinite' }}
        >
          {[...ingredients, ...ingredients, ...ingredients].map((item, i) => (
            <div 
              key={`ing-${i}`} 
              className="group text-amber-100 flex items-center gap-4 p-4 rounded-2xl cursor-default transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="transition-colors duration-300 group-hover:text-orange-500">
                {item.icon}
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-bold transition-colors duration-300 group-hover:text-orange-500">
                  {item.title}
                </span>
                <span className="text-sm font-medium transition-colors duration-300 group-hover:text-orange-400">
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