"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingKakao() {
  return (
    // 💡 z-50으로 최상단 유지, md:flex를 통해 PC 모드에서 주로 강조
    <motion.a
      href="https://pf.kakao.com/_PGGPu"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 group"
    >
      {/* 💡 말풍선 툴팁 (마우스 호버 시 노출) */}
      <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <p className="text-sm font-black text-slate-700 whitespace-nowrap">
          실시간 구축 문의
        </p>
      </div>

      {/* 💡 카카오톡 로고 버튼 */}
      <div className="w-16 h-16 bg-[#FEE500] rounded-[22px] shadow-2xl shadow-yellow-400/30 flex items-center justify-center overflow-hidden border-4 border-white">
        <Image 
          src="/kakao.png" 
          alt="카카오톡 상담" 
          width={40} 
          height={40} 
          className="object-contain"
        />
      </div>
    </motion.a>
  );
}