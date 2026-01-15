"use client";

import React from 'react';
import { Leaf, Bug, Check, X, ArrowRight, Sprout } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const OrganicFarming = () => {
  const { t } = useLanguage();

  const fertilizers = [
    { titleKey: 'vermicompost', descKey: 'vermicompostDesc', icon: '🪱' },
    { titleKey: 'cowDungManure', descKey: 'cowDungManureDesc', icon: '🐄' },
    { titleKey: 'greenManure', descKey: 'greenManureDesc', icon: '🌿' },
  ];

  const dos = ['do1', 'do2', 'do3', 'do4'];
  const donts = ['dont1', 'dont2', 'dont3', 'dont4'];

  return (
    <section id="organic" className="py-20 bg-gradient-to-b from-[#f0f9f0] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#2d5a27] mb-3 font-semibold uppercase tracking-wider text-sm">
            <Leaf size={18} />
            {t('javikKheti')}
          </div>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            🌿 {t('organicFarmingTitle')}
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            {t('organicSectionDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-[#2d5a27]/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#e8f5e9] p-3 rounded-xl">
                  <Sprout className="w-6 h-6 text-[#2d5a27]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">{t('organicFertilizers')}</h3>
              </div>
              <p className="text-[#6b7280] mb-6">{t('organicFertilizersDesc')}</p>
              
              <div className="space-y-4">
                {fertilizers.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#f8faf8] rounded-2xl hover:bg-[#f0f4f0] transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a]">{t(item.titleKey)}</h4>
                      <p className="text-sm text-[#6b7280]">{t(item.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-[#2d5a27]/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#fff3e0] p-3 rounded-xl">
                  <Bug className="w-6 h-6 text-[#e65100]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">{t('bioPesticides')}</h3>
              </div>
              <p className="text-[#6b7280] mb-4">{t('bioPesticidesDesc')}</p>
              <div className="flex flex-wrap gap-2">
                {['Neem Oil', 'Garlic Spray', 'Tobacco Extract', 'Chilli Spray'].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#fff8e1] text-[#f57c00] rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-[#2d5a27]/5">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 text-center">
              {t('dosAndDonts')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#e8f5e9] p-2 rounded-lg">
                    <Check className="w-5 h-5 text-[#2d5a27]" />
                  </div>
                  <span className="font-bold text-[#2d5a27]">Do&apos;s</span>
                </div>
                {dos.map((key, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#e8f5e9]/50 rounded-xl">
                    <Check className="w-5 h-5 text-[#2d5a27] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1a1a1a]">{t(key)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#ffebee] p-2 rounded-lg">
                    <X className="w-5 h-5 text-[#c62828]" />
                  </div>
                  <span className="font-bold text-[#c62828]">Don&apos;ts</span>
                </div>
                {donts.map((key, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#ffebee]/50 rounded-xl">
                    <X className="w-5 h-5 text-[#c62828] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1a1a1a]">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full mt-8 bg-[#2d5a27] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#24481f] transition-all group">
              {t('learnMore')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicFarming;
