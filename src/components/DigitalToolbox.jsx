import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function DigitalToolbox() {
  const { t } = useLanguage()
  const [activeTool, setActiveTool] = useState(null)
  const [calculatorData, setCalculatorData] = useState({
    landArea: '',
    cropType: 'rice',
    soilType: 'loamy',
  })
  const [calculatorResults, setCalculatorResults] = useState(null)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Namaste! I am your farming assistant. How can I help you today? You can ask me about crops, pests, fertilizers, weather conditions, or any farming related questions.' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const cropRequirements = {
    rice: { seedRate: 25, npkN: 120, npkP: 60, npkK: 40, water: '20-25 irrigations', waterLiters: 1200 },
    wheat: { seedRate: 100, npkN: 120, npkP: 60, npkK: 40, water: '5-6 irrigations', waterLiters: 450 },
    cotton: { seedRate: 2.5, npkN: 120, npkP: 60, npkK: 60, water: '6-8 irrigations', waterLiters: 550 },
    sugarcane: { seedRate: 40000, npkN: 250, npkP: 60, npkK: 60, water: '25-30 irrigations', waterLiters: 2000 },
    maize: { seedRate: 20, npkN: 120, npkP: 60, npkK: 40, water: '5-6 irrigations', waterLiters: 500 },
    soybean: { seedRate: 75, npkN: 30, npkP: 60, npkK: 40, water: '2-3 irrigations', waterLiters: 300 },
  }

  const calculateRequirements = () => {
    const area = parseFloat(calculatorData.landArea)
    if (!area || area <= 0) {
      alert('Please enter valid land area')
      return
    }
    const crop = cropRequirements[calculatorData.cropType]
    const areaInHa = area * 0.4047
    
    setCalculatorResults({
      seed: calculatorData.cropType === 'sugarcane' 
        ? `${Math.round(crop.seedRate * areaInHa).toLocaleString()} setts (3-budded)`
        : `${Math.round(crop.seedRate * areaInHa)} kg`,
      nitrogen: `${Math.round(crop.npkN * areaInHa)} kg`,
      phosphorus: `${Math.round(crop.npkP * areaInHa)} kg`,
      potassium: `${Math.round(crop.npkK * areaInHa)} kg`,
      urea: `${Math.round((crop.npkN * areaInHa) / 0.46)} kg`,
      dap: `${Math.round((crop.npkP * areaInHa) / 0.46)} kg`,
      mop: `${Math.round((crop.npkK * areaInHa) / 0.60)} kg`,
      water: crop.water,
      waterTotal: `${Math.round(crop.waterLiters * areaInHa * 1000).toLocaleString()} liters (approx.)`,
      area: area,
      crop: calculatorData.cropType,
    })
  }

  const farmingKnowledge = {
    pest: 'For pest control, I recommend: 1) Regular field monitoring 2) Use neem-based organic pesticides 3) Maintain field hygiene 4) Use pheromone traps for bollworm 5) Contact your local KVK for specific pest identification.',
    fertilizer: 'Fertilizer application tips: 1) Get soil tested before applying 2) Apply nitrogen in 2-3 split doses 3) Apply phosphorus and potash at sowing 4) Use organic manure 5-10 tonnes/hectare 5) Avoid excess fertilizer to prevent soil degradation.',
    irrigation: 'Irrigation best practices: 1) Use drip irrigation to save 30-50% water 2) Irrigate during early morning or evening 3) Critical stages for irrigation vary by crop 4) Avoid water logging 5) Consider rainwater harvesting.',
    disease: 'For disease management: 1) Use disease-resistant varieties 2) Treat seeds before sowing 3) Maintain proper plant spacing 4) Remove infected plants immediately 5) Apply fungicides as preventive measure 6) Consult agriculture officer for specific diseases.',
    weather: 'Weather tips for Chhattisgarh: 1) Kharif season (June-Sept) is ideal for rice, cotton, soybean 2) Rabi season (Oct-Feb) for wheat, gram, mustard 3) Monitor IMD forecasts regularly 4) Prepare for monsoon variability 5) Use crop insurance for protection.',
    rice: 'Rice cultivation tips: 1) Best varieties for CG: Swarna, MTU-1010, Mahamaya 2) Transplant 21-25 day old seedlings 3) Maintain 5cm standing water 4) Apply nitrogen in 3 splits 5) Monitor for stem borer and BLB.',
    wheat: 'Wheat tips: 1) Sow by November 15-20 2) Varieties: HD-2967, GW-366 3) First irrigation at 21 days (crown root) 4) Apply herbicide within 30 days 5) Harvest when golden yellow.',
    cotton: 'Cotton tips: 1) Use Bt cotton for bollworm resistance 2) Plant spacing 90x60cm 3) Apply nitrogen in splits 4) Pick cotton when bolls fully open 5) Monitor for pink bollworm.',
    organic: 'Organic farming: 1) Use compost and vermicompost 2) Prepare jeevamrut and panchgavya 3) Use neem oil for pest control 4) Practice crop rotation 5) Get organic certification from regional center.',
    loan: 'For farm loans: 1) Visit nearest bank with land records 2) Apply for Kisan Credit Card 3) PM-KISAN provides Rs.6000/year 4) Crop insurance under PMFBY 5) Contact district agriculture office for schemes.',
    market: 'Marketing tips: 1) Check mandi prices at agmarknet.gov.in 2) Sell through e-NAM platform 3) Form Farmer Producer Organization 4) Direct marketing to processors 5) Store produce properly for better prices.',
    default: 'I can help you with: pest control, fertilizer usage, irrigation, crop diseases, weather advice, specific crops (rice, wheat, cotton), organic farming, loans & schemes, and market prices. Please ask your specific question!'
  }

  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('pest') || msg.includes('keet') || msg.includes('insect') || msg.includes('bug')) {
      return farmingKnowledge.pest
    } else if (msg.includes('fertilizer') || msg.includes('khad') || msg.includes('urea') || msg.includes('dap')) {
      return farmingKnowledge.fertilizer
    } else if (msg.includes('water') || msg.includes('irrigation') || msg.includes('sinchai') || msg.includes('paani')) {
      return farmingKnowledge.irrigation
    } else if (msg.includes('disease') || msg.includes('rog') || msg.includes('bimari') || msg.includes('yellow') || msg.includes('leaf')) {
      return farmingKnowledge.disease
    } else if (msg.includes('weather') || msg.includes('mausam') || msg.includes('rain') || msg.includes('barish')) {
      return farmingKnowledge.weather
    } else if (msg.includes('rice') || msg.includes('dhan') || msg.includes('chawal') || msg.includes('paddy')) {
      return farmingKnowledge.rice
    } else if (msg.includes('wheat') || msg.includes('gehun') || msg.includes('gahu')) {
      return farmingKnowledge.wheat
    } else if (msg.includes('cotton') || msg.includes('kapas') || msg.includes('rui')) {
      return farmingKnowledge.cotton
    } else if (msg.includes('organic') || msg.includes('jaivik') || msg.includes('natural')) {
      return farmingKnowledge.organic
    } else if (msg.includes('loan') || msg.includes('credit') || msg.includes('kcc') || msg.includes('scheme') || msg.includes('yojana')) {
      return farmingKnowledge.loan
    } else if (msg.includes('market') || msg.includes('mandi') || msg.includes('price') || msg.includes('sell') || msg.includes('bechna')) {
      return farmingKnowledge.market
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('namaste')) {
      return 'Namaste! How can I help you with your farming today? Ask me about crops, pests, fertilizers, irrigation, or any other farming question.'
    } else if (msg.includes('thank') || msg.includes('dhanyawad') || msg.includes('shukriya')) {
      return 'You are welcome! Feel free to ask if you have more questions. Wishing you a successful harvest! Jai Kisan!'
    }
    
    return farmingKnowledge.default
  }

  const sendMessage = () => {
    if (!chatInput.trim()) return
    
    const userMessage = chatInput.trim()
    setChatMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setChatInput('')
    setIsTyping(true)
    
    setTimeout(() => {
      const response = getAIResponse(userMessage)
      setChatMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, 1000)
  }

  const tools = [
    {
      id: 'calculator',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Crop Calculator',
      description: 'Calculate seed, fertilizer, and water requirements based on your land area and crop type.',
      color: 'bg-blue-500',
    },
    {
      id: 'prices',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Market Prices',
      description: 'Real-time mandi prices for crops in your region to help you sell at the best rates.',
      color: 'bg-green-500',
    },
    {
      id: 'soil',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Soil Testing',
      description: 'Find nearest soil testing centers and get recommendations based on soil health cards.',
      color: 'bg-orange-500',
    },
    {
      id: 'training',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Training Videos',
      description: 'Learn modern farming techniques through expert video tutorials in your language.',
      color: 'bg-purple-500',
    },
    {
      id: 'expert',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Expert Chat',
      description: 'Connect with AI farming assistant for personalized advice and problem-solving.',
      color: 'bg-pink-500',
    },
    {
      id: 'disease',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Disease Detection',
      description: 'Upload crop images to identify diseases and get treatment recommendations instantly.',
      color: 'bg-red-500',
    },
  ]

  const marketPrices = [
    { crop: 'Rice (Paddy)', price: '2,150', unit: 'per quintal', change: '+50' },
    { crop: 'Wheat', price: '2,275', unit: 'per quintal', change: '+25' },
    { crop: 'Soybean', price: '4,800', unit: 'per quintal', change: '-100' },
    { crop: 'Maize', price: '1,950', unit: 'per quintal', change: '+30' },
    { crop: 'Gram (Chana)', price: '5,200', unit: 'per quintal', change: '+75' },
    { crop: 'Mustard', price: '5,400', unit: 'per quintal', change: '-50' },
  ]

  const soilCenters = [
    { name: 'Krishi Vigyan Kendra, Raipur', distance: '5 km', phone: '0771-2234567', address: 'IGKV Campus, Raipur' },
    { name: 'Agricultural Research Station, Durg', distance: '40 km', phone: '0788-2345678', address: 'Near Railway Station, Durg' },
    { name: 'District Soil Testing Lab, Bilaspur', distance: '120 km', phone: '07752-456789', address: 'Collectorate Complex, Bilaspur' },
  ]

  const videos = [
    { title: 'Modern Rice Cultivation Techniques', duration: '15 min', views: '50K', url: 'https://youtube.com' },
    { title: 'Organic Farming Methods', duration: '20 min', views: '35K', url: 'https://youtube.com' },
    { title: 'Drip Irrigation Setup Guide', duration: '12 min', views: '28K', url: 'https://youtube.com' },
    { title: 'Pest Management in Cotton', duration: '18 min', views: '42K', url: 'https://youtube.com' },
  ]

  const closeModal = () => {
    setActiveTool(null)
    setCalculatorResults(null)
  }

  return (
<section id="tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('digitalToolbox')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('toolboxDesc')}
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`${tool.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
              <div className="mt-4 flex items-center text-green-600 font-medium">
                <span>Open Tool</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeTool && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center z-10">
              <h3 className="text-xl font-bold text-gray-900">
                {tools.find(t => t.id === activeTool)?.title}
              </h3>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {activeTool === 'calculator' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Land Area (in acres)</label>
                    <input 
                      type="number"
                      value={calculatorData.landArea}
                      onChange={(e) => setCalculatorData({...calculatorData, landArea: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter land area in acres"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
                    <select 
                      value={calculatorData.cropType}
                      onChange={(e) => setCalculatorData({...calculatorData, cropType: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="rice">Rice (Paddy)</option>
                      <option value="wheat">Wheat</option>
                      <option value="cotton">Cotton</option>
                      <option value="sugarcane">Sugarcane</option>
                      <option value="maize">Maize</option>
                      <option value="soybean">Soybean</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
                    <select 
                      value={calculatorData.soilType}
                      onChange={(e) => setCalculatorData({...calculatorData, soilType: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="loamy">Loamy Soil</option>
                      <option value="clay">Clay Soil</option>
                      <option value="sandy">Sandy Soil</option>
                      <option value="black">Black Soil</option>
                      <option value="red">Red Soil</option>
                    </select>
                  </div>
                  <button 
                    onClick={calculateRequirements}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
                  >
                    Calculate Requirements
                  </button>
                  
                  {calculatorResults && (
                    <div className="mt-6 bg-blue-50 rounded-xl p-4 space-y-4">
                      <h4 className="font-bold text-blue-800 text-lg">
                        Results for {calculatorResults.area} acres of {calculatorResults.crop.charAt(0).toUpperCase() + calculatorResults.crop.slice(1)}
                      </h4>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500">Seed Required</p>
                        <p className="text-xl font-bold text-gray-900">{calculatorResults.seed}</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-2">Fertilizer (NPK)</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-lg font-bold text-green-600">{calculatorResults.nitrogen}</p>
                            <p className="text-xs text-gray-500">Nitrogen</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-blue-600">{calculatorResults.phosphorus}</p>
                            <p className="text-xs text-gray-500">Phosphorus</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-orange-600">{calculatorResults.potassium}</p>
                            <p className="text-xs text-gray-500">Potassium</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-2">Commercial Fertilizers</p>
                        <div className="space-y-1">
                          <p className="text-gray-700">Urea: <span className="font-semibold">{calculatorResults.urea}</span></p>
                          <p className="text-gray-700">DAP: <span className="font-semibold">{calculatorResults.dap}</span></p>
                          <p className="text-gray-700">MOP: <span className="font-semibold">{calculatorResults.mop}</span></p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500">Water Requirement</p>
                        <p className="text-lg font-bold text-cyan-600">{calculatorResults.water}</p>
                        <p className="text-sm text-gray-600">{calculatorResults.waterTotal}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTool === 'prices' && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-500 mb-4">Raipur Mandi - Updated: Today, 10:30 AM</p>
                  {marketPrices.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-900">{item.crop}</p>
                        <p className="text-sm text-gray-500">{item.unit}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">Rs. {item.price}</p>
                        <p className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTool === 'soil' && (
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">Find soil testing centers near Raipur, Chhattisgarh</p>
                  {soilCenters.map((center, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl">
                      <p className="font-semibold text-gray-900">{center.name}</p>
                      <p className="text-sm text-gray-600">{center.address}</p>
                      <p className="text-sm text-gray-600">Distance: {center.distance}</p>
                      <a href={`tel:${center.phone}`} className="text-sm text-green-600 font-medium">Phone: {center.phone}</a>
                    </div>
                  ))}
                  <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors font-medium">
                    Book Appointment
                  </button>
                </div>
              )}

              {activeTool === 'training' && (
                <div className="space-y-4">
                  {videos.map((video, i) => (
                    <a 
                      key={i} 
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100"
                    >
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{video.title}</p>
                        <p className="text-sm text-gray-500">{video.duration} | {video.views} views</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {activeTool === 'expert' && (
                <div className="flex flex-col h-[400px]">
                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${
                          msg.type === 'user' 
                            ? 'bg-pink-500 text-white rounded-br-md' 
                            : 'bg-gray-100 text-gray-800 rounded-bl-md'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-md">
                          <p className="text-sm">Typing...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Ask about farming..."
                      className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                    <button 
                      onClick={sendMessage}
                      className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">Ask about pests, fertilizers, irrigation, crops, weather, loans, or market prices</p>
                </div>
              )}

              {activeTool === 'disease' && (
                <div className="space-y-4">
                  <p className="text-gray-600">Upload a clear photo of the affected crop leaf or plant part for AI-powered disease identification.</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-600 mb-4">Drag and drop an image here, or click to browse</p>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      id="disease-upload"
                    />
                    <label 
                      htmlFor="disease-upload"
                      className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      Upload Image
                    </label>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Tips for better detection:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Take photo in natural daylight</li>
                      <li>• Focus on the affected area clearly</li>
                      <li>• Include both healthy and diseased parts</li>
                      <li>• Avoid blurry or dark images</li>
                    </ul>
                  </div>
                </div>
              )}

              <button 
                onClick={closeModal}
                className="w-full mt-6 border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default DigitalToolbox
