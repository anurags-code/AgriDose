import { createContext, useContext, useState } from 'react'

const translations = {
  // Navbar
  navHome: { en: 'Home', hi: 'होम' },
  navWeather: { en: 'Weather', hi: 'मौसम' },
  navCrops: { en: 'Crops', hi: 'फसलें' },
  navTools: { en: 'Tools', hi: 'उपकरण' },
  navOrganic: { en: 'Organic', hi: 'जैविक' },
  navSchemes: { en: 'Schemes', hi: 'योजनाएं' },
  navWhyUs: { en: 'Why Us', hi: 'क्यों हम' },
  getStarted: { en: 'Get Started', hi: 'शुरू करें' },

  // Hero Section
  heroTag: { en: 'Kheti Ka Digital Sathi', hi: 'खेती का डिजिटल साथी' },
  heroTitle1: { en: 'Empowering Farmers with', hi: 'किसानों को सशक्त बनाना' },
  heroTitle2: { en: 'Agridose', hi: 'एग्रीडोज़ के साथ' },
  heroDesc: { en: 'Your complete farming companion - weather updates, crop guidance, organic farming tips, government schemes, and AI-powered expert chat. All in one platform!', hi: 'आपका संपूर्ण खेती साथी - मौसम अपडेट, फसल मार्गदर्शन, जैविक खेती टिप्स, सरकारी योजनाएं, और AI विशेषज्ञ चैट। सब एक प्लेटफॉर्म में!' },
  exploreFeatures: { en: 'Explore Features', hi: 'विशेषताएं देखें' },
  watchDemo: { en: 'Watch Demo', hi: 'डेमो देखें' },
  activeFarmers: { en: 'Active Farmers', hi: 'सक्रिय किसान' },
  districtsCovered: { en: 'Districts Covered', hi: 'जिले कवर' },
  satisfactionRate: { en: 'Satisfaction Rate', hi: 'संतुष्टि दर' },
  weather: { en: 'Weather', hi: 'मौसम' },
  crops: { en: 'Crops', hi: 'फसलें' },
  organic: { en: 'Organic', hi: 'जैविक' },
  tools: { en: 'Tools', hi: 'उपकरण' },
  startExploring: { en: 'Start Exploring', hi: 'खोजना शुरू करें' },
  platformDemo: { en: 'Agridose Platform Demo', hi: 'एग्रीडोज़ प्लेटफॉर्म डेमो' },
  completefarming: { en: 'Complete farming solution for Indian farmers', hi: 'भारतीय किसानों के लिए संपूर्ण खेती समाधान' },
  weatherAlerts: { en: 'Weather Alerts', hi: 'मौसम अलर्ट' },
  javikKheti: { en: 'Javik Kheti', hi: 'जैविक खेती' },
  aiExpertChat: { en: 'AI Expert Chat', hi: 'AI विशेषज्ञ चैट' },
  govtSchemes: { en: 'Govt Schemes', hi: 'सरकारी योजनाएं' },

  // Weather Section
  weatherInsights: { en: 'Weather Insights', hi: 'मौसम जानकारी' },
  weatherDesc: { en: 'Get accurate weather forecasts and farming recommendations based on real-time data', hi: 'वास्तविक समय के डेटा के आधार पर सटीक मौसम पूर्वानुमान और खेती की सिफारिशें प्राप्त करें' },
  currentLocation: { en: 'Current Location', hi: 'वर्तमान स्थान' },
  humidity: { en: 'Humidity', hi: 'नमी' },
  windSpeed: { en: 'Wind Speed', hi: 'हवा की गति' },
  farmingRecommendations: { en: 'Farming Recommendations', hi: 'खेती की सिफारिशें' },
  idealConditions: { en: 'Ideal conditions for rice transplantation', hi: 'धान रोपाई के लिए आदर्श स्थिति' },
  applyFertilizers: { en: 'Apply fertilizers before expected rain', hi: 'अपेक्षित बारिश से पहले खाद डालें' },
  monitorPest: { en: 'Monitor for pest activity due to humidity', hi: 'नमी के कारण कीट गतिविधि की निगरानी करें' },
  alerts: { en: 'Alerts', hi: 'अलर्ट' },
  rainExpected: { en: 'Rain Expected on Wednesday', hi: 'बुधवार को बारिश की उम्मीद' },
  planHarvesting: { en: 'Plan harvesting activities before the expected rainfall', hi: 'अपेक्षित बारिश से पहले कटाई की योजना बनाएं' },
  today: { en: 'Today', hi: 'आज' },
  tomorrow: { en: 'Tomorrow', hi: 'कल' },
  sunny: { en: 'Sunny', hi: 'धूप' },
  partlyCloudy: { en: 'Partly Cloudy', hi: 'आंशिक बादल' },
  rainy: { en: 'Rainy', hi: 'बारिश' },
  cloudy: { en: 'Cloudy', hi: 'बादल' },

  // Crop Guide
  cropGuide: { en: 'Crop Guide', hi: 'फसल गाइड' },
  cropGuideDesc: { en: 'Expert guidance for major crops with seasonal tips and best practices', hi: 'मौसमी टिप्स और सर्वोत्तम प्रथाओं के साथ प्रमुख फसलों के लिए विशेषज्ञ मार्गदर्शन' },
  rice: { en: 'Rice', hi: 'धान' },
  wheat: { en: 'Wheat', hi: 'गेहूं' },
  cotton: { en: 'Cotton', hi: 'कपास' },
  sugarcane: { en: 'Sugarcane', hi: 'गन्ना' },
  soilType: { en: 'Soil Type', hi: 'मिट्टी का प्रकार' },
  waterRequirement: { en: 'Water Requirement', hi: 'पानी की जरूरत' },
  cultivationTips: { en: 'Cultivation Tips', hi: 'खेती के टिप्स' },
  viewCompleteGuide: { en: 'View Complete Guide', hi: 'पूरी गाइड देखें' },
  closeGuide: { en: 'Close Guide', hi: 'गाइड बंद करें' },
  seedRate: { en: 'Seed Rate', hi: 'बीज दर' },
  spacing: { en: 'Spacing', hi: 'दूरी' },
  fertilizers: { en: 'Fertilizers', hi: 'उर्वरक' },
  irrigation: { en: 'Irrigation', hi: 'सिंचाई' },
  harvesting: { en: 'Harvesting', hi: 'कटाई' },
  expectedYield: { en: 'Expected Yield', hi: 'अपेक्षित उपज' },

  // Digital Toolbox
  digitalToolbox: { en: 'Digital Toolbox', hi: 'डिजिटल टूलबॉक्स' },
  toolboxDesc: { en: 'Access powerful digital tools designed to make farming easier and more profitable', hi: 'खेती को आसान और अधिक लाभदायक बनाने के लिए शक्तिशाली डिजिटल उपकरण' },
  cropCalculator: { en: 'Crop Calculator', hi: 'फसल कैलकुलेटर' },
  cropCalculatorDesc: { en: 'Calculate seed, fertilizer, and water requirements based on your land area and crop type.', hi: 'अपनी भूमि क्षेत्र और फसल के आधार पर बीज, उर्वरक और पानी की जरूरत की गणना करें।' },
  marketPrices: { en: 'Market Prices', hi: 'मंडी भाव' },
  marketPricesDesc: { en: 'Real-time mandi prices for crops in your region to help you sell at the best rates.', hi: 'अपने क्षेत्र में फसलों के लिए वास्तविक समय मंडी भाव।' },
  soilTesting: { en: 'Soil Testing', hi: 'मिट्टी परीक्षण' },
  soilTestingDesc: { en: 'Find nearest soil testing centers and get recommendations based on soil health cards.', hi: 'निकटतम मिट्टी परीक्षण केंद्र खोजें और मृदा स्वास्थ्य कार्ड के आधार पर सिफारिशें प्राप्त करें।' },
  trainingVideos: { en: 'Training Videos', hi: 'प्रशिक्षण वीडियो' },
  trainingVideosDesc: { en: 'Learn modern farming techniques through expert video tutorials in your language.', hi: 'अपनी भाषा में विशेषज्ञ वीडियो ट्यूटोरियल से आधुनिक खेती तकनीक सीखें।' },
  expertChat: { en: 'Expert Chat', hi: 'विशेषज्ञ चैट' },
  expertChatDesc: { en: 'Connect with AI farming assistant for personalized advice and problem-solving.', hi: 'व्यक्तिगत सलाह और समस्या-समाधान के लिए AI खेती सहायक से जुड़ें।' },
  diseaseDetection: { en: 'Disease Detection', hi: 'रोग पहचान' },
  diseaseDetectionDesc: { en: 'Upload crop images to identify diseases and get treatment recommendations instantly.', hi: 'रोग की पहचान और तुरंत उपचार की सिफारिशें पाने के लिए फसल की छवियां अपलोड करें।' },
  openTool: { en: 'Open Tool', hi: 'उपकरण खोलें' },
  landArea: { en: 'Land Area (in acres)', hi: 'भूमि क्षेत्र (एकड़ में)' },
  cropType: { en: 'Crop Type', hi: 'फसल का प्रकार' },
  calculateRequirements: { en: 'Calculate Requirements', hi: 'जरूरत की गणना करें' },
  seedRequired: { en: 'Seed Required', hi: 'बीज आवश्यक' },
  fertilizerNPK: { en: 'Fertilizer (NPK)', hi: 'उर्वरक (NPK)' },
  nitrogen: { en: 'Nitrogen', hi: 'नाइट्रोजन' },
  phosphorus: { en: 'Phosphorus', hi: 'फास्फोरस' },
  potassium: { en: 'Potassium', hi: 'पोटाश' },
  commercialFertilizers: { en: 'Commercial Fertilizers', hi: 'व्यावसायिक उर्वरक' },
  perQuintal: { en: 'per quintal', hi: 'प्रति क्विंटल' },
  bookAppointment: { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  askAboutFarming: { en: 'Ask about farming...', hi: 'खेती के बारे में पूछें...' },
  uploadImage: { en: 'Upload Image', hi: 'छवि अपलोड करें' },
  tipsForBetterDetection: { en: 'Tips for better detection:', hi: 'बेहतर पहचान के लिए टिप्स:' },
  close: { en: 'Close', hi: 'बंद करें' },

  // Organic Farming
  organicFarming: { en: 'Organic Farming & Bio-Fertilizers', hi: 'जैविक खेती और जैव उर्वरक' },
  organicDesc: { en: 'Javik Kheti - Sustainable farming for healthy soil, healthy crops, and healthy life', hi: 'जैविक खेती - स्वस्थ मिट्टी, स्वस्थ फसल और स्वस्थ जीवन के लिए टिकाऊ खेती' },
  javikKhad: { en: 'Javik Khad', hi: 'जैविक खाद' },
  composting: { en: 'Composting', hi: 'कम्पोस्टिंग' },
  bioPesticides: { en: 'Bio-Pesticides', hi: 'जैव कीटनाशक' },
  dosAndDonts: { en: "Do's & Don'ts", hi: 'क्या करें और क्या न करें' },
  vermicompost: { en: 'Vermicompost (Kechua Khad)', hi: 'वर्मीकम्पोस्ट (केंचुआ खाद)' },
  cowDungManure: { en: 'Cow Dung Manure (Gobar Khad)', hi: 'गोबर खाद' },
  greenManure: { en: 'Green Manure (Hara Khad)', hi: 'हरी खाद' },
  jeevamrut: { en: 'Jeevamrut', hi: 'जीवामृत' },
  panchgavya: { en: 'Panchgavya', hi: 'पंचगव्य' },
  benefits: { en: 'Benefits:', hi: 'लाभ:' },
  howToPrepare: { en: 'How to Prepare:', hi: 'कैसे तैयार करें:' },
  application: { en: 'Application:', hi: 'उपयोग:' },
  compostingMethods: { en: 'Composting Methods', hi: 'कम्पोस्टिंग विधियां' },
  pitMethod: { en: 'Pit Method (Gadda Vidhi)', hi: 'गड्ढा विधि' },
  heapMethod: { en: 'Heap Method (Dheri Vidhi)', hi: 'ढेरी विधि' },
  nadepComposting: { en: 'NADEP Composting', hi: 'नाडेप कम्पोस्टिंग' },
  vermicompostingMethod: { en: 'Vermicomposting', hi: 'वर्मीकम्पोस्टिंग' },
  materialsForComposting: { en: 'Materials for Composting', hi: 'कम्पोस्टिंग के लिए सामग्री' },
  greenMaterials: { en: 'Green Materials (Nitrogen)', hi: 'हरी सामग्री (नाइट्रोजन)' },
  brownMaterials: { en: 'Brown Materials (Carbon)', hi: 'भूरी सामग्री (कार्बन)' },
  goldenRatio: { en: 'Golden Ratio', hi: 'सुनहरा अनुपात' },
  targetPests: { en: 'Target Pests', hi: 'लक्षित कीट' },
  preparation: { en: 'Preparation', hi: 'तैयारी' },
  naturalPestControlTips: { en: 'Natural Pest Control Tips', hi: 'प्राकृतिक कीट नियंत्रण टिप्स' },
  dosOfOrganicFarming: { en: "Do's of Organic Farming", hi: 'जैविक खेती में क्या करें' },
  dontsOfOrganicFarming: { en: "Don'ts of Organic Farming", hi: 'जैविक खेती में क्या न करें' },
  startOrganicJourney: { en: 'Start Your Organic Journey Today!', hi: 'आज ही अपनी जैविक यात्रा शुरू करें!' },
  organicBenefitsDesc: { en: 'Organic farming may take 2-3 years to show full results, but the benefits for soil health, environment, and your family\'s health are invaluable. Premium prices for organic produce can increase your income by 20-30%.', hi: 'जैविक खेती में पूर्ण परिणाम दिखाने में 2-3 साल लग सकते हैं, लेकिन मिट्टी के स्वास्थ्य, पर्यावरण और आपके परिवार के स्वास्थ्य के लिए लाभ अमूल्य हैं। जैविक उत्पादों की प्रीमियम कीमतें आपकी आय 20-30% तक बढ़ा सकती हैं।' },
  getOrganicSupport: { en: 'Get Organic Farming Support', hi: 'जैविक खेती सहायता प्राप्त करें' },

  // Government Schemes
  governmentSchemes: { en: 'Government Schemes', hi: 'सरकारी योजनाएं' },
  schemesDesc: { en: 'Explore and apply for government schemes designed to support Indian farmers', hi: 'भारतीय किसानों की मदद के लिए बनी सरकारी योजनाओं को देखें और आवेदन करें' },
  pmKisan: { en: 'PM-KISAN', hi: 'पीएम-किसान' },
  pmKisanFull: { en: 'Pradhan Mantri Kisan Samman Nidhi', hi: 'प्रधानमंत्री किसान सम्मान निधि' },
  pmfby: { en: 'PM Fasal Bima Yojana', hi: 'पीएम फसल बीमा योजना' },
  pmfbyFull: { en: 'Pradhan Mantri Fasal Bima Yojana', hi: 'प्रधानमंत्री फसल बीमा योजना' },
  kcc: { en: 'Kisan Credit Card', hi: 'किसान क्रेडिट कार्ड' },
  kccFull: { en: 'Kisan Credit Card Scheme', hi: 'किसान क्रेडिट कार्ड योजना' },
  soilHealthCard: { en: 'Soil Health Card', hi: 'मृदा स्वास्थ्य कार्ड' },
  soilHealthCardFull: { en: 'Soil Health Card Scheme', hi: 'मृदा स्वास्थ्य कार्ड योजना' },
  eligibility: { en: 'Eligibility', hi: 'पात्रता' },
  applyNow: { en: 'Apply Now', hi: 'अभी आवेदन करें' },
  checkStatus: { en: 'Check Status', hi: 'स्थिति जांचें' },
  active: { en: 'Active', hi: 'सक्रिय' },

  // Community Impact
  communityImpact: { en: 'Community Impact', hi: 'सामुदायिक प्रभाव' },
  communityDesc: { en: 'See how we are making a difference in the lives of farmers across India', hi: 'देखें कि हम भारत भर के किसानों के जीवन में कैसे बदलाव ला रहे हैं' },
  farmersEmpowered: { en: 'Farmers Empowered', hi: 'सशक्त किसान' },
  avgYieldIncrease: { en: 'Average Yield Increase', hi: 'औसत उपज वृद्धि' },
  schemesFacilitated: { en: 'Schemes Facilitated', hi: 'सुविधाजनक योजनाएं' },
  whatFarmersSay: { en: 'What Farmers Say', hi: 'किसान क्या कहते हैं' },
  readyToTransform: { en: 'Ready to Transform Your Farming?', hi: 'अपनी खेती बदलने के लिए तैयार हैं?' },
  transformDesc: { en: 'Join thousands of farmers who are already benefiting from smart farming technology. Get started today and take your agriculture to the next level.', hi: 'हजारों किसानों से जुड़ें जो पहले से स्मार्ट खेती तकनीक का लाभ उठा रहे हैं। आज ही शुरू करें और अपनी खेती को अगले स्तर पर ले जाएं।' },
  getStartedFree: { en: 'Get Started Free', hi: 'मुफ्त शुरू करें' },
  contactUs: { en: 'Contact Us', hi: 'संपर्क करें' },
  joinAgridose: { en: 'Join Agridose', hi: 'एग्रीडोज़ से जुड़ें' },
  fullName: { en: 'Full Name', hi: 'पूरा नाम' },
  mobileNumber: { en: 'Mobile Number', hi: 'मोबाइल नंबर' },
  village: { en: 'Village', hi: 'गांव' },
  district: { en: 'District', hi: 'जिला' },
  selectDistrict: { en: 'Select District', hi: 'जिला चुनें' },
  mainCrop: { en: 'Main Crop', hi: 'मुख्य फसल' },
  selectCrop: { en: 'Select Crop', hi: 'फसल चुनें' },
  registerNow: { en: 'Register Now', hi: 'अभी पंजीकरण करें' },
  registrationSuccessful: { en: 'Registration Successful!', hi: 'पंजीकरण सफल!' },
  welcomeMessage: { en: 'Welcome to Agridose! We will contact you soon.', hi: 'एग्रीडोज़ में आपका स्वागत है! हम जल्द ही आपसे संपर्क करेंगे।' },
  yourName: { en: 'Your Name', hi: 'आपका नाम' },
  yourMessage: { en: 'Your Message', hi: 'आपका संदेश' },
  howCanWeHelp: { en: 'How can we help you?', hi: 'हम आपकी कैसे मदद कर सकते हैं?' },
  sendMessage: { en: 'Send Message', hi: 'संदेश भेजें' },
  messageSent: { en: 'Message Sent!', hi: 'संदेश भेजा गया!' },
  weWillGetBack: { en: 'We will get back to you soon.', hi: 'हम जल्द ही आपसे संपर्क करेंगे।' },
  contactInformation: { en: 'Contact Information', hi: 'संपर्क जानकारी' },

  // Why Agridose
  whyAgridose: { en: 'Why Agridose is Unique', hi: 'एग्रीडोज़ क्यों खास है' },
  whyAgridoseDesc: { en: 'A comprehensive digital platform transforming Indian agriculture through technology and traditional wisdom', hi: 'प्रौद्योगिकी और पारंपरिक ज्ञान के माध्यम से भारतीय कृषि को बदलने वाला व्यापक डिजिटल प्लेटफॉर्म' },
  allInOneSolution: { en: 'All-in-One Solution', hi: 'ऑल-इन-वन समाधान' },
  allInOneDesc: { en: 'Weather, crops, schemes, tools, organic farming - everything a farmer needs in one platform.', hi: 'मौसम, फसलें, योजनाएं, उपकरण, जैविक खेती - एक प्लेटफॉर्म में किसान को जो कुछ भी चाहिए।' },
  organicSustainableFocus: { en: 'Organic & Sustainable Focus', hi: 'जैविक और टिकाऊ खेती पर फोकस' },
  organicSustainableDesc: { en: 'Dedicated section for Javik Kheti with detailed guides on bio-fertilizers and natural pest control.', hi: 'जैव उर्वरकों और प्राकृतिक कीट नियंत्रण पर विस्तृत गाइड के साथ जैविक खेती के लिए समर्पित खंड।' },
  localLanguageSupport: { en: 'Local Language Support', hi: 'स्थानीय भाषा समर्थन' },
  localLanguageDesc: { en: 'Interface designed for Hindi-speaking farmers with familiar terms like Javik Khad, Kechua Khad.', hi: 'जैविक खाद, केंचुआ खाद जैसे परिचित शब्दों के साथ हिंदी बोलने वाले किसानों के लिए डिज़ाइन किया गया।' },
  easyInterface: { en: 'Easy-to-Use Interface', hi: 'उपयोग में आसान' },
  easyInterfaceDesc: { en: 'Simple, visual design that works on basic smartphones. No technical knowledge required.', hi: 'सरल, दृश्य डिज़ाइन जो बेसिक स्मार्टफोन पर काम करता है। कोई तकनीकी ज्ञान आवश्यक नहीं।' },
  improvesCropYield: { en: 'Improves Crop Yield', hi: 'फसल उपज में सुधार' },
  improvesCropYieldDesc: { en: 'Scientific crop calculators and expert recommendations help farmers increase productivity by 20-30%.', hi: 'वैज्ञानिक फसल कैलकुलेटर और विशेषज्ञ सिफारिशें किसानों को उत्पादकता 20-30% बढ़ाने में मदद करती हैं।' },
  increasesIncome: { en: 'Increases Farmer Income', hi: 'किसान आय में वृद्धि' },
  increasesIncomeDesc: { en: 'Market prices, government schemes, and organic certification guidance for better returns.', hi: 'बेहतर रिटर्न के लिए बाजार भाव, सरकारी योजनाएं और जैविक प्रमाणन मार्गदर्शन।' },
  whatMakesUsDifferent: { en: 'What Makes Us Different', hi: 'हमें क्या अलग बनाता है' },
  aiPoweredChat: { en: 'AI-Powered Expert Chat', hi: 'AI संचालित विशेषज्ञ चैट' },
  aiPoweredChatDesc: { en: 'Instant answers to farming queries in simple language - available 24/7 without internet charges for responses.', hi: 'सरल भाषा में खेती के सवालों के तुरंत जवाब - 24/7 उपलब्ध।' },
  localizedContent: { en: 'Chhattisgarh-Specific Content', hi: 'छत्तीसगढ़-विशिष्ट सामग्री' },
  localizedContentDesc: { en: 'Localized weather data, mandi prices, and crop recommendations specifically for Chhattisgarh farmers.', hi: 'छत्तीसगढ़ के किसानों के लिए विशेष रूप से स्थानीय मौसम डेटा, मंडी भाव और फसल सिफारिशें।' },
  completeOrganicGuide: { en: 'Complete Organic Farming Guide', hi: 'संपूर्ण जैविक खेती गाइड' },
  completeOrganicGuideDesc: { en: 'Step-by-step instructions for Jeevamrut, Panchgavya, Vermicompost preparation - rare in other apps.', hi: 'जीवामृत, पंचगव्य, वर्मीकम्पोस्ट तैयारी के लिए चरण-दर-चरण निर्देश - अन्य ऐप्स में दुर्लभ।' },
  schemeNavigator: { en: 'Government Scheme Navigator', hi: 'सरकारी योजना नेविगेटर' },
  schemeNavigatorDesc: { en: 'Easy access to PM-KISAN, PMFBY, KCC with eligibility checker and direct application links.', hi: 'पात्रता जांचकर्ता और सीधे आवेदन लिंक के साथ PM-KISAN, PMFBY, KCC तक आसान पहुंच।' },
  cropCalculatorFeature: { en: 'Crop Calculator with Real Data', hi: 'वास्तविक डेटा के साथ फसल कैलकुलेटर' },
  cropCalculatorFeatureDesc: { en: 'Accurate seed, fertilizer, and water requirements based on ICAR recommendations.', hi: 'ICAR सिफारिशों के आधार पर सटीक बीज, उर्वरक और पानी की जरूरत।' },
  diseaseDetectionFeature: { en: 'Disease Detection Ready', hi: 'रोग पहचान तैयार' },
  diseaseDetectionFeatureDesc: { en: 'Image-based crop disease identification with treatment recommendations.', hi: 'उपचार सिफारिशों के साथ छवि-आधारित फसल रोग पहचान।' },
  forJudges: { en: 'For Hackathon Judges', hi: 'हैकाथॉन जजों के लिए' },
  judgesDesc: { en: 'Agridose addresses real problems faced by Indian farmers through a unique combination of:', hi: 'एग्रीडोज़ भारतीय किसानों की वास्तविक समस्याओं को अनूठे संयोजन से संबोधित करता है:' },
  modernTech: { en: 'Modern technology (AI chatbot, weather APIs, calculators)', hi: 'आधुनिक तकनीक (AI चैटबॉट, मौसम APIs, कैलकुलेटर)' },
  traditionalWisdom: { en: 'Traditional wisdom (organic farming, local practices)', hi: 'पारंपरिक ज्ञान (जैविक खेती, स्थानीय प्रथाएं)' },
  govtIntegration: { en: 'Government integration (schemes, subsidies)', hi: 'सरकारी एकीकरण (योजनाएं, सब्सिडी)' },
  localRelevance: { en: 'Local relevance (Chhattisgarh-specific content)', hi: 'स्थानीय प्रासंगिकता (छत्तीसगढ़-विशिष्ट सामग्री)' },
  technicalHighlights: { en: 'Technical Highlights', hi: 'तकनीकी विशेषताएं' },
  userRating: { en: 'User Rating', hi: 'उपयोगकर्ता रेटिंग' },
  khetiKaDigitalSathi: { en: 'Kheti Ka Digital Sathi', hi: 'खेती का डिजिटल साथी' },
  empoweringEveryFarmer: { en: 'Empowering every farmer with the knowledge and tools to prosper sustainably', hi: 'हर किसान को टिकाऊ तरीके से समृद्ध होने के लिए ज्ञान और उपकरणों से सशक्त बनाना' },

  // Footer
  footerDesc: { en: 'Kheti Ka Digital Sathi - Empowering Indian farmers with technology, organic farming knowledge, and sustainable practices.', hi: 'खेती का डिजिटल साथी - प्रौद्योगिकी, जैविक खेती ज्ञान और टिकाऊ प्रथाओं के साथ भारतीय किसानों को सशक्त बनाना।' },
  quickLinks: { en: 'Quick Links', hi: 'त्वरित लिंक' },
  resources: { en: 'Resources', hi: 'संसाधन' },
  javikKhadGuide: { en: 'Javik Khad Guide', hi: 'जैविक खाद गाइड' },
  privacyPolicy: { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  termsOfService: { en: 'Terms of Service', hi: 'सेवा की शर्तें' },
  cookiePolicy: { en: 'Cookie Policy', hi: 'कुकी नीति' },
  allRightsReserved: { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
}

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const t = (key) => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language] || translation.en || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
