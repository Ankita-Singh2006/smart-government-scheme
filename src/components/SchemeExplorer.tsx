import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VERIFIED_SCHEMES } from '../data/verifiedSchemes';
import { CATEGORIES, STATES_LIST } from '../data/categories';
import { SchemeCard } from './SchemeCard';
import { Scheme, CategoryId } from '../types/scheme';
import {
  Search,
  Filter,
  RotateCcw,
  SlidersHorizontal,
  Scale,
  Sparkles,
  Inbox
} from 'lucide-react';

interface SchemeExplorerProps {
  onSelectDetails: (scheme: Scheme) => void;
  onOpenCompare: () => void;
}

export const SchemeExplorer: React.FC<SchemeExplorerProps> = ({
  onSelectDetails,
  onOpenCompare
}) => {
  const {
    t,
    language,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    compareIds,
    clearCompare
  } = useApp();

  const [selectedState, setSelectedState] = useState<string>('All States');
  const [selectedLevel, setSelectedLevel] = useState<string>('All Levels');
  const [selectedOccupation, setSelectedOccupation] = useState<string>('All Occupations');
  const [selectedGender, setSelectedGender] = useState<string>('All Genders');
  const [sortBy, setSortBy] = useState<'relevance' | 'popularity' | 'updated' | 'name'>('popularity');
  const [showFiltersMobile, setShowFiltersMobile] = useState<boolean>(false);

  // Filter Logic
  let filtered = VERIFIED_SCHEMES.filter((scheme) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchNameEn = scheme.name.en.toLowerCase().includes(q);
      const matchNameHi = scheme.name.hi.toLowerCase().includes(q);
      const matchDesc = scheme.shortDescription[language].toLowerCase().includes(q);
      const matchMinistry = scheme.ministry[language].toLowerCase().includes(q);
      const matchTag = scheme.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchNameEn && !matchNameHi && !matchDesc && !matchMinistry && !matchTag) {
        return false;
      }
    }

    // Category
    if (selectedCategory !== 'all' && scheme.category !== selectedCategory) {
      return false;
    }

    // State
    if (
      selectedState !== 'All States' &&
      !scheme.applicableStates.includes('All India') &&
      !scheme.applicableStates.includes(selectedState)
    ) {
      return false;
    }

    // Level
    if (selectedLevel !== 'All Levels' && scheme.level !== selectedLevel) {
      return false;
    }

    // Occupation
    if (selectedOccupation !== 'All Occupations') {
      const occ = selectedOccupation.toLowerCase();
      const allowed = scheme.eligibilityCriteria.occupations || ['all'];
      if (!allowed.includes('all') && !allowed.includes(occ)) {
        return false;
      }
    }

    // Gender
    if (selectedGender !== 'All Genders') {
      const g = selectedGender.toLowerCase();
      const reqG = scheme.eligibilityCriteria.gender || 'all';
      if (reqG !== 'all' && reqG !== g) {
        return false;
      }
    }

    return true;
  });

  // Sorting
  filtered = filtered.sort((a, b) => {
    if (sortBy === 'popularity') {
      return b.popularityScore - a.popularityScore;
    }
    if (sortBy === 'updated') {
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    }
    if (sortBy === 'name') {
      return a.name[language].localeCompare(b.name[language]);
    }
    return 0;
  });

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedState('All States');
    setSelectedLevel('All Levels');
    setSelectedOccupation('All Occupations');
    setSelectedGender('All Genders');
    setSortBy('popularity');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== 'all' ||
    selectedState !== 'All States' ||
    selectedLevel !== 'All Levels' ||
    selectedOccupation !== 'All Occupations' ||
    selectedGender !== 'All Genders';

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'सत्यापित योजना खोजकर्ता' : 'Verified Welfare Directory'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.explorerTitle}
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm">
          {t.explorerSubtitle}
        </p>
      </div>

      {/* Main Search & Control Bar */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-md space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded-md px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort & Filter Toggle */}
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0 justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="hidden sm:inline">{t.sortBy}:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-bold focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">{t.sortPopularity}</option>
                <option value="updated">{t.sortUpdated}</option>
                <option value="name">{t.sortName}</option>
              </select>
            </div>

            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="md:hidden flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-300"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filter Panel (Desktop Always, Mobile Toggle) */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-3 border-t border-slate-100 ${showFiltersMobile ? 'block' : 'hidden md:grid'}`}>
          {/* Category Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">
              {t.filterCategory}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full p-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              <option value="all">{t.allCategories}</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name[language]}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">
              {t.filterState}
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              <option value="All States">{t.allStates}</option>
              {STATES_LIST.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">
              {t.filterLevel}
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              <option value="All Levels">{t.allLevels}</option>
              <option value="Central">Central Govt</option>
              <option value="State">State Govt</option>
            </select>
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">
              {t.filterOccupation}
            </label>
            <select
              value={selectedOccupation}
              onChange={(e) => setSelectedOccupation(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              <option value="All Occupations">{t.allOccupations}</option>
              <option value="student">Student</option>
              <option value="farmer">Farmer</option>
              <option value="worker">Worker</option>
              <option value="entrepreneur">Vendor / Business</option>
              <option value="artisan">Artisan / Vishwakarma</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">
              {t.filterGender}
            </label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full p-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              <option value="All Genders">{t.allGenders}</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>

        {/* Filter Summary & Reset */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <div>
            {t.showingResults} <strong className="text-slate-900 font-bold">{filtered.length}</strong> {t.schemesFound}
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetAllFilters}
              className="flex items-center gap-1 text-blue-600 font-bold hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.resetFilters}</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onSelectDetails={onSelectDetails}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
          <Inbox className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">
            {language === 'hi' ? 'कोई योजना नहीं मिली' : 'No Schemes Match Your Filter'}
          </h3>
          <p className="text-xs text-slate-500">
            {language === 'hi'
              ? 'कृपया अपने खोज कीवर्ड बदलें या अधिक परिणाम प्राप्त करने के लिए फ़िल्टर रीसेट करें।'
              : 'Try relaxing your filter parameters or search term to view available programs.'}
          </p>
          <button
            onClick={resetAllFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
          >
            {t.resetFilters}
          </button>
        </div>
      )}

      {/* Floating Compare Action Bar */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-slide-up max-w-lg w-full justify-between">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-indigo-400 shrink-0" />
            <span className="text-xs font-bold">
              {compareIds.length} / 3 {language === 'hi' ? 'योजनाएं तुलना के लिए चुनी गईं' : 'Schemes Selected for Compare'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearCompare}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
            <button
              onClick={onOpenCompare}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-xs"
            >
              Compare Now →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
