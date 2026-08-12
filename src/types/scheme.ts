export type Language = 'en' | 'hi';

export type CategoryId = 
  | 'education'
  | 'agriculture'
  | 'healthcare'
  | 'women-child'
  | 'employment'
  | 'business'
  | 'housing'
  | 'pension'
  | 'financial-assistance'
  | 'skill-development';

export interface Category {
  id: CategoryId;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  iconName: string;
  count: number;
  color: string;
  bgLight: string;
}

export interface SchemeEligibilityCriteria {
  minAge?: number;
  maxAge?: number;
  gender?: 'all' | 'female' | 'male' | 'transgender';
  maxAnnualIncome?: number; // in INR
  occupations?: string[]; // e.g. ['student', 'farmer', 'entrepreneur', 'unemployed', 'worker', 'all']
  residenceType?: 'all' | 'rural' | 'urban';
  states?: string[]; // ['all'] or specific state names like ['Maharashtra', 'Uttar Pradesh']
  educationLevels?: string[];
  disabilityAllowed?: boolean;
  disabilityOnly?: boolean;
  casteCategory?: string[]; // ['all', 'SC', 'ST', 'OBC', 'General']
}

export interface Scheme {
  id: string;
  name: { en: string; hi: string };
  shortDescription: { en: string; hi: string };
  fullDescription: { en: string; hi: string };
  category: CategoryId;
  ministry: { en: string; hi: string };
  department: { en: string; hi: string };
  level: 'Central' | 'State';
  applicableStates: string[]; // ['All India'] or specific
  benefits: { en: string[]; hi: string[] };
  eligibilitySummary: { en: string[]; hi: string[] };
  eligibilityCriteria: SchemeEligibilityCriteria;
  requiredDocuments: { en: string[]; hi: string[] };
  applicationProcess: {
    step: number;
    title: { en: string; hi: string };
    description: { en: string; hi: string };
  }[];
  applicationUrl: string;
  officialSource: string;
  lastUpdated: string; // YYYY-MM-DD
  status: 'Active' | 'Updated' | 'Upcoming';
  popularityScore: number;
  tags: string[];
}

export interface UserEligibilityProfile {
  age: number;
  gender: 'female' | 'male' | 'transgender' | 'prefer-not-to-say';
  state: string;
  district: string;
  annualIncome: number;
  occupation: string;
  employmentStatus: string;
  residenceType: 'rural' | 'urban';
  isStudent: boolean;
  isFarmer: boolean;
  isEntrepreneur: boolean;
  hasDisability: boolean;
  educationLevel: string;
  casteCategory: string;
  maritalStatus: string;
  familyMembersCount: number;
}

export interface MatchReason {
  criterion: string;
  matched: boolean;
  pointsEarned: number;
  maxPoints: number;
  explanation: { en: string; hi: string };
}

export interface SchemeMatchResult {
  scheme: Scheme;
  matchPercentage: number;
  matchLabel: 'Excellent Match' | 'Good Match' | 'Possible Match' | 'Low Match';
  matchLabelHi: string;
  breakdown: {
    agePoints: number;
    incomePoints: number;
    occupationPoints: number;
    statePoints: number;
    categoryPoints: number;
    profilePoints: number;
  };
  reasons: MatchReason[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'user' | 'admin';
  profile?: UserEligibilityProfile;
  savedSchemeIds: string[];
  recentlyViewedIds: string[];
  createdAt: string;
}

export interface NotificationItem {
  id: string;
  title: { en: string; hi: string };
  message: { en: string; hi: string };
  date: string;
  read: boolean;
  type: 'info' | 'scheme_update' | 'recommendation' | 'alert';
  linkSchemeId?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isHindi?: boolean;
}
