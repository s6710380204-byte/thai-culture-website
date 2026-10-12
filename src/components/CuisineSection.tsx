import React, { useState } from 'react';
import { 
  THAI_DISHES, 
  CULTURAL_IMAGES, 
  ThaiDish 
} from '../data/thaiCultureData';
import { 
  Utensils, 
  Flame, 
  Sparkles, 
  Leaf, 
  HeartPulse, 
  Search, 
  Info, 
  Award,
  ChevronRight
} from 'lucide-react';

export const CuisineSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ทั้งหมด');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<ThaiDish>(THAI_DISHES[0]);

  const categories = ['ทั้งหมด', 'ต้ม/แกง', 'ผัด/ทอด', 'ยำ/ตำ', 'ของหวาน'];

  const filteredDishes = THAI_DISHES.filter((dish) => {
    const matchesCategory = selectedCategory === 'ทั้งหมด' || dish.category === selectedCategory;
    const matchesSearch = 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.keyIngredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Common Thai Herbs database for youth learning
  const commonHerbs = [
    { name: 'ข่า (Galangal)', property: 'รสเผ็ดปร่า ช่วยขับลม แก้อาการแน่น จุกเสียด ท้องอืด' },
    { name: 'ตะไคร้ (Lemongrass)', property: 'กลิ่นหอมสดชื่น ช่วยเจริญอาหาร ขับปัสสาวะ ลดความดัน' },
    { name: 'ใบมะกรูด (Kaffir Lime Leaves)', property: 'น้ำมันหอมระเหยช่วยบำรุงหัวใจ ดับกลิ่นคาวเนื้อสัตว์' },
    { name: 'ใบกะเพรา (Holy Basil)', property: 'รสเผ็ดร้อน ขับลม แก้คลื่นไส้ ช่วยย่อยอาหารได้ดีเยี่ยม' },
    { name: 'ใบโหระพา (Sweet Basil)', property: 'กลิ่นหอมหวาน ช่วยผ่อนคลายความเครียด และต้านการอักเสบ' },
    { name: 'มะขามเปียก (Tamarind)', property: 'กรดผลไม้ธรรมชาติ อุดมด้วยวิตามินซี ช่วยระบบขับถ่าย' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wide">
          <Utensils className="w-3.5 h-3.5 text-amber-600" />
          บทเรียนที่ 2 : อาหารไทยและศาสตร์สมุนไพร
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          อาหารไทย มนต์เสน่ห์แห่งรสชาติและโอสถสาร
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          อาหารไทยมิได้มีดีเพียงรสชาติที่กลมกล่อมครบรส (เปรี้ยว หวาน เค็ม เผ็ด มัน) 
          แต่คือภูมิปัญญาการนำพืชผักสมุนไพรสดในท้องถิ่นมาผสานเป็น "อาหารเป็นยา" ที่ได้รับการยกย่องระดับสากล
        </p>
      </div>

      {/* 2. Featured Image Hero (Thai Food Spread) */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 bg-stone-900 text-white group">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
          
          <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
            <img 
              src={CULTURAL_IMAGES.cuisineSpread} 
              alt="สำรับอาหารไทยโบราณ ต้มยำกุ้ง ผัดไทย และสมุนไพรสด"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-stone-900/95 lg:bg-stone-900">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                <Award className="w-4 h-4" />
                <span>มรดกอาหารอันดับ 1 ของโลก & ภูมิปัญญาไทย</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                ศาสตร์แห่งสำรับไทย (Samrub)
              </h2>
              
              <p className="text-stone-300 text-sm leading-relaxed">
                การกินอาหารของคนไทยแต่โบราณให้ความสำคัญกับ "สำรับ" 
                ที่มีทั้งแกงเผ็ด ต้มจืด น้ำพริก ผักเหนาะ และของทอด 
                เพื่อให้รสชาติอาหารตัดกันอย่างกลมกลืนและช่วยปรับสมดุลธาตุในร่างกายตามหลักธรรมชาติบำบัด
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-stone-400">
              <span>รสชาติเด่น: เปรี้ยว · หวาน · มัน · เค็ม · เผ็ด</span>
              <span className="text-amber-400 font-medium">สมุนไพร 100%</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Search and Category Filter */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่ออาหารหรือวัตถุดิบ..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Dish Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredDishes.map((dish) => {
            const isSelected = dish.id === selectedDish.id;
            return (
              <button
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
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
                    {dish.category}
                  </span>
                  <h3 className={`font-heading text-sm font-bold leading-tight ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {dish.name}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[11px]">
                  <div className="flex items-center">
                    {Array.from({ length: dish.spiciness }).map((_, i) => (
                      <Flame key={i} className={`w-3 h-3 ${isSelected ? 'text-amber-200' : 'text-rose-500'}`} />
                    ))}
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Dish Deep Dive Card */}
        {selectedDish && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md space-y-8 animate-in fade-in duration-300">
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900">
                    {selectedDish.category}
                  </span>
                  <span className="text-xs text-stone-500">
                    {selectedDish.nameEn}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-rose-600 font-medium pl-2">
                    <Flame className="w-3.5 h-3.5" />
                    <span>ความเผ็ดระดับ {selectedDish.spiciness}/5</span>
                  </div>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedDish.name}
                </h2>
                
                <p className="text-stone-600 text-base leading-relaxed max-w-3xl">
                  {selectedDish.description}
                </p>
              </div>

              {/* Flavor Profile pill-free badges */}
              <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-100 min-w-[220px]">
                <span className="text-xs font-bold text-amber-900 block mb-2">
                  มิติของรสชาติ (Flavor Profile)
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-stone-700">
                  {selectedDish.flavorProfile.map((flv, idx) => (
                    <span key={idx} className="bg-white px-2 py-1 rounded-md border border-amber-200/70 font-medium">
                      {flv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Origin & Cultural Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-heading font-bold text-base text-stone-900 flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span>ต้นกำเนิดและประวัติความเป็นมา</span>
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {selectedDish.origin}
                </p>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 space-y-2">
                <h3 className="font-heading font-bold text-base text-amber-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>เกร็ดวัฒนธรรมและ Soft Power</span>
                </h3>
                <p className="text-amber-900 text-sm leading-relaxed">
                  {selectedDish.culturalFact}
                </p>
              </div>
            </div>

            {/* Key Ingredients & Medicinal Herb Benefits */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-stone-900 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-rose-600" />
                <span>สรรพคุณสมุนไพร "อาหารเป็นยา"</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {selectedDish.herbsAndBenefits.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                    <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      {item.herb}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients list */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                วัตถุดิบหลักตามสูตรต้นตำรับ
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-stone-700">
                {selectedDish.keyIngredients.map((ing, idx) => (
                  <span key={idx} className="bg-stone-100 px-2.5 py-1 rounded-md text-stone-800 font-medium">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 4. Common Thai Herbs Glossary for Students */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone-900">
            สมุนไพรไทย 6 ชนิด คู่ครัวและภูมิปัญญาบำบัด
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            ความลับเบื้องหลังรสชาติอันเป็นเอกลักษณ์และประโยชน์ต่อสุขภาพร่างกาย
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonHerbs.map((h, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-stone-200/70 space-y-1">
              <h4 className="font-heading font-bold text-sm text-stone-900 text-amber-800">
                {h.name}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {h.property}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
