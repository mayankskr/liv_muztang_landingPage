import CallButton from '../CallButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full rounded-b-3xl border-b border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl transition-all duration-300 md:rounded-b-[2.5rem]">
      {/* Container to keep content centered and aligned with the rest of the site */}
      <div className="container mx-auto flex min-h-14 items-center justify-center gap-4 px-4 py-2 md:min-h-18 md:gap-6">
        
        <div>
          <p className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-sm font-extrabold tracking-wide text-transparent drop-shadow-md sm:text-base md:text-xl">
            निःशुल्क परामर्श
          </p>
        </div>

        {/* Call Button Container - Untouched per your request */}
        <div className="animate-pulse">
          <CallButton></CallButton>
        </div>

      </div>
    </header>
  );
}