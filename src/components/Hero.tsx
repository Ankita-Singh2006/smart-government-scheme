import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckSquare, Search, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50 py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      {/* Decorative background gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100/90 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs animate-fadeIn">
            <Sparkles className="w-4 h-4 text-blue-600 animate-spin-slow" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {t.heroTitle}
          </h1>

          {/* Subheading */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab('eligibility')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <CheckSquare className="w-5 h-5" />
              <span>{t.checkEligibilityBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('explore')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-8 py-4 rounded-xl border border-slate-300 shadow-xs hover:shadow-md transition-all"
            >
              <Search className="w-5 h-5 text-slate-500" />
              <span>{t.exploreSchemesBtn}</span>
            </button>
          </div>

          {/* Verified Data Source Trust Note */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Government Sources • myScheme & India.gov.in Synchronized</span>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">
              100+
            </div>
            <div className="text-xs font-semibold text-slate-600">
              {t.verifiedSchemesStat}
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">
              10
            </div>
            <div className="text-xs font-semibold text-slate-600">
              {t.categoriesStat}
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 mb-1">
              36
            </div>
            <div className="text-xs font-semibold text-slate-600">
              {t.statesStat}
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1">
              1.2M+
            </div>
            <div className="text-xs font-semibold text-slate-600">
              {t.citizensServedStat}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
