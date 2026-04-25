"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function SuccessCloud() {
  const [sphere] = useState(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 10;
      arr[i3 + 1] = (Math.random() - 0.5) * 10;
      arr[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#6366f1" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function CaseStudyHero() {
  return (
    <section className="relative h-[70vh] bg-white flex items-center overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <SuccessCloud />
          </Float>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-indigo-600 font-mono text-sm font-bold tracking-[0.4em] mb-6">
            ENGINEERING ARCHIVES
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            PROVEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              OUTCOMES.
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            우리는 가설을 증명으로 바꿉니다. <br />
            실제 현장에서 작동하고, 비즈니스의 지표를 바꾼 <br />
            보구정디벨롭의 하이엔드 엔지니어링 기록입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}