"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Smartphone, Database, Server, ShieldCheck, Terminal } from "lucide-react";

const PROTOCOLS = [
  {
    id: "Rapid",
    name: "라피드 스프린트 (Rapid Sprint)",
    duration: "14 Days",
    desc: "아이디어의 핵심 기능을 시장에 가장 빠르게 상륙시켜 비즈니스 가치를 검증합니다.",
    target: "브랜드 웹사이트, 랜딩페이지, MVP 서비스",
    features: ["반응형 웹 최적화 엔진", "고품격 UX/UI 설계", "검색 엔진 최적화(SEO)", "실시간 트래픽 분석 도구"],
    process: ["요구사항 정밀 분석 (2일)", "시스템 와이어프레임 (3일)", "핵심 기능 고속 개발 (7일)", "최종 배포 및 안정화 (2일)"],
    techDetail: "Next.js / Tailwind CSS / Vercel Edge Runtime",
    summary: "신속한 시장 진입을 위한 최적화 프로토콜",
    color: "bg-orange-500",
    icon: <Zap />
  },
  {
    id: "Standard",
    name: "비즈니스 스탠다드 (Business Standard)",
    duration: "30 Days",
    desc: "안정적인 서비스 운영을 위해 웹과 모바일 앱을 동시에 점유하여 비즈니스 저변을 확대합니다.",
    target: "회원제 서비스, 예약 시스템, 하이브리드 앱",
    features: ["반응형 웹 + 하이브리드 앱 구축", "iOS/Android 스토어 대응", "결제 및 본인인증 시스템", "푸시 알림 및 마케팅 툴 연동"],
    process: ["데이터베이스 아키텍처 설계 (5일)", "멀티 플랫폼 UI 최적화 (7일)", "백엔드 및 API 통합 (12일)", "스토어 심사 및 최종 런칭 (6일)"],
    techDetail: "React Native / Node.js / PostgreSQL / AWS",
    summary: "온/오프라인 통합 운영을 위한 표준 프로토콜",
    color: "bg-indigo-600",
    icon: <Smartphone />
  },
  {
    id: "Custom",
    name: "엔터프라이즈 커스텀 (Enterprise Custom)",
    duration: "90 Days+",
    desc: "고도의 기술력과 복잡한 로직이 집약된 독보적인 커스텀 솔루션을 설계합니다.",
    target: "이커머스, 전문 플랫폼, AI/OCR 연동 시스템",
    features: ["네이티브 앱 전용 고성능 설계", "AI 비전 / OCR 엔진 고도화", "대용량 트래픽 분산 처리", "커스텀 백엔드 아키텍처"],
    process: ["심층 기술 컨설팅 및 R&D (14일)", "고성능 시스템 아키텍처 설계 (21일)", "네이티브 풀스택 정밀 개발 (40일+)", "QA 및 스트레스 테스트 (15일)"],
    techDetail: "Swift / Kotlin / Python (AI) / Kubernetes",
    summary: "기술적 우위를 점하기 위한 고난도 커스텀 프로토콜",
    color: "bg-purple-600",
    icon: <Database />
  }
];

export default function DeploymentProtocols() {
  const [selected, setSelected] = useState(PROTOCOLS[1]);

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* 좌측: 프로토콜 선택 영역 */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-indigo-600 mb-4">
                <Terminal size={18} />
                <span className="font-black text-xs uppercase tracking-[0.3em]">Deployment Protocol</span>
              </div>
              <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                비즈니스 규모에 맞는 <br />
                <span className="text-indigo-600 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">구축 프로토콜</span>을 선택하세요.
              </p>
            </div>

            {PROTOCOLS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`w-full text-left p-8 rounded-[32px] border-2 transition-all duration-500 flex justify-between items-center group ${
                  selected.id === item.id ? "bg-white border-indigo-600 shadow-2xl scale-[1.02]" : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full text-white mb-3 inline-block ${item.color}`}>
                    {item.duration} Protocol
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{item.name}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.target}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  selected.id === item.id ? "bg-indigo-600 text-white rotate-90" : "bg-slate-100 text-slate-400"
                }`}>
                  <ArrowRight size={20} />
                </div>
              </button>
            ))}
          </div>

          {/* 우측: 요약 상세 카드 (애니메이션 최적화) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="h-full bg-slate-900 rounded-[48px] p-10 md:p-14 text-white shadow-2xl flex flex-col justify-between border border-white/5"
              >
                <div className="space-y-12">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <h4 className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em]">Protocol Summary</h4>
                      <p className="text-3xl font-black leading-tight tracking-tighter">{selected.summary}</p>
                    </div>
                    <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                      {selected.icon}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {selected.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                        <CheckCircle2 size={16} className="text-indigo-500 flex-none" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-white/5 space-y-6">
                    <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                       <Server size={12} /> Engineering Lifecycle
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {selected.process.map((step, i) => (
                        <div key={i} className="flex items-start gap-3 text-[13px] text-slate-400 leading-tight">
                          <span className="text-indigo-500 font-mono font-bold mt-0.5">0{i+1}</span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap justify-between items-end gap-6">
                   <div className="space-y-2">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Stack Specification</p>
                      <p className="text-sm font-black text-indigo-400 tracking-tight">{selected.techDetail}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Delivery Timeline</p>
                      <p className="text-4xl font-black tracking-tighter text-white">{selected.duration}</p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}