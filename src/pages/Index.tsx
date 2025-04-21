
// Imax Media: Simple professional landing page for adventure travel channel

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedVlog from "@/components/FeaturedVlog";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-light font-opensans">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedVlog />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
