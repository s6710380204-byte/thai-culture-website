import React, { useState } from 'react';
import { 
  TRADITIONS, 
  CULTURAL_IMAGES, 
  Tradition 
} from '../data/thaiCultureData';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Heart, 
  Info,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export const TraditionsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TRADITIONS[0].id);
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('ทั้งหมด');

  const selectedTradition = TRADITIONS.find((t) => t.id === selectedId) || TRADITIONS[0];

  const regionFilters = ['ทั้งหมด', 'ทั่วทุกภูมิภาค', 'ภาคตะวันออกเฉียงเหนือ'];

  const filteredTraditions = TRADITIONS.filter((t) => {
    if (activeRegionFilter === 'ทั้งหมด') return true;
    if (activeRegionFilter === 'ทั่วทุกภูมิภาค') return t.region.includes('ทั่ว');
    if (activeRegionFilter === 'ภาคตะวันออกเฉียงเหนือ') return t.region.includes('ภาคตะวันออกเฉียงเหนือ') || t.region.includes('อีสาน');
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          บทเรียนที่ 1 : ประเพณีและเทศกาลไทย
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          ประเพณีไทย สายใยแห่งศรัทธาและชุมชน
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ประเพณีไทยมิใช่เพียงการรื่นเริงชั่วคราว หากแต่เป็นกุศโลบายอันชาญฉลาดของบรรพชน 
          ที่ผูกโยงความเคารพต่อธรรมชาติ ความกตัญญู และความสามัคคีกลมเกลียวไว้ในทุกจังหวะชีวิต
        </p>
      </div>

      {/* 2. Featured Image Hero (Songkran / Thai Festivals) */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 bg-stone-900 text-white group">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
          
          <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
            <img 
              src={CULTURAL_IMAGES.traditionSongkran} 
              alt="ประเพณีสงกรานต์ในประเทศไทย มรดกโลกยูเนสโก"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-stone-900/95 lg:bg-stone-900">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                <Award className="w-4 h-4" />
                <span>มรดกภูมิปัญญาทางวัฒนธรรมยูเนสโก (UNESCO 2023)</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                สงกรานต์ไทย สู่มรดกโลก
              </h2>
              
              <p className="text-stone-300 text-sm leading-relaxed">
                เทศกาลสงกรานต์ได้รับการขึ้นทะเบียนเป็นมรดกทางวัฒนธรรมที่จับต้องไม่ได้ของมนุษยชาติ 
                ตอกย้ำคุณค่าความงดงามของการแสดงความกตัญญูผ่านการสรงน้ำพระ รดน้ำดำหัวผู้สูงอายุ 
                และการใช้น้ำสะอาดเป็นสัญลักษณ์แห่งการเริ่มต้นศักราชใหม่อย่างบริสุทธิ์ใจ
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-stone-400">
                ช่วงเวลา: 13-15 เมษายน ของทุกปี
              </span>
              <button
                onClick={() => setSelectedId('songkran')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
              >
                <span>อ่านรายละเอียด</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Interactive Tradition Browser */}
      <div className="space-y-6">
        
        {/* Section Subhead & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
              เลือกศึกษาประเพณีไทยสำคัญ
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
              คลิกเพื่อเลือกดูประวัติ กิจกรรม และแง่คิดเชิงอนุรักษ์
            </p>
          </div>

          {/* Region filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl self-start sm:self-auto">
            {regionFilters.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegionFilter(region)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeRegionFilter === region
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Tradition Horizontal Card Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {filteredTraditions.map((tradition) => {
            const isSelected = tradition.id === selectedId;
            return (
              <button
                key={tradition.id}
                onClick={() => setSelectedId(tradition.id)}
                className={`text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-amber-200' : 'text-amber-800'
                  }`}>
                    {tradition.tag}
                  </span>
                  <h3 className={`font-heading text-sm sm:text-base font-bold leading-tight ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {tradition.name}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-amber-100' : 'text-stone-500'}>
                    {tradition.region.split(' ')[0]}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tradition Detail Card */}
        {selectedTradition && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md space-y-8 animate-in fade-in duration-300">
            
            {/* Top info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900">
                    {selectedTradition.tag}
                  </span>
                  <span className="text-xs text-stone-500">
                    {selectedTradition.nameEn}
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedTradition.name}
                </h2>
                <p className="text-stone-600 text-base leading-relaxed max-w-3xl">
                  {selectedTradition.summary}
                </p>
              </div>

              {/* Badges for time & location */}
              <div className="bg-stone-50 rounded-2xl p-4 shrink-0 space-y-2 border border-stone-100 min-w-[240px]">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{selectedTradition.period}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{selectedTradition.region}</span>
                </div>
              </div>
            </div>

            {/* Grid 2 Columns: History & Meaning */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-3 bg-amber-50/40 p-6 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-2 text-amber-800 font-heading font-bold text-base">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  <h3>ประวัติและความเป็นมา</h3>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {selectedTradition.history}
                </p>
              </div>

              <div className="space-y-3 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-heading font-bold text-base">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <h3>คุณค่าและความสำคัญทางวัฒนธรรม</h3>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {selectedTradition.significance}
                </p>
              </div>

            </div>

            {/* Activities list */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>กิจกรรมและพิธีกรรมตามประเพณี</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedTradition.activities.map((act, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50/80 border border-stone-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 leading-snug">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight & Modern Youth Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-amber-100/50 rounded-2xl p-5 border border-amber-200">
                <span className="text-xs font-bold text-amber-900 uppercase block mb-1">
                  แก่นแท้ที่ควรจำ
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                  {selectedTradition.keyHighlight}
                </p>
              </div>

              <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                <span className="text-xs font-bold text-sky-900 uppercase block mb-1">
                  บทบาทของคนรุ่นใหม่ (Youth Action)
                </span>
                <p className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                  {selectedTradition.modernContext}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 4. Youth Etiquette Guide for Festivals */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200">
        <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">
          ข้อปฏิบัติสำหรับนักเรียนและนักศึกษาในการร่วมประเพณีไทย
        </h3>
        <p className="text-stone-600 text-xs sm:text-sm mb-6">
          ช่วยกันเป็นแบบอย่างในการอนุรักษ์ประเพณีไทยให้งดงามและยั่งยืน
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-stone-200/60">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center mb-2">1</span>
            <h4 className="font-bold text-sm text-stone-900 mb-1">แต่งกายสุภาพ</h4>
            <p className="text-xs text-stone-600">สวมเสื้อผ้าที่เหมาะสม ถูกกาลเทศะ โดยเฉพาะเมื่อเข้าสู่อารามและวัด</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/60">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center mb-2">2</span>
            <h4 className="font-bold text-sm text-stone-900 mb-1">เคารพผู้อื่น</h4>
            <p className="text-xs text-stone-600">ไม่สาดน้ำใส่ผู้ที่กำลังขับขี่ยานพาหนะ ไม่ประแป้งโดยไม่ได้รับความยินยอม</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/60">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center mb-2">3</span>
            <h4 className="font-bold text-sm text-stone-900 mb-1">รักษาสิ่งแวดล้อม</h4>
            <p className="text-xs text-stone-600">ใช้กระทงจากวัสดุธรรมชาติ ไม่ทิ้งขยะเกลื่อนกลาดในพื้นที่จัดงานบุญ</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/60">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center mb-2">4</span>
            <h4 className="font-bold text-sm text-stone-900 mb-1">เผยแพร่อย่างสร้างสรรค์</h4>
            <p className="text-xs text-stone-600">สื่อสารเรื่องราวประเพณีที่ถูกต้องผ่านโซเชียลมีเดียให้เพื่อนชาวต่างชาติเข้าใจ</p>
          </div>
        </div>
      </div>

    </div>
  );
};
