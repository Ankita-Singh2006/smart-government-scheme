import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, PhoneCall, ExternalLink, Heart, Globe2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language, setActiveTab } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                🇮🇳
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                SmartScheme <span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {language === 'hi'
                ? 'भारतीय नागरिकों को 100+ पारदर्शी सरकारी योजनाओं से जोड़ने वाला एआई-संचालित डिजिटल सेवा मंच।'
                : 'Empowering 1.4 Billion Indian citizens with instant, AI-guided discovery of official welfare schemes, transparent match scores, and direct portal navigation.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Verified Government Data</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.navExplore}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('eligibility')}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.navEligibility}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('assistant')}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.navAssistant}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.navDashboard}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              {t.officialPortals}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.myscheme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>myScheme Portal (MeitY)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.india.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>National Portal of India</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>PM-KISAN Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://beneficiary.nha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>National Health Authority (PM-JAY)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Helplines */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              {t.helplines}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">myScheme National Helpline</div>
                  <div>1800-11-2001 (Toll Free)</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Kisan Call Centre</div>
                  <div>1800-180-1551 (24x7)</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Ayushman Bharat Call Centre</div>
                  <div>14555 / 1800-111-565</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 mb-8 text-xs text-slate-400 text-center sm:text-left leading-relaxed">
          <p className="font-semibold text-slate-200 mb-1">
            ⚠️ Disclaimer & Public Information Notice:
          </p>
          <p>
            {language === 'hi'
              ? 'यह प्लेटफॉर्म केवल सूचनात्मक मार्गदर्शन प्रदान करता है। अंतिम पात्रता, दस्तावेजों का सत्यापन और आवेदन की मंजूरी पूरी तरह से संबंधित केंद्र/राज्य सरकार के प्राधिकरण या मंत्रालय द्वारा की जाती है।'
              : 'This platform provides informational guidance. Final eligibility and application approval are determined solely by the concerned government authority. Users are encouraged to verify application guidelines on official domain websites (.gov.in / .nic.in).'}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{t.privacyPolicy}</span>
            <span>•</span>
            <span>{t.termsOfUse}</span>
            <span>•</span>
            <span>{t.accessibility}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
