function CommunityImpact() {
  const stats = [
    { number: '50,000+', label: 'Farmers Empowered' },
    { number: '100+', label: 'Districts Covered' },
    { number: '30%', label: 'Average Yield Increase' },
    { number: '25 Cr+', label: 'Schemes Facilitated' },
  ]

  const testimonials = [
    {
      name: 'Rajinder Singh',
      location: 'Punjab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      quote: 'The weather alerts helped me save my wheat crop from unexpected frost. I was able to take preventive measures in time.',
    },
    {
      name: 'Lakshmi Devi',
      location: 'Maharashtra',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      quote: 'I learned about PM-KISAN through this platform and received Rs. 6,000 directly in my account. Very helpful!',
    },
    {
      name: 'Mohammed Ismail',
      location: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      quote: 'The crop disease detection feature identified leaf blight in my cotton field early. Saved my entire harvest!',
    },
  ]

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
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityImpact
