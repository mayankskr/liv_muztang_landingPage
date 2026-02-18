import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

// Sample data - Replace these URLs with your actual Cloudinary/Hosting links
const expertVideos = [
  {
    id: 1,
    title: 'How to Grow?',
    thumbnail: 'https://res.cloudinary.com/dym1rigju/image/upload/v1770870281/nsjahwowtql5hsbgpzqe-scaled-1_xn4vec.png', 
    videoUrl: 'https://www.dropbox.com/scl/fi/vi2iwhgno2swb98dm6uqw/Liv-Muztang_Rajiv-Kumar_Hindi_Landscape_49Sec_9311742962-V1.mp4?rlkey=bcukw3bzxwxcew6ww1hxiw8cn&st=fn58l910&raw=1', 
  },
  {
    id: 2,
    title: 'What is Liv Muztang?',
    thumbnail: 'https://res.cloudinary.com/dym1rigju/image/upload/v1770870282/yshjdqadqv2yhr1yveek-scaled-1_s2u0xo.png', 
    videoUrl: 'https://www.dropbox.com/scl/fi/nri8kxw4hxlwgnz6hdxo5/Liv_Muztang_Poonam_Pandey_Rapid_Fire_Landscape_Hindi_02min_41sec_9311742962.mp4?rlkey=42r9c8azhg76c4lshcbnikx5c&st=da5wr9vb&raw=1',
  },
  {
    id: 3,
    title: 'Talk About Sex',
    thumbnail: 'https://res.cloudinary.com/dym1rigju/image/upload/v1770870281/nsjahwowtql5hsbgpzqe-scaled-1_xn4vec.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/6c2386xazrxqfjal60yht/Liv_Muztang_Women-Desire-1-Testimonial_Hindi_Square_03Min_04Sec_8130706706.mp4?rlkey=j3d3llrh7tbjmn4lawm2u8pjv&st=i0todcla&raw=1', 
  },
  // Add a 4th or 5th video here to really see the looping auto-scroll shine!
];

const ExpertViews = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    // Pause the auto-scroller if the cinematic video modal is open
    if (selectedVideo) return;

    const container = scrollRef.current;
    
    const scrollTimer = setInterval(() => {
      if (container) {
        const { scrollLeft, scrollWidth, offsetWidth } = container;
        
        // If we've reached the end of the scroll container, loop smoothly back to the start
        if (scrollLeft + offsetWidth >= scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll right by exactly the width of one visible area
          container.scrollBy({ left: offsetWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Scrolls every 3 seconds

    // Cleanup the timer when the component unmounts or state changes
    return () => clearInterval(scrollTimer);
  }, [selectedVideo]);

  // Prevent background scrolling when the video modal is open
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

  return (
    <section className="container mx-auto py-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 md:space-y-10">
        
        {/* Section Heading */}
        <div className="px-4 text-center md:px-8">
          <h2 className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent drop-shadow-sm md:text-5xl">
            Expert Views
          </h2>
        </div>

        {/* CSS to hide the scrollbar but keep functionality */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Horizontal Scroller Container */}
        <div 
          ref={scrollRef}
          className="hide-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-8 pt-4 sm:gap-6 md:px-8"
        >
          {expertVideos.map((video) => (
            <div
              key={video.id}
              // w-full makes it take 100% width (1 column) on mobile. 
              // md:w-[calc(33.333%-1rem)] calculates width for 3 columns on desktop.
              className="group relative w-full shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-4/5 w-full bg-black/40">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                
                {/* Play Overlay */}
                <div
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/10"
                  onClick={() => setSelectedVideo(video)}
                >
                  {/* Premium Play Button */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                    <FaPlay className="ml-1 text-2xl text-white drop-shadow-lg md:text-3xl" />
                  </div>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 via-black/40 to-transparent p-5 pt-12">
                  <h3 className="text-lg font-bold text-white drop-shadow-md md:text-xl">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Cinematic Video Modal Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 backdrop-blur-2xl transition-all duration-300">
          
          {/* Close Background Hitbox */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedVideo(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-5xl rounded-2xl border border-white/10 bg-black shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-0 -top-12 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-orange-500 md:right-6 md:top-6"
              aria-label="Close video"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Video Player (Bounded by height to prevent stretching on desktop) */}
            <div className="relative w-full bg-black/90" style={{ maxHeight: '85vh' }}>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="h-full max-h-[85vh] w-full object-contain"
                controlsList="nodownload"
              >
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