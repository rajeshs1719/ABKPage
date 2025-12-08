const benefits = [
  "Study Group Invites",
  "Free Prep Material",
  "Expert Career Guidance",
  "Connect with peers",
];

const WhatsAppBanner = () => {
  return (
    <section className="whatsapp-banner py-10 md:py-14 relative">
      <div className="cherry-blossom"></div>
      
      {/* Decorative cherry blossoms */}
      <div className="absolute top-4 left-8 w-8 h-8 opacity-60">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="10" r="5" fill="#f8b4c4"/>
          <circle cx="10" cy="20" r="5" fill="#f8b4c4"/>
          <circle cx="30" cy="20" r="5" fill="#f8b4c4"/>
          <circle cx="15" cy="30" r="5" fill="#f8b4c4"/>
          <circle cx="25" cy="30" r="5" fill="#f8b4c4"/>
          <circle cx="20" cy="20" r="4" fill="#ffd700"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-16 w-6 h-6 opacity-50">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="10" r="5" fill="#f8b4c4"/>
          <circle cx="10" cy="20" r="5" fill="#f8b4c4"/>
          <circle cx="30" cy="20" r="5" fill="#f8b4c4"/>
          <circle cx="15" cy="30" r="5" fill="#f8b4c4"/>
          <circle cx="25" cy="30" r="5" fill="#f8b4c4"/>
          <circle cx="20" cy="20" r="4" fill="#ffd700"/>
        </svg>
      </div>
      <div className="absolute top-6 right-20 w-10 h-10 opacity-60">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="10" r="5" fill="#f8b4c4"/>
          <circle cx="10" cy="20" r="5" fill="#f8b4c4"/>
          <circle cx="30" cy="20" r="5" fill="#f8b4c4"/>
          <circle cx="15" cy="30" r="5" fill="#f8b4c4"/>
          <circle cx="25" cy="30" r="5" fill="#f8b4c4"/>
          <circle cx="20" cy="20" r="4" fill="#ffd700"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Title and illustration */}
          <div className="flex items-center gap-4">
            {/* Illustration of people */}
            <div className="hidden md:block w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="30" cy="40" r="15" fill="#1e3a5f"/>
                <rect x="20" y="55" width="20" height="30" fill="#1e3a5f" rx="5"/>
                <circle cx="70" cy="40" r="15" fill="#25D366"/>
                <rect x="60" y="55" width="20" height="30" fill="#25D366" rx="5"/>
              </svg>
            </div>
            
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-navy">
                Join ABK - AOTS WhatsApp Community
              </h2>
            </div>
          </div>

          {/* Benefits bubbles */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
              >
                <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-navy whitespace-nowrap">{benefit}</span>
              </div>
            ))}
          </div>

          {/* QR Code placeholder */}
          <div className="hidden lg:block w-20 h-20 bg-white rounded-lg shadow-md p-2">
            <div className="w-full h-full bg-navy/10 rounded flex items-center justify-center">
              <span className="text-[8px] text-navy/50 text-center">QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppBanner;
