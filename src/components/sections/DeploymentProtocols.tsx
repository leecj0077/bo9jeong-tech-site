"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Smartphone, Database, Server, ShieldCheck, Terminal } from "lucide-react";

const PROTOCOLS = [
  {
    id: "Rapid",
    name: "스피드 런칭 (14일 완성)",
    duration: "14 Days",
    desc: "머릿속 아이디어를 단 2주 만에 실제 서비스로 만들어 드립니다. 가볍고 빠르게 온라인에 내 가게를 오픈해 보세요.",
    target: "회사 소개 홈페이지, 홍보용 랜딩페이지, 초기 테스트용 서비스",
    features: [
      "스마트폰/PC 화면 자동 맞춤 (반응형)", 
      "깔끔하고 세련된 디자인", 
      "네이버/구글 검색 노출 기본 세팅", 
      "방문자 수 확인 기능"
    ],
    process: [
      "원하시는 기능 상담 및 정리 (2일)", 
      "전체 화면 밑그림 설계 (3일)", 
      "핵심 기능 집중 개발 (7일)", 
      "최종 점검 및 인터넷 등록 (2일)"
    ],
    techDetail: "Next.js / Tailwind CSS / Vercel Edge Runtime",
    summary: "가장 빠르게 온라인에 진출할 수 있는 실속형 패키지",
    color: "bg-orange-500",
    icon: <Zap />
  },
  {
    id: "Standard",
    name: "웹&앱 통합 패키지 (30일 완성)",
    duration: "30 Days",
    desc: "인터넷 사이트와 스마트폰 앱(어플)을 한 번에 만듭니다. 결제 기능과 알림 등 실제 사업 운영에 필요한 모든 것을 담았습니다.",
    target: "회원가입/예약이 필요한 서비스, 쇼핑몰, 일반 스마트폰 앱",
    features: [
      "웹사이트와 스마트폰 앱 동시 제작", 
      "구글 플레이스토어 / 애플 앱스토어 등록", 
      "카드 결제 및 본인인증 기능", 
      "고객 스마트폰으로 알림(푸시) 발송"
    ],
    process: [
      "데이터 저장소 및 뼈대 설계 (5일)", 
      "웹/앱 화면 디자인 및 최적화 (7일)", 
      "결제/알림 등 실제 기능 개발 (12일)", 
      "앱스토어 심사 통과 및 정식 오픈 (6일)"
    ],
    techDetail: "React Native / Node.js / PostgreSQL / AWS",
    summary: "안정적인 사업 운영을 위한 가장 표준적인 웹/앱 패키지",
    color: "bg-indigo-600",
    icon: <Smartphone />
  },
  {
    id: "Custom",
    name: "프리미엄 맞춤 개발 (90일 이상)",
    duration: "90 Days+",
    desc: "세상에 없던 나만의 특별한 서비스를 만듭니다. 인공지능(AI)이나 대규모 접속자가 몰리는 플랫폼 등 원하시는 모든 기능을 100% 맞춤으로 개발해 드립니다.",
    target: "대형 플랫폼, 인공지능(AI) 접목 서비스, 독자적인 복잡한 시스템",
    features: [
      "빠르고 부드러운 최고급 앱 성능 구현", 
      "인공지능(AI) 및 이미지 인식 기능 적용", 
      "수만 명이 접속해도 끊김 없는 서버 구축", 
      "우리 회사만의 독자적인 관리자 시스템"
    ],
    process: [
      "전문가 심층 상담 및 기술 조사 (14일)", 
      "대규모 시스템 구조 설계 (21일)", 
      "100% 맞춤형 정밀 개발 진행 (40일+)", 
      "오류 꼼꼼 점검 및 대규모 접속 테스트 (15일)"
    ],
    techDetail: "Swift / Kotlin / Python (AI) / Kubernetes",
    summary: "경쟁사를 압도하는 최고 난이도의 기술 맞춤형 플랫폼",
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