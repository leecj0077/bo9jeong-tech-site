"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const GeneticParticles = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const [hovered, setHovered] = useState(false);
  const count = 2500; // 입자 수를 적절히 조절하여 밀도 최적화

  // 1. DNA 형태 위치 (초기값)
  const spherePositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 3.5;
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      arr[i3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  // 2. 그리드 형태 위치
  const gridPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const size = 12; 
    let i = 0;
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          if (i >= count) break;
          const i3 = i * 3;
          arr[i3] = (x - size / 2) * 0.6;
          arr[i3 + 1] = (y - size / 2) * 0.6;
          arr[i3 + 2] = (z - size / 2) * 0.6;
          i++;
        }
      }
    }
    return arr;
  }, []);

  const targetPositions = hovered ? gridPositions : spherePositions;

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position;
    
    for (let i = 0; i < count * 3; i++) {
      positions.array[i] = THREE.MathUtils.lerp(
        positions.array[i],
        targetPositions[i],
        0.04
      );
    }
    positions.needsUpdate = true;
    pointsRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Points ref={pointsRef} positions={spherePositions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          // 💡 대비가 확실한 색상으로 고정
          color={hovered ? "#312e81" : "#4f46e5"} 
          size={0.06} // 💡 입자 크기 대폭 확대 (안 보일 수 없게)
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.8} // 💡 불투명도 상향
        />
      </Points>
    </group>
  );
};

export default function TechDNAManifesto() {
  return (
    // 💡 bg-slate-50을 주어 순백색 입자라도 배경과 분리되게 함
    <section className="relative h-[90vh] w-full bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
      
      {/* 💡 Canvas를 감싸는 div가 화면을 꽉 채우도록 강제 */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <GeneticParticles />
          </Float>
        </Canvas>
      </div>

      {/* 노이즈 효과 제거 (시인성 방해 요소 차단) */}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full text-center pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="space-y-12">
          <motion.p className="text-xs font-bold text-indigo-500 uppercase tracking-[0.5em] mb-4">
            THE ESSENCE OF BO9JEONG DEVELOP
          </motion.p>

          <motion.h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.95]">
            ENGINEERING <br />
            IS OUR <span className="text-indigo-600">DNA.</span>
          </motion.h1>

          <motion.div className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium space-y-6">
            <p className="bg-white/50 backdrop-blur-sm inline-block p-2 rounded-lg">
              우리는 기술을 단순히 비즈니스의 도구로 정의하지 않습니다. <br />
              <strong className="text-slate-900 font-black">엔지니어링은 무결점을 향한 본능이자 유전 정보입니다.</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}