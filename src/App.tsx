import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { CategorySection } from './components/CategorySection';
import { HowItWorks } from './components/HowItWorks';
import { SchemeExplorer } from './components/SchemeExplorer';
import { SchemeDetailsModal } from './components/SchemeDetailsModal';
import { EligibilityForm } from './components/EligibilityForm';
import { RecommendationResults } from './components/RecommendationResults';
import { AIAssistant } from './components/AIAssistant';
import { SchemeCompareModal } from './components/SchemeCompareModal';
import { UserDashboard } from './components/UserDashboard';
import { AdminPanel } from './components/AdminPanel';
import { FAQSection } from './components/FAQSection';
import { NotificationDrawer } from './components/NotificationDrawer';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { Scheme } from './types/scheme';

const AppContent: React.FC = () => {
  const { activeTab, selectedDetailScheme, setSelectedDetailScheme } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navbar */}
      <Navbar
        onOpenNotifications={() => setShowNotifications(true)}
        onOpenCompare={() => setShowCompareModal(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            <Hero />
            <TrustIndicators />
            <CategorySection />
            <HowItWorks />
            <FAQSection />
          </div>
        )}

        {activeTab === 'explore' && (
          <SchemeExplorer
            onSelectDetails={(scheme: Scheme) => setSelectedDetailScheme(scheme)}
            onOpenCompare={() => setShowCompareModal(true)}
          />
        )}

        {activeTab === 'eligibility' && <EligibilityForm />}

        {activeTab === 'recommendations' && (
          <RecommendationResults
            onSelectDetails={(scheme: Scheme) => setSelectedDetailScheme(scheme)}
          />
        )}

        {activeTab === 'assistant' && <AIAssistant />}

        {activeTab === 'dashboard' && (
          <UserDashboard
            onSelectDetails={(scheme: Scheme) => setSelectedDetailScheme(scheme)}
          />
        )}

        {activeTab === 'admin' && <AdminPanel />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      {selectedDetailScheme && (
        <SchemeDetailsModal
          scheme={selectedDetailScheme}
          onClose={() => setSelectedDetailScheme(null)}
        />
      )}

      {showCompareModal && (
        <SchemeCompareModal
          onClose={() => setShowCompareModal(false)}
          onSelectDetails={(scheme: Scheme) => setSelectedDetailScheme(scheme)}
        />
      )}

      {showNotifications && (
        <NotificationDrawer onClose={() => setShowNotifications(false)} />
      )}

      <AuthModal />
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
