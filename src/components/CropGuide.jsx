import { useState } from 'react'

function CropGuide() {
  const [selectedCrop, setSelectedCrop] = useState('rice')

  const crops = {
    rice: {
      name: 'Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=300&fit=crop',
      season: 'Kharif (June - November)',
      soil: 'Clay or loamy soil with good water retention',
      water: 'High (Standing water required)',
      tips: [
        'Maintain 5-7 cm standing water during tillering',
        'Apply nitrogen in 3 split doses',
        'Monitor for stem borer and leaf folder',
        'Drain field 15 days before harvest',
      ],
    },
    wheat: {
      name: 'Wheat',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      season: 'Rabi (November - April)',
      soil: 'Well-drained loamy soil',
      water: 'Moderate (4-6 irrigations)',
      tips: [
        'Sow seeds 5-7 cm deep in rows',
        'First irrigation at crown root stage',
        'Apply weedicide within 35 days of sowing',
        'Harvest when grain moisture is 14-15%',
      ],
    },
    cotton: {
      name: 'Cotton',
      image: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=400&h=300&fit=crop',
      season: 'Kharif (April - December)',
      soil: 'Black cotton soil or deep alluvial soil',
      water: 'Moderate (6-8 irrigations)',
      tips: [
        'Maintain proper plant spacing (90x60 cm)',
        'Apply potash for better fiber quality',
        'Monitor for bollworm infestation',
        'Pick cotton when bolls are fully opened',
      ],
    },
    sugarcane: {
      name: 'Sugarcane',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2uj51?w=400&h=300&fit=crop',
      season: 'Year-round (12-18 months)',
      soil: 'Deep rich loamy soil',
      water: 'High (25-30 irrigations)',
      tips: [
        'Use disease-free seed setts',
        'Earthing up at 90 and 120 days',
        'Trash mulching conserves moisture',
        'Harvest at 10-12 months for maximum sugar',
      ],
    },
  }

  const currentCrop = crops[selectedCrop]

  return (
    <section id="crops" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Crop Guide</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guidance for major crops with seasonal tips and best practices
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(crops).map((crop) => (
            <button
              key={crop}
              onClick={() => setSelectedCrop(crop)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCrop === crop
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 shadow'
              }`}
            >
              {crops[crop].name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={currentCrop.image}
                alt={currentCrop.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">{currentCrop.name}</h3>
                <p className="text-green-300">{currentCrop.season}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-gray-900">Soil Type</span>
                  </div>
                  <p className="text-gray-600 text-sm">{currentCrop.soil}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="font-medium text-gray-900">Water Requirement</span>
                  </div>
                  <p className="text-gray-600 text-sm">{currentCrop.water}</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Cultivation Tips</h4>
              <ul className="space-y-3">
                {currentCrop.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium">
                View Complete Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CropGuide
