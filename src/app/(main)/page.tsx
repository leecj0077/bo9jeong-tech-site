"use client";

import MainIntro from "@/components/sections/MainIntro";
import BuildExperience from "@/components/sections/BuildExperience";
import ServiceFields from "@/components/sections/ServiceFields";
import SmartTechnology from "@/components/sections/SmartTechnology";
import OurTrust from "@/components/sections/OurTrust";
import PartnerLogos from "@/components/sections/PartnerLogos";
import Contact from "@/components/sections/Contact";
import TechStack from "@/components/sections/TechStack";
import ClientLogos from "@/components/sections/ClientLogos";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* 1. 첫인상: 상상을 현실로 만드는 기술 (기존 Hero) */}
      <MainIntro />
      <TechStack />
      {/* 2. 실력 증명: 말 경매, 아이돌봄 등 실제 성공 사례 (기존 CaseStudies) 
             * 담당자들이 가장 먼저 보고 싶어 하는 '증거'를 전면에 배치합니다. */}
      <BuildExperience />

      {/* 3. 사업 분야: 보구정디벨롭이 하는 일 (기존 Solutions) */}
      <ServiceFields />

      {/* 4. 기술 이야기: 우리가 사용하는 똑똑한 도구들 (기존 TechStack) */}
      <SmartTechnology />

      {/* 5. 우리의 고집: 믿고 맡길 수 있는 이유와 철학 (기존 EngineeringCore) */}
      <OurTrust />

      {/* 6. 함께하는 파트너: 관공서 및 주요 협력사 (기존 ClientLogos) */}
      <ClientLogos />

      {/* 7. 상담 신청: 24시간 내 회신 프로토콜 (Contact 유지) */}
      <Contact />
    </main>
  );
}

// import Hero from "@/components/sections/Hero";
// import TechStack from "@/components/sections/TechStack";
// import Solutions from "@/components/sections/Solutions";
// import EngineeringCore from "@/components/sections/EngineeringCore";
// import CaseStudies from "@/components/sections/CaseStudies";
// import ClientLogos from "@/components/sections/ClientLogos";
// import Contact from "@/components/sections/Contact";

// export default function Home() {
//   return (
//     <>
//     {/* 💡 배경, 타이포그래피, 슬라이더가 모두 통합된 마스터 히어로 섹션 */}
//     <Hero />
//     {/* 💡 2. 기술 스택 섹션 추가 */}
//     <TechStack />
//     {/* 3. 솔루션 섹션 추가 */}
//     <Solutions />
//     {/* 4. 인터랙티브 리본 섹션 추가 */}
//     <EngineeringCore />
//     {/* 5. 케이스 스터디 섹션 추가 */}             
//     <CaseStudies />
//     {/* 6. 클라이언트 로고 */}
//     <ClientLogos />
//     {/* 💡 마지막 상담 섹션 */}
//     <Contact />
//     </>
//   );
// }