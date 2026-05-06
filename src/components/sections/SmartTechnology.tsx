"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const techPoints = [
  {
    title: "압도적인 속도",
    desc: "최신 기술(React, Next.js)을 사용하여 어떤 기기에서도 막힘없이 빠르게 열리는 웹과 앱을 만듭니다.",
    icon: <Zap className="text-amber-500" />
  },
  {
    title: "빈틈없는 보안",
    desc: "중요한 정보가 유출되지 않도록 데이터 암호화와 철저한 보안 프로토콜을 기본으로 적용합니다.",
    icon: <ShieldCheck className="text-emerald-500" />
  },
  {
    title: "대규모 접속 처리",
    desc: "말 경매 시스템처럼 한꺼번에 많은 사람이 몰려도 서버가 멈추지 않는 분산 처리 기술을 보유하고 있습니다.",
    icon: <Cpu className="text-indigo-600" />
  },
  {
    title: "데이터 시각화",
    desc: "복잡한 수치와 정보를 한눈에 보기 쉬운 그래프와 대시보드로 구현하여 의사결정을 돕습니다.",
    icon: <BarChart3 className="text-rose-500" />
  }
];

export default function SmartTechnology() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">눈에 보이지 않는 곳까지 <br className="md:hidden" /> 정교하게 설계합니다</h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto">보구정디벨롭의 기술은 화려한 겉모습보다 안정적인 기본기에 집중합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techPoints.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}