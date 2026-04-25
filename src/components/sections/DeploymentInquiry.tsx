"use client";

import Link from 'next/link';
import { Terminal as TerminalIcon, Cpu, Code2 } from "lucide-react";

export default function DeploymentInquiry() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl">
          {/* 터미널 헤더 */}
          <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-[10px] text-slate-400 font-mono font-bold tracking-widest uppercase">
              Connection Protocol: SECURE_ID_882
            </span>
          </div>

          <div className="p-12 text-center">
            <div className="inline-flex p-4 rounded-3xl bg-indigo-500/10 text-indigo-400 mb-8">
              <Code2 size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              당신의 비즈니스 로직을 <br />
              <span className="text-indigo-400">시스템으로 배포할 준비</span>가 되셨나요?
            </h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
              우리는 단순한 '외주'가 아닌 '엔지니어링 파트너십'을 제안합니다. <br />
              아키텍처 설계부터 실제 배포까지, 전문가의 언어로 대화하세요.
            </p>
            
            <Link href="/contact">
            <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 uppercase tracking-widest text-sm">
                Launch Discovery Call
            </button>
            </Link>
            
            <div className="mt-12 flex justify-center gap-8 opacity-30 grayscale pointer-events-none">
              {/* 기술 스택 아이콘들 (Next.js, Python, AWS 등) */}
              <div className="h-6 w-16 bg-white rounded" />
              <div className="h-6 w-16 bg-white rounded" />
              <div className="h-6 w-16 bg-white rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}