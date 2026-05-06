"use client";

import { motion } from "framer-motion";
import { 
  Monitor, ShieldCheck, Smartphone, BrainCircuit, 
  ArrowRight, Check, Activity, Database, Zap, 
  Layers, Server, Globe 
} from "lucide-react";
import Link from "next/link";

// =========================================================
// 💡 주제별 전용 애니메이션 그래픽 (고해상도 시뮬레이션)
// =========================================================

const WebAppVisual = () => (
  <div className="relative w-full h-full bg-slate-50 rounded-[40px] border border-slate-200 overflow-hidden flex items-center justify-center shadow-2xl">
    <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative w-4/5 h-3/5 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5">
      <div className="flex gap-1.5 mb-5"><div className="w-2.5 h-2.5 rounded-full bg-rose-400" /><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /><div className="w-2.5 h-2.5 rounded-full bg-emerald-400" /></div>
      <div className="space-y-4">
        <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 bg-indigo-50 rounded-2xl" />
          <div className="h-20 bg-indigo-50 rounded-2xl" />
          <div className="h-20 bg-indigo-50 rounded-2xl" />
        </div>
      </div>
    </motion.div>
    <motion.div animate={{ y: [50, 30, 50] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute bottom-10 right-10 w-32 h-56 bg-slate-900 rounded-[32px] border-[4px] border-slate-800 shadow-2xl p-3 hidden md:block">
       <div className="w-8 h-1 bg-slate-800 rounded-full mx-auto mb-4" />
       <div className="h-24 w-full bg-indigo-600 rounded-xl mb-3" />
       <div className="grid grid-cols-2 gap-2"><div className="h-10 bg-slate-700 rounded-lg" /><div className="h-10 bg-slate-700 rounded-lg" /></div>
    </motion.div>
  </div>
);

const AdminVisual = () => (
  <div className="relative w-full h-full bg-slate-900 rounded-[40px] overflow-hidden flex items-center justify-center shadow-2xl">
    <div className="absolute inset-0 bg-[radial-gradient(#4f46e520_1px,transparent_1px)] bg-[size:30px_30px]" />
    <div className="relative w-full h-full p-10 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="px-4 py-2 bg-indigo-600 rounded-xl text-[10px] font-black text-white uppercase tracking-widest">Jeju_Field_System</div>
        <Activity className="text-emerald-500 animate-pulse" size={24} />
      </div>
      <div className="grid grid-cols-2 gap-4 relative z-10 w-full px-4">
        {[1, 2, 3, 4].map(i => (
          <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ delay: i * 0.3, repeat: Infinity }} className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
             <div className="h-1 w-8 bg-indigo-500 rounded-full mb-3" />
             <div className="h-3 w-full bg-white/10 rounded-full" />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs font-mono text-indigo-300"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />LIVE_NODE_SYNC: ACTIVE</div>
    </div>
  </div>
);

const DataVisual = () => (
    <div className="relative w-full h-full bg-white rounded-[40px] border border-slate-200 overflow-hidden flex flex-col p-12 shadow-2xl">
      <div className="flex justify-between items-center mb-10">
         <span className="text-xl font-black text-slate-900 tracking-tighter">Auction_Engine_v3</span>
         <div className="flex gap-1.5">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }} 
              />
            ))}
         </div>
      </div>
      <div className="flex-1 space-y-5">
         {[1, 2, 3].map(i => {
           // 💡 금액 단위를 1,000 단위로 생성하여 천 단위 콤마 포맷팅 적용
           const rawPrice = Math.floor(Math.random() * 5000) * 1000;
           const formattedPrice = rawPrice.toLocaleString();
  
           return (
             <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-600 font-black italic">
                     #{i}
                   </div>
                   <div className="h-4 w-28 bg-slate-200 rounded-full" />
                </div>
                <span className="font-mono font-black text-indigo-600 text-lg">
                  ₩ {formattedPrice}
                </span>
             </div>
           );
         })}
      </div>
      <div className="mt-10 flex gap-1 items-end h-16">
         {Array.from({ length: 35 }).map((_, i) => (
           <motion.div 
             key={i} 
             animate={{ height: [`${Math.random() * 40 + 20}%`, `${Math.random() * 90 + 10}%`, `${Math.random() * 40 + 20}%`] }} 
             transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.03 }} 
             className="flex-1 bg-indigo-100 rounded-t-sm" 
           />
         ))}
      </div>
    </div>
  );

