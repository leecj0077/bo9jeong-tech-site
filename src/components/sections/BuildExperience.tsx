"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "실시간 경주마 경매 시스템",
    client: "한국경주마생산자협회",
    desc: "1초의 오차도 허용하지 않는 정밀한 실시간 낙찰 시스템입니다. 수억 원이 오가는 경매 현장을 가장 안정적인 기술로 지원합니다.",
    tags: ["실시간 스트리밍", "대규모 접속 제어", "무결점 보안"],
    color: "bg-amber-50"
  },
  {
    title: "아이돌봄 동영상 교육 센터",
    client: "제주도내 교육기관",
    desc: "누구나 어디서든 끊김 없이 학습할 수 있는 고성능 영상 교육 플랫폼입니다. 대용량 교육 자료를 막힘없이 전송하는 기술을 담았습니다.",
    tags: ["동영상 플랫폼", "사용자 맞춤형 UI", "안정적인 데이터 관리"],
    color: "bg-blue-50"
  }
];

export default function BuildExperience() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            보구정디벨롭이 <br className="md:hidden" /> 증명한 기술의 가치
          </h2>
          <p className="text-slate-500 font-bold">전국의 주요 기관들이 보구정과 함께 비즈니스를 혁신했습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-8 md:p-12 rounded-[40px] border border-slate-100 flex flex-col justify-between ${item.color}`}
            >
              <div>
                <p className="text-indigo-600 font-black text-sm mb-4 uppercase tracking-widest">{item.client}</p>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs font-bold text-slate-500 border border-white/40">
                    {tag}
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