"use client";

import { motion } from "framer-motion";
import ThreadAnimation from "@/components/animations/ThreadAnimation";
import Link from "next/link";

export default function MainIntro() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-white overflow-hidden">
      {/* 💡 배경에는 은은한 기술적 그리드나 패턴만 배치 */}
      <ThreadAnimation />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)'}} />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.3em] text-indigo-600 bg-indigo-50 rounded-full uppercase">
            Professional Engineering Group
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
            복잡한 상상을 <br />
            <span className="text-indigo-600">튼튼한 현실</span>로
          </h1>
          <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            보구정디벨롭은 어려운 기술을 쉽게 풀어냅니다. <br />
            비즈니스에 꼭 필요한 **맞춤형 웹, 앱, 그리고 AI 솔루션**을 구축합니다.
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center font-bold">
          <Link href="/contact">
            <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              구축 상담 시작하기
            </button>
            </Link>
            <Link href="/solutions">
            <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">
              사업 분야 보기
            </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}