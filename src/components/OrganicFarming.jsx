import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function OrganicFarming() {
  const [activeTab, setActiveTab] = useState('fertilizers')
  const { t } = useLanguage()

  const tabs = [
    { id: 'fertilizers', labelKey: 'javikKhad', icon: '🌱' },
    { id: 'composting', labelKey: 'composting', icon: '♻️' },
    { id: 'pesticides', labelKey: 'bioPesticides', icon: '🐛' },
    { id: 'tips', labelKey: 'dosAndDonts', icon: '✅' },
  ]

  const fertilizers = [
    {
      name: 'Vermicompost (Kechua Khad)',
      description: 'Made by earthworms from organic waste. Rich in nitrogen, phosphorus, and potassium.',
      benefits: ['Improves soil structure', 'Increases water retention', 'Provides slow-release nutrients', 'Contains beneficial microorganisms'],
      howToMake: 'Collect kitchen waste, cow dung, and dry leaves. Add earthworms (Eisenia fetida). Keep moist and shaded. Ready in 45-60 days.',
      application: '2-3 tonnes per acre, mix with soil before sowing',
    },
    {
      name: 'Cow Dung Manure (Gobar Khad)',
      description: 'Traditional organic fertilizer made from decomposed cow dung. Foundation of organic farming.',
      benefits: ['Improves soil fertility', 'Increases beneficial bacteria', 'Cost-effective', 'Easily available'],
      howToMake: 'Collect fresh cow dung, mix with crop residue. Keep in pit for 3-4 months. Turn occasionally.',
      application: '5-10 tonnes per acre, apply 2-3 weeks before sowing',
    },
    {
      name: 'Green Manure (Hara Khad)',
      description: 'Growing leguminous crops and ploughing them into soil. Adds nitrogen naturally.',
      benefits: ['Fixes atmospheric nitrogen', 'Adds organic matter', 'Controls weeds', 'Improves soil structure'],
      howToMake: 'Grow dhaincha, sunhemp, or sesbania for 45-60 days. Plough into soil before flowering.',
      application: 'Sow 25-30 kg seeds/acre, incorporate at 50% flowering',
    },
    {
      name: 'Jeevamrut',
      description: 'Liquid organic fertilizer made from cow dung, urine, jaggery, and flour. Boosts soil microbes.',
      benefits: ['Activates soil biology', 'Low cost preparation', 'Quick results', 'Improves plant immunity'],
      howToMake: 'Mix 10kg cow dung + 10L cow urine + 2kg jaggery + 2kg flour + handful soil in 200L water. Ferment for 7 days.',
      application: '200L per acre through irrigation or spray diluted (1:10)',
    },
    {
      name: 'Panchgavya',
      description: 'Five cow products mixture - dung, urine, milk, curd, ghee. Powerful growth promoter.',
      benefits: ['Enhances plant growth', 'Improves flowering & fruiting', 'Increases pest resistance', 'Sacred & sustainable'],
      howToMake: 'Mix cow dung (7kg) + cow urine (3L) + milk (2L) + curd (2L) + ghee (1L) + sugarcane juice (3L). Ferment 15-20 days.',
      application: 'Spray 3% solution (30ml in 1L water) every 15 days',
    },
  ]

  const biopesticides = [
    {
      name: 'Neem Oil Spray',
      target: 'Aphids, whiteflies, caterpillars, mites',
      preparation: 'Mix 5ml neem oil + 1ml liquid soap in 1L water',
      application: 'Spray on leaves in evening, repeat every 7-10 days',
    },
    {
      name: 'Garlic-Chilli Spray',
      target: 'Sucking pests, fungal diseases',
      preparation: 'Blend 100g garlic + 100g chilli in 1L water. Strain and dilute 1:10',
      application: 'Spray on affected plants, avoid during flowering',
    },
    {
      name: 'Buttermilk Spray',
      target: 'Powdery mildew, fungal infections',
      preparation: 'Mix 1L buttermilk in 10L water',
      application: 'Spray on leaves early morning, repeat weekly',
    },
    {
      name: 'Trichoderma',
      target: 'Soil-borne diseases, root rot',
      preparation: 'Mix 2kg Trichoderma in 100kg FYM, keep moist for 7 days',
      application: 'Apply enriched FYM before sowing',
    },
    {
      name: 'Cow Urine Spray',
      target: 'General pest repellent, fungal diseases',
      preparation: 'Ferment cow urine for 15 days. Dilute 1:10 with water',
      application: 'Spray every 15 days as preventive measure',
    },
  ]

  const dosAndDonts = {
    dos: [
      'Get your soil tested before starting organic farming',
      'Start with small area and expand gradually',
      'Maintain crop rotation with legumes',
      'Keep detailed records of inputs and yields',
      'Use indigenous cow breeds for better quality manure',
      'Prepare your own bio-inputs to reduce costs',
      'Mulch with crop residue to conserve moisture',
      'Integrate livestock with farming',
      'Join organic farmer groups for knowledge sharing',
      'Apply for organic certification after 3 years',
    ],
    donts: [
      'Never use chemical fertilizers or pesticides',
      'Avoid burning crop residue',
      'Do not expect immediate results - transition takes 2-3 years',
      'Avoid monocropping - practice diversity',
      'Do not use hybrid seeds - prefer desi varieties',
      'Never spray pesticides during flowering time',
      'Avoid waterlogging in organic fields',
      'Do not ignore pest monitoring',
      'Avoid purchasing uncertified organic inputs',
      'Do not skip soil health assessment',
    ],
  }

  return (
<section id="organic" className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">🌿</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('organicFarming')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('organicDesc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 shadow'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>

        {activeTab === 'fertilizers' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fertilizers.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Benefits:</h4>
                  <ul className="space-y-1 mb-4">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-3">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">How to Prepare:</h4>
                    <p className="text-green-700 text-xs">{item.howToMake}</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Application:</h4>
                    <p className="text-blue-700 text-xs">{item.application}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'composting' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Composting Methods</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">1. Pit Method (Gadda Vidhi)</h4>
                    <p className="text-gray-600 text-sm mt-1">Dig pit 3ft x 3ft x 3ft. Layer organic waste and cow dung. Cover with soil. Ready in 3-4 months.</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-gray-900">2. Heap Method (Dheri Vidhi)</h4>
                    <p className="text-gray-600 text-sm mt-1">Make layers of waste above ground in shaded area. Turn every 15 days. Ready in 2-3 months.</p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-semibold text-gray-900">3. NADEP Composting</h4>
                    <p className="text-gray-600 text-sm mt-1">Brick tank 12ft x 5ft x 3ft. Mix waste, cow dung, soil in layers. Produces 3-4 tonnes compost.</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-gray-900">4. Vermicomposting</h4>
                    <p className="text-gray-600 text-sm mt-1">Use earthworms in shaded beds. Add pre-decomposed waste. Harvest every 45-60 days.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Materials for Composting</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-green-800 mb-3">Green Materials (Nitrogen)</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Fresh cow dung</li>
                      <li>• Kitchen waste</li>
                      <li>• Green leaves</li>
                      <li>• Vegetable scraps</li>
                      <li>• Grass clippings</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 rounded-xl p-4">
                    <h4 className="font-semibold text-amber-800 mb-3">Brown Materials (Carbon)</h4>
                    <ul className="space-y-2 text-sm text-amber-700">
                      <li>• Dry leaves</li>
                      <li>• Straw & husk</li>
                      <li>• Sawdust</li>
                      <li>• Paper & cardboard</li>
                      <li>• Crop residue</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Golden Ratio</h4>
                  <p className="text-gray-600 text-sm">Mix green and brown materials in 1:3 ratio. Maintain 50-60% moisture. Turn every 15 days for faster decomposition.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pesticides' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biopesticides.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Target Pests</p>
                    <p className="text-sm text-gray-700">{item.target}</p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <p className="text-xs text-yellow-800 uppercase tracking-wide mb-1">Preparation</p>
                    <p className="text-sm text-yellow-700">{item.preparation}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-green-800 uppercase tracking-wide mb-1">Application</p>
                    <p className="text-sm text-green-700">{item.application}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Natural Pest Control Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">🦅</span>
                  <span className="text-sm">Install bird perches - 10 per acre for natural pest control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">🌼</span>
                  <span className="text-sm">Plant marigold borders to repel pests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">🪤</span>
                  <span className="text-sm">Use yellow sticky traps for whiteflies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">💡</span>
                  <span className="text-sm">Light traps for moths and beetles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">🐞</span>
                  <span className="text-sm">Encourage ladybugs - they eat aphids</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>✅</span> Do's of Organic Farming
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>❌</span> Don'ts of Organic Farming
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

<div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{t('startOrganicJourney')}</h3>
            <p className="max-w-2xl mx-auto mb-6">
              {t('organicBenefitsDesc')}
            </p>
            <button 
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              {t('getOrganicSupport')}
            </button>
          </div>
      </div>
    </section>
  )
}

export default OrganicFarming
