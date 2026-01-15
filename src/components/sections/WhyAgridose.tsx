"use client";

import React from 'react';
import { CheckCircle2, Users, Star, Smartphone, TrendingUp, Leaf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WhyAgridose = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      titleKey: 'allInOneSolution',
      descKey: 'allInOneSolutionDesc',
      icon: Smartphone,
    },
    {
      titleKey: 'sustainableFocus',
      descKey: 'sustainableFocusDesc',
      icon: Leaf,
    },
    {
      titleKey: 'zeroTechnicalBarrier',
      descKey: 'zeroTechnicalBarrierDesc',
      icon: Star,
    },
    {
      titleKey: 'incomeGrowth',
      descKey: 'incomeGrowthDesc',
      icon: TrendingUp,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] border border-agri-green/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#2d5a27] mb-3 font-semibold uppercase tracking-wider text-xs bg-[#e8f5e9] px-3 py-1.5 rounded-full">
                <Star size={14} />
                {t('forJudges')}
              </div>
              <h2 className="text-[2.25rem] font-bold leading-[1.2] mb-10 text-[#1A1A1A]">
                🌟 {t('whyAgridose')} <br />
                <span className="text-agri-green">{t('forFarmers')}</span>
              </h2>

              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-agri-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">
                        {t(benefit.titleKey)}
                      </h4>
                      <p className="text-[#6B7280] text-[0.9375rem] leading-relaxed max-w-md">
                        {t(benefit.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#F0F4F1] rounded-[2rem] p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <Users className="w-8 h-8 text-agri-green" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {t('joinCommunity')}
                </h3>
                <p className="text-[#6B7280] mb-8 max-w-[240px]">
                  {t('learnFromFarmers')}
                </p>

                <button className="bg-[#2D5A27] hover:bg-[#244820] text-white px-8 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md">
                  {t('successStories')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAgridose;
