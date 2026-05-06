"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECT_HISTORY = [
  { name: "LG전자", slug: "lg", label: "Global Platform" },
  { name: "삼성중공업", slug: "samsung", label: "AI Vision System" },
  { name: "SK하이닉스", slug: "skhynix", label: "Infrastructure" },
  { name: "대한항공", slug: "koreanair", label: "Enterprise Web" },
  { name: "롯데시네마", slug: "lotte", label: "Service Platform" },
  { name: "롯데렌터카", slug: "lottebizcar", label: "Booking System" },
  { name: "SBS 스포츠", slug: "sbs", label: "Media Stream" },
  { name: "수협", slug: "suhyup", label: "Media Stream" },
  { name: "채널A", slug: "channela", label: "Broadcasting" },
  { name: "연합TV", slug: "ytv", label: "News Platform" },
  { name: "제주관광공사", slug: "jeju", label: "Tourism Portal" },
];

export default function ClientLogos() {
  // 무한 롤링을 위해 배열 복사
  const duplicatedProjects = [...PROJECT_HISTORY, ...PROJECT_HISTORY, ...PROJECT_HISTORY];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
          Project Experience with Industry Leaders
        </p>
        <h3 className="text-xl md:text-2xl font-medium text-slate-500">
          대한민국 리딩 기업 및 기관의 <span className="text-slate-900 font-bold">핵심 프로젝트</span>를 수행해 왔습니다.
        </h3>
      </div>

      <div className="relative flex w-full">
        {/* 페이드 마스크 */}
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
              className="flex flex-col items-center justify-center group shrink-0"
            >
              <div className="relative h-12 w-32 lg:h-16 lg:w-40 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                <Image
                  src={`/logos/${item.slug}.png`} // 💡 파일 확장자는 실제에 맞게 수정하세요 (.svg 권장)
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-3 text-[10px] font-black text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-[0.2em] translate-y-2 group-hover:translate-y-0">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}