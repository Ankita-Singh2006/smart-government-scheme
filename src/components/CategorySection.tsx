import React from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import {
  GraduationCap,
  Sprout,
  HeartPulse,
  Users,
  Briefcase,
  Store,
  Home,
  ShieldCheck,
  Landmark,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { CategoryId } from '../types/scheme';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Sprout,
  HeartPulse,
  Users,
  Briefcase,
  Store,
  Home,
  ShieldCheck,
  Landmark,
  Wrench
};

export const CategorySection: React.FC = () => {
  const { t, language, setSelectedCategory, setActiveTab } = useApp();

  const handleCategoryClick = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.categoriesHeader}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {t.categoriesSubheader}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || Briefcase;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${cat.color}15`,
                        color: cat.color
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${cat.color}15`,
                        color: cat.color
                      }}
                    >
                      {cat.count} {language === 'hi' ? 'योजनाएं' : 'Schemes'}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors">
                    {cat.name[language]}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {cat.description[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 opacity-80 group-hover:opacity-100">
                  <span>{t.viewAllSchemes}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
