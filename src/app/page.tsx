import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WeatherInsights from "@/components/sections/WeatherInsights";
import CropGuide from "@/components/sections/CropGuide";
import OrganicFarming from "@/components/sections/OrganicFarming";
import DigitalToolbox from "@/components/sections/DigitalToolbox";
import GovernmentSchemes from "@/components/sections/GovernmentSchemes";
import WhyAgridose from "@/components/sections/WhyAgridose";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WeatherInsights />
      <CropGuide />
      <OrganicFarming />
      <DigitalToolbox />
      <GovernmentSchemes />
      <WhyAgridose />
      <Footer />
    </main>
  );
}
