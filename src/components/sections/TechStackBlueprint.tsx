"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Database, ArrowUpRight, Activity, Terminal } from "lucide-react";

const TECH_SPEC = [
  {
    id: "01",
    category: "FRONTEND ARCHITECTURE",
    philosophy: "Spatial Interaction & Type-Safety",
    desc: "단순히 보여주는 것을 넘어, 사용자가 기술의 실체를 감각적으로 인지하게 합니다.",
    details: [
      { label: "Rendering", value: "Next.js 14+ App Router (SSR/ISR)", reasoning: "SEO 최적화와 초고속 초기 로딩 속도 확보" },
      { label: "Visual Engine", value: "Three.js / WebGL / GSAP", reasoning: "브라우저 한계를 넘는 고난도 3D 인터랙션 구현" },
      { label: "Stability", value: "TypeScript Strict Mode", reasoning: "런타임 에러 제로화를 향한 엄격한 타입 가드" }
    ],
    impact: "사용자 이탈률 35% 감소 및 브랜드 신뢰도 극대화"
  },
  {
    id: "02",
    category: "BACKEND & INFRASTRUCTURE",
    philosophy: "Elastic Scalability & Fault Tolerance",
    desc: "어떠한 트래픽 폭증에도 비즈니스는 중단 없이 지속되어야 합니다.",
    details: [
      { label: "Architecture", value: "Microservices (MSA) / Event-Driven", reasoning: "서비스 간 결합도 최소화 및 유연한 기능 확장" },
      { label: "Runtime", value: "Node.js (LTS) / Go", reasoning: "고성능 비동기 처리 및 시스템 자원 효율 극대화" },
      { label: "Cloud", value: "AWS / Kubernetes / Docker", reasoning: "트래픽에 따른 자동 확장(Auto-scaling) 인프라 구축" }
    ],
    impact: "동시 접속자 100만 명 대응 및 시스템 가동률 99.99% 보장"
  },
  {
    id: "03",
    category: "DATA & AI INTELLIGENCE",
    philosophy: "Actionable Insights from Raw Data",
    desc: "방대한 데이터 속에서 비즈니스의 정답을 찾아내는 지능형 엔진을 구축합니다.",
    details: [
      { label: "AI Model", value: "PyTorch / Vision Transformer (ViT)", reasoning: "비정형 이미지 내 객체 인식 및 상태 분석 정밀도 확보" },
      { label: "Data Pipeline", value: "Redis / Kafka / PostgreSQL", reasoning: "초당 수만 건의 데이터 실시간 스트리밍 및 무결성 저장" },
      { label: "OCR Engine", value: "Custom Trained Tesseract / LayoutLM", reasoning: "비정형 문서 및 손글씨 데이터의 높은 인식률 달성" }
    ],
    impact: "수동 데이터 처리 비용 80% 절감 및 실시간 의사결정 지원"
  }
];

export default function TechStackBlueprint() {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 헤더 섹션: 설계도 느낌의 보조 지표들 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-indigo-600 font-mono text-sm mb-6">
              <Terminal size={16} />
              <span className="tracking-[0.3em] font-bold uppercase">Technical Specification v2.0</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              비즈니스를 지탱하는 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-400">무결점의 골조.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right font-mono text-[10px] text-slate-400 leading-tight border-l border-slate-100 pl-6">
            SYSTEM_STABILITY: OPTIMIZED<br />
            CORE_LATENCY: 0.02ms<br />
            SCALABILITY: UNLIMITED<br />
            REDUNDANCY: ACTIVE
          </div>
        </div>

        {/* 상세 스택 리스트 (X-Ray / Blueprint 스타일) */}
        <div className="space-y-24">
          {TECH_SPEC.map((spec, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* 구분선 및 번호 */}
              <div className="flex items-center gap-4 mb-12">
                <span className="text-6xl font-black font-mono text-slate-100 group-hover:text-indigo-50 transition-colors">{spec.id}</span>
                <div className="h-px flex-1 bg-slate-100 group-hover:bg-indigo-100 transition-colors" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* 좌측: 철학 및 설명 */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">{spec.category}</h3>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">{spec.philosophy}</p>
                    <p className="text-slate-500 leading-relaxed">{spec.desc}</p>
                  </div>
                  
                  {/* 비즈니스 임팩트 배지 */}
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <Activity size={18} className="text-indigo-600" />
                    <span className="text-sm font-bold text-indigo-900">{spec.impact}</span>
                  </div>
                </div>

                {/* 우측: 정밀 기술 명세서 (Table Style) */}
                <div className="lg:col-span-7">
                  <div className="bg-slate-50 rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-inner group-hover:bg-white group-hover:shadow-2xl group-hover:border-indigo-100 transition-all duration-500">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Component</th>
                          <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stack / Protocol</th>
                          <th className="pb-4 hidden md:table-cell text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Reasoning</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {spec.details.map((detail, dIdx) => (
                          <tr key={dIdx} className="group/row">
                            <td className="py-5 text-xs font-bold text-slate-500">{detail.label}</td>
                            <td className="py-5">
                              <span className="text-sm font-black text-slate-900 group-hover/row:text-indigo-600 transition-colors">
                                {detail.value}
                              </span>
                            </td>
                            <td className="py-5 hidden md:table-cell text-right">
                              <span className="text-[11px] text-slate-400 font-medium italic">
                                {detail.reasoning}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    {/* 데이터 흐름 시각화 (Mini Accent) */}
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1,2,3,4,5,6,7].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            className="w-1 h-1 bg-indigo-300 rounded-full"
                          />
                        ))}
                      </div>
                      <ArrowUpRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}