"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Database, Box, Globe } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    id: "samsung",
    client: "SAMSUNG HEAVY INDUSTRIES",
    icon: <Activity size={26} strokeWidth={2} />, // AI 통합 관제 (모니터링/펄스)
    title: "AI 통합 관제 시스템",
    description: "실시간 객체 인식 및 위험 감지 엔진을 통한 작업 환경 안전 최적화.",
    impact: "Accurately detected 99.8% of hazards",
    year: "2025",
    color: "text-green-500"
  },
  {
    id: "logistics",
    client: "GLOBAL LOGISTICS platform",
    icon: <Database size={26} strokeWidth={2} />, // 초대용량 데이터 (DB/아키텍처)
    title: "초대용량 데이터 아키텍처",
    description: "초당 5만 건의 위치 데이터를 지연 없이 처리하는 분산 서버 설계.",
    impact: "Processed 4.3B transactions yearly",
    year: "2024",
    color: "text-red-500"
  },
  {
    id: "smart-factory",
    client: "SMART FACTORY digital twin",
    icon: <Box size={26} strokeWidth={2} />, // 3D 모니터링 (입체/박스)
    title: "3D 실시간 모니터링",
    description: "WebGL 기반의 고정밀 3D 렌더링을 통한 공정 자동화 시뮬레이션.",
    impact: "Reduced downtime by 24%",
    year: "2023",
    color: "text-violet-500"
  },
  {
    id: "enterprise",
    client: "B2B SaaS Platform",
    icon: <Globe size={26} strokeWidth={2} />, // 엔터프라이즈 (글로벌/네트워크)
    title: "엔터프라이즈 통합 솔루션",
    description: "보안과 확장성을 극대화한 기업 전용 통합 비즈니스 플랫폼 구축.",
    impact: "Scalable to 1M+ concurrent users",
    year: "2023",
    color: "text-cyan-500"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 헤더 부분 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4"
            >
              Selected Archives
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              성공적인 비즈니스를 위한 <br />
              <span className="text-slate-400">검증된 엔지니어링 기록</span>
            </h2>
          </div>
          <Link href="/case-studies" className="text-sm font-bold text-slate-900 flex items-center gap-2 group border-b-2 border-slate-900 pb-1">
            진행중 프로젝트 보기
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-[32px]">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                    {project.client}
                  </span>
                  <span className="text-[10px] font-bold text-slate-300">
                    Project Year: {project.year}
                  </span>
                </div>
                <div className={`w-1 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-500 transition-colors duration-500`} />
              </div>

              <div className="space-y-4 mb-16">
                {/* 💡 아이콘과 타이틀이 정렬된 섹션 */}
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors flex items-center gap-3">
                  <span className={`${project.color} group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </span>
                  {project.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm lg:text-base max-w-sm">
                  {project.description}
                </p>
              </div>

              {/* 하단 성과 요약 */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Achievement</span>
                <p className="text-lg font-mono font-medium text-slate-900 tracking-tighter italic">
                  "{project.impact}"
                </p>
              </div>

              <span className="absolute bottom-8 right-12 text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}