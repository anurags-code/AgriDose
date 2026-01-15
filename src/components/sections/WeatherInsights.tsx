"use client";

import React from 'react';
import { CloudSun, Droplets, Bug, FlaskConical, Info, TriangleAlert } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WeatherInsights = () => {
  const { t } = useLanguage();

  return (
    <section id="weather" className="py-16 bg-[#f0f4f1]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#2d5a27] mb-2 font-semibold uppercase tracking-wider text-sm">
              <CloudSun size={18} />
              {t('weatherAdvisory')}
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">{t('liveWeather')}</h2>
            
            <div className="bg-white rounded-3xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] overflow-hidden border border-[#2d5a27]/5">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-gradient-to-br from-[#2D5A27] to-[#24481f] text-white">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-[#f0f4f1]/80 text-sm font-medium">{t('todayForecast')}</p>
                      <h3 className="text-4xl font-bold mt-1">Ludhiana, PB</h3>
                    </div>
                    <CloudSun size={48} className="text-[#fdba74]" strokeWidth={1.5} />
                  </div>
                  <div className="text-7xl font-bold mb-6">28°C</div>
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
                    {t('condition')}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2 text-lg">
                    <Info size={18} className="text-[#2d5a27]" />
                    {t('cropAdvisory')}
                  </h4>
                  <p className="text-[#6b7280] mb-6 leading-relaxed">
                    {t('lightRainExpected')}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3 p-4 bg-[#fffbeb] border border-[#fef3c7] rounded-2xl text-[#92400e] text-sm leading-relaxed">
                      <TriangleAlert size={18} className="shrink-0 mt-0.5" />
                      <span>
                        <strong className="block mb-0.5">{t('highHumidity')}</strong>
                        {t('fungalWarning')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="soil-analysis" className="w-full md:w-80 space-y-4 pt-12 md:pt-[72px]">
            <h3 className="font-bold text-lg mb-4 text-[#1a1a1a]">{t('quickActions')}</h3>
            
            <button className="w-full p-4 bg-white hover:bg-[#f0f4f1] transition-all duration-300 border border-[#2d5a27]/10 rounded-2xl flex items-center gap-4 text-left shadow-sm hover:shadow-md group">
              <div className="bg-[#eff6ff] p-3 rounded-xl text-[#2563eb] group-hover:scale-110 transition-transform">
                <Droplets size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1a1a1a]">{t('waterNeeds')}</p>
                <p className="text-xs text-[#6b7280]">{t('checkDailyIntake')}</p>
              </div>
            </button>

            <button className="w-full p-4 bg-white hover:bg-[#f0f4f1] transition-all duration-300 border border-[#2d5a27]/10 rounded-2xl flex items-center gap-4 text-left shadow-sm hover:shadow-md group">
              <div className="bg-[#fffbeb] p-3 rounded-xl text-[#d97706] group-hover:scale-110 transition-transform">
                <Bug size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1a1a1a]">{t('pestWarning')}</p>
                <p className="text-xs text-[#6b7280]">{t('nearbyRisk')}</p>
              </div>
            </button>

            <button className="w-full p-4 bg-white hover:bg-[#f0f4f1] transition-all duration-300 border border-[#2d5a27]/10 rounded-2xl flex items-center gap-4 text-left shadow-sm hover:shadow-md group">
              <div className="bg-[#f5f3ff] p-3 rounded-xl text-[#7c3aed] group-hover:scale-110 transition-transform">
                <FlaskConical size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1a1a1a]">{t('soilHealth')}</p>
                <p className="text-xs text-[#6b7280]">{t('viewLatestReport')}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherInsights;
