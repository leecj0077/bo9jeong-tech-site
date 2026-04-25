"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function BlueprintCore() {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  // 1. 파편화된 골조 데이터 (12개 고정)
  const fragmentCount = 90;
  const fragments = useMemo(() => {
    return Array.from({ length: fragmentCount }).map(() => ({
      pos: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(5)
      ),
      rot: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, 0),
    }));
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    
    // 💡 에러 방지: fragments 개수만큼만 반복문을 돌립니다.
    for (let i = 0; i < fragmentCount; i++) {
      const child = groupRef.current.children[i] as THREE.Mesh;
      if (!child) continue;

      const frag = fragments[i];
      
      if (hovered) {
        // 💡 [HOVER] 정육면체 형태로 조립 (Snap to Grid)
        const targetPos = new THREE.Vector3(
          (i % 3 - 1) * 1.5, 
          (Math.floor(i / 3) % 2 - 0.5) * 2, 
          (Math.floor(i / 6) % 2 - 0.5) * 2
        );
        // lerp 오타 수정 (learn -> lerp)
        child.position.lerp(targetPos, 0.1);
        child.rotation.set(
          THREE.MathUtils.lerp(child.rotation.x, 0, 0.1),
          THREE.MathUtils.lerp(child.rotation.y, 0, 0.1),
          THREE.MathUtils.lerp(child.rotation.z, 0, 0.1)
        );
      } else {
        // 💡 [IDLE] 파편들이 각자의 위치에서 부유
        const offset = t + i;
        const idlePos = new THREE.Vector3(
          frag.pos.x + Math.sin(offset * 0.5) * 0.5,
          frag.pos.y + Math.cos(offset * 0.5) * 0.5,
          frag.pos.z
        );
        child.position.lerp(idlePos, 0.05);
        child.rotation.x += delta * 0.5;
        child.rotation.y += delta * 0.3;
      }
    }

    // 전체 그룹의 아주 느린 회전
    groupRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 파편들 (12개) */}
      {fragments.map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial 
            wireframe 
            color={hovered ? "#4f46e5" : "#94a3b8"} 
            transparent 
            opacity={hovered ? 0.9 : 0.4}
            //thickness={2}
          />
        </mesh>
      ))}
      
      {/* 💡 중앙 핵: 얘는 반복문 대상에서 제외하도록 코드에서 처리함 */}
      <Sphere args={[0.6, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#4f46e5" 
          emissive="#4f46e5" 
          emissiveIntensity={hovered ? 5 : 0} 
          transparent 
          opacity={hovered ? 0.8 : 0} 
        />
      </Sphere>
    </group>
  );
}

export default function ContactHero() {
  return (
    <section className="relative h-[65vh] bg-white flex items-center justify-center overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2.5} color="#e0e7ff" />
          <BlueprintCore />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-6 pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-indigo-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">DEPLOYMENT PROTOCOL</p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.95]">
            상상을 <br /> <span className="text-indigo-600">설계</span>하고 <span className="text-indigo-600 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">구축</span>합니다.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            보구정디벨롭은 모호한 아이디어를 정교한 아키텍처로 치환합니다. <br />
            비즈니스를 지탱할 가장 견고한 <strong className="text-slate-800 font-black">기술적 골조</strong>를 확인하세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}