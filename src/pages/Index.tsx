import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Sectors from "@/components/Sectors";
import Missions from "@/components/Missions";
import Projects from "@/components/Projects";
import International from "@/components/International";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSlider />
    <Sectors />
    <Missions />
    <Projects />
    <International />
    <ClientLogos />
    <Footer />
  </div>
);

export default Index;
