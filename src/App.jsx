import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeatherInsights from './components/WeatherInsights'
import CropGuide from './components/CropGuide'
import DigitalToolbox from './components/DigitalToolbox'
import OrganicFarming from './components/OrganicFarming'
import GovernmentSchemes from './components/GovernmentSchemes'
import CommunityImpact from './components/CommunityImpact'
import WhyAgridose from './components/WhyAgridose'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <WeatherInsights />
        <CropGuide />
        <DigitalToolbox />
        <OrganicFarming />
        <GovernmentSchemes />
        <CommunityImpact />
        <WhyAgridose />
        <Footer />
      </main>
    </LanguageProvider>
  )
}

export default App
