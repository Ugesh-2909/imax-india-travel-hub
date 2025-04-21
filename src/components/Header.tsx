
import { Youtube, Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/4b26e98d-f4b4-4588-ae0b-9f8efe82ed77.png"
            alt="Imax Media logo"
            className="h-10 w-10 rounded-full border-2 border-adventure bg-white"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <span className="font-montserrat font-bold text-2xl text-adventure tracking-tight">Imax Media</span>
          <span className="hidden md:inline-flex bg-sunset text-white rounded-full px-2 py-1 ml-3 text-xs font-semibold">295k+ Subscribers</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.youtube.com/channel/UChRSWoRFDHELm4xjfinM_yA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="text-adventure hover:text-sunset" />
          </a>
          <a href="https://www.instagram.com/imaxmediaa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="text-adventure hover:text-sunset" />
          </a>
        </div>
      </div>
    </header>
  );
}
