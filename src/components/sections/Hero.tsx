"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Phone, CloudSun, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center justify-center rounded-md border font-semibold w-fit whitespace-nowrap bg-agri-green/10 text-agri-green border-agri-green/20 mb-6 px-3 py-1.5 text-xs uppercase tracking-wider">
            🌾 {t('heroTag')}
          </div>
          
          <h1 className="text-5xl md:text-[3.75rem] font-bold leading-[1.1] mb-6 text-[#1A1A1A] tracking-tight">
            {t('heroTitle1')} <span className="text-agri-green">{t('heroTitle2')}</span>
          </h1>
          
          <p className="text-lg text-[#6B7280] mb-10 max-w-lg leading-relaxed">
            {t('heroDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-agri-green hover:bg-[#24481f] text-white rounded-xl h-14 px-8 text-lg font-bold flex items-center justify-center transition-all hover:scale-[1.02] shadow-sm group">
              {t('startGrowing')}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border-2 border-agri-green text-agri-green hover:bg-agri-light rounded-xl h-14 px-8 text-lg font-bold flex items-center justify-center transition-all">
              <Phone className="mr-2 w-5 h-5" />
              {t('expertSupport')}
            </button>
          </div>
          
          <div className="mt-10 flex items-center gap-4 text-sm text-[#6B7280]">
            <div className="flex -space-x-3">
              {[11, 12, 13, 14].map((seed) => (
                <div key={seed} className="w-10 h-10 rounded-full border-2 border-white bg-agri-light overflow-hidden shadow-sm">
                  <Image 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} 
                    alt="Farmer avatar" 
                    width={40} 
                    height={40} 
                  />
                </div>
              ))}
            </div>
            <p>{t('trustedBy')} <span className="font-bold text-[#1A1A1A]">10,000+</span> {t('progressiveFarmers')}</p>
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-agri-green/5">
            <Image 
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200" 
              alt="Farmer in the field" 
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -top-6 -right-2 md:-right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-agri-green/10 max-w-[210px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-50 p-2 rounded-xl text-blue-500">
                <CloudSun size={24} />
              </div>
              <span className="font-bold text-2xl text-[#1A1A1A]">28°C</span>
            </div>
            <p className="text-[13px] text-[#6B7280] leading-snug font-medium">
              {t('optimalFor')}
            </p>
          </div>

          <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-agri-green/10 flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="bg-[#E8F5E9] p-3 rounded-full text-agri-green">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A1A1A]">{t('soilHealthGood')}</p>
              <p className="text-xs text-[#6B7280] font-medium">{t('npkBalanced')}</p>
            </div>
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-radial-gradient from-agri-green/5 to-transparent opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
