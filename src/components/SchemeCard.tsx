import React from 'react';
import { useApp } from '../context/AppContext';
import { Scheme, SchemeMatchResult } from '../types/scheme';
import {
  Heart,
  Scale,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  matchResult?: SchemeMatchResult;
  onSelectDetails: (scheme: Scheme) => void;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  scheme,
  matchResult,
  onSelectDetails
}) => {
  const {
    t,
    language,
    savedSchemeIds,
    toggleSaveScheme,
    compareIds,
    toggleCompareScheme,
    addRecentlyViewed
  } = useApp();

  const isSaved = savedSchemeIds.includes(scheme.id);
  const isCompared = compareIds.includes(scheme.id);

  const handleDetailsClick = () => {
    addRecentlyViewed(scheme.id);
    onSelectDetails(scheme);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative group hover:border-blue-300">
      {/* Top Badges Row */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                scheme.level === 'Central'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
              }`}
            >
              {scheme.level === 'Central' ? (language === 'hi' ? 'केंद्रीय' : 'Central') : (language === 'hi' ? 'राज्य' : 'State')}
            </span>

            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {scheme.category.toUpperCase()}
            </span>

            {/* Match Badge if available */}
            {matchResult && (
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  matchResult.matchPercentage >= 85
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : matchResult.matchPercentage >= 70
                    ? 'bg-blue-100 text-blue-800 border border-blue-300'
                    : 'bg-amber-100 text-amber-800 border border-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3 shrink-0" />
                <span>{matchResult.matchPercentage}% {language === 'hi' ? matchResult.matchLabelHi : matchResult.matchLabel}</span>
              </span>
            )}
          </div>

          {/* Save & Compare Actions */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => toggleCompareScheme(scheme.id)}
              title={t.addToCompare}
              className={`p-1.5 rounded-lg border text-xs font-semibold transition-all ${
                isCompared
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              title={isSaved ? t.savedScheme : t.saveScheme}
              className={`p-1.5 rounded-lg border text-xs font-semibold transition-all ${
                isSaved
                  ? 'bg-rose-50 text-rose-600 border-rose-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={handleDetailsClick}
          className="font-extrabold text-slate-900 text-lg mb-2 cursor-pointer hover:text-blue-600 transition-colors leading-snug line-clamp-2"
        >
          {scheme.name[language]}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {scheme.shortDescription[language]}
        </p>

        {/* Ministry & Source Metadata */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 truncate">
            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{scheme.ministry[language]}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-emerald-700 font-semibold truncate">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{scheme.officialSource}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 shrink-0">
              <Calendar className="w-3 h-3" />
              <span>{scheme.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={handleDetailsClick}
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
        >
          <span>{t.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={scheme.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-xs transition-all text-center truncate"
        >
          <span className="truncate">{t.applyOfficially}</span>
        </a>
      </div>
    </div>
  );
};
