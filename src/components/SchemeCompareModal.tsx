import React from 'react';
import { useApp } from '../context/AppContext';
import { VERIFIED_SCHEMES } from '../data/verifiedSchemes';
import { Scheme } from '../types/scheme';
import { X, ExternalLink, Scale, Check, Minus } from 'lucide-react';

interface SchemeCompareModalProps {
  onClose: () => void;
  onSelectDetails: (scheme: Scheme) => void;
}

export const SchemeCompareModal: React.FC<SchemeCompareModalProps> = ({
  onClose,
  onSelectDetails
}) => {
  const { t, language, compareIds, toggleCompareScheme, clearCompare } = useApp();

  const schemesToCompare = VERIFIED_SCHEMES.filter((s) => compareIds.includes(s.id));

  if (schemesToCompare.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden my-auto animate-slide-up">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black">
                {t.compareTitle}
              </h2>
              <p className="text-xs text-slate-400">
                {t.compareSubtitle} ({schemesToCompare.length}/3)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={clearCompare}
              className="text-xs font-bold text-slate-400 hover:text-white"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto flex-1">
          <table className="w-full text-xs text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-3 font-bold text-slate-500 uppercase tracking-wider w-1/4">
                  Feature
                </th>
                {schemesToCompare.map((scheme) => (
                  <th key={scheme.id} className="p-3 font-extrabold text-slate-900 text-sm w-1/3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="line-clamp-2">{scheme.name[language]}</span>
                      <button
                        onClick={() => toggleCompareScheme(scheme.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {scheme.level}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {/* Ministry */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Ministry / Dept</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3">{s.ministry[language]}</td>
                ))}
              </tr>

              {/* Category */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Category</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3 uppercase font-semibold">{s.category}</td>
                ))}
              </tr>

              {/* Income Cap */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Max Annual Income</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3 font-semibold text-emerald-700">
                    {s.eligibilityCriteria.maxAnnualIncome
                      ? `₹${s.eligibilityCriteria.maxAnnualIncome.toLocaleString('en-IN')}`
                      : 'No Income Cap'}
                  </td>
                ))}
              </tr>

              {/* Age Eligibility */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Eligible Age Group</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3">
                    {s.eligibilityCriteria.minAge || 0} - {s.eligibilityCriteria.maxAge || 120} Years
                  </td>
                ))}
              </tr>

              {/* Key Benefits */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Primary Benefits</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3 space-y-1">
                    {s.benefits[language].slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* Key Documents */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Required Documents</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3 space-y-1">
                    {s.requiredDocuments[language].slice(0, 3).map((d, i) => (
                      <div key={i} className="text-slate-600">• {d}</div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* Official Link */}
              <tr>
                <td className="p-3 font-bold text-slate-900 bg-slate-50">Official Portal</td>
                {schemesToCompare.map((s) => (
                  <td key={s.id} className="p-3">
                    <a
                      href={s.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] hover:bg-blue-700"
                    >
                      <span>Apply on Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
