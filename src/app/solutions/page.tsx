"use client";

import SolutionHero from "@/components/sections/SolutionHero";
import SolutionList from "@/components/sections/SolutionList";
import DeploymentInquiry from "@/components/sections/DeploymentInquiry";

/**
 * 🚀 Solutions Hub Page
 * --------------------------------------------------------
 * 1. SolutionHero: 중앙 통제 유닛(Central Engine) Three.js가 포함된 매니페스토 히어로
 * 2. SolutionList: 카드 방식을 탈피한 '시스템 명세서' 스타일의 리스트
 * 3. DeploymentInquiry: 메인 홈의 폼과는 완전히 다른, 전문가용 터미널 문의 섹션
 */
export default function SolutionsMainPage() {
  return (
    // 💡 전체 배경을 딥 다크(#05070d)로 설정하여 기술적 무게감을 유지합니다.
    <main className="bg-[#05070d] min-h-screen selection:bg-indigo-500/30">
      
      {/* [PHASE 01] 
        기존의 간소화된 히어로를 대체하는 
        독창적인 '엔지니어링 매니페스토' 히어로 
      */}
      <SolutionHero />

      {/* [PHASE 02] 
        메인 페이지의 <Solutions /> 그리드를 재활용하지 않고, 
        기술의 깊이를 보여주는 수직형 내비게이션 리스트 
      */}
      <SolutionList />

      {/* [PHASE 03] 
        단순 상담 신청이 아닌, 
        '시스템 배포 프로토콜' 컨셉의 하이엔드 인쿼리 
      */}
      <DeploymentInquiry />

    </main>
  );
}