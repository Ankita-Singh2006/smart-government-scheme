import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VERIFIED_SCHEMES } from '../data/verifiedSchemes';
import { calculateSchemeMatch } from '../utils/recommendationEngine';
import { SchemeCard } from './SchemeCard';
import { SchemeMatchResult, Scheme } from '../types/scheme';
import { Sparkles, Info, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface RecommendationResultsProps {
  onSelectDetails: (scheme: Scheme) => void;
}

export const RecommendationResults: React.FC<RecommendationResultsProps> = ({
  onSelectDetails
}) => {
  const { t, language, userProfile, setActiveTab } = useApp();
  const [filterLevel, setFilterLevel] = useState<'all' | 'excellent' | 'good'>('all');

  if (!userProfile) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 text-center bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
        <Sparkles className="w-12 h-12 text-blue-600 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">
          {language === 'hi' ? 'अपनी पात्रता प्रोफ़ाइल पूरी करें' : 'Complete Your Eligibility Profile'}
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          {language === 'hi'
            ? 'अपनी व्यक्तिगत योजना अनुशंसाएं और सटीक प्रतिशत मैच स्कोर देखने के लिए कृपया पात्रता कैलकुलेटर भरें।'
            : 'Please complete the eligibility audit form to unlock customized scheme recommendations and match score breakdowns.'}
        </p>
        <button
          onClick={() => setActiveTab('eligibility')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all"
        >
          {t.checkEligibilityBtn}
        </button>
      </div>
    );
  }

  // Calculate matches for all verified schemes
  const allResults: SchemeMatchResult[] = VERIFIED_SCHEMES.map((scheme) =>
    calculateSchemeMatch(scheme, userProfile)
  ).sort((a, b) => b.matchPercentage - a.matchPercentage);

  const filteredResults = allResults.filter((res) => {
    if (filterLevel === 'excellent') return res.matchPercentage >= 85;
    if (filterLevel === 'good') return res.matchPercentage >= 70;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-200 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{language === 'hi' ? 'व्यक्तिगत सिफारिशें' : 'Algorithmic Match Scoring'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {t.recTitle}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {t.recSubtitle} ({userProfile.age} yrs, {userProfile.occupation}, {userProfile.state}, ₹{userProfile.annualIncome.toLocaleString('en-IN')}/yr).
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-2 rounded-xl w-fit">
            <Info className="w-4 h-4 shrink-0" />
            <span>{t.disclaimerEligible}</span>
          </div>
        </div>
      </div>

      {/* Filter Level Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap bg-white p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold text-slate-700">Filter Matches:</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterLevel('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterLevel === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Matches ({allResults.length})
          </button>
          <button
            onClick={() => setFilterLevel('excellent')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterLevel === 'excellent'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Excellent (85%+) ({allResults.filter((r) => r.matchPercentage >= 85).length})
          </button>
          <button
            onClick={() => setFilterLevel('good')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterLevel === 'good'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Good (70%+) ({allResults.filter((r) => r.matchPercentage >= 70).length})
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((match) => (
          <div key={match.scheme.id} className="space-y-2">
            <SchemeCard
              scheme={match.scheme}
              matchResult={match}
              onSelectDetails={onSelectDetails}
            />

            {/* Match Explanatory Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1.5">
              <div className="font-bold text-slate-800 flex items-center justify-between">
                <span>{t.matchingReasons}</span>
                <span className="text-blue-600 font-mono font-semibold">
                  {match.matchPercentage}/100 Pts
                </span>
              </div>
              {match.reasons.slice(0, 3).map((r, i) => (
                <div key={i} className="flex items-start gap-1.5 text-slate-600">
                  <CheckCircle2
                    className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                      r.matched ? 'text-emerald-600' : 'text-slate-400'
                    }`}
                  />
                  <span className="leading-tight">{r.explanation[language]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
