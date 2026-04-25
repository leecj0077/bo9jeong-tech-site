"use client";

import { motion } from "framer-motion";

const PROJECT_HISTORY = [
  { name: "LG전자", label: "Global Platform" },
  { name: "삼성중공업", label: "AI Vision System" },
  { name: "SK하이닉스", label: "Infrastructure" },
  { name: "대한항공", label: "Enterprise Web" },
  { name: "롯데시네마", label: "Service Platform" },
  { name: "롯데렌터카", label: "Booking System" },
  { name: "SBS 스포츠", label: "Media Stream" },
  { name: "수협", label: "Media Stream" },
  { name: "채널A", label: "Broadcasting" },
  { name: "연합TV", label: "News Platform" },
  { name: "제주시청", label: "Public Service" },
  { name: "제주관광공사", label: "Tourism Portal" },
];

export default function ClientLogos() {
  const duplicatedProjects = [...PROJECT_HISTORY, ...PROJECT_HISTORY, ...PROJECT_HISTORY];

  return (
    // 💡 1. 배경색을 bg-slate-50으로 변경하여 섹션 간 구분감을 줍니다.
    <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
          Project Experience with Industry Leaders
        </p>
        <h3 className="text-xl md:text-2xl font-medium text-slate-500">
          대한민국 리딩 기업 및 기관의 <span className="text-slate-900 font-bold">핵심 프로젝트</span>를 수행해 왔습니다.
        </h3>
      </div>

      <div className="relative flex w-full">
        {/* 💡 2. 배경색에 맞춰 페이드 마스크의 그라데이션 색상도 from-slate-50으로 수정 */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 lg:gap-28 items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedProjects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group"
            >
              <div className="h-10 flex items-center justify-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                <span className="text-2xl lg:text-4xl font-black tracking-tighter text-slate-950">
                  {item.name}
                </span>
              </div>
              <span className="mt-3 text-[10px] font-bold text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-[0.2em] translate-y-2 group-hover:translate-y-0">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}