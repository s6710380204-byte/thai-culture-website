import React, { useState } from 'react';
import { 
  ETIQUETTES, 
  CULTURAL_IMAGES, 
  EtiquetteItem 
} from '../data/thaiCultureData';
import { 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  Smile, 
  Heart, 
  ShieldCheck, 
  Info,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export const EtiquetteSection: React.FC = () => {
  const [selectedEtiquetteId, setSelectedEtiquetteId] = useState<string>(ETIQUETTES[0].id);

  const selectedItem = ETIQUETTES.find((e) => e.id === selectedEtiquetteId) || ETIQUETTES[0];

  const thaiIdentities = [
    {
      title: 'สยามเมืองยิ้ม (The Smile of Siam)',
      desc: 'รอยยิ้มของคนไทยมิใช่เพียงการแสดงความยินดี แต่คือการผูกมิตร การประนีประนอม การให้อภัย และการส่งต่อพลังบวกในชีวิตประจำวัน'
    },
    {
      title: 'ความกตัญญูกตเวทิตา',
      desc: 'สำนึกรู้คุณบิดามารดา ครูบาอาจารย์ ผืนแผ่นดิน และผู้มีพระคุณ พร้อมทั้งแสดงออกด้วยการตอบแทนความดีงาม'
    },
    {
      title: 'ความเอื้อเฟื้อเผื่อแผ่และน้ำใจไทย',
      desc: 'การแบ่งปันอาหาร น้ำใจไมตรีต่อเพื่อนบ้านและคนแปลกหน้า สังเกตได้จาก "ตุ่มน้ำหน้าบ้าน" ในอดีตสำหรับผู้เดินทาง'
    },
    {
      title: 'ความเกรงใจและอ่อนน้อมถ่อมตน',
      desc: 'การระมัดระวังคำพูดและการกระทำเพื่อไม่ให้ผู้อื่นรู้สึกอึดอัด การให้เกียรติผู้อื่นก่อนตนเองเสมอ'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
          บทเรียนที่ 4 : มารยาทไทยและจิตวิญญาณแห่งสยาม
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          มารยาทไทย ความอ่อนน้อมอันสง่างาม
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          มารยาทไทยไม่ใช่ความต่ำต้อยหรือความกลัวเกรง หากแต่คือศิลปะในการปฏิบัติตนต่อผู้อื่นด้วยความเคารพ 
          ความนอบน้อมถ่อมตน และความจริงใจ ซึ่งเป็นเสน่ห์ที่ตราตรึงใจผู้คนทั่วทุกมุมโลก
        </p>
      </div>

      {/* 2. Featured Image Hero (Thai Wai & Respect) */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 bg-stone-900 text-white group">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
          
          <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
            <img 
              src={CULTURAL_IMAGES.waiEtiquette} 
              alt="นักเรียนไทยแสดงการไหว้อย่างงดงามพร้อมรอยยิ้มและพวงมาลัยมะลิ"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-stone-900/95 lg:bg-stone-900">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                <Smile className="w-4 h-4" />
                <span>การไหว้ · สัญลักษณ์แห่งความเคารพสากล</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                "การไหว้" ภาษากายแห่งสันติภาพ
              </h2>
              
              <p className="text-stone-300 text-sm leading-relaxed">
                การพนมมือไหว้ (อัญชลี) เปรียบเสมือนดอกบัวตูมที่กำลังแย้มบานเพื่อบูชาความดีงามในตัวผู้ที่เราเคารพ 
                เป็นภาษากายที่บริสุทธิ์ สงบงาม และไม่ต้องสัมผัสร่างกาย จึงได้รับการชื่นชมในฐานะการทักทายที่สุขอนามัยและเปี่ยมด้วยเกียรติ
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-stone-400">
              <span>การไหว้ 3 ระดับมาตรฐาน</span>
              <span className="text-amber-400 font-medium">กรมส่งเสริมวัฒนธรรม</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Interactive Wai & Etiquette Guide */}
      <div className="space-y-6">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
            คู่มือการปฏิบัติมารยาทไทยที่ถูกต้อง
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
            คลิกเลือกหัวข้อเพื่อดูตำแหน่งมือ องศาการก้ม และข้อควรจำสำหรับนักเรียน
          </p>
        </div>

        {/* Buttons List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ETIQUETTES.map((item) => {
            const isSelected = item.id === selectedEtiquetteId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedEtiquetteId(item.id)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-semibold block mb-1 ${
                    isSelected ? 'text-amber-200' : 'text-amber-800'
                  }`}>
                    {item.targetGroup.split(' ')[0]}
                  </span>
                  <h3 className={`font-heading text-sm font-bold leading-tight ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {item.title.split(':')[0]}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-amber-100' : 'text-stone-500'}>
                    เรียนรู้ท่าทาง
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Item Detail Card */}
        {selectedItem && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md space-y-8 animate-in fade-in duration-300">
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-100">
              <div className="space-y-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900">
                  เป้าหมาย: {selectedItem.targetGroup}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedItem.title}
                </h2>
                <p className="text-stone-600 text-base leading-relaxed max-w-3xl">
                  {selectedItem.description}
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 min-w-[240px]">
                <span className="text-xs font-bold text-amber-900 block mb-1">
                  เคล็ดลับการปฏิบัติ (Pro Tip)
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {selectedItem.tips}
                </p>
              </div>
            </div>

            {/* Anatomical positioning box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-heading font-bold text-base">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <h3>ตำแหน่งปลายนิ้วและฝ่ามือ</h3>
                </div>
                <p className="text-stone-800 text-sm font-medium leading-relaxed bg-white p-3 rounded-xl border border-amber-100">
                  {selectedItem.handPosition}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-heading font-bold text-base">
                  <HeartHandshake className="w-5 h-5 text-emerald-600" />
                  <h3>การก้มศีรษะและแนวกาย</h3>
                </div>
                <p className="text-stone-800 text-sm font-medium leading-relaxed bg-white p-3 rounded-xl border border-stone-200">
                  {selectedItem.headTilt}
                </p>
              </div>

            </div>

            {/* Situations */}
            <div className="space-y-3">
              <h3 className="font-heading text-base font-bold text-stone-900">
                สถานการณ์ที่ควรนำไปใช้ในชีวิตจริง
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedItem.situations.map((sit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 leading-snug">
                      {sit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 4. Four Core Pillars of Thai Spirit */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone-900">
            4 อัตลักษณ์ทางจิตใจที่หล่อหลอมความเป็นคนไทย
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            รากฐานคุณค่าทางวัฒนธรรมที่ทำให้สังคมไทยอบอุ่นและน่าอยู่
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {thaiIdentities.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200/70 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <h4 className="font-heading font-bold text-sm text-stone-900">
                {item.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
