const ProductDescription = () => {
  return (
    <div className="ProductDescription container mx-auto">
      <div className="m-1 rounded-4xl bg-black/20 p-2 text-center text-white backdrop-blur-md md:p-10">
        <div className="mb-8 space-y-4">
          <p className="text-xl leading-relaxed font-medium md:text-2xl">
            दुनिया का सबसे बेहतरीन पुरुषों का वेलनेस फ़ॉर्मूला, जो{' '}
            <strong className="font-extrabold text-white">
              <span
                className="bg-linear-to-r from-orange-500 via-white to-orange-500 bg-size-[200%_auto] bg-clip-text text-transparent"
                style={{ animation: 'shine 3s linear infinite' }}
              >
                प्रदर्शन, स्टैमिना और साइज़
              </span>
            </strong>{' '}
            बढ़ाने में मदद करता है।
          </p>
          <p className="text-xl leading-relaxed font-medium md:text-2xl">
            अफ्रीकन सुपर हर्ब्स से बना{' '}
            <span
              className="bg-linear-to-r from-orange-500 via-white to-orange-500 bg-size-[200%_auto] bg-clip-text text-transparent"
              style={{ animation: 'shine 3s linear infinite' }}
            >
              LIV MUZTANG
            </span>{' '}
            उन पुरुषों की पहली पसंद है जो अपनी सेहत पर पूरा नियंत्रण चाहते हैं।
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed font-medium text-gray-200 md:text-xl">
            World’s best Men’s Wellness formula designed to boost your vitality, energy, and overall
            well-being naturally. Powered by African Super Herbs,{' '}
            <span
              className="bg-linear-to-r from-orange-500 via-white to-orange-500 bg-size-[200%_auto] bg-clip-text text-transparent"
              style={{ animation: 'shine 3s linear infinite' }}
            >
              LIV MUZTANG
            </span>{' '}
            is trusted choice for Men who want to take charge of their personal health.
          </p>
        </div>
      </div>
      <style>
        {`
  @keyframes shine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
`}
      </style>
    </div>
  );
};

export default ProductDescription;
