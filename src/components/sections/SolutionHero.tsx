"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Grid } from "@react-three/drei";
import { motion } from "framer-motion";

export default function SolutionHero() {
  return (
    <section className="relative h-[70vh] bg-white flex items-center overflow-hidden border-b border-slate-100">
      {/* 💡 Light Mode Three.js: 화이트 캔버스 위의 정밀한 노드 */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
          <Grid cellSize={1} sectionSize={3} fadeDistance={20} infiniteGrid={true} sectionColor="#e2e8f0" cellColor="#f1f5f9" />
          <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[2.6, 64, 64]}>
              <MeshDistortMaterial color="#6366f1" speed={2} distort={0.5} transparent opacity={0.1} wireframe />
            </Sphere>
          </Float>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-indigo-600 font-mono text-sm font-bold tracking-[0.4em] mb-6">
            ENGINEERING MANIFESTO 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            SOLUTIONS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-black">
              INTEGRATED.
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            보구정디벨롭의 핵심 기술력을 단 하나의 흐름으로 정의합니다. <br />
            복잡한 로직의 단순화, 그것이 우리가 추구하는 엔지니어링의 본질입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}