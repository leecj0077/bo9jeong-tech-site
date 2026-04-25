"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Target, Search, MousePointer2, 
  Activity, Database, Server, BarChart3, 
  Layers, Zap, ShieldCheck, Box
} from "lucide-react";

// =========================================================
// 💡 각 섹션 전용 비주얼 컴포넌트 (고밀도 리팩토링)
// =========================================================

// 01. AI Vision: 실제 갈치 인식 및 OCR 시뮬레이션
const VisionGraphic = () => (
  <div className="relative w-full h-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-inner">
    {/* 뷰포트 격자 */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
    
    <div className="absolute inset-6 border-2 border-dashed border-indigo-200 rounded-xl flex flex-col items-center justify-center">
      {/* 타겟팅 박스 */}
      <div className="relative w-48 h-32 border-2 border-indigo-600 flex flex-col justify-between p-2">
        <div className="absolute -top-3 -left-3 p-1 bg-indigo-600 text-[8px] text-white font-mono font-bold uppercase tracking-widest">
          Detection: Hairtail (Galchi)
        </div>
        <div className="flex justify-between">
          <div className="w-4 h-4 border-t-2 border-l-2 border-indigo-600" />
          <div className="w-4 h-4 border-t-2 border-r-2 border-indigo-600" />
        </div>
        
        {/* 내부 OCR 분석 라인 */}
        <motion.div 
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-0.5 bg-indigo-400 shadow-[0_0_10px_#818cf8]"
        />

        <div className="flex justify-between">
          <div className="w-4 h-4 border-b-2 border-l-2 border-indigo-600" />
          <div className="w-4 h-4 border-b-2 border-r-2 border-indigo-600" />
        </div>
      </div>

      {/* 실시간 데이터 오버레이 */}
      <div className="absolute top-4 right-4 space-y-2">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-100 shadow-sm">
           <p className="text-[8px] font-bold text-slate-400">OCR_HANDWRITING</p>
           <p className="text-sm font-black text-indigo-600">₩ 25,000</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-100 shadow-sm">
           <p className="text-[8px] font-bold text-slate-400">CONFIDENCE</p>
           <p className="text-sm font-black text-emerald-500">99.82%</p>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-4 left-6 flex items-center gap-2 text-[10px] font-mono text-slate-400">
      <Activity size={12} className="text-indigo-500" />
      <span>STREAMING_LIVE_NODE_JEJU_MARKET_01</span>
    </div>
  </div>
);

// 02. Digital Twin: 데이터 노드와 3D 그리드
// 02. Digital Twin: 데이터 노드와 3D 그리드 (수정본)
const TwinGraphic = () => {
    // 💡 클라이언트 사이드에서만 난수를 생성하기 위한 상태 관리
    const [nodes, setNodes] = useState<{ top: string; left: string }[]>([]);
  
    useEffect(() => {
      // 컴포넌트가 마운트된 시점(브라우저)에서만 딱 한 번 실행
      const generatedNodes = Array.from({ length: 12 }).map(() => ({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      }));
      setNodes(generatedNodes);
    }, []);
  
    return (
      <div className="relative w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
          <motion.div 
            animate={{ rotateY: [0, 15, 0], rotateX: [20, 25, 20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-3/4 h-3/4 border border-indigo-500/30 rounded-lg [transform:rotateX(25deg)] bg-indigo-500/5 relative"
          >
            {/* 💡 서버와 클라이언트 값이 일치하도록 nodes 상태가 있을 때만 렌더링 */}
            {nodes.map((node, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_8px_#818cf8]"
                style={{ 
                  top: node.top, 
                  left: node.left 
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
               <Box className="text-indigo-400 opacity-40 animate-pulse" size={60} />
            </div>
          </motion.div>
        </div>
  
        <div className="absolute top-6 left-6 flex gap-2">
           <div className="px-3 py-1 rounded bg-indigo-500 text-[10px] font-bold text-white uppercase tracking-tighter">Real-time Sync</div>
           <div className="px-3 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-tighter italic">Lat: 0.001s</div>
        </div>
      </div>
    );
  };

// 03. Enterprise: 분산 시스템 및 트래픽 모니터링
const ArchGraphic = () => (
  <div className="relative w-full h-full bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col p-8">
    <div className="flex justify-between items-start mb-8">
       <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">System Health</p>
          <div className="flex items-center gap-2">
             <ShieldCheck className="text-emerald-500" size={18} />
             <span className="text-xl font-black text-slate-900 tracking-tighter">99.99% UP</span>
          </div>
       </div>
       <BarChart3 className="text-indigo-600" />
    </div>

    {/* 노드 구조 시각화 */}
    <div className="flex-1 flex items-center justify-between gap-4">
       {[1, 2, 3].map((node) => (
         <div key={node} className="flex-1 h-32 rounded-xl bg-slate-50 border border-slate-100 p-3 flex flex-col justify-between">
            <div className="h-1.5 w-8 bg-slate-200 rounded-full" />
            <div className="space-y-1">
               <div className="h-1 w-full bg-indigo-100 rounded-full" />
               <div className="h-1 w-2/3 bg-indigo-100 rounded-full" />
            </div>
            <div className="flex justify-between items-end">
               <Database size={14} className={node === 2 ? "text-indigo-600" : "text-slate-300"} />
               <span className="text-[8px] font-mono font-bold text-slate-400">Node_{node}</span>
            </div>
         </div>
       ))}
    </div>

    {/* 하단 트래픽 펄스 */}
    <div className="mt-8 h-10 w-full flex items-end gap-1">
       {Array.from({ length: 30 }).map((_, i) => (
         <motion.div 
           key={i}
           animate={{ height: [`${Math.random() * 40 + 20}%`, `${Math.random() * 70 + 30}%`, `${Math.random() * 40 + 20}%`] }}
           transition={{ duration: 1, delay: i * 0.05, repeat: Infinity }}
           className="flex-1 bg-slate-100 rounded-t-sm group-hover:bg-indigo-500"
         />
       ))}
    </div>
  </div>
);

// =========================================================
// 💡 메인 상세 섹션 구성
// =========================================================

const SECTIONS = [
  {
    no: "01",
    title: "AI Vision & Control",
    subtitle: "Visual to Data Transformation",
    description: "비정형 이미지를 정형화된 비즈니스 데이터로 전환합니다. 단순히 보는 것을 넘어, 사물의 속성과 텍스트를 읽고 분류하는 지능형 엔진입니다.",
    research: {
      topic: "제주 재래시장 활성화 프로젝트 (Market Intelligence)",
      content: "복잡한 시장 환경에서 갈치 등 어종을 식별하고, 상인이 직접 쓴 손글씨 가격표를 인식하여 실시간 시세 데이터를 연동하는 기술을 연구하고 있습니다."
    },
    useCases: [
      { task: "이미지/영상 자동 카테고리화", field: "미디어 아카이빙" },
      { task: "손글씨 및 비정형 데이터 추출", field: "행정/유통 혁신" },
    ],
    accent: "text-indigo-600",
    bg: "bg-white",
    visual: <VisionGraphic />
  },
  {
    no: "02",
    title: "Digital Twin 3D",
    subtitle: "Predictive Simulation",
    description: "현실의 물리적 상태를 3D 공간에 완벽하게 동기화합니다. 보이지 않는 데이터를 입체적으로 가시화하여 의사결정의 오류를 제로에 가깝게 줄입니다.",
    research: {
      topic: "실시간 물류 동선 최적화 알고리즘",
      content: "창고 내 수만 건의 물동량을 3D로 구현, 병목 구간을 사전에 예측하여 실제 설비를 재배치하기 전 최적의 효율 값을 도출하는 기술을 테스트합니다."
    },
    useCases: [
      { task: "설비 예지 보전(정비 시점 예측)", field: "에너지/제조" },
      { task: "재난 상황 대피 시뮬레이션", field: "공공 안전" },
    ],
    accent: "text-purple-600",
    // 💡 02번 섹션에만 옅은 배경을 주어 구분감을 줍니다.
    bg: "bg-slate-50/80",
    visual: <TwinGraphic />
  },
  {
    no: "03",
    title: "Enterprise Architecture",
    subtitle: "High-Availability System",
    description: "앞선 AI와 3D 기술이 대규모 서비스로 안정적으로 작동하게 하는 핵심 인프라입니다. 수백만 명의 접속에도 멈추지 않는 근육을 설계합니다.",
    research: {
      topic: "초대용량 지역 데이터 허브 구축",
      content: "지역 관광/교통 데이터를 클라우드 환경에서 통합 관리하고, 트래픽 폭증 시에도 0.1초 이내의 응답 속도를 유지하는 분산 아키텍처를 고도화합니다."
    },
    useCases: [
      { task: "대규모 결제 및 트래픽 처리", field: "핀테크/플랫폼" },
      { task: "무중단 서버 확장 및 보안", field: "엔터프라이즈" },
    ],
    accent: "text-emerald-600",
    bg: "bg-white",
    visual: <ArchGraphic />
  }
];

export default function SolutionDetails() {
  return (
    <div>
      {SECTIONS.map((section, idx) => (
        <section key={idx} id={section.no} className={`py-32 ${section.bg} overflow-hidden transition-colors duration-1000`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* 텍스트 컨텐츠 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-[1.2] space-y-10"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-black font-mono italic text-slate-200/50">{section.no}</span>
                    <span className={`text-xs font-bold uppercase tracking-[0.3em] ${section.accent}`}>{section.subtitle}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {section.title}
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.useCases.map((use, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-1">
                      <span className={`text-[10px] font-bold uppercase tracking-tighter ${section.accent}`}>{use.field}</span>
                      <span className="text-sm font-bold text-slate-800">{use.task}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Target size={80} className={section.accent} />
                   </div>
                   <div className="flex items-center gap-2 mb-4 relative z-10">
                      <Zap size={16} className={section.accent} />
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Current Researching</span>
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{section.research.topic}</h4>
                   <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                      {section.research.content}
                   </p>
                </div>
              </motion.div>

              {/* 비주얼 그래픽 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full aspect-square max-w-[500px]"
              >
                 {section.visual}
              </motion.div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}