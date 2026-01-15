"use client";

import React from 'react';
import { Sprout, Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <footer className="bg-white border-t border-agri-green/10 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-agri-green p-1.5 rounded-lg text-white">
                <Sprout size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-agri-green">Agridose</span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              {t('footerDesc')}
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F0F4F1] flex items-center justify-center cursor-pointer hover:bg-agri-green/10 transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-[#F0F4F1] flex items-center justify-center cursor-pointer hover:bg-agri-green/10 transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-[#F0F4F1] flex items-center justify-center cursor-pointer hover:bg-agri-green/10 transition-colors"></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-6">{t('platform')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="#crop-guide" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('navCropGuide')}</a>
              </li>
              <li>
                <a href="#soil-analysis" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('soilAnalysis')}</a>
              </li>
              <li>
                <a href="#weather" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('weatherAdvisory')}</a>
              </li>
              <li>
                <a href="#organic" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('organicFarming')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-6">{t('support')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="#helpline" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('farmerHelpline')}</a>
              </li>
              <li>
                <a href="#shops" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('nearbyShops')}</a>
              </li>
              <li>
                <a href="#training" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('trainingPrograms')}</a>
              </li>
              <li>
                <a href="#faqs" className="text-sm text-[#6B7280] hover:text-agri-green transition-colors">{t('faqs')}</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-[#1A1A1A] mb-6">{t('contactUs')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                <Phone size={16} className="text-agri-green" />
                <span>{t('tollFree')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                <MessageCircle size={16} className="text-agri-green" />
                <span>{t('chatOnWhatsApp')}</span>
              </div>
            </div>

            <div className="bg-[#F8FAF9] p-4 rounded-2xl border border-agri-green/5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-agri-green mb-3">{t('downloadApp')}</p>
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 bg-[#1A1A1A] text-white px-3 py-1.5 rounded-lg hover:bg-black transition-all">
                  <div className="w-5 h-5 bg-white rounded-full flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="text-[8px] leading-none uppercase">Download on the</p>
                    <p className="text-xs font-bold leading-tight">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-[#1A1A1A] text-white px-3 py-1.5 rounded-lg hover:bg-black transition-all">
                  <div className="w-5 h-5 bg-white rounded-full flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="text-[8px] leading-none uppercase">Get it on</p>
                    <p className="text-xs font-bold leading-tight">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-agri-green/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B7280]">
            {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <a href="#privacy" className="hover:text-agri-green transition-colors">{t('privacyPolicy')}</a>
            <a href="#terms" className="hover:text-agri-green transition-colors">{t('termsOfService')}</a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 hover:text-agri-green transition-colors"
            >
              <Globe size={14} />
              {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
            </button>
          </div>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 bg-[#2D5A27] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl hover:bg-[#24481f] transition-all transform hover:scale-105 z-[60]">
        <Phone size={20} />
        <span className="font-bold">{t('helpline')}</span>
      </button>
    </footer>
  );
};

export default Footer;
