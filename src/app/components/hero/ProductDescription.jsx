const ProductDescription = () => {
  return (
    <div className="container mx-auto px-4 pb-8 md:pb-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-5 text-center shadow-2xl backdrop-blur-xl md:p-14">
        
        <div className="mb-6 space-y-5 md:mb-8 md:space-y-6">
          <p className="text-lg font-medium leading-relaxed text-gray-100 md:text-2xl md:leading-loose">
            दुनिया का सबसे बेहतरीन पुरुषों का वेलनेस फ़ॉर्मूला, जो{' '}
            <strong className="font-extrabold">
              <span className="animate-shine bg-linear-to-r from-orange-500 via-white to-orange-500 bg-size-[200%_auto] bg-clip-text text-transparent">
                प्रदर्शन, स्टैमिना और साइज़
              </span>
            </strong>{' '}
            बढ़ाने में मदद करता है।
          </p>
          <p className="text-lg font-medium leading-relaxed text-gray-100 md:text-2xl md:leading-loose">
            अफ्रीकन सुपर हर्ब्स से बना{' '}
            <span className="animate-shine bg-linear-to-r from-orange-500 via-white to-orange-500 bg-size-[200%_auto] bg-clip-text font-bold text-transparent">
              LIV MUZTANG
            </span>{' '}
            उन पुरुषों की पहली पसंद है जो अपनी सेहत पर पूरा नियंत्रण चाहते हैं।
          </p>
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-3 py-3 opacity-50 md:gap-4 md:py-4">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-white md:w-16"></div>
          <div className="h-1.5 w-1.5 rotate-45 bg-orange-500"></div>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-white md:w-16"></div>
        </div>

        <div className="mt-3 space-y-4 md:mt-4">
          <p className="text-base font-medium leading-relaxed text-gray-300 md:text-xl md:leading-loose">
            World’s best Men’s Wellness formula designed to boost your vitality, energy, and overall
            well-being naturally. Powered by African Super Herbs,{' '}
            <span className="animate-shine bg-linear-to-r from-orange-500 via-white to-orange-500 bg-size-[200%_auto] bg-clip-text font-bold text-transparent">
              LIV MUZTANG
            </span>{' '}
            is the trusted choice for Men who want to take charge of their personal health.
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes shine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-shine {
            animation: shine 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ProductDescription;