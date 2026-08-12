import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  CheckSquare,
  Bot,
  User as UserIcon,
  Bell,
  Heart,
  Scale,
  Menu,
  X,
  Globe,
  ShieldAlert,
  Sparkles,
  LayoutDashboard,
  Shield
} from 'lucide-react';

interface NavbarProps {
  onOpenNotifications: () => void;
  onOpenCompare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenNotifications,
  onOpenCompare
}) => {
  const {
    language,
    setLanguage,
    t,
    activeTab,
    setActiveTab,
    savedSchemeIds,
    compareIds,
    unreadNotificationsCount,
    user,
    setShowAuthModal
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.navHome, icon: Sparkles },
    { id: 'explore', label: t.navExplore, icon: Search },
    { id: 'eligibility', label: t.navEligibility, icon: CheckSquare },
    { id: 'recommendations', label: t.navRecommendations, icon: Sparkles },
    { id: 'assistant', label: t.navAssistant, icon: Bot },
    { id: 'dashboard', label: t.navDashboard, icon: LayoutDashboard },
    { id: 'admin', label: t.navAdmin, icon: Shield }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Government Disclaimer Banner */}
      <div className="bg-blue-900 text-blue-100 text-xs px-4 py-1.5 font-medium flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate max-w-4xl">{t.disclaimerBar}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0 text-[11px] text-blue-200">
          <span>Official Helpline: 1800-11-2001</span>
          <span>•</span>
          <span>myScheme Certified</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            🇮🇳
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
              SmartScheme <span className="text-blue-600">AI</span>
            </div>
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              {language === 'hi' ? 'भारत सरकार योजना सहायक' : 'Smart Govt Scheme Portal'}
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-200/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-medium">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === 'en'
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === 'hi'
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Saved Schemes Badge */}
          <button
            onClick={() => handleNavClick('dashboard')}
            title={t.savedSchemes}
            className="relative p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
          >
            <Heart className="w-5 h-5" />
            {savedSchemeIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                {savedSchemeIds.length}
              </span>
            )}
          </button>

          {/* Compare Schemes Button */}
          {compareIds.length > 0 && (
            <button
              onClick={onOpenCompare}
              className="relative flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-indigo-100 transition-colors"
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">{t.compareSchemes}</span>
              <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                {compareIds.length}
              </span>
            </button>
          )}

          {/* Notifications Bell */}
          <button
            onClick={onOpenNotifications}
            title={t.notifications}
            className="relative p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
          >
            <Bell className="w-5 h-5" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* User Profile / Login */}
          {user ? (
            <button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                {user.name.charAt(0)}
              </div>
              <span className="hidden md:inline truncate max-w-[90px]">
                {user.name}
              </span>
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-all"
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>{t.login}</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
