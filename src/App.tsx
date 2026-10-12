import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { TraditionsSection } from './components/TraditionsSection';
import { CuisineSection } from './components/CuisineSection';
import { CostumesSection } from './components/CostumesSection';
import { EtiquetteSection } from './components/EtiquetteSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';
import { 
  Home, 
  Compass, 
  Utensils, 
  Shirt, 
  HeartHandshake, 
  Award 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Scroll to top when tab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const mobileNavItems = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'traditions', label: 'ประเพณี', icon: Compass },
    { id: 'cuisine', label: 'อาหาร', icon: Utensils },
    { id: 'costumes', label: 'ชุดไทย', icon: Shirt },
    { id: 'etiquette', label: 'มารยาท', icon: HeartHandshake },
    { id: 'quiz', label: 'ทดสอบ', icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-stone-900">
      
      {/* Top Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-1 pb-20 lg:pb-10 pt-4 sm:pt-6">
        {activeTab === 'home' && <HomeSection onNavigate={handleTabChange} />}
        {activeTab === 'traditions' && <TraditionsSection />}
        {activeTab === 'cuisine' && <CuisineSection />}
        {activeTab === 'costumes' && <CostumesSection />}
        {activeTab === 'etiquette' && <EtiquetteSection />}
        {activeTab === 'quiz' && <QuizSection />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Mobile Bottom Thumb Navigation Bar (Under 60px height to comply with <15% sticky cap) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-2 py-1.5 shadow-lg">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'text-amber-800 font-bold scale-105'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-amber-600' : 'text-stone-500'}`} />
                <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
