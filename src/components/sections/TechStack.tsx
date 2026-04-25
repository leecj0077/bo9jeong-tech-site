"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
    { name: "C++", src: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Spring Boot", src: "https://cdn.simpleicons.org/springboot/6DB33F" },
    { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "TensorFlow", src: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    { name: "Google Cloud", src: "https://cdn.simpleicons.org/googlecloud/4285F4" }, 
    { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
  ];

export default function TechStack() {
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">
          Powered by High-End Technology
        </p>
      </div>

      <div className="relative flex w-full">
        {/* 양끝 페이드 아웃 마스크 */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              // 💡 핵심 수정: shrink-0 (찌그러짐 방지), w-max (내용물만큼 너비 확보), px-7 (여유로운 좌우 여백) 추가
              className="flex items-center shrink-0 w-max gap-3 px-7 py-3.5 bg-white border border-slate-200 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <img 
                src={tech.src} 
                alt={`${tech.name} logo`} 
                className="w-5 h-5 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
                loading="lazy"
              />
              {/* 💡 핵심 수정: 글자가 강제로 줄바꿈되지 않도록 whitespace-nowrap 추가 */}
              <span className="font-semibold text-slate-600 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}