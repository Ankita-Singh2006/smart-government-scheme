import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VERIFIED_SCHEMES } from '../data/verifiedSchemes';
import { SchemeCard } from './SchemeCard';
import { Scheme } from '../types/scheme';
import {
  Heart,
  History,
  UserCheck,
  Bell,
  CheckCircle,
  Sparkles,
  Edit,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface UserDashboardProps {
  onSelectDetails: (scheme: Scheme) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  onSelectDetails
}) => {
  const {
    t,
    language,
    savedSchemeIds,
    recentlyViewedIds,
    userProfile,
    notifications,
    markNotificationRead,
    user,
    setActiveTab
  } = useApp();

  const [dashboardTab, setDashboardTab] = useState<
    'saved' | 'recent' | 'profile' | 'notifications'
  >('saved');

  const savedSchemes = VERIFIED_SCHEMES.filter((s) => savedSchemeIds.includes(s.id));
  const recentlyViewedSchemes = VERIFIED_SCHEMES.filter((s) =>
    recentlyViewedIds.includes(s.id)
  );

  // Profile completion calculation
  const profileCompletion = userProfile ? 100 : 30;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Profile Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg">
            {user ? user.name.charAt(0) : '🇮🇳'}
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {user ? user.name : (language === 'hi' ? 'नागरिक डैशबोर्ड' : 'Citizen Dashboard')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {userProfile
                ? `${userProfile.occupation.toUpperCase()} • ${userProfile.state} • ${userProfile.residenceType}`
                : (language === 'hi' ? 'अपनी पात्रता दरें ट्रैक करने के लिए प्रोफ़ाइल पूरी करें' : 'Complete profile to track custom scheme matches')}
            </p>
          </div>
        </div>

        {/* Completion Gauge */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-12 h-12 flex items-center justify-center font-black text-sm text-blue-600">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                className="text-slate-200"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="125"
                strokeDashoffset={125 - (125 * profileCompletion) / 100}
                className="text-blue-600"
                fill="transparent"
              />
            </svg>
            <span className="absolute">{profileCompletion}%</span>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-900">
              {language === 'hi' ? 'प्रोफ़ाइल पूर्णता' : 'Profile Score'}
            </div>
            <button
              onClick={() => setActiveTab('eligibility')}
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>{userProfile ? 'Edit Profile' : 'Complete Form'}</span>
              <Edit className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex overflow-x-auto gap-2 text-xs font-bold shadow-xs">
        <button
          onClick={() => setDashboardTab('saved')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            dashboardTab === 'saved'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>{t.savedTab} ({savedSchemes.length})</span>
        </button>

        <button
          onClick={() => setDashboardTab('recent')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            dashboardTab === 'recent'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <History className="w-4 h-4" />
          <span>{t.recentTab} ({recentlyViewedSchemes.length})</span>
        </button>

        <button
          onClick={() => setDashboardTab('profile')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            dashboardTab === 'profile'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>{t.profileTab}</span>
        </button>

        <button
          onClick={() => setDashboardTab('notifications')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            dashboardTab === 'notifications'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>{t.notificationsTab}</span>
        </button>
      </div>

      {/* Tab Contents */}
      {dashboardTab === 'saved' && (
        <div className="space-y-4">
          <h3 className="font-extrabold text-slate-900 text-lg">
            {t.savedTab} ({savedSchemes.length})
          </h3>

          {savedSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedSchemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  onSelectDetails={onSelectDetails}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto space-y-3">
              <Heart className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-slate-600 text-sm font-semibold">
                {language === 'hi' ? 'कोई सहेजी गई योजनाएं नहीं' : 'No saved schemes yet.'}
              </p>
              <button
                onClick={() => setActiveTab('explore')}
                className="bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                {t.exploreSchemesBtn}
              </button>
            </div>
          )}
        </div>
      )}

      {dashboardTab === 'recent' && (
        <div className="space-y-4">
          <h3 className="font-extrabold text-slate-900 text-lg">
            {t.recentTab} ({recentlyViewedSchemes.length})
          </h3>

          {recentlyViewedSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyViewedSchemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  onSelectDetails={onSelectDetails}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto space-y-3">
              <History className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-slate-600 text-sm font-semibold">
                {language === 'hi' ? 'कोई हाल में देखी गई योजनाएं नहीं' : 'No recently viewed schemes.'}
              </p>
            </div>
          )}
        </div>
      )}

      {dashboardTab === 'profile' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl mx-auto">
          <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3">
            {language === 'hi' ? 'नागरिक पात्रता प्रोफ़ाइल' : 'Citizen Eligibility Profile'}
          </h3>

          {userProfile ? (
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[10px]">AGE</span>
                <span className="text-slate-900 text-sm">{userProfile.age} Years</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[10px]">GENDER</span>
                <span className="text-slate-900 text-sm uppercase">{userProfile.gender}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[10px]">STATE</span>
                <span className="text-slate-900 text-sm">{userProfile.state}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[10px]">ANNUAL INCOME</span>
                <span className="text-slate-900 text-sm">₹{userProfile.annualIncome.toLocaleString('en-IN')}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[10px]">OCCUPATION</span>
                <span className="text-slate-900 text-sm uppercase">{userProfile.occupation}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[10px]">AREA TYPE</span>
                <span className="text-slate-900 text-sm uppercase">{userProfile.residenceType}</span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-500">No profile filled yet.</p>
          )}

          <button
            onClick={() => setActiveTab('eligibility')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl shadow-xs transition-all"
          >
            {language === 'hi' ? 'प्रोफ़ाइल अपडेट करें' : 'Update Profile Data'}
          </button>
        </div>
      )}

      {dashboardTab === 'notifications' && (
        <div className="space-y-4 max-w-2xl mx-auto">
          <h3 className="font-extrabold text-slate-900 text-lg">
            {t.notificationsTab}
          </h3>

          <div className="space-y-3">
            {notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => markNotificationRead(n.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  n.read
                    ? 'bg-slate-50 border-slate-200 text-slate-600'
                    : 'bg-blue-50/70 border-blue-200 text-slate-900 font-semibold'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span>{n.title[language]}</span>
                  <span className="text-[10px] text-slate-400">{n.date}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {n.message[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
