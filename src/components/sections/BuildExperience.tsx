"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "실시간 경주마 경매 시스템",
    client: "한국경주마생산자협회",
    desc: "1초의 오차도 허용하지 않는 정밀한 실시간 낙찰 시스템입니다. 수억 원이 오가는 경매 현장을 가장 안정적인 기술로 지원합니다.",
    features: ["실시간 스트리밍 엔진", "대규모 동시 접속 제어", "무결점 보안 아키텍처"],
    images: ["/samples/ktba1.png", "/samples/ktba2.png"],
    accent: "bg-amber-500"
  },
  {
    title: "현장 밀착형 지능형 관리 시스템",
    client: "제주도내 공공기관 및 관공서",
    desc: "제주 지역 특성에 맞춘 시설물 관리 및 활동 보고 앱입니다. 위치 기반 정보와 모바일 기능을 결합하여 현장 업무의 효율을 극대화합니다.",
    features: ["위치 기반 실시간 보고", "지능형 시설물 이력 관리", "오프라인 모드 데이터 동기화"],
    images: ["/samples/edu1.png", "/samples/edu2.png"],
    accent: "bg-indigo-600"
  }
];

const ProjectCard = ({ item, idx }: { item: typeof projects[0], idx: number }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % item.images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/40"
    >
      {/* 💡 상단 영역: 이미지 높이 축소 및 object-contain 적용 */}
      <div className="relative h-[280px] md:h-[320px] bg-slate-50 p-6 md:p-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIdx}
            src={item.images[imgIdx]}
            alt={item.title}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-full max-h-full object-contain shadow-2xl rounded-xl border border-slate-200/50"
          />
        </AnimatePresence>

        <div className="absolute top-6 left-6 z-20">
          <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black text-white uppercase tracking-widest ${item.accent} shadow-lg shadow-current/20`}>
            Build Result
          </span>
        </div>
      </div>

      {/* 💡 하단 영역: 상세 텍스트 및 특징 리스트 */}
      <div className="p-8 md:p-12 space-y-8 flex-1 flex flex-col">
        <div className="space-y-4">
          <div>
            <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-2">
              {item.client}
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap overflow-hidden">
              {item.title}
            </h3>
          </div>
          <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
            {item.desc}
          </p>
        </div>

        {/* 💡 세부 특징 (Features) */}
        <div className="grid grid-cols-1 gap-3 pt-2">
          {item.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-indigo-600">
                <Check size={14} strokeWidth={4} />
              </div>
              <span className="text-sm font-bold text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* <div className="pt-4 mt-auto">
          <button className="flex items-center gap-2 text-sm font-black text-slate-900 hover:text-indigo-600 transition-colors group">
            자세히 보기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default function BuildExperience() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-indigo-600" />
            <p className="text-indigo-600 font-black tracking-[0.3em] uppercase text-sm">
              Real-world Solutions
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
             기술로 증명하는 <br /> <span className="text-indigo-600">비즈니스 혁신</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((item, idx) => (
            <ProjectCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}