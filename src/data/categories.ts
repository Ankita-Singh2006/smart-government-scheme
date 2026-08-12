import { Category } from '../types/scheme';

export const CATEGORIES: Category[] = [
  {
    id: 'education',
    name: { en: 'Education & Scholarships', hi: 'शिक्षा एवं छात्रवृत्ति' },
    description: { en: 'Scholarships, education loans, student aid & skill allowances.', hi: 'छात्रवृत्ति, शिक्षा ऋण, छात्र सहायता और कौशल भत्ता।' },
    iconName: 'GraduationCap',
    count: 14,
    color: '#2563eb', // Blue
    bgLight: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'agriculture',
    name: { en: 'Agriculture & Farmers', hi: 'कृषि एवं किसान' },
    description: { en: 'Direct income support, crop insurance, equipment & soil health.', hi: 'प्रत्यक्ष आय सहायता, फसल बीमा, उपकरण और मृदा स्वास्थ्य।' },
    iconName: 'Sprout',
    count: 18,
    color: '#16a34a', // Green
    bgLight: 'bg-green-50 text-green-700 border-green-200'
  },
  {
    id: 'healthcare',
    name: { en: 'Healthcare & Wellness', hi: 'स्वास्थ्य एवं कल्याण' },
    description: { en: 'Free medical insurance, maternity benefits & senior health care.', hi: 'मुफ्त स्वास्थ्य बीमा, मातृत्व लाभ और वरिष्ठ स्वास्थ्य सेवा।' },
    iconName: 'HeartPulse',
    count: 12,
    color: '#dc2626', // Red
    bgLight: 'bg-red-50 text-red-700 border-red-200'
  },
  {
    id: 'women-child',
    name: { en: 'Women & Child Development', hi: 'महिला एवं बाल विकास' },
    description: { en: 'Financial empowerment, girl child savings & entrepreneurship.', hi: 'वित्तीय सशक्तिकरण, बालिका बचत और महिला उद्यमिता।' },
    iconName: 'Users',
    count: 16,
    color: '#ec4899', // Pink
    bgLight: 'bg-pink-50 text-pink-700 border-pink-200'
  },
  {
    id: 'employment',
    name: { en: 'Employment & Livelihood', hi: 'रोजगार एवं आजीविका' },
    description: { en: 'Wage employment guarantees, apprenticeships & job training.', hi: 'मजदूरी रोजगार गारंटी, शिक्षुता और नौकरी प्रशिक्षण।' },
    iconName: 'Briefcase',
    count: 15,
    color: '#d97706', // Amber
    bgLight: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'business',
    name: { en: 'Business & Micro-Enterprises', hi: 'व्यवसाय एवं सूक्ष्म उद्यम' },
    description: { en: 'Collateral-free loans, vendor credit & MSME growth support.', hi: 'बिना गारंटी ऋण, विक्रेता ऋण और एमएसएमई विकास सहायता।' },
    iconName: 'Store',
    count: 11,
    color: '#7c3aed', // Purple
    bgLight: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: 'housing',
    name: { en: 'Housing & Rural Infra', hi: 'आवास एवं ग्रामीण बुनियादी ढांचा' },
    description: { en: 'Financial assistance for home construction, toilets & water connection.', hi: 'घर निर्माण, शौचालय और पानी के कनेक्शन के लिए सहायता।' },
    iconName: 'Home',
    count: 9,
    color: '#0891b2', // Cyan
    bgLight: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  {
    id: 'pension',
    name: { en: 'Pension & Social Security', hi: 'पेंशन एवं सामाजिक सुरक्षा' },
    description: { en: 'Guaranteed monthly pensions for unorganized workers & senior citizens.', hi: 'असंगठित श्रमिकों और वरिष्ठ नागरिकों के लिए गारंटीकृत मासिक पेंशन।' },
    iconName: 'ShieldCheck',
    count: 10,
    color: '#059669', // Emerald
    bgLight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'financial-assistance',
    name: { en: 'Financial Inclusion & Insurance', hi: 'वित्तीय समावेशन एवं बीमा' },
    description: { en: 'Zero balance accounts, micro life & accident insurance coverage.', hi: 'जीरो बैलेंस खाते, माइक्रो जीवन और दुर्घटना बीमा कवर।' },
    iconName: 'Landmark',
    count: 13,
    color: '#2563eb', // Indigo
    bgLight: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    id: 'skill-development',
    name: { en: 'Skill Development & Artisans', hi: 'कौशल विकास एवं कारीगर' },
    description: { en: 'Modern toolkits, artisan training, certification & stipend support.', hi: 'आधुनिक टूलकिट, कारीगर प्रशिक्षण, प्रमाणन और वजीफा सहायता।' },
    iconName: 'Wrench',
    count: 8,
    color: '#ea580c', // Orange
    bgLight: 'bg-orange-50 text-orange-700 border-orange-200'
  }
];

export const STATES_LIST = [
  'All India',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi (UT)',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];
