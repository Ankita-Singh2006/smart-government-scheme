import React from 'react';
import { useApp } from '../context/AppContext';
import {
  UserPlus,
  FileCheck2,
  Cpu,
  Award,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t, language } = useApp();

  const steps = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: UserPlus
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: FileCheck2
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: Cpu
    },
    {
      num: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      icon: Award
    },
    {
      num: '05',
      title: t.step5Title,
      desc: t.step5Desc,
      icon: ShieldCheck
    },
    {
      num: '06',
      title: t.step6Title,
      desc: t.step6Desc,
      icon: ExternalLink
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorksTitle}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {t.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 relative hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
