"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // 💡 경로가 변경될 때마다 로딩 상태를 트리거합니다.
    setIsNavigating(true);

    // 실제 데이터 로딩과 별개로, 사용자에게 전환을 인지시키기 위한 최소 지연 시간
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600); // 0.6초간 유지

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-white/80 backdrop-blur-md flex flex-col items-center justify-center"
        >
          {/* 상단 프로그레스 바 */}
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            className="absolute top-0 left-0 h-1 bg-indigo-600 shadow-[0_0_15px_#4f46e5]"
          />
          
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping" />
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] animate-pulse">
                Initializing System...
              </p>
              <p className="text-[10px] font-bold text-slate-400 font-mono">
                BO9JEONG_ENGINE_CORE_CONNECTING
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}