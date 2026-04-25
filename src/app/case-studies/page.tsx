"use client";

import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyArchives from "@/components/sections/CaseStudyArchives";
import CaseStudyFooter from "@/components/sections/CaseStudyFooter";
import DeploymentInquiry from "@/components/sections/DeploymentInquiry"; // 이전 섹션 재활용 가능

export default function CaseStudiesPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-indigo-500/30">
      {/* 💡 증명의 기록을 상징하는 전용 Hero */}
      <CaseStudyHero />

      {/* 💡 각 프로젝트의 설계도와 임팩트를 보여주는 아카이브 리스트 */}
      <CaseStudyArchives />

      {/* 성공 사례 확인 후 바로 연결되는 전문 상담 섹션 */}
      <DeploymentInquiry />

      {/* 💡 하단 지속 업데이트 섹션 (h-[35vh], 옅은 Three.js) */}
      <CaseStudyFooter />
    </main>
  );
}