
import { Youtube, Instagram, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-adventure py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white flex flex-col gap-2">
          <span className="font-montserrat font-bold text-xl">Imax Media</span>
          <span className="font-opensans text-sm opacity-80">Copyright © {new Date().getFullYear()} | Adventure travels & vlogs from hidden India</span>
          <span className="font-opensans text-xs opacity-70">Privacy Policy &nbsp;|&nbsp; Terms</span>
        </div>
        <div className="flex gap-4 items-center mt-4 md:mt-0">
          <a href="mailto:contact@imaxmedia.in" className="text-white hover:text-sunset transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
          <a href="https://youtube.com/@imaxmedia" className="text-white hover:text-sunset transition-colors" aria-label="YouTube" target="_blank" rel="noopener">
            <Youtube size={22} />
          </a>
          <a href="https://instagram.com/imaxmedia_" className="text-white hover:text-sunset transition-colors" aria-label="Instagram" target="_blank" rel="noopener">
            <Instagram size={22} />
          </a>
        </div>
        <div className="hidden md:block">
          <span className="flex items-center gap-1 text-white text-sm opacity-70">
            <MapPin size={18} /> Exploring India
          </span>
        </div>
      </div>
    </footer>
  );
}
