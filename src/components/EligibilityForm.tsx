import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { STATES_LIST } from '../data/categories';
import { UserEligibilityProfile } from '../types/scheme';
import {
  User,
  IndianRupee,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Loader2
} from 'lucide-react';

export const EligibilityForm: React.FC = () => {
  const {
    t,
    language,
    userProfile,
    setUserProfile,
    setActiveTab
  } = useApp();

  const [step, setStep] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const [formData, setFormData] = useState<UserEligibilityProfile>(
    userProfile || {
      age: 25,
      gender: 'female',
      state: 'Maharashtra',
      district: 'Mumbai',
      annualIncome: 200000,
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
    }
  );

  const handleChange = (
    field: keyof UserEligibilityProfile,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setUserProfile(formData);
      setIsCalculating(false);
      setActiveTab('recommendations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl my-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'एआई-संचालित पात्रता जांच' : 'AI-Powered Eligibility Audit'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.eligibilityTitle}
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-lg mx-auto">
          {t.eligibilitySubtitle}
        </p>
      </div>

      {/* Progress Bar & Steps Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold mb-2">
          <span className={step >= 1 ? 'text-blue-600' : 'text-slate-400'}>
            1. {t.step1Label}
          </span>
          <span className={step >= 2 ? 'text-blue-600' : 'text-slate-400'}>
            2. {t.step2Label}
          </span>
          <span className={step >= 3 ? 'text-blue-600' : 'text-slate-400'}>
            3. {t.step3Label}
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <span>{t.step1Label}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.ageLabel} *
                </label>
                <input
                  type="number"
                  min="0"
                  max="120"
                  required
                  value={formData.age}
                  onChange={(e) => handleChange('age', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
                  placeholder="e.g. 24"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.genderLabel} *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleChange('gender', e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
                >
                  <option value="female">{language === 'hi' ? 'महिला (Female)' : 'Female'}</option>
                  <option value="male">{language === 'hi' ? 'पुरुष (Male)' : 'Male'}</option>
                  <option value="transgender">{language === 'hi' ? 'ट्रांसजेंडर (Transgender)' : 'Transgender'}</option>
                  <option value="prefer-not-to-say">{language === 'hi' ? 'प्रकट नहीं करना (Prefer not to say)' : 'Prefer not to say'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.stateLabel} *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
                >
                  {STATES_LIST.filter((s) => s !== 'All India').map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.districtLabel}
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => handleChange('district', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
                  placeholder="e.g. Pune"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2 flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <span>{t.step2Label}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.incomeLabel} *
                </label>
                <input
                  type="number"
                  min="0"
                  step="10000"
                  required
                  value={formData.annualIncome}
                  onChange={(e) => handleChange('annualIncome', parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
                  placeholder="e.g. 200000"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  {t.incomeHelper} (Current: ₹{formData.annualIncome.toLocaleString('en-IN')})
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.occupationLabel} *
                </label>
                <select
                  value={formData.occupation}
                  onChange={(e) => {
                    const val = e.target.value;
                    handleChange('occupation', val);
                    if (val === 'student') handleChange('isStudent', true);
                    if (val === 'farmer') handleChange('isFarmer', true);
                    if (val === 'entrepreneur' || val === 'artisan') handleChange('isEntrepreneur', true);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
                >
                  <option value="student">{language === 'hi' ? 'छात्र (Student)' : 'Student'}</option>
                  <option value="farmer">{language === 'hi' ? 'किसान (Farmer)' : 'Farmer'}</option>
                  <option value="worker">{language === 'hi' ? 'श्रमिक / मजदूर (Worker/Laborer)' : 'Worker / Daily Wager'}</option>
                  <option value="entrepreneur">{language === 'hi' ? 'उद्यमी / व्यापारी (Micro Business / Vendor)' : 'Micro Business Owner / Street Vendor'}</option>
                  <option value="artisan">{language === 'hi' ? 'पारंपरिक कारीगर (Artisan/Craftsperson)' : 'Traditional Artisan / Vishwakarma'}</option>
                  <option value="unemployed">{language === 'hi' ? 'बेरोजगार (Unemployed)' : 'Unemployed'}</option>
                  <option value="senior-citizen">{language === 'hi' ? 'वरिष्ठ नागरिक (Senior Citizen)' : 'Senior Citizen'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.residenceLabel} *
                </label>
                <select
                  value={formData.residenceType}
                  onChange={(e) => handleChange('residenceType', e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
                >
                  <option value="urban">{language === 'hi' ? 'शहरी क्षेत्र (Urban)' : 'Urban Area'}</option>
                  <option value="rural">{language === 'hi' ? 'ग्रामीण क्षेत्र (Rural)' : 'Rural Area'}</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-600" />
              <span>{t.step3Label}</span>
            </h3>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.isStudent}
                  onChange={(e) => handleChange('isStudent', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded-md focus:ring-blue-500"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {t.studentCheck}
                </span>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.isFarmer}
                  onChange={(e) => handleChange('isFarmer', e.target.checked)}
                  className="w-4 h-4 text-emerald-600 rounded-md focus:ring-emerald-500"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {t.farmerCheck}
                </span>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.isEntrepreneur}
                  onChange={(e) => handleChange('isEntrepreneur', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded-md focus:ring-purple-500"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {t.entrepreneurCheck}
                </span>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.hasDisability}
                  onChange={(e) => handleChange('hasDisability', e.target.checked)}
                  className="w-4 h-4 text-rose-600 rounded-md focus:ring-rose-500"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {t.disabilityCheck}
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.educationLabel}
                </label>
                <select
                  value={formData.educationLevel}
                  onChange={(e) => handleChange('educationLevel', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
                >
                  <option value="Below 10th">Below 10th</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="ITI / Diploma">ITI / Diploma</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.casteLabel}
                </label>
                <select
                  value={formData.casteCategory}
                  onChange={(e) => handleChange('casteCategory', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
                >
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Buttons Row */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.prevStep}</span>
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <span>{t.nextStep}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isCalculating}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02] disabled:opacity-75"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.analyzingText}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>{t.calculateMatches}</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
