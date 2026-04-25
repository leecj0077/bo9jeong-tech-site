"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// 💡 1. props에서 uuid를 제외하고 전달받도록 수정
const DataCube = ({ color, velocity, uuid, ...props }: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const rotationSpeed = useMemo(() => ({
    x: THREE.MathUtils.randFloat(0.5, 2),
    y: THREE.MathUtils.randFloat(0.5, 2),
    z: THREE.MathUtils.randFloat(0.5, 2),
  }), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.position.y -= velocity * delta;
    meshRef.current.rotation.x += rotationSpeed.x * delta;
    meshRef.current.rotation.y += rotationSpeed.y * delta;
    meshRef.current.rotation.z += rotationSpeed.z * delta;
  });

  return (
    // 💡 {...props} 안에는 이제 'id'가 없으므로 안전합니다.
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[0.35, 0.35, 0.35]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        metalness={0.6}
        roughness={0.1}
      />
    </mesh>
  );
};

const FallingDataStream = () => {
  const [cubes, setCubes] = useState<any[]>([]);
  const lastSpawnTime = useRef(0);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 💡 2. 'id' 대신 'uuid'라는 명칭 사용
    if (time - lastSpawnTime.current > 0.8 && cubes.length < 50) {
      lastSpawnTime.current = time;
      const newCube = {
        uuid: THREE.MathUtils.generateUUID(), // id -> uuid
        position: [THREE.MathUtils.randFloatSpread(12), 4, THREE.MathUtils.randFloatSpread(6)], 
        velocity: THREE.MathUtils.randFloat(1.2, 2.5),
        color: Math.random() > 0.5 ? "#6366f1" : "#a5b4fc",
      };
      setCubes(prev => [...prev, newCube]);
    }

    setCubes(prev => prev.map(c => ({
      ...c,
      position: [c.position[0], c.position[1] - c.velocity * delta, c.position[2]]
    })).filter(c => c.position[1] > -4));
  });

  return (
    <>
      {cubes.map(cube => (
        // 💡 3. key값에 uuid 사용
        <DataCube key={cube.uuid} {...cube} />
      ))}
    </>
  );
};

export default function CaseStudyFooter() {
  return (
    <section className="relative h-[35vh] bg-slate-50/50 flex items-center justify-center overflow-hidden border-t border-slate-100 selection:bg-indigo-500/30">
      <div className="absolute inset-0 z-0 opacity-80"> 
        <Canvas>
           <PerspectiveCamera makeDefault position={[0, 0, 8]} />
           <ambientLight intensity={1} />
           <pointLight position={[10, 10, 10]} intensity={1.5} color="#e0e7ff" />
           <FallingDataStream />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.4em] mb-4">
            CONSTANT INNOVATION
          </p>
          <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter leading-tight mb-5">
            보구정디벨롭의 성공 기록은<br/> <span className="text-indigo-600">지금 이 순간에도</span> 쓰여지고 있습니다.
          </h3>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            전문가 집단이 최상의 기술로 진행 중인 새로운 고난도 프로젝트들이 검증되는 대로, <strong className="text-slate-700">이 아카이브는 지속적으로 업데이트</strong>될 것입니다. 우리의 증명은 멈추지 않습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}