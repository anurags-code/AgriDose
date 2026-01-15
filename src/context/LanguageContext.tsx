"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const translations: Record<string, { en: string; hi: string }> = {
  navHome: { en: 'Home', hi: 'होम' },
  navCropGuide: { en: 'Crop Guide', hi: 'फसल गाइड' },
  navSoilAnalysis: { en: 'Soil Analysis', hi: 'मिट्टी परीक्षण' },
  navWeather: { en: 'Weather', hi: 'मौसम' },
  navServices: { en: 'Services', hi: 'सेवाएं' },
  navEducation: { en: 'Education', hi: 'शिक्षा' },
  navOrganic: { en: 'Organic', hi: 'जैविक' },
  helpline: { en: 'Helpline', hi: 'हेल्पलाइन' },
  heroTag: { en: 'Smart Digital Platform for Farmers', hi: 'किसानों के लिए स्मार्ट डिजिटल प्लेटफॉर्म' },
  heroTitle1: { en: 'Empowering Farmers with', hi: 'किसानों को सशक्त बनाना' },
  heroTitle2: { en: 'Intelligence.', hi: 'बुद्धिमत्ता के साथ।' },
  heroDesc: { en: 'Agridose provides everything a farmer needs: from real-time weather alerts and soil analysis to expert disease management and organic farming guides.', hi: 'एग्रीडोज़ किसान की हर जरूरत पूरी करता है: मौसम अलर्ट, मिट्टी विश्लेषण, रोग प्रबंधन और जैविक खेती गाइड।' },
  startGrowing: { en: 'Start Growing', hi: 'शुरू करें' },
  expertSupport: { en: 'Expert Support', hi: 'विशेषज्ञ सहायता' },
  trustedBy: { en: 'Trusted by', hi: 'विश्वास करते हैं' },
  progressiveFarmers: { en: 'progressive farmers', hi: 'प्रगतिशील किसान' },
  optimalFor: { en: 'Optimal for Wheat sowing this week.', hi: 'इस सप्ताह गेहूं बुवाई के लिए उपयुक्त।' },
  soilHealthGood: { en: 'Soil Health: Good', hi: 'मिट्टी स्वास्थ्य: अच्छा' },
  npkBalanced: { en: 'NPK Levels balanced', hi: 'NPK स्तर संतुलित' },
  weatherAdvisory: { en: 'Weather & Advisory', hi: 'मौसम और सलाह' },
  liveWeather: { en: 'Live Weather Insights', hi: 'लाइव मौसम जानकारी' },
  todayForecast: { en: "Today's Forecast", hi: 'आज का पूर्वानुमान' },
  condition: { en: 'Condition: Partly Cloudy', hi: 'स्थिति: आंशिक बादल' },
  cropAdvisory: { en: 'Crop Advisory Alert', hi: 'फसल सलाह अलर्ट' },
  lightRainExpected: { en: 'Light rain expected in 48 hours. Secure harvested crops.', hi: '48 घंटे में हल्की बारिश की संभावना। कटी फसल सुरक्षित करें।' },
  highHumidity: { en: 'High humidity:', hi: 'उच्च नमी:' },
  fungalWarning: { en: 'Watch for fungal infections in Rice crops.', hi: 'धान में फफूंद संक्रमण की निगरानी करें।' },
  quickActions: { en: 'Quick Actions', hi: 'त्वरित कार्य' },
  waterNeeds: { en: 'Water Needs', hi: 'पानी की जरूरत' },
  checkDailyIntake: { en: 'Check daily intake', hi: 'दैनिक जरूरत देखें' },
  pestWarning: { en: 'Pest Warning', hi: 'कीट चेतावनी' },
  nearbyRisk: { en: 'Nearby risk levels', hi: 'आसपास खतरे का स्तर' },
  soilHealth: { en: 'Soil Health', hi: 'मिट्टी स्वास्थ्य' },
  viewLatestReport: { en: 'View latest report', hi: 'नवीनतम रिपोर्ट देखें' },
  knowledgeBase: { en: 'Knowledge Base', hi: 'ज्ञान भंडार' },
  cropCultivationGuide: { en: 'Crop Cultivation Guide', hi: 'फसल उत्पादन गाइड' },
  allCrops: { en: 'All Crops', hi: 'सभी फसलें' },
  kharif: { en: 'Kharif', hi: 'खरीफ' },
  rabi: { en: 'Rabi', hi: 'रबी' },
  currentStage: { en: 'Current stage:', hi: 'वर्तमान अवस्था:' },
  sowing: { en: 'Sowing', hi: 'बुवाई' },
  growth: { en: 'Growth', hi: 'विकास' },
  harvest: { en: 'Harvest', hi: 'कटाई' },
  ricePaddy: { en: 'Rice (Paddy)', hi: 'धान (चावल)' },
  wheat: { en: 'Wheat', hi: 'गेहूं' },
  maizeCorn: { en: 'Maize (Corn)', hi: 'मक्का' },
  cotton: { en: 'Cotton', hi: 'कपास' },
  allInOneToolbox: { en: 'All-in-One Digital Toolbox', hi: 'ऑल-इन-वन डिजिटल टूलबॉक्स' },
  toolboxDesc: { en: 'Designed to improve crop yield and farmer income through modern technology and sustainable practices.', hi: 'आधुनिक तकनीक से फसल उत्पादन और किसान आय बढ़ाने के लिए डिज़ाइन किया गया।' },
  farmerHelpline: { en: 'Farmer Helpline', hi: 'किसान हेल्पलाइन' },
  helplineDesc: { en: '24/7 Expert support via call, chat, or WhatsApp for instant solutions.', hi: '24/7 कॉल, चैट या WhatsApp पर विशेषज्ञ सहायता।' },
  soilAnalysis: { en: 'Soil Analysis', hi: 'मिट्टी विश्लेषण' },
  soilAnalysisDesc: { en: 'Get detailed nutrient requirement (NPK) and soil type identification.', hi: 'पोषक तत्व (NPK) और मिट्टी प्रकार की विस्तृत जानकारी।' },
  organicFarming: { en: 'Organic Farming', hi: 'जैविक खेती' },
  organicFarmingDesc: { en: 'Comprehensive guide to Javik Kheti, bio-fertilizers, and natural pest control.', hi: 'जैविक खेती, जैव उर्वरक और प्राकृतिक कीट नियंत्रण की पूरी गाइड।' },
  waterMgmt: { en: 'Water Mgmt', hi: 'जल प्रबंधन' },
  waterMgmtDesc: { en: 'Smart irrigation techniques and water-saving tips tailored for your crops.', hi: 'आपकी फसलों के लिए स्मार्ट सिंचाई तकनीक और पानी बचाने के टिप्स।' },
  nearbyShops: { en: 'Nearby Shops', hi: 'नजदीकी दुकानें' },
  nearbyShopsDesc: { en: 'Find Krishi stores, seed dealers, and equipment rental services near you.', hi: 'अपने पास कृषि स्टोर, बीज विक्रेता और उपकरण किराये की सेवाएं खोजें।' },
  diseaseDetection: { en: 'Disease Detection', hi: 'रोग पहचान' },
  diseaseDetectionDesc: { en: 'Identify symptoms and get preventive organic/chemical treatment options.', hi: 'लक्षण पहचानें और जैविक/रासायनिक उपचार विकल्प पाएं।' },
  educationNews: { en: 'Education & News', hi: 'शिक्षा और समाचार' },
  govtSchemes: { en: 'Government Schemes & Subsidies', hi: 'सरकारी योजनाएं और सब्सिडी' },
  govtSchemesDesc: { en: 'Stay updated with the latest farming trends, training programs, and financial assistance provided by the government.', hi: 'खेती के नए तरीकों, प्रशिक्षण और सरकारी आर्थिक सहायता से अपडेट रहें।' },
  viewAllSchemes: { en: 'View All Schemes', hi: 'सभी योजनाएं देखें' },
  pmKisan: { en: 'PM-Kisan Samman Nidhi', hi: 'पीएम-किसान सम्मान निधि' },
  pmKisanDesc: { en: 'Direct income support of ₹6,000 per year to all landholding farmer families.', hi: 'सभी भूमिधारक किसान परिवारों को ₹6,000 प्रति वर्ष प्रत्यक्ष आय सहायता।' },
  kcc: { en: 'Kisan Credit Card (KCC)', hi: 'किसान क्रेडिट कार्ड (KCC)' },
  kccDesc: { en: 'Providing adequate and timely credit support from the banking system.', hi: 'बैंकिंग प्रणाली से पर्याप्त और समय पर ऋण सहायता।' },
  soilHealthCard: { en: 'Soil Health Card Scheme', hi: 'मृदा स्वास्थ्य कार्ड योजना' },
  soilHealthCardDesc: { en: 'Assessment of soil health and recommendations for nutrient management.', hi: 'मिट्टी स्वास्थ्य मूल्यांकन और पोषक तत्व प्रबंधन की सिफारिशें।' },
  organicFarmingTitle: { en: 'Organic Farming & Bio-Fertilizers', hi: 'जैविक खेती और जैव उर्वरक' },
  javikKheti: { en: 'Javik Kheti', hi: 'जैविक खेती' },
  organicSectionDesc: { en: 'Learn sustainable farming practices that are good for your health, soil, and wallet.', hi: 'स्थायी खेती के तरीके सीखें जो आपके स्वास्थ्य, मिट्टी और बजट के लिए अच्छे हैं।' },
  organicFertilizers: { en: 'Organic Fertilizers (Javik Khad)', hi: 'जैविक उर्वरक (जैविक खाद)' },
  organicFertilizersDesc: { en: 'Natural nutrients that improve soil health without harmful chemicals.', hi: 'प्राकृतिक पोषक तत्व जो बिना हानिकारक रसायनों के मिट्टी स्वास्थ्य सुधारें।' },
  vermicompost: { en: 'Vermicompost', hi: 'वर्मीकम्पोस्ट' },
  vermicompostDesc: { en: 'Earthworm-based composting for nutrient-rich organic manure.', hi: 'केंचुआ आधारित खाद पोषक तत्वों से भरपूर जैविक खाद के लिए।' },
  cowDungManure: { en: 'Cow Dung Manure (Gobar Khad)', hi: 'गोबर खाद' },
  cowDungManureDesc: { en: 'Traditional and effective organic fertilizer for all crops.', hi: 'सभी फसलों के लिए पारंपरिक और प्रभावी जैविक खाद।' },
  greenManure: { en: 'Green Manure (Hara Khad)', hi: 'हरी खाद' },
  greenManureDesc: { en: 'Growing and plowing green crops to enrich soil naturally.', hi: 'मिट्टी को प्राकृतिक रूप से समृद्ध करने के लिए हरी फसलें उगाना और जोतना।' },
  bioPesticides: { en: 'Bio-Pesticides', hi: 'जैव कीटनाशक' },
  bioPesticidesDesc: { en: 'Natural pest control using neem, garlic, and other organic methods.', hi: 'नीम, लहसुन और अन्य जैविक तरीकों से प्राकृतिक कीट नियंत्रण।' },
  dosAndDonts: { en: "Do's and Don'ts", hi: 'क्या करें और क्या न करें' },
  do1: { en: 'Use certified organic seeds', hi: 'प्रमाणित जैविक बीज उपयोग करें' },
  do2: { en: 'Maintain crop rotation', hi: 'फसल चक्र अपनाएं' },
  do3: { en: 'Use natural pest repellents', hi: 'प्राकृतिक कीट विकर्षक उपयोग करें' },
  do4: { en: 'Keep records of all inputs', hi: 'सभी इनपुट का रिकॉर्ड रखें' },
  dont1: { en: 'Never use chemical pesticides', hi: 'रासायनिक कीटनाशक कभी न उपयोग करें' },
  dont2: { en: 'Avoid synthetic fertilizers', hi: 'कृत्रिम उर्वरकों से बचें' },
  dont3: { en: "Don't burn crop residue", hi: 'फसल अवशेष न जलाएं' },
  dont4: { en: 'Avoid GMO seeds', hi: 'GMO बीजों से बचें' },
  learnMore: { en: 'Learn More', hi: 'और जानें' },
  whyAgridose: { en: 'Why Agridose is Unique', hi: 'एग्रीडोज़ क्यों खास है' },
  forFarmers: { en: 'for Farmers.', hi: 'किसानों के लिए।' },
  allInOneSolution: { en: 'All-in-one solution', hi: 'ऑल-इन-वन समाधान' },
  allInOneSolutionDesc: { en: 'No need for multiple apps. Everything from seed to market is here.', hi: 'कई ऐप्स की जरूरत नहीं। बीज से बाजार तक सब कुछ यहां है।' },
  sustainableFocus: { en: 'Sustainable Focus', hi: 'स्थायी खेती पर फोकस' },
  sustainableFocusDesc: { en: 'Deep commitment to organic farming and soil health longevity.', hi: 'जैविक खेती और मिट्टी स्वास्थ्य के प्रति गहरी प्रतिबद्धता।' },
  zeroTechnicalBarrier: { en: 'Zero Technical Barrier', hi: 'कोई तकनीकी बाधा नहीं' },
  zeroTechnicalBarrierDesc: { en: 'Easy-to-use interface with local language support and voice search.', hi: 'स्थानीय भाषा और वॉयस सर्च के साथ उपयोग में आसान।' },
  incomeGrowth: { en: 'Income Growth', hi: 'आय वृद्धि' },
  incomeGrowthDesc: { en: 'Proven to improve crop yield and reduce fertilizer waste by 20%.', hi: 'फसल उत्पादन बढ़ाने और उर्वरक बर्बादी 20% कम करने में सिद्ध।' },
  joinCommunity: { en: 'Join the Community', hi: 'समुदाय से जुड़ें' },
  learnFromFarmers: { en: 'Learn from success stories of fellow farmers', hi: 'साथी किसानों की सफलता की कहानियों से सीखें' },
  successStories: { en: 'Success Stories', hi: 'सफलता की कहानियां' },
  footerDesc: { en: 'Smart digital platform empowering farmers with data-driven insights and sustainable farming practices.', hi: 'डेटा-संचालित जानकारी और टिकाऊ खेती के साथ किसानों को सशक्त बनाने वाला स्मार्ट डिजिटल प्लेटफॉर्म।' },
  platform: { en: 'Platform', hi: 'प्लेटफॉर्म' },
  support: { en: 'Support', hi: 'सहायता' },
  contactUs: { en: 'Contact Us', hi: 'संपर्क करें' },
  tollFree: { en: '1800-123-4567 (Toll Free)', hi: '1800-123-4567 (टोल फ्री)' },
  chatOnWhatsApp: { en: 'Chat on WhatsApp', hi: 'WhatsApp पर चैट करें' },
  downloadApp: { en: 'Download Our App', hi: 'हमारा ऐप डाउनलोड करें' },
  trainingPrograms: { en: 'Training Programs', hi: 'प्रशिक्षण कार्यक्रम' },
  faqs: { en: 'FAQs', hi: 'अक्सर पूछे जाने वाले प्रश्न' },
  privacyPolicy: { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  termsOfService: { en: 'Terms of Service', hi: 'सेवा की शर्तें' },
  allRightsReserved: { en: '© 2024 Agridose Digital. All rights reserved.', hi: '© 2024 एग्रीडोज़ डिजिटल। सर्वाधिकार सुरक्षित।' },
  forJudges: { en: 'For Judges', hi: 'निर्णायकों के लिए' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
