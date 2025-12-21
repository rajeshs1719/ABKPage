import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F4821] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              {/* Replace with <img src={logo} /> if available */}

              <span className="text-2xl font-bold tracking-tight">
                ABK AOTS 
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with Japanese language skills and cultural
              understanding. Join our community and start your journey to
              mastery today.
            </p>
          </div>

          {/* Column 2: Quick Links (Matched to your Routes) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-green-400" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-green-400" /> Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-green-400" /> Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-green-400" /> Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Help */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Community
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-green-400" /> Our Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-green-400" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                <p className="text-sm">
                  ABK AOTS DOSOKAI 44, 100 Feet Road, Double Decker Flyover,
                  Vysya Bank Colony, BTM 2nd Stage, Bengaluru 560 076.
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 shrink-0" />
                <p className="text-sm">+91 9500 777 330</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400 shrink-0" />
                <a
                  href="mailto:abkaots.blr@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  abkaots.blr@gmail.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="pt-4 flex gap-3">
                <a
                  href="https://www.facebook.com/Uma31030/"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 text-white"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 text-white"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.instagram.com/abkaotsbangalorechapter/"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://in.linkedin.com/in/abk-aots-dosokai-bangalore-07168319a"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 text-white"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        {/* <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} ABK PAGE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
