import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Parakhdas_Sahu from '../../assest/image1.jpeg'
import Bhola_Ram_Sahu from '../../assest/image2.jpeg'

function CommunityImpact() {
  const { t } = useLanguage()
  const [showSignupForm, setShowSignupForm] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    district: '',
    landArea: '',
    mainCrop: '',
  })
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const stats = [
    { number: '50,000+', labelKey: 'farmersEmpowered' },
    { number: '100+', labelKey: 'districtsCovered' },
    { number: '30%', labelKey: 'avgYieldIncrease' },
    { number: '25 Cr+', labelKey: 'schemesFacilitated' },
  ]

  const testimonials = [
    {
      name: 'Parakhdas Sahu',
      location: 'Keshla, Rajnandgaon, Chhattisgarh',
      image: Parakhdas_Sahu,
      quote: 'The weather alerts helped me save my rice crop from unexpected heavy rain. I was able to harvest in time.',
    },
    {
      name: 'Sunita Verma',
      location: 'Magarlod, bhaismundi, Chhattisgarh',
      image: Bhola_Ram_Sahu,
      quote: 'I learned about PM-KISAN through this platform and received Rs. 6,000 directly in my account. Very helpful!',
    },
    {
      name: 'Tikeshwar Patel',
      location: 'Durg, Chhattisgarh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      quote: 'The crop calculator helped me use the right amount of fertilizer. My yield increased by 25% this season!',
    },
  ]

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.village || !formData.district) {
      alert('Please fill all required fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setShowSignupForm(false)
      setSubmitted(false)
      setFormData({ name: '', phone: '', village: '', district: '', landArea: '', mainCrop: '' })
    }, 3000)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactData.name || !contactData.phone || !contactData.message) {
      alert('Please fill all required fields')
      return
    }
    setContactSubmitted(true)
    setTimeout(() => {
      setShowContactForm(false)
      setContactSubmitted(false)
      setContactData({ name: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Community Impact</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how we are making a difference in the lives of farmers across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-center text-white">
              <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
              <p className="text-green-100 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What Farmers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Farming?</h3>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Join thousands of farmers who are already benefiting from smart farming technology. 
            Get started today and take your agriculture to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowSignupForm(true)}
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium"
            >
              Get Started Free
            </button>
            <button 
              onClick={() => setShowContactForm(true)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {showSignupForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">🌾 Join Agridose</h3>
              <button 
                onClick={() => setShowSignupForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Registration Successful!</h4>
                    <p className="text-gray-600">Welcome to Agridose! We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Village *</label>
                      <input 
                        type="text"
                        value={formData.village}
                        onChange={(e) => setFormData({...formData, village: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Village name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
                      <select 
                        value={formData.district}
                        onChange={(e) => setFormData({...formData, district: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                      >
                        <option value="">Select District</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Bilaspur">Bilaspur</option>
                        <option value="Durg">Durg</option>
                        <option value="Rajnandgaon">Rajnandgaon</option>
                        <option value="Korba">Korba</option>
                        <option value="Raigarh">Raigarh</option>
                        <option value="Janjgir-Champa">Janjgir-Champa</option>
                        <option value="Surguja">Surguja</option>
                        <option value="Bastar">Bastar</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Land Area (acres)</label>
                      <input 
                        type="number"
                        value={formData.landArea}
                        onChange={(e) => setFormData({...formData, landArea: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., 5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Main Crop</label>
                      <select 
                        value={formData.mainCrop}
                        onChange={(e) => setFormData({...formData, mainCrop: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select Crop</option>
                        <option value="Rice">Rice (Paddy)</option>
                        <option value="Wheat">Wheat</option>
                        <option value="Maize">Maize</option>
                        <option value="Soybean">Soybean</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Sugarcane">Sugarcane</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium mt-4"
                  >
                    Register Now
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    By registering, you agree to receive updates via SMS and WhatsApp
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {contactSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="bg-green-50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">Contact Information</h4>
                    <p className="text-sm text-green-700">Toll Free: 1800-XXX-XXXX</p>
                      <p className="text-sm text-green-700">Email: support@agridose.in</p>
                    <p className="text-sm text-green-700">WhatsApp: +91 98XXX XXXXX</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input 
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                    <input 
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                    <textarea 
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CommunityImpact
