
export default function FeaturedVlog() {
  return (
    <section id="featured-vlog" className="bg-light py-14 md:py-18">
      <div className="container max-w-3xl">
        <h3 className="font-montserrat font-bold text-adventure text-2xl md:text-3xl text-center mb-6">Watch the Adventure</h3>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-card border-4 border-adventure mx-auto animate-fade-in-up">
          {/* Static example video embed (replace src with real video as needed) */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NyWe_dwKj9M"
            title="Imax Media - Latest Adventure Vlog"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        <p className="mt-4 text-dark text-center font-opensans">Join Imax as he discovers an offbeat gem in the Indian mountains. New vlogs every week—subscribe for more!</p>
      </div>
    </section>
  );
}
