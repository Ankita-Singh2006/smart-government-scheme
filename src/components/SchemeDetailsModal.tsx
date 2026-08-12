import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Scheme } from '../types/scheme';
import {
  X,
  Building2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  FileText,
  Heart,
  Scale,
  Sparkles,
  Info
} from 'lucide-react';

interface SchemeDetailsModalProps {
  scheme: Scheme | null;
  onClose: () => void;
}

export const SchemeDetailsModal: React.FC<SchemeDetailsModalProps> = ({
  scheme,
  onClose
}) => {
  const {
    t,
    language,
    savedSchemeIds,
    toggleSaveScheme,
    compareIds,
    toggleCompareScheme
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'benefits' | 'eligibility' | 'documents' | 'process'
  >('overview');

  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  if (!scheme) return null;

  const isSaved = savedSchemeIds.includes(scheme.id);
  const isCompared = compareIds.includes(scheme.id);

  const toggleDocCheck = (idx: number) => {
    setCheckedDocs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden my-auto animate-slide-up">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white">
              {scheme.level === 'Central' ? (language === 'hi' ? 'केंद्रीय योजना' : 'Central Scheme') : (language === 'hi' ? 'राज्य योजना' : 'State Scheme')}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
              {scheme.category.toUpperCase()}
            </span>
            <div className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{scheme.officialSource}</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white pr-8 leading-snug">
            {scheme.name[language]}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2">
            {scheme.shortDescription[language]}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{scheme.ministry[language]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{t.lastUpdatedLabel}: {scheme.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 pt-3 flex overflow-x-auto gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.overviewTab}
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`pb-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'benefits'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.benefitsTab}
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`pb-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'eligibility'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.eligibilityTab}
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'documents'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.documentsTab}
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`pb-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'process'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.processTab}
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-slate-700">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  {language === 'hi' ? 'योजना का विवरण' : 'Scheme Full Description'}
                </h4>
                <p className="leading-relaxed text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {scheme.fullDescription[language]}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50/60 border border-blue-200 p-4 rounded-2xl">
                  <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-1">
                    {language === 'hi' ? 'विभाग' : 'Department'}
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {scheme.department[language]}
                  </div>
                </div>

                <div className="bg-indigo-50/60 border border-indigo-200 p-4 rounded-2xl">
                  <div className="font-bold text-indigo-900 text-xs uppercase tracking-wider mb-1">
                    {language === 'hi' ? 'लागू क्षेत्र' : 'Applicable Regions'}
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {scheme.applicableStates.join(', ')}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  {language === 'hi' ? 'टैग' : 'Tags'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {scheme.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base mb-2">
                {language === 'hi' ? 'मुख्य लाभ' : 'Key Scheme Benefits'}
              </h4>
              <div className="space-y-3">
                {scheme.benefits[language].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-emerald-50/50 border border-emerald-200 p-4 rounded-2xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-slate-800 font-medium text-sm leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base mb-2">
                {language === 'hi' ? 'पात्रता मापदंड' : 'Eligibility Requirements'}
              </h4>
              <div className="space-y-3">
                {scheme.eligibilitySummary[language].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-blue-50/50 border border-blue-200 p-4 rounded-2xl"
                  >
                    <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-800 font-medium text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base">
                  {language === 'hi' ? 'आवश्यक दस्तावेज चेकलिस्ट' : 'Required Documents Checklist'}
                </h4>
                <span className="text-xs font-semibold text-slate-500">
                  {Object.values(checkedDocs).filter(Boolean).length} / {scheme.requiredDocuments[language].length} {language === 'hi' ? 'तैयार' : 'Ready'}
                </span>
              </div>

              <div className="space-y-2.5">
                {scheme.requiredDocuments[language].map((doc, idx) => (
                  <label
                    key={idx}
                    onClick={() => toggleDocCheck(idx)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      checkedDocs[idx]
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedDocs[idx]}
                      onChange={() => {}}
                      className="w-4 h-4 text-emerald-600 rounded-md focus:ring-emerald-500 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm">{doc}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 text-base mb-2">
                {language === 'hi' ? 'चरण-दर-चरण आवेदन प्रक्रिया' : 'Step-by-Step Application Timeline'}
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
                {scheme.applicationProcess.map((step) => (
                  <div key={step.step} className="relative group">
                    <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center ring-4 ring-white shadow-xs">
                      {step.step}
                    </div>
                    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
                      <h5 className="font-bold text-slate-900 text-sm mb-1">
                        {step.title[language]}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                isSaved
                  ? 'bg-rose-50 text-rose-600 border-rose-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
              <span>{isSaved ? t.savedScheme : t.saveScheme}</span>
            </button>

            <button
              onClick={() => toggleCompareScheme(scheme.id)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                isCompared
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{t.addToCompare}</span>
            </button>
          </div>

          <a
            href={scheme.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all text-center"
          >
            <span>{t.applyOfficially}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
