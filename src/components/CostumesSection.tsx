import React, { useState } from 'react';
import { 
  THAI_COSTUMES, 
  CULTURAL_IMAGES, 
  ThaiCostume 
} from '../data/thaiCultureData';
import { 
  Shirt, 
  Sparkles, 
  Award, 
  Layers, 
  Calendar, 
  Heart, 
  ChevronRight,
  Info
} from 'lucide-react';

export const CostumesSection: React.FC = () => {
  const [selectedCostume, setSelectedCostume] = useState<ThaiCostume>(THAI_COSTUMES[0]);

  // Key fabric types for educational sidebar
  const thaiFabrics = [
    {
      name: 'ผ้าไหมมัดหมี่',
      origin: 'ภาคตะวันออกเฉียงเหนือ (ขอนแก่น สุรินทร์)',
      detail: 'เทคนิคการมัดลายเส้นไหมแล้วนำไปย้อมสีก่อนทอ ลวดลายประณีตมีมิติ เช่น ลายขอ ลายพญานาค'
    },
    {
      name: 'ผ้ายกลำพูน',
      origin: 'ภาคเหนือ (ลำพูน)',
      detail: 'ผ้ายกดิ้นทองดิ้นเงินชั้นสูง มีลวดลายวิจิตรนูนเด่น เช่น ลายพิกุล นิยมใช้ในพระราชสำนัก'
    },
    {
      name: 'ผ้าซิ่นตีนจก',
      origin: 'ภาคเหนือ (สุโขทัย เชียงใหม่ แพร่)',
      detail: 'การจกลวดลายด้วยขนเม่นหรือเข็มบริเวณเชิงผ้าซิ่น ทำให้เกิดลายสีสันสดใสสะดุดตา'
    },
    {
      name: 'ผ้าไหมเปลือกไม้ & ผ้าฝ้ายเข็นมือ',
      origin: 'ชุมชนพื้นบ้านทั่วประเทศ',
      detail: 'ทอจากเส้นใยธรรมชาติ สวมใส่สบาย ระบายอากาศดีเยี่ยม เหมาะกับสภาพอากาศเมืองร้อน'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold tracking-wide">
          <Shirt className="w-3.5 h-3.5 text-rose-600" />
          บทเรียนที่ 3 : การแต่งกายไทยและพัสตราภรณ์
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          การแต่งกายไทย ความสง่างามแห่งภูษาศิลป์
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          พัสตราภรณ์ไทยสะท้อนเอกลักษณ์ความอ่อนช้อยและประณีตศิลป์ชั้นสูง 
          โดยเฉพาะ "ชุดไทยพระราชนิยม" อันเป็นผลงานการรังสรรค์ของสมเด็จพระพันปีหลวง 
          ที่ทรงนำศิลปะผ้าทอพื้นบ้านสู่เวทีความงามระดับโลก
        </p>
      </div>

      {/* 2. Featured Image Hero (Thai Royal Dress) */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 bg-stone-900 text-white group">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
          
          <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
            <img 
              src={CULTURAL_IMAGES.costumeChakkri} 
              alt="ชุดไทยจักรี ผ้าไหมยกทองสไบกรองทอง ประดับศิราภรณ์"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-stone-900/95 lg:bg-stone-900">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>ชุดไทยจักรี · พระราชนิยมสากล</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                กำเนิด "ชุดไทยพระราชนิยม"
              </h2>
              
              <p className="text-stone-300 text-sm leading-relaxed">
                ในปี พ.ศ. 2503 เมื่อครั้งพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช 
                และสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง เสด็จประพาสยุโรปและสหรัฐอเมริกา 
                พระองค์ทรงโปรดให้รวบรวมศึกษาเครื่องแต่งกายสตรีไทยโบราณ และประยุกต์เป็นชุดไทย 8 แบบหลัก เพื่อเป็นชุดประจำชาติไทย
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-stone-400">
              <span>มาตรฐานชุดสตรีไทย 8 แบบ</span>
              <span className="text-amber-400 font-medium">มรดกผ้าไหมไทย</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Interactive Thai Royal Costume Explorer */}
      <div className="space-y-6">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
            ชุดไทยพระราชนิยมหลัก
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
            คลิกเพื่อศึกษาแบบชุด ลักษณะเฉพาะ โอกาสในการสวมใส่ และเนื้อผ้าที่ใช้
          </p>
        </div>

        {/* Costume Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {THAI_COSTUMES.map((costume) => {
            const isSelected = costume.id === selectedCostume.id;
            return (
              <button
                key={costume.id}
                onClick={() => setSelectedCostume(costume)}
                className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-semibold block mb-1 ${
                    isSelected ? 'text-amber-200' : 'text-amber-800'
                  }`}>
                    {costume.type.split(' ')[0]}
                  </span>
                  <h3 className={`font-heading text-sm font-bold leading-tight ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {costume.name}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-amber-100' : 'text-stone-500'}>
                    ดูรายละเอียด
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Costume Detail Card */}
        {selectedCostume && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md space-y-8 animate-in fade-in duration-300">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-100">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-100 text-rose-900">
                    {selectedCostume.type}
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedCostume.name}
                </h2>
                <p className="text-stone-600 text-base leading-relaxed max-w-3xl">
                  {selectedCostume.description}
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 min-w-[240px]">
                <span className="text-xs font-bold text-amber-900 block mb-1">
                  คำแนะนำในการเลือกใช้
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {selectedCostume.recommendedFor}
                </p>
              </div>
            </div>

            {/* 3 Detail Boxes: Characteristics, Occasion, Fabrics & Accessories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <h3 className="font-heading font-bold text-sm text-stone-900 flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-amber-600" />
                  <span>ลักษณะรูปทรงของชุด</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedCostume.characteristic}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <h3 className="font-heading font-bold text-sm text-stone-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-600" />
                  <span>โอกาสและงานพิธีที่สวมใส่</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedCostume.occasion}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <h3 className="font-heading font-bold text-sm text-stone-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>เนื้อผ้าและเครื่องประดับ</span>
                </h3>
                <div className="space-y-1.5 text-xs text-stone-600">
                  <p><strong className="text-stone-800">ผ้าที่ใช้:</strong> {selectedCostume.fabrics}</p>
                  <p><strong className="text-stone-800">เครื่องประดับ:</strong> {selectedCostume.accessories}</p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* 4. Thai Weaving Wisdom & Silk Heritage */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone-900">
            ภูมิปัญญาผ้าทอไทย 4 ประเภทเอกลักษณ์
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            ความวิจิตรของลวดลายและงานฝีมือที่ถ่ายทอดจากรุ่นสู่รุ่นในแต่ละภูมิภาค
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {thaiFabrics.map((fabric, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200/70 space-y-2">
              <span className="text-[11px] font-semibold text-rose-800 block">
                {fabric.origin}
              </span>
              <h4 className="font-heading font-bold text-base text-stone-900">
                {fabric.name}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {fabric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
