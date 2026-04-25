"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, Zap, Activity, Cpu, Server, Target, 
  Layout, Smartphone, Bell, Search, Settings, User, ScanLine
} from "lucide-react";

// =========================================================
// 💡 [섹션 01 비주얼] 지능형 관제 시스템 전용 WEB 인터페이스 (Desktop)
// =========================================================
const ControlWebUI = () => (
  <div className="relative w-full h-full bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
    {/* 상단 GNB */}
    <div className="h-10 border-b border-white/5 bg-white/5 flex items-center justify-between px-4">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-amber-500/50" />
        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
      </div>
      <div className="flex gap-3 text-slate-500">
        <Search size={12} /> <Bell size={12} /> <Settings size={12} />
      </div>
    </div>

    <div className="flex-1 flex overflow-hidden">
      {/* 좌측 사이드바 */}
      <div className="w-12 border-r border-white/5 flex flex-col items-center py-4 gap-4">
        <div className="w-7 h-7 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400"><Layout size={14} /></div>
        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-600"><Activity size={14} /></div>
        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-600"><Server size={14} /></div>
      </div>

      {/* 메인 관제 영역 */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-3 relative">
        {/* 카메라 피드 1 */}
        <div className="bg-slate-800 rounded-xl relative overflow-hidden border border-white/5">
           <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/50 text-[8px] text-white font-mono">CAM_01_SOUTH</div>
           <div className="absolute inset-4 border border-indigo-500/30 rounded flex items-center justify-center">
              <div className="w-12 h-8 border border-indigo-500/60 rounded relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-indigo-400" />
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-full h-full bg-indigo-500/10" />
              </div>
           </div>
        </div>
        {/* 카메라 피드 2 */}
        <div className="bg-slate-800 rounded-xl relative border border-white/5 p-3 flex flex-col justify-end">
           <div className="h-1 w-full bg-slate-700 rounded-full mb-1" />
           <div className="h-1 w-2/3 bg-slate-700 rounded-full" />
        </div>
        {/* 데이터 오버레이 */}
        <div className="col-span-2 bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-3 flex justify-between items-center">
           <div className="space-y-1">
             <p className="text-[8px] font-bold text-indigo-400 uppercase">System Status</p>
             <p className="text-xs font-bold text-white tracking-wider">AI_ENGINE_OPTIMIZED</p>
           </div>
           <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-indigo-500/40 rounded-full" />)}
           </div>
        </div>
      </div>
    </div>
  </div>
);

// =========================================================
// 💡 [섹션 02 비주얼] OCR & 물체 인식 전용 MOBILE 인터페이스 (App)
// =========================================================
const OCRMobileUI = () => (
  <div className="relative w-64 h-full mx-auto bg-white rounded-[40px] border-[6px] border-slate-900 shadow-2xl overflow-hidden flex flex-col">
    {/* 상단 노치/상태바 */}
    <div className="h-6 flex items-end justify-center pb-1 gap-1">
      <div className="w-10 h-3 bg-slate-100 rounded-full" />
    </div>

    {/* 앱 화면 컨텐츠 */}
    <div className="flex-1 p-5 flex flex-col gap-5">
      {/* 이미지 스캔 영역 */}
      <div className="aspect-[4/5] bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden flex items-center justify-center">
         {/* 스캔 라인 애니메이션 */}
         <motion.div 
           animate={{ top: ['0%', '100%', '0%'] }} 
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)] z-10"
         />
         
         {/* 대상 물체 형상화 (갈치 등 어류 상징) */}
         <div className="w-3/4 h-8 bg-slate-200 rounded-full rotate-[15deg] opacity-40 relative">
            <div className="absolute -top-4 -right-4 bg-indigo-600 text-[8px] text-white px-2 py-1 rounded-lg shadow-lg font-bold">
               Hairtail Detected
            </div>
         </div>
      </div>

      {/* 분석 결과 데이터 시각화 */}
      <div className="space-y-3">
         <div className="h-10 w-full bg-slate-50 border border-slate-100 rounded-xl p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500"><ScanLine size={12} /></div>
               <span className="text-[10px] font-bold text-slate-500 uppercase">OCR_Result</span>
            </div>
            <span className="text-xs font-black text-slate-900">₩ 25,000</span>
         </div>
         <button className="w-full h-10 bg-indigo-600 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-indigo-200">
            Confirm & Save
         </button>
      </div>
    </div>
    
    {/* 하단 홈 인디케이터 */}
    <div className="h-4 flex items-center justify-center">
       <div className="w-16 h-1 bg-slate-200 rounded-full" />
    </div>
  </div>
);

