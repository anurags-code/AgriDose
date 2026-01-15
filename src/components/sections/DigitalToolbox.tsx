"use client";

import React from 'react';
import { Phone, FlaskConical, Sprout, Droplets, MapPin, Bug } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const DigitalToolbox = () => {
  const { t } = useLanguage();

  const tools = [
    {
      titleKey: "farmerHelpline",
      descKey: "helplineDesc",
      icon: Phone,
      iconBg: "bg-white",
      iconColor: "text-blue-600",
    },
    {
      titleKey: "soilAnalysis",
      descKey: "soilAnalysisDesc",
      icon: FlaskConical,
      iconBg: "bg-white",
      iconColor: "text-amber-600",
    },
    {
      titleKey: "organicFarming",
      descKey: "organicFarmingDesc",
      icon: Sprout,
      iconBg: "bg-white",
      iconColor: "text-green-600",
    },
    {
      titleKey: "waterMgmt",
      descKey: "waterMgmtDesc",
      icon: Droplets,
      iconBg: "bg-white",
      iconColor: "text-blue-400",
    },
    {
      titleKey: "nearbyShops",
      descKey: "nearbyShopsDesc",
      icon: MapPin,
      iconBg: "bg-white",
      iconColor: "text-red-500",
    },
    {
      titleKey: "diseaseDetection",
      descKey: "diseaseDetectionDesc",
      icon: Bug,
      iconBg: "bg-white",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-[1280px] mx-auto bg-[#2D5A27] rounded-[2.5rem] py-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('allInOneToolbox')}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {t('toolboxDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-3xl p-8 text-left transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <tool.icon className={`w-6 h-6 ${tool.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {t(tool.titleKey)}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {t(tool.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalToolbox;
