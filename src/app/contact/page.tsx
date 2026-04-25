"use client";

import dynamic from 'next/dynamic';
import DeploymentProtocols from "@/components/sections/DeploymentProtocols";
import Contact from "@/components/sections/Contact";
const ContactHero = dynamic(() => import('@/components/sections/ContactHero'), { ssr: false });

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <ContactHero />
      
      {/* 💡 대표님이 제안하신 14 / 30 / 90일 코스 선택 섹션 */}
      <DeploymentProtocols />

      {/* 최종 폼 */}
      <Contact />
    </main>
  );
}