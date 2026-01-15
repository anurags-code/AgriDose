import { useState } from 'react'

function WeatherInsights() {
  const [selectedDay, setSelectedDay] = useState(0)

  const weatherData = [
    { day: 'Today', temp: 28, condition: 'Sunny', humidity: 65, wind: 12, icon: 'sun' },
    { day: 'Tomorrow', temp: 26, condition: 'Partly Cloudy', humidity: 70, wind: 15, icon: 'cloud-sun' },
    { day: 'Wed', temp: 24, condition: 'Rainy', humidity: 85, wind: 20, icon: 'rain' },
    { day: 'Thu', temp: 25, condition: 'Cloudy', humidity: 75, wind: 18, icon: 'cloud' },
    { day: 'Fri', temp: 27, condition: 'Sunny', humidity: 60, wind: 10, icon: 'sun' },
  ]

  const getWeatherIcon = (icon) => {
    switch (icon) {
      case 'sun':
        return (
          <svg className="w-16 h-16 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        )
      case 'cloud-sun':
        return (
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )
      case 'rain':
        return (
          <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19v2M12 19v2M16 19v2" />
          </svg>
        )
      case 'cloud':
        return (
          <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="weather" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Weather Insights</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get accurate weather forecasts and farming recommendations based on real-time data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <p className="text-blue-100 mb-1">Current Location</p>
                <h3 className="text-2xl font-semibold">Punjab, India</h3>
              </div>
              <p className="text-blue-100 mt-2 md:mt-0">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-6">
                {getWeatherIcon(weatherData[selectedDay].icon)}
                <div>
                  <p className="text-6xl font-bold">{weatherData[selectedDay].temp}°C</p>
                  <p className="text-xl text-blue-100">{weatherData[selectedDay].condition}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6 md:mt-0">
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <p className="text-2xl font-semibold mt-1">{weatherData[selectedDay].humidity}%</p>
                  <p className="text-blue-200 text-sm">Humidity</p>
                </div>
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <p className="text-2xl font-semibold mt-1">{weatherData[selectedDay].wind} km/h</p>
                  <p className="text-blue-200 text-sm">Wind Speed</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 overflow-x-auto pb-2">
              {weatherData.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl transition-all ${
                    selectedDay === index
                      ? 'bg-white text-blue-600'
                      : 'bg-blue-400/30 text-white hover:bg-blue-400/50'
                  }`}
                >
                  <p className="text-sm font-medium">{day.day}</p>
                  <p className="text-lg font-bold">{day.temp}°</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Farming Recommendations</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Ideal conditions for rice transplantation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Apply fertilizers before expected rain</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">Monitor for pest activity due to humidity</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h4>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Rain Expected on Wednesday</p>
                  <p className="text-sm text-gray-600 mt-1">Plan harvesting activities before the expected rainfall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherInsights
