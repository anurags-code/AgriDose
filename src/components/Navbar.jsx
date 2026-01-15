import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              <span className="text-2xl font-bold text-green-600">Agridose</span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#home" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navHome')}</a>
              <a href="#weather" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navWeather')}</a>
              <a href="#crops" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navCrops')}</a>
              <a href="#tools" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navTools')}</a>
              <a href="#organic" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navOrganic')}</a>
              <a href="#schemes" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navSchemes')}</a>
              <a href="#why-agridose" className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors">{t('navWhyUs')}</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
            <button 
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              {t('getStarted')}
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navHome')}</a>
            <a href="#weather" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navWeather')}</a>
            <a href="#crops" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navCrops')}</a>
            <a href="#tools" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navTools')}</a>
            <a href="#organic" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navOrganic')}</a>
            <a href="#schemes" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navSchemes')}</a>
            <a href="#why-agridose" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">{t('navWhyUs')}</a>
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                {t('getStarted')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
