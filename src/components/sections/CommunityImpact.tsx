import React from 'react';
import { CheckCircle2, Users } from 'lucide-react';

const CommunityImpact = () => {
  const benefits = [
    {
      title: "All-in-one solution",
      description: "No need for multiple apps. Everything from seed to market is here."
    },
    {
      title: "Sustainable Focus",
      description: "Deep commitment to organic farming and soil health longevity."
    },
    {
      title: "Zero Technical Barrier",
      description: "Easy-to-use interface with local language support and voice search."
    },
    {
      title: "Income Growth",
      description: "Proven to improve crop yield and reduce fertilizer waste by 20%."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] border border-agri-green/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side: Why Agridose is Unique */}
            <div>
              <h2 className="text-[2.25rem] font-bold leading-[1.2] mb-10 text-[#1A1A1A]">
                Why Agridose is Unique <br />
                <span className="text-agri-green">for Farmers.</span>
              </h2>

              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-agri-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-[#6B7280] text-[0.9375rem] leading-relaxed max-w-md">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Join the Community Card */}
            <div className="relative">
              <div className="bg-[#F0F4F1] rounded-[2rem] p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <Users className="w-8 h-8 text-agri-green" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  Join the Community
                </h3>
                <p className="text-[#6B7280] mb-8 max-w-[240px]">
                  Learn from success stories of fellow farmers
                </p>

                <button className="bg-[#2D5A27] hover:bg-[#244820] text-white px-8 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md">
                  Success Stories
                </button>
              </div>

              {/* Decorative floating dots/elements if needed to match precision, 
                  but based on screenshots, the clean light green surface is key */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;