const AIVisual = () => (
  <div className="relative w-full h-full bg-slate-50 rounded-[40px] border border-slate-200 overflow-hidden flex flex-col items-center justify-center p-12 shadow-2xl group">
    <div className="relative w-full aspect-video bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
       <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-1 bg-rose-500 shadow-[0_0_20px_#f43f5e] z-10" />
       <BrainCircuit className="text-slate-100 group-hover:text-rose-50 transition-colors" size={180} />
       <div className="absolute bottom-6 right-6 bg-white/95 p-4 rounded-2xl border border-slate-100 shadow-xl">
          <p className="text-[10px] font-black text-slate-400 mb-1 tracking-widest">AI_OCR_ANALYSIS</p>
          <p className="text-sm font-black text-rose-600">ACCURACY: 99.98%</p>
       </div>
    </div>
  </div>
);

// =========================================================
// 💡 핵심 사업 데이터 (Features 포함)
// =========================================================

const SERVICES = [
  {
    no: "01",
    title: "고품격 맞춤형 웹 & 앱 구축",
    subtitle: "Premium Web & Mobile Development",
    desc: "브랜드의 가치를 시각적으로 전달하는 하이엔드 웹사이트와 사용자 중심의 인터페이스를 갖춘 모바일 앱을 제작합니다.",
    features: [
      { title: "브랜드 쇼케이스", detail: "고급 애니메이션과 최적화된 UI로 기업의 정체성을 강조합니다." },
      { title: "커머스 시스템", detail: "복잡한 결제 프로세스를 단순화하여 구매 전환율을 극대화합니다." },
      { title: "하이브리드 앱", detail: "iOS와 안드로이드 환경에서 동일한 성능을 발휘하는 앱을 개발합니다." }
    ],
    visual: <WebAppVisual />,
    accent: "text-indigo-600",
    bg: "bg-white"
  },
  {
    no: "02",
    title: "지능형 행정 및 현장 관리 시스템",
    subtitle: "Smart Field Control & Admin System",
    desc: "삼성중공업 관제 시스템 및 제주 현장 관리 노하우를 결합하여, 실시간 모니터링과 업무 자동화를 실현합니다.",
    features: [
      { title: "실시간 관제 플랫폼", detail: "현장의 상황을 데이터로 가시화하여 즉각적인 의사결정을 돕습니다." },
      { title: "시설물 보고 시스템", detail: "모바일 앱을 통해 현장에서 즉시 시설물 상태를 보고하고 관리합니다." },
      { title: "위치 기반 트래킹", detail: "정밀한 GPS 데이터를 활용하여 작업자의 안전과 효율을 관리합니다." }
    ],
    visual: <AdminVisual />,
    accent: "text-emerald-600",
    bg: "bg-slate-50"
  },
  {
    no: "03",
    title: "실시간 대규모 데이터 솔루션",
    subtitle: "Real-time High-Availability Solution",
    desc: "단 1초의 지연도 허용하지 않는 무결점 데이터 처리 엔진으로 대규모 동시 접속 환경을 완벽하게 제어합니다.",
    features: [
      { title: "실시간 경매 시스템", detail: "수만 건의 입찰 데이터가 0.1초 내에 처리되는 고성능 엔진을 탑재합니다." },
      { title: "교육 영상 플랫폼", detail: "대용량 동영상 자료를 끊김 없이 전송하는 안정적인 아키텍처를 제공합니다." },
      { title: "트래픽 분산 제어", detail: "접속자가 폭증하는 순간에도 서버 다운 없는 무중단 서비스를 유지합니다." }
    ],
    visual: <DataVisual />,
    accent: "text-amber-600",
    bg: "bg-white"
  },
  {
    no: "04",
    title: "AI 기반 비즈니스 고도화 연구",
    subtitle: "AI-Driven Business Intelligence",
    desc: "전통시장 OCR 연구 등 비정형 데이터를 정형 데이터로 변환하여 비즈니스의 지능적 성장을 지원합니다.",
    features: [
      { title: "지능형 OCR 최적화", detail: "손글씨나 비정형 영수증 정보를 정확하게 인식하여 데이터화합니다." },
      { title: "데이터 분류 엔진", detail: "방대한 양의 정보를 속성에 맞게 인공지능이 스스로 정제하고 분류합니다." },
      { title: "커스텀 AI 연동", detail: "기존 시스템에 인공지능 기능을 결합하여 업무의 정확도를 높입니다." }
    ],
    visual: <AIVisual />,
    accent: "text-rose-600",
    bg: "bg-slate-50"
  }
];

export default function BusinessFields() {
  return (
    <div className="bg-white">
      {SERVICES.map((service, idx) => (
        <section key={idx} className={`py-32 lg:py-48 ${service.bg} overflow-hidden border-b border-slate-100`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* 텍스트 컨텐츠 영역 (Features 상세 포함) */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-[1.2] space-y-12"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <span className="text-7xl font-black font-mono italic text-slate-100 select-none leading-none">{service.no}</span>
                    <div className="space-y-1">
                      <div className={`h-1.5 w-12 bg-current ${service.accent}`} />
                      <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${service.accent}`}>{service.subtitle}</span>
                    </div>
                  </div>
                  {/* 💡 타이틀 한 줄 보장: 반응형 폰트 및 줄바꿈 금지 */}
                  <h2 className="text-[6.5vw] sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap overflow-hidden py-1">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* 💡 Features 상세 뷰 (꼼꼼하게 추가됨) */}
                <div className="grid grid-cols-1 gap-6">
                  {service.features.map((feature, fIdx) => (
                    <motion.div 
                      key={fIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + fIdx * 0.1 }}
                      className="flex gap-5 group"
                    >
                      <div className={`shrink-0 w-12 h-12 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center ${service.accent} group-hover:bg-indigo-600 group-hover:text-white transition-all`}>
                        <Check size={20} strokeWidth={4} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-black text-slate-900">{feature.title}</h4>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-lg">{feature.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link href="/contact" className="inline-block">
                    <button className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group">
                      프로젝트 구축 상담
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* 비주얼 그래픽 영역 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? 2 : -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full aspect-square max-w-[550px]"
              >
                 <div className="relative h-full w-full">
                    {/* 장식용 은은한 글로우 효과 */}
                    <div className={`absolute inset-0 blur-[120px] opacity-10 rounded-full ${idx % 2 === 0 ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                    <div className="relative z-10 h-full w-full">
                       {service.visual}
                    </div>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}