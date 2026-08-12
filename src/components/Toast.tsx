import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 animate-slide-up text-sm font-medium">
      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};
