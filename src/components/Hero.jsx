function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Farmers with
              <span className="text-green-600"> Smart Technology</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Access real-time weather updates, expert crop guidance, government schemes, 
              and digital tools designed to help you maximize your agricultural yield and income.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl">
                Explore Features
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-lg font-medium">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-green-600">50K+</p>
                <p className="text-sm text-gray-600">Active Farmers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">100+</p>
                <p className="text-sm text-gray-600">Districts Covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">95%</p>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
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
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <svg className="w-8 h-8 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <p className="text-xs text-gray-600 mt-1">Weather</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <svg className="w-8 h-8 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <p className="text-xs text-gray-600 mt-1">Crops</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <svg className="w-8 h-8 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-xs text-gray-600 mt-1">Analytics</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
