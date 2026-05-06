"use client";

import { motion } from "framer-motion";

export default function OurTrust() {
  return (
    <section className="py-32 bg-indigo-900 text-white overflow-hidden relative">
      {/* 💡 배경 디자인 요소 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800/30 skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              한 번의 구축을 넘어 <br />
              <span className="text-indigo-400">지속 가능한 동반자</span>로
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-3xl font-black text-indigo-400 italic">01.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">투명한 개발 과정 공개</h4>
                  <p className="text-indigo-200/80 leading-relaxed">진행 상황을 실시간으로 공유하여 발주처와의 소통 공백을 제로로 만듭니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-black text-indigo-400 italic">02.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">철저한 유지보수 시스템</h4>
                  <p className="text-indigo-200/80 leading-relaxed">개발 완료 후에도 예기치 못한 상황에 즉각 대응하는 전담팀을 운영합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-black text-indigo-400 italic">03.</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">데이터 기반의 성장 제안</h4>
                  <p className="text-indigo-200/80 leading-relaxed">단순한 기능 구현을 넘어, 비즈니스가 더 성장할 수 있는 기술적 대안을 제시합니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20">
            <blockquote className="text-2xl font-medium leading-relaxed italic mb-8">
              "우리는 코드를 파는 것이 아니라, <br />
              고객의 문제를 해결하는 **기술적 해답**을 제공합니다."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-black text-sm">보구정</div>
              <div>
                <p className="font-bold">보구정디벨롭 엔지니어링 팀</p>
                <p className="text-sm text-indigo-300">Engineering is our DNA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}