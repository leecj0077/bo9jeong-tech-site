"use client";

import { motion } from "framer-motion";

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
      {/* 1. 블루 포인트 애니메이션 */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px]"
      />

      {/* 2. 인디고 포인트 애니메이션 */}
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px]"
      />

      {/* 3. 에메랄드/그린 포인트 애니메이션 (AI 느낌 강조) */}
      <motion.div
        animate={{
          x: ["0%", "30%", "0%"],
          y: ["30%", "0%", "30%"],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-teal-500/10 rounded-full blur-[100px]"
      />

      {/* 미세한 노이즈 오버레이 (질감 추가) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
    </div>
  );
}