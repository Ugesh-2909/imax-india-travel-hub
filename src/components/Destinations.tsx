
import { MapPin } from "lucide-react";

const places = [
  {
    title: "Ziro Valley, Arunachal",
    description: "Untouched green meadows & tribal culture.",
    img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Parvati Valley, Himachal",
    description: "Pristine Himalayan beauty and lively local life.",
    img: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pine Forests, Uttarakhand",
    description: "Thick pine woods and mystical fog trails.",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Thar Desert, Rajasthan",
    description: "Camels, dunes, stars, and desert life.",
    img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Spiti Valley, Himachal",
    description: "Otherworldly mountains, monasteries, and roads.",
    img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-14 md:py-24 bg-gradient-to-b from-light via-white to-light">
      <div className="container">
        <h3 className="font-montserrat text-adventure text-2xl md:text-3xl font-bold mb-8 text-center">Destinations Explored</h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {places.map((place, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-card flex flex-col transition-transform hover:scale-105 border-2 border-light hover:border-adventure group"
            >
              <div className="h-48 w-full overflow-hidden rounded-t-xl">
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
