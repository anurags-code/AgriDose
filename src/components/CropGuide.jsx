import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function CropGuide() {
  const [selectedCrop, setSelectedCrop] = useState('rice')
  const [showGuideModal, setShowGuideModal] = useState(false)
  const { t } = useLanguage()

  const crops = {
    rice: {
      nameKey: 'rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&h=400&fit=crop',
      season: 'Kharif (June - November)',
      seasonHi: 'खरीफ (जून - नवंबर)',
      soil: 'Clay or loamy soil with good water retention',
      soilHi: 'अच्छी जल धारण क्षमता वाली चिकनी या दोमट मिट्टी',
      water: 'High (Standing water required)',
      waterHi: 'अधिक (खड़ा पानी आवश्यक)',
      tips: [
        { en: 'Maintain 5-7 cm standing water during tillering', hi: 'कल्ले निकलने के दौरान 5-7 सेमी खड़ा पानी रखें' },
        { en: 'Apply nitrogen in 3 split doses', hi: 'नाइट्रोजन को 3 बार में डालें' },
        { en: 'Monitor for stem borer and leaf folder', hi: 'तना छेदक और पत्ती लपेटक की निगरानी करें' },
        { en: 'Drain field 15 days before harvest', hi: 'कटाई से 15 दिन पहले खेत से पानी निकालें' },
      ],
      fullGuide: {
        seedRate: { en: '20-25 kg/acre for transplanting', hi: 'रोपाई के लिए 20-25 किग्रा/एकड़' },
        spacing: { en: '20x15 cm for transplanting', hi: 'रोपाई के लिए 20x15 सेमी' },
        fertilizers: { en: 'NPK 120:60:40 kg/ha', hi: 'NPK 120:60:40 किग्रा/हेक्टेयर' },
        irrigation: { en: 'Maintain 2-5 cm water during vegetative stage', hi: 'वानस्पतिक अवस्था में 2-5 सेमी पानी रखें' },
        harvesting: { en: 'Harvest when 80% grains turn golden yellow', hi: '80% दाने सुनहरे पीले होने पर कटाई करें' },
        yield: { en: '4-6 tonnes/hectare', hi: '4-6 टन/हेक्टेयर' },
      },
    },
    wheat: {
      nameKey: 'wheat',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      season: 'Rabi (November - April)',
      seasonHi: 'रबी (नवंबर - अप्रैल)',
      soil: 'Well-drained loamy soil',
      soilHi: 'अच्छी जल निकासी वाली दोमट मिट्टी',
      water: 'Moderate (4-6 irrigations)',
      waterHi: 'मध्यम (4-6 सिंचाई)',
      tips: [
        { en: 'Sow seeds 5-7 cm deep in rows', hi: 'बीज 5-7 सेमी गहराई पर कतारों में बोएं' },
        { en: 'First irrigation at crown root stage', hi: 'पहली सिंचाई ताज जड़ अवस्था में' },
        { en: 'Apply weedicide within 35 days of sowing', hi: 'बुवाई के 35 दिनों के अंदर खरपतवारनाशक डालें' },
        { en: 'Harvest when grain moisture is 14-15%', hi: 'जब दाने में 14-15% नमी हो तब कटाई करें' },
      ],
      fullGuide: {
        seedRate: { en: '100-125 kg/ha for timely sowing', hi: 'समय पर बुवाई के लिए 100-125 किग्रा/हेक्टेयर' },
        spacing: { en: 'Row to row 20-22.5 cm', hi: 'कतार से कतार 20-22.5 सेमी' },
        fertilizers: { en: 'NPK 120:60:40 kg/ha', hi: 'NPK 120:60:40 किग्रा/हेक्टेयर' },
        irrigation: { en: '5-6 irrigations at critical stages', hi: 'महत्वपूर्ण अवस्थाओं में 5-6 सिंचाई' },
        harvesting: { en: 'When grains are hard and golden', hi: 'जब दाने कठोर और सुनहरे हों' },
        yield: { en: '4-5 tonnes/hectare', hi: '4-5 टन/हेक्टेयर' },
      },
    },
    cotton: {
      nameKey: 'cotton',
      image: 'https://images.unsplash.com/photo-1594903582424-8147bc255685?w=600&h=400&fit=crop',
      season: 'Kharif (April - December)',
      seasonHi: 'खरीफ (अप्रैल - दिसंबर)',
      soil: 'Black cotton soil or deep alluvial soil',
      soilHi: 'काली कपास मिट्टी या गहरी जलोढ़ मिट्टी',
      water: 'Moderate (6-8 irrigations)',
      waterHi: 'मध्यम (6-8 सिंचाई)',
      tips: [
        { en: 'Maintain proper plant spacing (90x60 cm)', hi: 'उचित पौध दूरी रखें (90x60 सेमी)' },
        { en: 'Apply potash for better fiber quality', hi: 'बेहतर रेशे की गुणवत्ता के लिए पोटाश डालें' },
        { en: 'Monitor for bollworm infestation', hi: 'बोलवर्म के प्रकोप की निगरानी करें' },
        { en: 'Pick cotton when bolls are fully opened', hi: 'जब टिंडे पूरी तरह खुल जाएं तब कपास तोड़ें' },
      ],
      fullGuide: {
        seedRate: { en: '2.5-3 kg/ha for Bt cotton', hi: 'बीटी कपास के लिए 2.5-3 किग्रा/हेक्टेयर' },
        spacing: { en: '90x60 cm or 120x60 cm', hi: '90x60 सेमी या 120x60 सेमी' },
        fertilizers: { en: 'NPK 120:60:60 kg/ha', hi: 'NPK 120:60:60 किग्रा/हेक्टेयर' },
        irrigation: { en: 'Critical at flowering and boll formation', hi: 'फूल और टिंडा बनने पर महत्वपूर्ण' },
        harvesting: { en: 'Pick when bolls fully open, 3-4 pickings', hi: 'टिंडे खुलने पर तोड़ें, 3-4 बार' },
        yield: { en: '15-20 quintals/hectare', hi: '15-20 क्विंटल/हेक्टेयर' },
      },
    },
    sugarcane: {
      nameKey: 'sugarcane',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop',
      season: 'Year-round (12-18 months)',
      seasonHi: 'साल भर (12-18 महीने)',
      soil: 'Deep rich loamy soil',
      soilHi: 'गहरी उपजाऊ दोमट मिट्टी',
      water: 'High (25-30 irrigations)',
      waterHi: 'अधिक (25-30 सिंचाई)',
      tips: [
        { en: 'Use disease-free seed setts', hi: 'रोग मुक्त बीज टुकड़े उपयोग करें' },
        { en: 'Earthing up at 90 and 120 days', hi: '90 और 120 दिनों पर मिट्टी चढ़ाएं' },
        { en: 'Trash mulching conserves moisture', hi: 'पत्ती पलवार से नमी बचती है' },
        { en: 'Harvest at 10-12 months for maximum sugar', hi: 'अधिकतम चीनी के लिए 10-12 महीने में कटाई करें' },
      ],
      fullGuide: {
        seedRate: { en: '37,500-40,000 setts/ha (3-budded)', hi: '37,500-40,000 टुकड़े/हेक्टेयर (3-आंख वाले)' },
        spacing: { en: '90-120 cm between rows', hi: 'कतारों के बीच 90-120 सेमी' },
        fertilizers: { en: 'NPK 250:60:60 kg/ha', hi: 'NPK 250:60:60 किग्रा/हेक्टेयर' },
        irrigation: { en: 'Every 7-10 days, critical at tillering', hi: 'हर 7-10 दिन, कल्ले निकलने पर महत्वपूर्ण' },
        harvesting: { en: 'At 10-12 months, when Brix is 18-20%', hi: '10-12 महीने में, जब ब्रिक्स 18-20% हो' },
        yield: { en: '80-100 tonnes/hectare', hi: '80-100 टन/हेक्टेयर' },
      },
    },
  }

  const currentCrop = crops[selectedCrop]
  const { language } = useLanguage()
  const isHindi = language === 'hi'

  return (
    <section id="crops" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('cropGuide')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('cropGuideDesc')}
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
              {t(crops[crop].nameKey)}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <img
                src={currentCrop.image}
                alt={t(currentCrop.nameKey)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">{t(currentCrop.nameKey)}</h3>
                <p className="text-green-300">{isHindi ? currentCrop.seasonHi : currentCrop.season}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-gray-900">{t('soilType')}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{isHindi ? currentCrop.soilHi : currentCrop.soil}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="font-medium text-gray-900">{t('waterRequirement')}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{isHindi ? currentCrop.waterHi : currentCrop.water}</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('cultivationTips')}</h4>
              <ul className="space-y-3">
                {currentCrop.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{isHindi ? tip.hi : tip.en}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setShowGuideModal(true)}
                className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
              >
                {t('viewCompleteGuide')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showGuideModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{t(currentCrop.nameKey)} - {t('viewCompleteGuide')}</h3>
              <button 
                onClick={() => setShowGuideModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <img 
                src={currentCrop.image} 
                alt={t(currentCrop.nameKey)}
                className="w-full h-48 object-cover rounded-xl"
              />
              
              <div className="grid gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-green-800 mb-2">{t('seedRate')}</h4>
                  <p className="text-gray-700">{isHindi ? currentCrop.fullGuide.seedRate.hi : currentCrop.fullGuide.seedRate.en}</p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">{t('spacing')}</h4>
                  <p className="text-gray-700">{isHindi ? currentCrop.fullGuide.spacing.hi : currentCrop.fullGuide.spacing.en}</p>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">{t('fertilizers')}</h4>
                  <p className="text-gray-700">{isHindi ? currentCrop.fullGuide.fertilizers.hi : currentCrop.fullGuide.fertilizers.en}</p>
                </div>
                
                <div className="bg-cyan-50 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-800 mb-2">{t('irrigation')}</h4>
                  <p className="text-gray-700">{isHindi ? currentCrop.fullGuide.irrigation.hi : currentCrop.fullGuide.irrigation.en}</p>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">{t('harvesting')}</h4>
                  <p className="text-gray-700">{isHindi ? currentCrop.fullGuide.harvesting.hi : currentCrop.fullGuide.harvesting.en}</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">{t('expectedYield')}</h4>
                  <p className="text-gray-700">{isHindi ? currentCrop.fullGuide.yield.hi : currentCrop.fullGuide.yield.en}</p>
                </div>
              </div>

              <button 
                onClick={() => setShowGuideModal(false)}
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
              >
                {t('closeGuide')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CropGuide
