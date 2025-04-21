
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[400px] md:min-h-[540px] flex items-center justify-center bg-gradient-to-b from-adventure to-forest overflow-hidden"
    >
      {/* Hero Background Image */}
      <img
        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1300&q=80"
        alt="Majestic Indian mountain bridge"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        loading="eager"
      />
      <div className="container relative z-10 text-center py-24 animate-fade-in-up">
        <h1 className="text-white font-montserrat font-bold text-4xl md:text-5xl drop-shadow-sm">Explore Hidden India with Imax Media</h1>
        <p className="mt-7 text-lg md:text-2xl text-light font-opensans max-w-2xl mx-auto">Adventure vlogs, offbeat destinations, mountain discoveries, and exclusive guides from India’s most passionate explorer.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-7">
          <a
            href="https://youtube.com/@imaxmedia"
            target="_blank"
            rel="noopener"
            className="inline-block bg-sunset text-white font-bold rounded-lg px-6 py-3 shadow hover:scale-105 hover:bg-adventure transition-all text-base"
          >
            Subscribe on YouTube (295k)
          </a>
          <a
            href="#guides"
            className="inline-block bg-white text-adventure border-2 border-adventure font-bold rounded-lg px-6 py-3 hover:bg-adventure hover:text-white transition-all text-base"
          >
            Latest Travel Guides
          </a>
        </div>
      </div>
    </section>
  );
}
