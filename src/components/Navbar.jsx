import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-green-600">SmartFarm</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#weather" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Weather</a>
              <a href="#crops" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Crops</a>
              <a href="#tools" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Tools</a>
              <a href="#schemes" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Schemes</a>
              <a href="#community" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Community</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
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
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#weather" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">Weather</a>
            <a href="#crops" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">Crops</a>
            <a href="#tools" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">Tools</a>
            <a href="#schemes" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">Schemes</a>
            <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md">Community</a>
            <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
