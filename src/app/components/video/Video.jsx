import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

const expertVideos = [
  {
    id: 1,
    title: "How we take care of each other's happiness",
    thumbnail: 'https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto/v1771584394/01_wdhidw.jpg', 
    videoUrl: 'https://res.cloudinary.com/dym1rigju/video/upload/f_auto,q_auto/v1771564024/LM1_bndzpl.mp4', 
  },
  {
    id: 2,
    title: 'Restore your energy the Ayurvedic and natural way.',
    thumbnail: 'https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto/v1771584395/02_tyg1ve.jpg', 
    videoUrl: 'https://res.cloudinary.com/dym1rigju/video/upload/f_auto,q_auto/v1771563981/LM2_aag4tq.mp4',
  },
  {
    id: 3,
    title: 'One Ayurvedic product l answer all your concerns.',
    thumbnail: 'https://res.cloudinary.com/dym1rigju/image/upload/f_auto,q_auto/v1771584395/03_bl7ub5.jpg',
    videoUrl: 'https://res.cloudinary.com/dym1rigju/video/upload/f_auto,q_auto/v1771563971/LM3_wgcd9n.mp4', 
  },
];

const ExpertViews = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true); // 1. New loading state
  const scrollRef = useRef(null);

  useEffect(() => {
    if (selectedVideo) return;
    const container = scrollRef.current;
    
    const scrollTimer = setInterval(() => {
      if (container) {
        const { scrollLeft, scrollWidth, offsetWidth } = container;
        if (scrollLeft + offsetWidth >= scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: offsetWidth, behavior: 'smooth' });
        }
      }
    }, 3000); 

    return () => clearInterval(scrollTimer);
  }, [selectedVideo]);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  // Handle opening a video and resetting the loading state
  const handleOpenVideo = (video) => {
    setSelectedVideo(video);
    setIsVideoLoading(true); // Ensure it shows loading initially
  };

  return (
    <section className="container mx-auto py-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 md:space-y-10">
        
        <div className="px-4 text-center md:px-8">
          <h2 className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent drop-shadow-sm md:text-5xl">
            Expert Views
          </h2>
        </div>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <div 
          ref={scrollRef}
          className="hide-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-8 pt-4 sm:gap-6 md:px-8"
        >
          {expertVideos.map((video) => (
            <div
              key={video.id}
              className="group relative w-full shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="relative aspect-3/2 md:aspect-square w-full bg-black/40">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                
                <div
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/10"
                  onClick={() => handleOpenVideo(video)}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]  transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                    <FaPlay className="ml-1 text-2xl text-white drop-shadow-lg md:text-3xl" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 via-black/40 to-transparent p-5 pt-12">
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 backdrop-blur-2xl transition-all duration-300">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedVideo(null)}
          ></div>

          <div className="relative z-10 w-full max-w-5xl rounded-2xl border border-white/10 bg-black shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden">
            
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-0 -top-12 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-orange-500 md:right-6 md:top-6"
              aria-label="Close video"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="relative w-full bg-black/90 flex items-center justify-center" style={{ maxHeight: '85vh', minHeight: '300px' }}>
              
              {/* 2. Loading Spinner Overlay */}
              {isVideoLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-orange-500"></div>
                </div>
              )}

              {/* 3. Added loading events to the video tag */}
              <video
                controls
                autoPlay
                playsInline
                className="h-full max-h-[85vh] w-full object-contain relative z-0"
                controlsList="nodownload"
                onLoadStart={() => setIsVideoLoading(true)}
                onCanPlay={() => setIsVideoLoading(false)}
                onWaiting={() => setIsVideoLoading(true)}
                onPlaying={() => setIsVideoLoading(false)}
              >
                <source src={selectedVideo.videoUrl} />
                Your browser does not support the video tag.
              </video>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpertViews;