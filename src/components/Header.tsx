
import { Youtube, Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center gap-3">
          <img
            src="/public/lovable-uploads/4b26e98d-f4b4-4588-ae0b-9f8efe82ed77.png"
            alt="Imax Media logo"
            className="h-10 w-10 rounded-full border-2 border-adventure bg-white"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <span className="font-montserrat font-bold text-2xl text-adventure tracking-tight">Imax Media</span>
          <span className="hidden md:inline-flex bg-sunset text-white rounded-full px-2 py-1 ml-3 text-xs font-semibold">295k+ Subscribers</span>
        </div>
        <nav className="hidden md:flex gap-7 text-dark font-semibold text-sm">
          <a href="#home" className="hover:text-adventure transition-colors">Home</a>
          <a href="#about" className="hover:text-adventure transition-colors">About</a>
          <a href="#destinations" className="hover:text-adventure transition-colors">Destinations</a>
          <a href="#guides" className="hover:text-adventure transition-colors">Guides</a>
          <a href="#services" className="hover:text-adventure transition-colors">Services</a>
          <a href="#contact" className="hover:text-adventure transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://youtube.com/channel/UChRSWoRFDHELm4xjfinM_yA" target="_blank" rel="noopener" aria-label="Imax Media YouTube">
            <Youtube size={22} className="text-adventure hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com/imaxmedia_" target="_blank" rel="noopener" aria-label="Imax Media Instagram">
            <Instagram size={22} className="text-adventure hover:scale-110 transition-transform" />
          </a>
          <a href="#contact" className="ml-5 bg-adventure text-white font-semibold rounded-lg px-4 py-2 hover:bg-sunset transition-colors duration-150 shadow">
            Book Travel
          </a>
        </div>
      </div>
    </header>
  );
}
