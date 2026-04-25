"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Globe, Database, ShieldCheck, Zap } from "lucide-react";

const STACK_LAYERS = [
  {
    category: "Interface Layer",
    icon: <Globe className="text-indigo-600" />,
    techs: ["Next.js 14+", "TypeScript", "Three.js", "Tailwind CSS"],
    desc: "사용자가 경험하는 첫 번째 접점. 60FPS의 부드러운 애니메이션과 고정밀 3D 인터페이스를 구현합니다."
  },
  {
    category: "Core Engine Layer",
    icon: <Cpu className="text-purple-600" />,
    techs: ["Node.js", "Python", "Go", "MSA Architecture"],
    desc: "비즈니스의 심장부. 초대용량 트래픽을 분산 처리하고 무중단 서비스를 보장하는 견고한 서버 설계를 지향합니다."
  },
  {
    category: "Intelligence & Data",
    icon: <Database className="text-emerald-600" />,
    techs: ["PyTorch", "OpenCV", "PostgreSQL", "Redis"],
    desc: "데이터를 가치로 바꾸는 곳. 실시간 AI 객체 인식과 비정형 데이터 분석을 통해 지능형 솔루션을 완성합니다."
  }
];

export default function TechStackArchitecture() {
  return (
    <section className="py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Engineering Stack</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            우리가 다루는 기술은 <br /> 비즈니스의 <span className="text-indigo-600">견고한 골조</span>가 됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STACK_LAYERS.map((layer, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col h-full shadow-sm hover:shadow-xl transition-all"
            >
              <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm">
                {layer.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{layer.category}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {layer.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {layer.techs.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}