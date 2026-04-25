"use client";

import { motion } from "framer-motion";

export default function RibbonGradient() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#fafafa]">
      {/* 믹스 블렌드(multiply)와 극단적인 Blur를 사용하여 
        도형들이 겹칠 때 3D 리본처럼 색상이 섞이는 효과를 냅니다.
      */}
      <div className="absolute inset-0 opacity-80 mix-blend-multiply filter blur-[100px]">
        
        {/* 리본 줄기 1: 퍼플 -> 핑크 (좌측 상단에서 사선으로) */}
        <motion.div
          animate={{
            rotate: [15, 25, 15],
            scale: [1, 1.1, 1],
            x: ["-5%", "5%", "-5%"]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[80%] rounded-[100%] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 origin-center"
        />

        {/* 리본 줄기 2: 오렌지 -> 옐로우 (중앙을 가로지르는 흐름) */}
        <motion.div
          animate={{
            rotate: [-20, -10, -20],
            scale: [1, 1.2, 1],
            y: ["-5%", "5%", "-5%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] left-[20%] w-[80%] h-[60%] rounded-[100%] bg-gradient-to-r from-pink-400 via-orange-400 to-amber-300 origin-center"
        />

        {/* 리본 줄기 3: 블루 -> 퍼플 (우측 하단에서 꼬이는 느낌) */}
        <motion.div
          animate={{
            rotate: [45, 30, 45],
            scale: [1.1, 1, 1.1],
            x: ["5%", "-5%", "5%"]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[70%] rounded-[100%] bg-gradient-to-tl from-blue-600 via-indigo-400 to-purple-300 origin-center"
        />

      </div>
      
      {/* 화이트 노이즈 텍스처 오버레이로 고급스러움 극대화 */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
      />
    </div>
  );
}