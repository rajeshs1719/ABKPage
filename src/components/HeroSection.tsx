import { Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-bg py-12 md:py-16 relative overflow-hidden">
      {/* Floating Icons */}
      <div
        className="absolute left-[10%] top-1/3 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </div>

      <div
        className="absolute left-[30%] top-[15%] animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-10 h-10 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
      </div>

      <div
        className="absolute right-[30%] top-[10%] animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8 text-white fill-current"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
      </div>

      <div
        className="absolute right-[10%] top-1/3 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8 text-white fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
          Get In Touch
        </h1>
        <p className="text-base md:text-lg text-navy/70 max-w-md mx-auto">
          We're here to help you begin your Japanese journey
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
