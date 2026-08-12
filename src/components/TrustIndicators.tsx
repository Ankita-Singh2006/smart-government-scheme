import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Calculator, Languages, ExternalLink } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const { t } = useApp();

  const trustItems = [
    {
      icon: ShieldCheck,
      title: t.trust1Title,
      desc: t.trust1Desc,
      badge: 'myScheme Certified',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Calculator,
      title: t.trust2Title,
      desc: t.trust2Desc,
      badge: 'Algorithmic Rules',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      icon: Languages,
      title: t.trust3Title,
      desc: t.trust3Desc,
      badge: 'English + हिंदी',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      icon: ExternalLink,
      title: t.trust4Title,
      desc: t.trust4Desc,
      badge: 'Direct Application',
      badgeColor: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {t.trustTitle}
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 transition-all hover:shadow-md hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
