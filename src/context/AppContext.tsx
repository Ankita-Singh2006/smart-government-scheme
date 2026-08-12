import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Language,
  Scheme,
  User,
  UserEligibilityProfile,
  NotificationItem,
  CategoryId
} from '../types/scheme';
import { TRANSLATIONS } from '../data/translations';
import { VERIFIED_SCHEMES } from '../data/verifiedSchemes';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS['en'];
  user: User | null;
  setUser: (u: User | null) => void;
  savedSchemeIds: string[];
  toggleSaveScheme: (schemeId: string) => void;
  recentlyViewedIds: string[];
  addRecentlyViewed: (schemeId: string) => void;
  compareIds: string[];
  toggleCompareScheme: (schemeId: string) => void;
  clearCompare: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: CategoryId | 'all';
  setSelectedCategory: (cat: CategoryId | 'all') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  userProfile: UserEligibilityProfile | null;
  setUserProfile: (p: UserEligibilityProfile | null) => void;
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
  unreadNotificationsCount: number;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  selectedDetailScheme: Scheme | null;
  setSelectedDetailScheme: (s: Scheme | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    title: {
      en: 'New Scheme Update: PM-KISAN 17th Installment',
      hi: 'नई योजना अपडेट: पीएम-किसान 17वीं किस्त'
    },
    message: {
      en: 'The latest DBT installment has been released for eligible landholding farmers.',
      hi: 'पात्र भूमिधारक किसानों के लिए नवीनतम डीबीटी किस्त जारी कर दी गई है।'
    },
    date: '2026-07-28',
    read: false,
    type: 'scheme_update',
    linkSchemeId: 'pm-kisan'
  },
  {
    id: 'n2',
    title: {
      en: 'Ayushman Bharat Senior Expansion',
      hi: 'आयुष्मान भारत वरिष्ठ विस्तार'
    },
    message: {
      en: 'All citizens aged 70+ now get Ayushman Vaya Vandana card regardless of income.',
      hi: 'आय की परवाह किए बिना 70+ आयु के सभी नागरिकों को अब आयुष्मान वय वंदना कार्ड मिलता है।'
    },
    date: '2026-07-20',
    read: false,
    type: 'info',
    linkSchemeId: 'ayushman-bharat-pmjay'
  },
  {
    id: 'n3',
    title: {
      en: 'Complete Your Profile for 100% Match',
      hi: '100% मैच के लिए अपनी प्रोफ़ाइल पूरी करें'
    },
    message: {
      en: 'Add your district, family income, and trade to get precise eligibility scores.',
      hi: 'सटीक पात्रता स्कोर प्राप्त करने के लिए अपना जिला, पारिवारिक आय और व्यवसाय जोड़ें।'
    },
    date: '2026-07-15',
    read: true,
    type: 'alert'
  }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('smartscheme_saved_ids');
      return saved ? JSON.parse(saved) : ['pm-kisan', 'ayushman-bharat-pmjay'];
    } catch {
      return ['pm-kisan', 'ayushman-bharat-pmjay'];
    }
  });
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(['pm-vidya-lakshmi', 'sukanya-samriddhi-yojana']);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDetailScheme, setSelectedDetailScheme] = useState<Scheme | null>(null);

  const [userProfile, setUserProfileState] = useState<UserEligibilityProfile | null>(() => {
    try {
      const savedProf = localStorage.getItem('smartscheme_user_profile');
      return savedProf
        ? JSON.parse(savedProf)
        : {
            age: 24,
            gender: 'female',
            state: 'Maharashtra',
            district: 'Pune',
            annualIncome: 180000,
            occupation: 'student',
            employmentStatus: 'student',
            residenceType: 'urban',
            isStudent: true,
            isFarmer: false,
            isEntrepreneur: false,
            hasDisability: false,
            educationLevel: 'Graduate',
            casteCategory: 'General',
            maritalStatus: 'Single',
            familyMembersCount: 4
          };
    } catch {
      return null;
    }
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    showToast(lang === 'hi' ? 'भाषा हिंदी में बदली गई' : 'Switched language to English');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const setUserProfile = (p: UserEligibilityProfile | null) => {
    setUserProfileState(p);
    if (p) {
      localStorage.setItem('smartscheme_user_profile', JSON.stringify(p));
    } else {
      localStorage.removeItem('smartscheme_user_profile');
    }
  };

  const toggleSaveScheme = (schemeId: string) => {
    setSavedSchemeIds((prev) => {
      let next: string[];
      if (prev.includes(schemeId)) {
        next = prev.filter((id) => id !== schemeId);
        showToast(language === 'hi' ? 'योजना सहेजी गई सूची से हटा दी गई' : 'Scheme removed from saved list');
      } else {
        next = [...prev, schemeId];
        showToast(language === 'hi' ? 'योजना सफलतापूर्वक सहेजी गई' : 'Scheme saved successfully');
      }
      localStorage.setItem('smartscheme_saved_ids', JSON.stringify(next));
      return next;
    });
  };

  const addRecentlyViewed = (schemeId: string) => {
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== schemeId);
      return [schemeId, ...filtered].slice(0, 10);
    });
  };

  const toggleCompareScheme = (schemeId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(schemeId)) {
        return prev.filter((id) => id !== schemeId);
      }
      if (prev.length >= 3) {
        showToast(
          language === 'hi'
            ? 'आप अधिकतम 3 योजनाओं की तुलना कर सकते हैं'
            : 'You can compare maximum 3 schemes at a time'
        );
        return prev;
      }
      showToast(language === 'hi' ? 'तुलना सूची में जोड़ा गया' : 'Added to compare list');
      return [...prev, schemeId];
    });
  };

  const clearCompare = () => {
    setCompareIds([]);
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;
  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        user,
        setUser,
        savedSchemeIds,
        toggleSaveScheme,
        recentlyViewedIds,
        addRecentlyViewed,
        compareIds,
        toggleCompareScheme,
        clearCompare,
        activeTab,
        setActiveTab,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        userProfile,
        setUserProfile,
        notifications,
        markNotificationRead,
        unreadNotificationsCount,
        showAuthModal,
        setShowAuthModal,
        toastMessage,
        showToast,
        selectedDetailScheme,
        setSelectedDetailScheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
