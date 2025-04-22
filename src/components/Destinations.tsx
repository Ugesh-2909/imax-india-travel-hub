import { MapPin } from "lucide-react";

const places = [
  {
    title: "Velliyangiri",
    description: "Scenic trekking destination with beautiful meadows and trails.",
    img: "/lovable-uploads/velliyangiri.jpeg",
  },
  {
    title: "Girnarmalai",
    description: "Sacred mountain with ancient temples and stunning views.",
    img: "/lovable-uploads/girnarmalai.jpeg",
  },
  {
    title: "Aadhi Kailayathai",
    description: "Spiritual mountain trek with snow-capped peaks.",
    img: "/lovable-uploads/aadhi_kailayathai.jpeg",
  },
  {
    title: "Parvathamalai",
    description: "Mystical mountain with panoramic landscapes.",
    img: "/lovable-uploads/parvathamalai.jpeg",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-14 md:py-24 bg-gradient-to-b from-light via-white to-light">
      <div className="container">
        <h3 className="font-montserrat text-adventure text-2xl md:text-3xl font-bold mb-8 text-center">Destinations Explored</h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {places.map((place, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-card flex flex-col transition-transform hover:scale-105 border-2 border-light hover:border-adventure group"
            >
              <div className="h-64 w-full overflow-hidden rounded-t-xl">
                <img
                  src={place.img}
                  alt={place.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="flex items-center gap-1 text-xs text-forest font-semibold mb-2">
                  <MapPin size={16} className="inline" /> India
                </span>
                <h4 className="font-montserrat font-semibold text-adventure text-lg mb-1">{place.title}</h4>
                <p className="font-opensans text-dark text-sm">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
