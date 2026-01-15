"use client";

import React from "react";
import Image from "next/image";
import { Sprout, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CropGuide = () => {
  const { t, language } = useLanguage();

  const crops = [
    {
      nameKey: "ricePaddy",
      typeKey: "kharif",
      stageKey: "sowing",
      image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800",
    },
    {
      nameKey: "wheat",
      typeKey: "rabi",
      stageKey: "growth",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800",
    },
    {
      nameKey: "maizeCorn",
      typeKey: "kharif",
      stageKey: "harvest",
      image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=800",
    },
    {
      nameKey: "cotton",
      typeKey: "kharif",
      stageKey: "sowing",
      image: "https://images.unsplash.com/photo-1594903582424-8147bc255685?q=80&w=800",
    },
  ];

  return (
    <section id="crop-guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-agri-green mb-2 font-semibold uppercase tracking-wider text-sm">
              <Sprout size={18} className="lucide lucide-sprout" />
              {t('knowledgeBase')}
            </div>
            <h2 className="text-4xl font-bold text-[#1a1a1a]">{t('cropCultivationGuide')}</h2>
          </div>
          
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium border border-agri-green/10 rounded-full bg-agri-green text-white transition-all shadow-sm">
              {t('allCrops')}
            </button>
            <button className="px-4 py-2 text-sm font-medium border border-[#e5e7eb] rounded-full bg-white text-[#6b7280] hover:bg-agri-light hover:text-agri-green transition-all">
              {t('kharif')}
            </button>
            <button className="px-4 py-2 text-sm font-medium border border-[#e5e7eb] rounded-full bg-white text-[#6b7280] hover:bg-agri-light hover:text-agri-green transition-all">
              {t('rabi')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crops.map((crop, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={crop.image}
                    alt={t(crop.nameKey)}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-agri-green px-3 py-1 rounded-md text-xs font-semibold tracking-wide border border-white/20">
                    {t(crop.typeKey)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-[#1a1a1a]">{t(crop.nameKey)}</h3>
                      <p className="text-[#6b7280] text-sm mt-1">
                        {t('currentStage')} <span className="text-agri-green font-semibold">{t(crop.stageKey)}</span>
                      </p>
                    </div>
                    <div className="bg-agri-light p-2 rounded-full text-agri-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropGuide;
