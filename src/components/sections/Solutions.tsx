"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Brain, Box } from "lucide-react";
import Link from "next/link";

// =========================================================
// 💡 각 카드에 들어갈 '독창적 비주얼' 컴포넌트들
// (첨부해주신 이미지의 화려한 그래픽 무드를 재현)
// =========================================================

const AIVisual = () => (
  <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
    <div className="absolute inset-0 flex items-center justify-center">
      {/* 중앙의 빛나는 코어 */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-32 h-32 bg-indigo-500 rounded-full blur-[60px]" 
      />
      {/* 회전하는 데이터 링 */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-indigo-400/30 rounded-full border-dashed"
      />
      <Brain size={48} className="text-white relative z-10 opacity-80" />
    </div>
    {/* 주변에 흩뿌려진 데이터 입자들 */}
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
  </div>
);

const TwinVisual = () => (
  <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-rose-500/20 to-orange-500/20">
    <div className="absolute inset-0 flex items-center justify-center">
      {/* 3D 그리드 바닥 느낌 */}
      <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] [transform:rotateX(60deg)]" />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <Box size={56} className="text-white opacity-80" />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/20 blur-md rounded-full" />
      </motion.div>
    </div>
  </div>
);

const PlatformVisual = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
    <div className="absolute inset-0 flex items-center justify-center">
      {/* 흐르는 데이터 라인들 */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 300, opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "linear" }}
          className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          style={{ top: `${20 + i * 15}%`, left: '0%' }}
        />
      ))}
      <Zap size={48} className="text-emerald-400 relative z-10" />
    </div>
  </div>
);

// =========================================================
// 💡 솔루션 섹션 메인
// =========================================================

const SOLUTIONS = [
    {
      id: "01",
      title: "AI Vision & 실증 데이터",
      category: "Visual Intelligence",
      // 💡 제주 갈치 프로젝트와 OCR 기술을 녹여낸 실무형 카피
      desc: "비정형 이미지를 비즈니스 데이터로 전환합니다. 사진/동영상 속 상품 식별 및 손글씨 OCR 추출 등 실생활에 밀착된 AI 솔루션을 구축합니다.",
      visual: <AIVisual />,
      // 💡 서브 페이지가 아닌 통합 페이지의 해당 섹션으로 바로 이동
      link: "/solutions#01"
    },
    {
      id: "02",
      title: "3D 디지털 트윈 & 예측",
      category: "Predictive Simulation",
      // 💡 물류 최적화와 시뮬레이션 가치를 강조
      desc: "현실 공간을 1:1로 동기화하여 리스크를 제거합니다. 물류 동선 최적화 알고리즘과 WebGL 기술로 보이지 않는 데이터의 흐름을 시각화합니다.",
      visual: <TwinVisual />,
      link: "/solutions#02"
    },
    {
      id: "03",
      title: "엔터프라이즈 코어 설계",
      category: "High-Availability",
      // 💡 지역 데이터 허브와 시스템 안정성을 강조
      desc: "초대용량 트래픽과 방대한 지역 데이터를 지탱하는 무중단 아키텍처. AI와 3D 엔진이 완벽하게 구동될 수 있는 최적의 인프라를 설계합니다.",
      visual: <PlatformVisual />,
      link: "/solutions#03"
    }
  ];

export default function Solutions() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 섹션 헤더: 스트라이프 스타일의 간결하고 묵직한 카피 */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-bold tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            비즈니스 스케일업을 위한 <br />
            <span className="text-slate-400">3대 핵심 엔지니어링 솔루션</span>
          </h2>
        </div>

        {/* 💡 독창적인 카드 레이아웃 (그리드) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={item.link}>
                {/* 1. 비주얼 영역 (첨부파일 스타일 반영) */}
                <div className="relative h-[300px] rounded-[32px] overflow-hidden mb-6 bg-slate-100 shadow-sm border border-slate-100">
                  {item.visual}
                  {/* 호버 시 나타나는 유리 질감 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* 2. 텍스트 영역 */}
                <div className="px-2">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}