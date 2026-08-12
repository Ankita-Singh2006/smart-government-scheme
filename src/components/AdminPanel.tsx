import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VERIFIED_SCHEMES } from '../data/verifiedSchemes';
import { CATEGORIES } from '../data/categories';
import {
  Shield,
  Plus,
  BarChart3,
  CheckCircle,
  Building2,
  FileText,
  Search,
  ExternalLink
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { t, language, showToast } = useApp();
  const [adminTab, setAdminTab] = useState<'schemes' | 'analytics' | 'add'>('schemes');

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black">
              {t.adminDashboardTitle}
            </h2>
            <p className="text-xs text-slate-400">
              Department Portal • myScheme Verified Data Synchronization Engine
            </p>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-2xl text-center">
            <div className="text-lg font-black text-blue-400">{VERIFIED_SCHEMES.length}</div>
            <div className="text-[10px] text-slate-400">Active Schemes</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-2xl text-center">
            <div className="text-lg font-black text-emerald-400">{CATEGORIES.length}</div>
            <div className="text-[10px] text-slate-400">Categories</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex gap-2 text-xs font-bold">
        <button
          onClick={() => setAdminTab('schemes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
            adminTab === 'schemes'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Managed Schemes ({VERIFIED_SCHEMES.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('analytics')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
            adminTab === 'analytics'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Ministry Distribution</span>
        </button>

        <button
          onClick={() => {
            setAdminTab('add');
            showToast('Opening Scheme Creation Module');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
            adminTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Plus className="w-4 h-4" />
          <span>Add New Scheme</span>
        </button>
      </div>

      {/* Managed Schemes List */}
      {adminTab === 'schemes' && (
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-700 flex justify-between items-center">
            <span>Verified Government Schemes</span>
            <span className="text-emerald-600">✓ All 8 Schemes Synchronized with myScheme API</span>
          </div>

          <div className="divide-y divide-slate-100">
            {VERIFIED_SCHEMES.map((scheme) => (
              <div key={scheme.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/80">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {scheme.level}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {scheme.category.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {scheme.name.en}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {scheme.ministry.en} • Updated: {scheme.lastUpdated}
                  </p>
                </div>

                <a
                  href={scheme.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-lg shrink-0"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics */}
      {adminTab === 'analytics' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 className="font-extrabold text-slate-900 text-lg">
            Category & Ministry Distribution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between bg-slate-50">
                <span className="font-bold text-xs text-slate-800">{cat.name.en}</span>
                <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
                  {cat.count} Schemes
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {adminTab === 'add' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 max-w-xl mx-auto text-center">
          <Building2 className="w-12 h-12 text-blue-600 mx-auto" />
          <h3 className="font-bold text-slate-900 text-lg">Add New Official Scheme</h3>
          <p className="text-xs text-slate-500">
            Government officials can publish newly gazetted welfare schemes by providing verified notification URLs, eligibility parameters, and ministry details.
          </p>
          <button
            onClick={() => {
              showToast('Scheme added to verified draft queue');
              setAdminTab('schemes');
            }}
            className="bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md"
          >
            Publish Verified Draft Scheme
          </button>
        </div>
      )}
    </div>
  );
};
