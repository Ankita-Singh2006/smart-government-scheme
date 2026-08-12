import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Bell, CheckCircle2, Info, AlertCircle } from 'lucide-react';

interface NotificationDrawerProps {
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({ onClose }) => {
  const { t, language, notifications, markNotificationRead } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-left border-l border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Bell className="w-5 h-5 text-amber-400" />
            <h2 className="font-extrabold text-base">{t.notifications}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                n.read
                  ? 'bg-slate-50 border-slate-200 text-slate-600'
                  : 'bg-amber-50/60 border-amber-200 text-slate-900 font-semibold'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  {n.type === 'scheme_update' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <Info className="w-4 h-4 text-blue-600 shrink-0" />
                  )}
                  <span>{n.title[language]}</span>
                </div>
                <span className="text-[10px] font-medium text-slate-400 shrink-0">
                  {n.date}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {n.message[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
