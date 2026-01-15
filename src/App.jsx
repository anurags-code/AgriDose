import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeatherInsights from './components/WeatherInsights'
import CropGuide from './components/CropGuide'
import DigitalToolbox from './components/DigitalToolbox'
import GovernmentSchemes from './components/GovernmentSchemes'
import CommunityImpact from './components/CommunityImpact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WeatherInsights />
      <CropGuide />
      <DigitalToolbox />
      <GovernmentSchemes />
      <CommunityImpact />
      <Footer />
    </main>
  )
}

export default App
