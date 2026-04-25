"use client";

import dynamic from 'next/dynamic';
import TechStackArchitecture from "@/components/sections/TechStackArchitecture";
import TechStackBlueprint from "@/components/sections/TechStackBlueprint";
import ExpertLineage from "@/components/sections/ExpertLineage";
import DeploymentInquiry from "@/components/sections/DeploymentInquiry";

const TechDNAManifesto = dynamic(() => import('@/components/sections/TechDNAManifesto'), { 
  ssr: false,
  loading: () => <div className="h-[90vh] bg-white flex items-center justify-center text-slate-400 font-mono text-xs tracking-widest">INITIALIZING_ENGINEERING_DNA...</div>
});

export default function TechDNAPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-indigo-500/30">
      
      {/* 01. 선언문 & Three.js 아트워크 */}
      <TechDNAManifesto />

      {/* 02. 기술 스택 아키텍처 */}
      <TechStackBlueprint />

      {/* 03. 전문가 DNA 프로필 (다크 섹션으로 반전 효과) */}
      <ExpertLineage />

      {/* 04. 최종 구축 문의 */}
      <div className="bg-white">
        <DeploymentInquiry />
      </div>

    </main>
  );
}