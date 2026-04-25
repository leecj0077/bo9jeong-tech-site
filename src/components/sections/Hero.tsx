"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Layout, Cpu, Sparkles, ShieldCheck, MousePointer2 } from "lucide-react";
import ThreadAnimation from "@/components/animations/ThreadAnimation";

// =========================================================
// 💡 슬라이드 데이터 구성 (카피 + 비주얼 세트)
// =========================================================
// =========================================================
// 💡 슬라이드 데이터 보강 (밀도 및 디테일 최적화)
// =========================================================
const HERO_SLIDES = [
    {
      id: "engineering",
      badge: { icon: <Terminal size={14} />, text: "Mission-Critical Engineering" },
      title: (
        <>
          지연 없는 <br className="hidden lg:block" />엔지니어링<br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            하이엔드 웹·앱 구축
          </span>
        </>
      ),
      description: "대규모 트래픽 제어부터 AI 비전 시스템 연동까지. 가장 까다로운 비즈니스 로직을 완벽하게 담아내는 엔터프라이즈급 플랫폼을 설계합니다.",
      visual: (
        <div className="relative rounded-2xl bg-white/80 border border-white/60 shadow-2xl backdrop-blur-xl overflow-hidden h-full font-mono text-[11px] sm:text-[13px]">
          {/* 헤더 바 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 bg-white/60">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Cpu size={12} /> <span className="font-medium">ai-vision-core.ts</span>
            </div>
            <div className="w-10" /> 
          </div>
          
          {/* 코드 영역 (밀도 높임) */}
          <div className="p-6 space-y-1.5 text-slate-600 leading-relaxed">
            <div><span className="text-purple-600">import</span> &#123; <span className="text-blue-600">VisionEngine</span>, <span className="text-blue-600">StreamBuffer</span> &#125; <span className="text-purple-600">from</span> <span className="text-emerald-600">'@bo9jeong/core'</span>;</div>
            <div><span className="text-purple-600">import</span> &#123; <span className="text-blue-600">detectHazards</span> &#125; <span className="text-purple-600">from</span> <span className="text-emerald-600">'./utils/safety'</span>;</div>
            <div className="h-2" />
            <div><span className="text-blue-600">const</span> <span className="text-slate-900 font-semibold">config</span> = &#123; threshold: <span className="text-orange-500">0.95</span>, mode: <span className="text-emerald-600">'realtime'</span> &#125;;</div>
            <div><span className="text-blue-600">const</span> <span className="text-slate-900 font-semibold">engine</span> = <span className="text-blue-600">new</span> <span className="text-amber-600 font-semibold">VisionEngine</span>(<span className="text-slate-900">config</span>);</div>
            <div className="h-2" />
            <div className="text-slate-400 italic font-light">// Syncing with Samsung Heavy Industries edge node...</div>
            <div><span className="text-slate-900 font-semibold">engine</span>.<span className="text-blue-600">onStream</span>((<span className="text-orange-500">data</span>) =&gt; &#123;</div>
            <div className="ml-4">  <span className="text-purple-600">const</span> results = <span className="text-blue-600">detectHazards</span>(data);</div>
            <div className="ml-4">  <span className="text-purple-600">if</span> (results.length &gt; <span className="text-orange-500">0</span>) <span className="text-slate-900 font-semibold">emitAlert</span>(results);</div>
            <div>&#125;);</div>
          </div>
  
          {/* 하단 터미널/로그 영역 (강력하게 채움) */}
          <div className="absolute bottom-0 w-full bg-slate-900/90 text-white p-5 font-mono text-[10px] leading-tight">
            <div className="flex items-center gap-2 text-emerald-400 mb-2 font-bold border-b border-white/10 pb-2">
              <ShieldCheck size={12} /> [CORE_ACTIVE] Node: KR-SAMSUNG-01
            </div>
            <div className="flex justify-between text-slate-400">
               <span>$ processing_fps: 120.4</span>
               <span className="text-indigo-400 font-bold">● LIVE</span>
            </div>
            <div className="text-slate-500 mt-1 truncate">Logs: hazard_detection_success (0.002ms) ...</div>
          </div>
        </div>
      )
    },
    {
      id: "experience",
      badge: { icon: <MousePointer2 size={14} />, text: "Human-Centered Experience" },
      title: (
        <>
          정교한 감각으로 <br className="hidden lg:block" />설계하는<br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            디지털 익스피리언스
          </span>
        </>
      ),
      description: "단순한 기능을 넘어, 브랜드와 사용자가 만나는 모든 순간의 인터랙션을 디자인합니다. 심미성과 사용성을 동시에 잡는 독보적인 UX를 경험하세요.",
      visual: (
        <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden h-full">
          {/* Figma 스타일 상단 바 */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-4">
               <Layout size={14} className="text-purple-600" />
               <span className="text-[11px] font-bold text-slate-500">Bo9jeong_Design_System</span>
            </div>
            <div className="flex gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
               <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          </div>
  
          {/* 메인 디자인 캔버스 영역 */}
          <div className="p-6 bg-slate-50/50 h-full">
            <div className="grid grid-cols-12 gap-4">
               {/* 좌측 사이드바 시뮬레이션 */}
               <div className="col-span-3 space-y-3">
                  <div className="h-3 w-full bg-slate-200 rounded animate-pulse" />
                  <div className="h-3 w-4/5 bg-slate-100 rounded" />
                  <div className="h-3 w-full bg-slate-100 rounded" />
                  <div className="h-3 w-3/4 bg-slate-100 rounded" />
               </div>
  
               {/* 중앙 메인 컴포넌트 프리뷰 (밀도 보강) */}
               <div className="col-span-9 space-y-4">
                  <motion.div 
                     animate={{ y: [0, -5, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="p-5 rounded-2xl bg-white border border-slate-200 shadow-lg"
                  >
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                           <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
                           <div className="space-y-1">
                              <div className="h-2 w-16 bg-slate-200 rounded" />
                              <div className="h-1.5 w-10 bg-slate-100 rounded" />
                           </div>
                        </div>
                        <Sparkles size={14} className="text-amber-400" />
                     </div>
                     <div className="h-20 w-full bg-slate-50 rounded-xl mb-4 flex items-end p-2 gap-1">
                        {/* 차트 시각화 요소 추가 */}
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                           <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                     </div>
                     <button className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-[11px] font-bold hover:bg-black transition-colors">
                        Interactive Dashboard
                     </button>
                  </motion.div>
  
                  {/* 보조 부유 요소들 (여백 채우기) */}
                  <div className="flex gap-3">
                     <div className="flex-1 p-3 rounded-xl bg-purple-50 border border-purple-100 flex flex-col gap-2">
                        <div className="h-2 w-1/2 bg-purple-200 rounded" />
                        <div className="h-1 w-full bg-purple-100 rounded" />
                     </div>
                     <div className="flex-1 p-3 rounded-xl bg-pink-50 border border-pink-100 flex flex-col gap-2">
                        <div className="h-2 w-1/2 bg-pink-200 rounded" />
                        <div className="h-1 w-full bg-pink-100 rounded" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )
    }
  ];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 고정 배경 애니메이션 */}
      <ThreadAnimation />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          >
            {/* [좌측] 타이포그래피 세트 */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md mb-8 text-sm font-semibold text-indigo-600">
                {HERO_SLIDES[index].badge.icon}
                <span>{HERO_SLIDES[index].badge.text}</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                {HERO_SLIDES[index].title}
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {HERO_SLIDES[index].description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2 w-full sm:w-auto justify-center group">
                  솔루션 살펴보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm w-full sm:w-auto justify-center">
                  시스템 구축 문의
                </button>
              </div>
            </div>

            {/* [우측] 비주얼 세트 */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none h-[420px]">
              {HERO_SLIDES[index].visual}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 인디케이터 컨트롤 (하단) */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-8">
           <button onClick={() => setIndex(0)} className="flex flex-col items-center gap-2 group">
              <div className={`h-1 rounded-full transition-all duration-500 ${index === 0 ? 'bg-indigo-600 w-20' : 'bg-slate-200 w-12 group-hover:bg-slate-300'}`} />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${index === 0 ? 'text-indigo-600' : 'text-slate-400'}`}>01. Engineering</span>
           </button>
           <button onClick={() => setIndex(1)} className="flex flex-col items-center gap-2 group">
              <div className={`h-1 rounded-full transition-all duration-500 ${index === 1 ? 'bg-purple-600 w-20' : 'bg-slate-200 w-12 group-hover:bg-slate-300'}`} />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${index === 1 ? 'text-purple-600' : 'text-slate-400'}`}>02. Experience</span>
           </button>
        </div>
      </div>
    </section>
  );
}