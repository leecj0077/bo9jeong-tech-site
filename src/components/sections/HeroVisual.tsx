"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, Layout, Cpu, Sparkles, Code2 } from "lucide-react";

// 💡 (1) Engineering & AI 코어 컴포넌트
const EngineeringSnippet = () => (
  <div className="relative rounded-2xl bg-white/80 border border-white/60 shadow-2xl backdrop-blur-xl overflow-hidden h-full">
    <div className="flex items-center px-4 py-3 border-b border-slate-200/50 bg-white/60">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </div>
      <p className="ml-4 text-xs text-slate-500 font-mono font-medium flex items-center gap-2">
        <Cpu size={12} /> ai-vision-core.ts
      </p>
    </div>
    
    <div className="p-6 font-mono text-xs sm:text-sm">
      <div className="flex gap-3 text-slate-600 mb-2">
        <span className="text-slate-400 select-none">1</span>
        <span><span className="text-purple-600 font-semibold">import</span> &#123; VisionEngine &#125; <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600">'@bogujeong-develop/ai'</span>;</span>
      </div>
      <div className="flex gap-3 text-slate-600 mb-6">
        <span className="text-slate-400 select-none">2</span>
        <span><span className="text-purple-600 font-semibold">import</span> &#123; RadarSync &#125; <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600">'@bogujeong-develop/hardware'</span>;</span>
      </div>
      <div className="flex gap-3 text-slate-600 mb-2">
        <span className="text-slate-400 select-none">3</span>
        <span><span className="text-blue-600 font-semibold">const</span> monitor = <span className="text-blue-600 font-semibold">new</span> <span className="text-amber-600">VisionEngine</span>(&#123;</span>
      </div>
      <div className="flex gap-3 text-slate-600 mb-2">
        <span className="text-slate-400 select-none">4</span>
        <span className="ml-4">target: <span className="text-emerald-600">'samsung-heavy-industries'</span>,</span>
      </div>
      <div className="flex gap-3 text-slate-600 mb-6">
        <span className="text-slate-400 select-none">5</span>
        <span className="ml-4">detectors: [<span className="text-emerald-600">'fire'</span>, <span className="text-emerald-600">'smoke'</span>],</span>
      </div>

      <div className="mt-8 border-t border-slate-200/50 pt-4 bg-slate-50/50 -mx-6 -mb-6 p-6">
        <div className="flex items-center gap-2 text-slate-700 mb-2">
          <span className="text-slate-400 text-xs font-mono tracking-tighter">14:02:05</span>
          <ShieldAlert size={14} className="text-emerald-600" />
          <span className="text-xs">Radar synced successfully.</span>
        </div>
        <div className="flex items-center gap-2 text-indigo-700 font-medium">
          <span className="text-slate-400 text-xs font-mono tracking-tighter">14:02:06</span>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs">Monitoring 1,204 channels...</span>
        </div>
      </div>
    </div>
  </div>
);

// 💡 (2) UI/UX & Development 역량 컴포넌트
const DesignDevSnippet = () => (
  <div className="relative rounded-2xl bg-white/80 border border-white/60 shadow-2xl backdrop-blur-xl overflow-hidden h-full">
    <div className="flex items-center px-4 py-3 border-b border-slate-200/50 bg-white/60">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </div>
      <p className="ml-4 text-xs text-slate-500 font-mono font-medium flex items-center gap-2">
        <Layout size={12} /> user-experience.tsx
      </p>
    </div>
    
    <div className="p-6">
      {/* 상단: UI 미리보기 (미니 컴포넌트 시각화) */}
      <div className="mb-6 p-4 rounded-xl bg-slate-900 shadow-inner flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="h-2 w-12 bg-white/20 rounded-full" />
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-indigo-500" />
            <div className="h-3 w-3 rounded-full bg-purple-500" />
          </div>
        </div>
        <div className="h-8 w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles size={14} className="text-white animate-spin-slow" />
        </div>
        <div className="grid grid-cols-3 gap-2">
            <div className="h-1.5 bg-white/10 rounded-full" />
            <div className="h-1.5 bg-white/10 rounded-full" />
            <div className="h-1.5 bg-white/10 rounded-full" />
        </div>
      </div>

      {/* 하단: 프론트엔드 코드 */}
      <div className="font-mono text-xs sm:text-sm">
        <div className="flex gap-3 text-slate-600 mb-2">
          <span className="text-slate-400 select-none">1</span>
          <span><span className="text-purple-600">const</span> <span className="text-blue-600">Interaction</span> = () =&gt; (</span>
        </div>
        <div className="flex gap-3 text-slate-600 mb-2">
          <span className="text-slate-400 select-none">2</span>
          <span className="ml-4 text-slate-400 italic">// 60FPS seamless motion</span>
        </div>
        <div className="flex gap-3 text-slate-600 mb-2">
          <span className="text-slate-400 select-none">3</span>
          <span className="ml-4">&lt;<span className="text-pink-600">motion.div</span> animate=&#123;&#123;</span>
        </div>
        <div className="flex gap-3 text-slate-600 mb-2">
          <span className="text-slate-400 select-none">4</span>
          <span className="ml-8">scale: [1, 1.05, 1],</span>
        </div>
        <div className="flex gap-3 text-slate-600 mb-2">
          <span className="text-slate-400 select-none">5</span>
          <span className="ml-8 text-indigo-500">spring: &#123; stiffness: 300 &#125;</span>
        </div>
        <div className="flex gap-3 text-slate-600">
          <span className="text-slate-400 select-none">6</span>
          <span className="ml-4">&#125;&#125; /&gt;</span>
        </div>
      </div>
    </div>
  </div>
);

// 💡 (3) 메인 슬라이더 컴포넌트
export default function HeroVisualSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 10초마다 스와이프
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {index === 0 ? <EngineeringSnippet /> : <DesignDevSnippet />}
        </motion.div>
      </AnimatePresence>

      {/* 하단 인디케이터 (현재 어떤 역량을 보여주는지) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="flex flex-col items-center gap-1">
            <div className={`w-12 h-1 rounded-full transition-all duration-500 ${index === 0 ? 'bg-indigo-600 w-16' : 'bg-slate-200'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-tighter ${index === 0 ? 'text-indigo-600' : 'text-slate-400'}`}>Engineering</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <div className={`w-12 h-1 rounded-full transition-all duration-500 ${index === 1 ? 'bg-indigo-600 w-16' : 'bg-slate-200'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-tighter ${index === 1 ? 'text-indigo-600' : 'text-slate-400'}`}>Experience</span>
        </div>
      </div>
    </div>
  );
}