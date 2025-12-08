import { Radio } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpg";

const LearnJapaneseSection = () => {
  return (
    <section className="py-10 md:py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Learn Japanese Online</h2>
              <p className="text-white/80 font-medium">Anytime, Anywhere !</p>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              Become part of the ABK-AOTS WhatsApp and Zoom communities
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Radio className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Live Interactive Classes</h4>
                  <p className="text-white/60 text-xs">Join real-time sessions with expert instructors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Radio className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Live Interactive Classes</h4>
                  <p className="text-white/60 text-xs">Join real-time sessions with expert instructors.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#" className="bg-white text-navy px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                Book Demo Class
              </a>
              <a href="#" className="border-2 border-white text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white hover:text-navy transition-colors">
                Explore Courses
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={gallery4}
              alt="Online Learning Session"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnJapaneseSection;
