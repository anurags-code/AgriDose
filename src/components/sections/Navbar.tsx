"use client";

import React, { useState } from 'react';
import { Sprout, Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { labelKey: 'navHome', href: '#home' },
    { labelKey: 'navCropGuide', href: '#crop-guide' },
    { labelKey: 'navOrganic', href: '#organic' },
    { labelKey: 'navWeather', href: '#weather' },
    { labelKey: 'navServices', href: '#services' },
    { labelKey: 'navEducation', href: '#education' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#2d5a27]/10 h-[65px]">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#2d5a27] p-1.5 rounded-xl text-white flex items-center justify-center w-9 h-9">
            <Sprout size={24} className="lucide lucide-sprout" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2d5a27] leading-7">
            Agridose
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 h-8">
          {navLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              className="text-sm font-medium text-[#6b7280] hover:text-[#2d5a27] transition-colors"
            >
              {t(link.labelKey)}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2d5a27]/20 bg-[#f0f4f1] hover:bg-[#e8f5e9] transition-colors text-sm font-medium text-[#2d5a27]"
          >
            <Globe size={14} />
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
          
          <button 
            type="button"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all text-white bg-[#2d5a27] hover:bg-[#2d5a27]/90 h-8 rounded-xl px-3 gap-1.5 shadow-sm"
          >
            <Phone size={16} className="lucide lucide-phone" />
            {t('helpline')}
          </button>
        </div>

        <button 
          className="md:hidden text-[#2d5a27] p-1"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className="lucide lucide-menu" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 right-0 bg-white border-b border-[#2d5a27]/10 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-[#6b7280] hover:text-[#2d5a27] font-medium"
              >
                {t(link.labelKey)}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-[#2d5a27]/20 bg-[#f0f4f1] text-[#2d5a27] font-medium"
              >
                <Globe size={16} />
                {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white py-2 rounded-xl font-medium">
                <Phone size={16} />
                {t('helpline')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