// =========================================================
// 💡 메인 아카이브 컴포넌트
// =========================================================
const ARCHIVES = [
  {
    id: "samsung",
    client: "SAMSUNG HEAVY INDUSTRIES (R&D)",
    title: "지능형 자율 관제 시스템 고도화",
    challenge: "대규모 조선소의 비선형적인 작업 동선과 수천 개의 변수를 실시간으로 통합 제어하는 차세대 관제 센터의 필요성.",
    solution: "전문가용 고해상도 웹 대시보드 인터페이스 설계. 수천 개의 스트리밍 데이터를 레이연 단위로 시각화하여 관제 효율을 극대화하는 UX 적용.",
    targetObjective: "무결점 안전 관리를 넘어 시스템 부하를 최소화하는 최적의 통합 인터페이스를 설계하는 데 기술 역량을 집중하고 있습니다.",
    accent: "bg-indigo-600",
    visual: <ControlWebUI />
  },
  {
    id: "jeju-market",
    client: "JEJU SMART MARKET PROJECT",
    title: "비정형 데이터 기반 OCR 및 물체 인식 연구",
    challenge: "전통 시장의 조명, 비정형 물체, 손글씨 가격표 등 현장의 가변성을 극복하는 모바일 기반의 정밀 스캐닝 기술 확보.",
    solution: "비전 AI와 OCR 엔진을 모바일 환경에 최적화하여 탑재. 사용자가 찍는 즉시 상품의 정보와 가격을 데이터로 치환하는 고밀도 분석 로직 개발 중.",
    targetObjective: "가장 복잡한 현장에서도 누구나 손쉽게 데이터를 획득할 수 있도록 스캐닝의 정확도와 사용자 인터페이스의 직관성을 연구하고 있습니다.",
    accent: "bg-purple-600",
    visual: <OCRMobileUI />
  }
];

export default function CaseStudyArchives() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        {ARCHIVES.map((project, idx) => (
          <div key={idx} className="group">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* [좌측/우측] 앱 및 웹 UI 형상화 비주얼 */}
              <div className="flex-1 w-full aspect-square max-w-[500px] relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full h-full p-8 bg-slate-50/50 rounded-[48px] border border-slate-100/50 flex items-center justify-center"
                >
                  {project.visual}
                </motion.div>
                
                {/* 배경 플로팅 요소 (전문가 느낌 가미) */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
              </div>

              {/* [우측/좌측] 텍스트 설명 및 전략적 목표 */}
              <div className="flex-[1.2] space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">Active Researching</span>
                  </div>
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{project.client}</span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {project.title}
                  </h2>
                </div>

                <div className="space-y-8 border-l border-slate-100 pl-8">
                   <div>
                      <h4 className="text-xs font-black text-slate-900 mb-2 uppercase tracking-widest">The Challenge</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{project.challenge}</p>
                   </div>
                   <div>
                      <h4 className="text-xs font-black text-slate-900 mb-2 uppercase tracking-widest">Engineering Approach</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{project.solution}</p>
                   </div>
                </div>

                <div className={`p-8 rounded-[40px] ${project.accent} text-white relative overflow-hidden shadow-2xl`}>
                   <Target size={100} className="absolute -right-6 -bottom-6 opacity-10" />
                   <h4 className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Strategic Objective</h4>
                   <p className="text-lg font-bold leading-relaxed relative z-10">
                      "{project.targetObjective}"
                   </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}