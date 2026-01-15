import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const [showDemo, setShowDemo] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🌾</span> {t('heroTag')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('heroTitle1')}
              <span className="text-green-600"> {t('heroTitle2')}</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              {t('heroDesc')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('tools')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
              >
                {t('exploreFeatures')}
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-lg font-medium"
              >
                {t('watchDemo')}
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-green-600">50K+</p>
                <p className="text-sm text-gray-600">{t('activeFarmers')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">100+</p>
                <p className="text-sm text-gray-600">{t('districtsCovered')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">95%</p>
                <p className="text-sm text-gray-600">{t('satisfactionRate')}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
                alt="Smart Farming"
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-4 grid grid-cols-4 gap-3">
                <button 
                  onClick={() => scrollToSection('weather')}
                  className="bg-green-50 rounded-lg p-3 text-center hover:bg-green-100 transition-colors cursor-pointer"
                >
                  <span className="text-2xl block">🌤️</span>
                  <p className="text-xs text-gray-600 mt-1">{t('weather')}</p>
                </button>
                <button 
                  onClick={() => scrollToSection('crops')}
                  className="bg-green-50 rounded-lg p-3 text-center hover:bg-green-100 transition-colors cursor-pointer"
                >
                  <span className="text-2xl block">🌾</span>
                  <p className="text-xs text-gray-600 mt-1">{t('crops')}</p>
                </button>
                <button 
                  onClick={() => scrollToSection('organic')}
                  className="bg-green-50 rounded-lg p-3 text-center hover:bg-green-100 transition-colors cursor-pointer"
                >
                  <span className="text-2xl block">🌿</span>
                  <p className="text-xs text-gray-600 mt-1">{t('organic')}</p>
                </button>
                <button 
                  onClick={() => scrollToSection('tools')}
                  className="bg-green-50 rounded-lg p-3 text-center hover:bg-green-100 transition-colors cursor-pointer"
                >
                  <span className="text-2xl block">🛠️</span>
                  <p className="text-xs text-gray-600 mt-1">{t('tools')}</p>
                </button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {showDemo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">{t('platformDemo')}</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <span className="text-6xl block mb-4">🌾</span>
                <p className="text-2xl font-semibold">Agridose - {t('heroTag')}</p>
                <p className="text-gray-400 mt-2">{t('completefarming')}</p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <span className="text-2xl">🌤️</span>
                    <p className="text-sm mt-1">{t('weatherAlerts')}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <span className="text-2xl">🌿</span>
                    <p className="text-sm mt-1">{t('javikKheti')}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <span className="text-2xl">🤖</span>
                    <p className="text-sm mt-1">{t('aiExpertChat')}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <span className="text-2xl">📋</span>
                    <p className="text-sm mt-1">{t('govtSchemes')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <button 
                onClick={() => {
                  setShowDemo(false)
                  scrollToSection('weather')
                }}
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
              >
                {t('startExploring')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
