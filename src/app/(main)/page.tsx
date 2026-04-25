"use client";

import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Solutions from "@/components/sections/Solutions";
import EngineeringCore from "@/components/sections/EngineeringCore";
import CaseStudies from "@/components/sections/CaseStudies";
import ClientLogos from "@/components/sections/ClientLogos";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
    {/* 💡 배경, 타이포그래피, 슬라이더가 모두 통합된 마스터 히어로 섹션 */}
    <Hero />
    {/* 💡 2. 기술 스택 섹션 추가 */}
    <TechStack />
    {/* 3. 솔루션 섹션 추가 */}
    <Solutions />
    {/* 4. 인터랙티브 리본 섹션 추가 */}
    <EngineeringCore />
    {/* 5. 케이스 스터디 섹션 추가 */}             
    <CaseStudies />
    {/* 6. 클라이언트 로고 */}
    <ClientLogos />
    {/* 💡 마지막 상담 섹션 */}
    <Contact />
    </>
  );
}