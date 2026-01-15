"use client";

import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const GovernmentSchemes = () => {
  const { t } = useLanguage();

  const schemes = [
    {
      id: '01',
      titleKey: 'pmKisan',
      descKey: 'pmKisanDesc',
    },
    {
      id: '02',
      titleKey: 'kcc',
      descKey: 'kccDesc',
    },
    {
      id: '03',
      titleKey: 'soilHealthCard',
      descKey: 'soilHealthCardDesc',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col items-start pt-4">
            <div className="flex items-center gap-2 text-[#2D5A27] mb-3 font-semibold uppercase tracking-wider text-xs">
              <BookOpen size={16} />
              {t('educationNews')}
            </div>
            <h2 className="text-[36px] font-bold leading-[1.2] text-[#1A1A1A] mb-6">
              {t('govtSchemes').split(' ').slice(0, 2).join(' ')} <br />
              {t('govtSchemes').split(' ').slice(2).join(' ')}
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#6B7280] mb-8 max-w-sm">
              {t('govtSchemesDesc')}
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-[#2D5A27] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#24481f] transition-all group"
            >
              {t('viewAllSchemes')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {schemes.map((scheme) => (
              <div 
                key={scheme.id}
                className="group p-6 md:p-8 bg-white border border-[#E5E7EB] rounded-[24px] hover:border-[#2D5A27]/20 hover:shadow-lg transition-all duration-300 flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f0f4f1] text-[#2D5A27] flex items-center justify-center font-bold text-sm border border-[#2D5A27]/5">
                  {scheme.id}
                </div>
                
                <div className="flex-grow pt-1">
                  <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#2D5A27] transition-colors">
                    {t(scheme.titleKey)}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#6B7280]">
                    {t(scheme.descKey)}
                  </p>
                </div>

                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border border-transparent group-hover:border-[#E5E7EB] text-[#2D5A27] opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSchemes;
