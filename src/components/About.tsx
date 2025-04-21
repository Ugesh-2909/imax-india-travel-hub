
import { MapPin, Youtube, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="container py-14 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden shadow-card border-4 border-adventure flex-shrink-0 mx-auto md:mx-0">
          <img
            src="/lovable-uploads/4b26e98d-f4b4-4588-ae0b-9f8efe82ed77.png"
            alt="Imax Media profile"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:ml-10 flex-1">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-adventure mb-2">
            Meet Imax Media
          </h2>
          <p className="font-opensans text-dark text-lg mb-3">
            Hi! I'm Imax, passionate about uncovering India’s untouched beauty—its mountains, forests, and hidden places. My journey reaches 295k+ fellow explorers through adventure-packed vlogs, travel guides, and personal stories.
          </p>
          <div className="flex flex-wrap gap-6 mt-5 text-xs text-dark">
            <div className="flex items-center gap-2">
              <Youtube size={18} className="text-sunset" />
              <span className="font-semibold">295k+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-forest" />
              <span>Exploring: Hidden India, Himalayas, remote villages, more</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-adventure" />
              <span>Travel agency • Group adventures • Custom tours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
