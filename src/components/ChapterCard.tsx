import { User, Mail, Phone, Navigation } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

interface ChapterCardProps {
  title: string;
  address: string;
  director: string;
  email: string;
  phone: string;
}

const ChapterCard = ({ title, address, director, email, phone }: ChapterCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 card-shadow border border-border">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-20 md:w-20 md:h-24 flex-shrink-0 relative">
          {/* Japanese Temple Icon with label */}
          <svg viewBox="0 0 80 100" className="w-full h-full">
            {/* Temple base */}
            <rect x="5" y="70" width="70" height="10" fill="#1e3a5f" rx="2"/>
            {/* Temple levels */}
            <rect x="10" y="50" width="60" height="20" fill="#e74c3c"/>
            <rect x="15" y="32" width="50" height="18" fill="#c0392b"/>
            <rect x="20" y="18" width="40" height="14" fill="#e74c3c"/>
            {/* Temple roof */}
            <polygon points="40,5 65,18 15,18" fill="#1e3a5f"/>
            {/* Roof lines */}
            <rect x="8" y="65" width="64" height="5" fill="#1e3a5f"/>
            <rect x="12" y="47" width="56" height="3" fill="#1e3a5f"/>
            <rect x="17" y="30" width="46" height="2" fill="#1e3a5f"/>
            {/* Label background */}
            <rect x="5" y="78" width="70" height="18" fill="#e74c3c" rx="2"/>
            {/* Label text */}
            <text x="40" y="90" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">{title.toUpperCase()} CHAPTER</text>
          </svg>
        </div>
        <div className="pt-2">
          <h3 className="text-xl md:text-2xl font-bold text-navy">{title}</h3>
          <h4 className="text-lg md:text-xl font-bold text-navy">Chapter</h4>
        </div>
      </div>

      {/* Address */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {address}
      </p>

      {/* Get Direction Button */}
      <a
        href="#"
        className="inline-flex items-center gap-2 btn-navy mb-5"
      >
        Get Direction
        <Navigation className="w-4 h-4" />
      </a>

      {/* Contact Details */}
      <div className="space-y-2.5 mb-5 p-4 bg-secondary/50 rounded-xl">
        <div className="flex items-center gap-3">
          <User className="w-4 h-4 text-navy flex-shrink-0" />
          <span className="text-sm">Director : {director}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-navy flex-shrink-0" />
          <a href={`mailto:${email}`} className="text-sm hover:text-navy transition-colors break-all">
            {email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-navy flex-shrink-0" />
          <span className="text-sm">{phone}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        <a href="#" className="btn-navy text-xs">
          Book Demo Class
        </a>
        <a href="#" className="btn-outline-navy text-xs">
          Explore Courses
        </a>
      </div>

      {/* Gallery Images */}
      <div className="flex gap-2">
        <div className="w-1/3 aspect-[4/3] rounded-lg overflow-hidden">
          <img src={gallery1} alt="Event 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/3 aspect-[4/3] rounded-lg overflow-hidden">
          <img src={gallery2} alt="Event 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/3 aspect-[4/3] rounded-lg overflow-hidden">
          <img src={gallery3} alt="Event 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
