import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Utensils, 
  Shirt, 
  HeartHandshake, 
  Award, 
  ChevronRight, 
  Compass, 
  Globe2, 
  ShieldCheck, 
  Lightbulb 
} from 'lucide-react';
import { CULTURAL_IMAGES, CULTURAL_FUN_FACTS } from '../data/thaiCultureData';

interface HomeSectionProps {
  onNavigate: (tab: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Hero Section with Generated High-Fidelity Culture Photo */}
      <section className="relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-xl mx-2 sm:mx-0">
        <div className="absolute inset-0">
          <img
            src={CULTURAL_IMAGES.hero}
            alt="ทัศนียภาพวัดอรุณและพระบรมมหาราชวังยามค่ำคืน ริมแม่น้ำเจ้าพระยา"
            className="w-full h-full object-cover opacity-50 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/30" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28 lg:py-32 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>เว็บไซต์เพื่อการศึกษาสำหรับนักเรียนและนักศึกษา</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-tight text-balance">
            เสน่ห์วัฒนธรรมไทย
            <span className="block text-xl sm:text-3xl lg:text-4xl font-normal text-amber-200 mt-2">
              มรดกภูมิปัญญาอันล้ำค่า สู่วิถีชีวิตคนรุ่นใหม่
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mb-10 leading-relaxed font-light">
            ร่วมเปิดประตูสู่อารยธรรมแห่งสยาม ค้นพบคุณค่าที่ซ่อนอยู่ในประเพณีโบราณ 
            รสสัมผัสแห่งอาหารอันลือเลื่อง ความสง่างามของเครื่องแต่งกาย 
            และมารยาทอันอ่อนช้อยที่เป็นเอกลักษณ์ดึงดูดใจผู้คนทั่วโลก
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('traditions')}
              className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl shadow-lg shadow-amber-900/30 hover:shadow-amber-600/30 transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <Compass className="w-4 h-4" />
              <span>เริ่มสำรวจวัฒนธรรมไทย</span>
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>ทดสอบความรู้ 5 ข้อ</span>
            </button>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-10 border-t border-white/10 w-full max-w-3xl">
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-bold text-amber-300 font-heading">
                UNESCO
              </span>
              <span className="text-xs text-stone-400 mt-1 block">มรดกภูมิปัญญาโลก</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-bold text-amber-300 font-heading">
                8 แบบ
              </span>
              <span className="text-xs text-stone-400 mt-1 block">ชุดไทยพระราชนิยม</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-bold text-amber-300 font-heading">
                3 ระดับ
              </span>
              <span className="text-xs text-stone-400 mt-1 block">มารยาทการไหว้ไทย</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-bold text-amber-300 font-heading">
                100%
              </span>
              <span className="text-xs text-stone-400 mt-1 block">ซอฟต์พาวเวอร์ไทย</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Four Core Cultural Pillars (หมวดหมู่การเรียนรู้หลัก) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
            เนื้อหาการศึกษา 4 มิติ
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
            เจาะลึก 4 เสาหลักแห่งอัตลักษณ์ไทย
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            เรียนรู้ผ่านเนื้อหาที่เข้าใจง่าย ภาพประกอบสวยงาม พร้อมความรู้รอบตัวสำหรับเยาวชน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: ประเพณีไทย */}
          <div 
            onClick={() => onNavigate('traditions')}
            className="group bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                ประเพณีไทย
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                สงกรานต์ ลอยกระทง แห่เทียนพรรษา และบุญบั้งไฟ 
                สายใยแห่งความกตัญญูและวิถีชุมชนที่สืบทอดนับร้อยปี
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-sky-700 group-hover:text-amber-700">
              <span>ศึกษาประเพณี</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: อาหารไทย */}
          <div 
            onClick={() => onNavigate('cuisine')}
            className="group bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                อาหารไทยเลื่องชื่อ
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                ต้มยำกุ้ง ผัดไทย ส้มตำ และมัสมั่นอันดับหนึ่งของโลก 
                ศาสตร์แห่งเครื่องเทศสมุนไพรและรสชาติอันสมดุล
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-amber-700 group-hover:text-amber-800">
              <span>สำรวจรสชาติไทย</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: การแต่งกายไทย */}
          <div 
            onClick={() => onNavigate('costumes')}
            className="group bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                การแต่งกายไทย
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                ชุดไทยพระราชนิยม 8 แบบ ผ้าไหมมัดหมี่ สไบทอง 
                และลวดลายทอโบราณที่เปี่ยมด้วยความสง่างาม
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-rose-700 group-hover:text-amber-700">
              <span>ชมเครื่องแต่งกาย</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: มารยาทและเอกลักษณ์ */}
          <div 
            onClick={() => onNavigate('etiquette')}
            className="group bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                มารยาทและเอกลักษณ์
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                การไหว้ 3 ระดับ การกราบเบญจางคประดิษฐ์ 
                และการปฏิบัติตัวอย่างอ่อนน้อมถ่อมตนในชีวิตจริง
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-emerald-700 group-hover:text-amber-700">
              <span>ฝึกฝนกิริยามารยาท</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Value for Gen-Z & Students (ทำไมคนรุ่นใหม่ต้องภูมิใจในวัฒนธรรมไทย) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-medium border border-amber-400/20 mb-4">
              <Globe2 className="w-3.5 h-3.5" />
              Thai Soft Power & Youth Future
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold leading-tight text-white mb-4">
              พลังวัฒนธรรมไทย (Soft Power)
              <br />
              ขับเคลื่อนความภูมิใจบนเวทีระดับโลก
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              วัฒนธรรมไทยไม่ใช่เรื่องล้าสมัย แต่คือสินทรัพย์ทางปัญญาที่คนรุ่นใหม่สามารถนำไปต่อยอดได้ 
              ไม่ว่าจะเป็นแฟชั่น ดนตรี อาหาร ภาพยนตร์ หรือการท่องเที่ยวเชิงสร้างสรรค์ 
              การเข้าใจรากเหง้าของตนเองอย่างลึกซึ้ง จะช่วยให้เราก้าวสู่สากลได้อย่างสง่างามและมีเอกลักษณ์
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-amber-300 mb-2" />
                <h4 className="font-bold text-sm text-white font-heading">รักษาอัตลักษณ์</h4>
                <p className="text-xs text-stone-300 mt-1">
                  ไม่ถูกกลืนหายไปในกระแสโลกาภิวัตน์ ด้วยความเข้าใจในคุณค่าที่แท้จริง
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                <Lightbulb className="w-5 h-5 text-amber-300 mb-2" />
                <h4 className="font-bold text-sm text-white font-heading">สร้างสรรค์สิ่งใหม่</h4>
                <p className="text-xs text-stone-300 mt-1">
                  ประยุกต์ภูมิปัญญาโบราณสู่นวัตกรรม ดีไซน์ และธุรกิจร่วมสมัย
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                <HeartHandshake className="w-5 h-5 text-amber-300 mb-2" />
                <h4 className="font-bold text-sm text-white font-heading">มิตรไมตรีสากล</h4>
                <p className="text-xs text-stone-300 mt-1">
                  รอยยิ้มและการต้อนรับที่อบอุ่นสร้างความประทับใจแก่คนทั่วโลก
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Cultural Did-You-Know Cards (เกร็ดน่ารู้) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase block mb-1">
              Did You Know?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
              เกร็ดน่ารู้เสน่ห์ไทย
            </h2>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md">
            ความรู้รอบตัวชวนคิดที่จะช่วยให้นักเรียนเข้าใจวัฒนธรรมไทยในแง่มุมที่ลึกซึ้งยิ่งขึ้น
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CULTURAL_FUN_FACTS.map((fact, index) => (
            <div 
              key={index} 
              className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/60 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-stone-900 mb-1.5">
                    {fact.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {fact.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Banner to Quiz CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              พร้อมทดสอบความรอบรู้ของคุณหรือยัง?
            </h3>
            <p className="text-amber-100 text-sm max-w-xl">
              ลองตอบแบบทดสอบความรู้เกี่ยวกับวัฒนธรรมไทย 5 ข้อ พร้อมตรวจคำตอบและรับเกียรติบัตรจำลองออนไลน์
            </p>
          </div>
          <button
            onClick={() => onNavigate('quiz')}
            className="px-6 py-3.5 bg-white text-amber-900 hover:bg-amber-50 font-semibold rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0 text-sm sm:text-base flex items-center gap-2"
          >
            <Award className="w-5 h-5 text-amber-600" />
            <span>เริ่มทำแบบทดสอบเลย</span>
          </button>
        </div>
      </section>

    </div>
  );
};
