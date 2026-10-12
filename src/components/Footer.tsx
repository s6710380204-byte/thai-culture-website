import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-amber-200" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                เสน่ห์วัฒนธรรมไทย
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              เว็บไซต์เพื่อการศึกษาสำหรับนักเรียนและนักศึกษา มุ่งหวังเสริมสร้างความรู้ 
              ความเข้าใจ และความภาคภูมิใจในรากเหง้าภูมิปัญญาไทยสู่วิถีชีวิตร่วมสมัย
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              หมวดหมู่การเรียนรู้
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  หน้าแรก
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('traditions')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  ประเพณีไทย
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cuisine')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  อาหารไทยเลื่องชื่อ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('costumes')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  การแต่งกายไทย
                </button>
              </li>
            </ul>
          </div>

          {/* Features Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              แบบทดสอบ & กิจกรรม
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => onNavigate('etiquette')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  มารยาทและเอกลักษณ์ไทย
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  แบบทดสอบ 5 ข้อ พร้อมเฉลย
                </button>
              </li>
              <li>
                <span className="text-xs text-stone-500 block pt-2">
                  อ้างอิงข้อมูล: กรมส่งเสริมวัฒนธรรม & UNESCO
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} เสน่ห์วัฒนธรรมไทย · สื่อการเรียนรู้ออนไลน์สำหรับเยาวชน
          </p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>ร่วมสืบสานมรดกไทยด้วยความภาคภูมิใจ</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 ml-1 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
