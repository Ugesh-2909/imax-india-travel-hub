
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Banner from "@/components/Banner";
import FeaturedVlog from "@/components/FeaturedVlog";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-light font-opensans">
      <Header />
      <main>
        <Hero />
        <Banner />
        <About />
        <FeaturedVlog />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
