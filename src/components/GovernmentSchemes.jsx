import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function GovernmentSchemes() {
  const [activeScheme, setActiveScheme] = useState(0)
  const { t } = useLanguage()

  const schemes = [
    {
      name: 'PM-KISAN',
      fullName: 'Pradhan Mantri Kisan Samman Nidhi',
      description: 'Direct income support of Rs. 6,000 per year to farmer families, paid in three equal installments.',
      benefits: ['Rs. 6,000 annual income support', 'Direct bank transfer', 'No middlemen involved'],
      eligibility: ['Land-owning farmer families', 'Valid Aadhaar card', 'Bank account linked to Aadhaar'],
      link: 'https://pmkisan.gov.in',
    },
    {
      name: 'PM Fasal Bima Yojana',
      fullName: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Comprehensive crop insurance scheme providing financial support in case of crop failure due to natural calamities.',
      benefits: ['Low premium rates', 'Full sum insured coverage', 'Quick claim settlement'],
      eligibility: ['All farmers growing notified crops', 'Loanee and non-loanee farmers', 'Share croppers and tenant farmers'],
      link: 'https://pmfby.gov.in',
    },
    {
      name: 'Kisan Credit Card',
      fullName: 'Kisan Credit Card Scheme',
      description: 'Provides farmers with affordable credit for agricultural needs, including crop production and other farm expenses.',
      benefits: ['Low interest rate of 4%', 'Flexible repayment', 'Insurance coverage included'],
      eligibility: ['Farmers, sharecroppers, tenant farmers', 'Self-help groups', 'Joint liability groups'],
      link: 'https://www.pmkisan.gov.in/kcc',
    },
    {
      name: 'Soil Health Card',
      fullName: 'Soil Health Card Scheme',
      description: 'Provides soil health cards to farmers with crop-wise recommendations for nutrients and fertilizers.',
      benefits: ['Free soil testing', 'Personalized fertilizer advice', 'Improved crop productivity'],
      eligibility: ['All farmers', 'No documentation required', 'Available through local agriculture office'],
      link: 'https://soilhealth.dac.gov.in',
    },
  ]

  return (
<section id="schemes" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('governmentSchemes')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('schemesDesc')}
            </p>
          </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {schemes.map((scheme, index) => (
              <button
                key={index}
                onClick={() => setActiveScheme(index)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeScheme === index
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 shadow'
                }`}
              >
                <p className="font-semibold">{scheme.name}</p>
                <p className={`text-sm mt-1 ${activeScheme === index ? 'text-green-100' : 'text-gray-500'}`}>
                  {scheme.fullName}
                </p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{schemes[activeScheme].name}</h3>
                <p className="text-green-600">{schemes[activeScheme].fullName}</p>
              </div>
<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {t('active')}
                </span>
            </div>

            <p className="text-gray-600 mb-6">{schemes[activeScheme].description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
<h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('benefits')}
                  </h4>
                <ul className="space-y-2">
                  {schemes[activeScheme].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
<h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {t('eligibility')}
                  </h4>
                <ul className="space-y-2">
                  {schemes[activeScheme].eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={schemes[activeScheme].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium text-center"
              >
                {t('applyNow')}
              </a>
              <button className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-xl hover:bg-green-50 transition-colors font-medium">
                {t('checkStatus')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GovernmentSchemes
