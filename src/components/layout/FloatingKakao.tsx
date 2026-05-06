"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingActions() {
  const buttons = [
    
    {
      name: "카카오톡",
      href: "https://pf.kakao.com/_PGGPu",
      img: "/kakao.png",
      bgColor: "bg-[#FEE500]",
      shadow: "shadow-yellow-400/30",
      tooltip: "실시간 구축 문의"
    },
    {
      name: "공식 홈페이지",
      href: "https://bo9jeong.com",
      img: "/logo.png",
      bgColor: "bg-white",
      shadow: "shadow-slate-200",
      tooltip: "보구정제주 홈페이지"
    },
  ];

  return (
    // 💡 버튼들을 세로로 정렬하고 우측 하단에 고정
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4 items-end">
      {buttons.map((btn, idx) => (
        <motion.a
          key={idx}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-3 group"
        >
          {/* 💡 개별 툴팁 메시지 */}
          <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            <p className="text-sm font-black text-slate-700 whitespace-nowrap">
              {btn.tooltip}
            </p>
          </div>

          {/* 💡 공통 규격의 로고 버튼 (w-16 h-16) */}
          <div className={`w-16 h-16 ${btn.bgColor} rounded-[22px] shadow-2xl ${btn.shadow} flex items-center justify-center overflow-hidden border-4 border-white`}>
            <Image 
              src={btn.img} 
              alt={btn.name} 
              width={idx === 0 ? 48 : 40} // 로고 크기에 따른 미세 조정
              height={idx === 0 ? 48 : 40} 
              className="object-contain"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
}