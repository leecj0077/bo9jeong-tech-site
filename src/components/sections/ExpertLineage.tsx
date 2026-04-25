"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import * as THREE from "three";

// =========================================================
// 💡 Three.js 아트워크: 'Expert DNA Helix'
//    전문가의 집념이 얽혀 만든 정교한 이중 나선 구조
// =========================================================
const DnaHelix = () => {
  const pointsRef1 = useRef<THREE.Points>(null!);
  const pointsRef2 = useRef<THREE.Points>(null!);

  const count = 120; // 나선당 입자 수 (정밀도 조절)
  const radius = 2.5; // 나선 반지름
  const height = 15; // 전체 높이
  const turns = 2.5; // 나선의 회전 수

  // 이중 나선 위치 데이터 생성 (useMemo로 최적화)
  const [strand1, strand2] = useMemo(() => {
    const pos1 = new Float32Array(count * 3);
    const pos2 = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // 나선의 수직 위치 [-height/2 ~ height/2]
      const y = (i / count - 0.5) * height;
      // 나선의 회전 각도
      const angle = (i / count) * Math.PI * 2 * turns;

      // Strand 1 (기본 나선)
      pos1[i3] = radius * Math.cos(angle);
      pos1[i3 + 1] = y;
      pos1[i3 + 2] = radius * Math.sin(angle);

      // Strand 2 (180도 위상차를 둔 이중 나선)
      const oppositeAngle = angle + Math.PI;
      pos2[i3] = radius * Math.cos(oppositeAngle);
      pos2[i3 + 1] = y;
      pos2[i3 + 2] = radius * Math.sin(oppositeAngle);
    }
    return [pos1, pos2];
  }, []);

  // 애니메이션 로직: 서서히 자전하며 몽환적인 분위기 연출
  useFrame((state, delta) => {
    if (!pointsRef1.current || !pointsRef2.current) return;
    
    // 두 나선의 느린 자전 속도 설정
    const rotationSpeed = delta * 0.15;
    pointsRef1.current.rotation.y += rotationSpeed;
    pointsRef2.current.rotation.y += rotationSpeed;

    // 미세한 위아래 꿀렁임 (생명력 표현)
    const time = state.clock.getElapsedTime();
    pointsRef1.current.position.y = Math.sin(time * 0.5) * 0.2;
    pointsRef2.current.position.y = Math.sin(time * 0.5 + Math.PI) * 0.2;
  });

  // 입자 스타일 (옅고 신비로운 인디고 펄)
  const particleMaterialProps = {
    transparent: true,
    color: "#818cf8", // 옅은 인디고 색상
    size: 0.08, // 입자 크기
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending, // 딥 다크 배경 위에서 빛나는 효과
    opacity: 0.35, // 옅게 표현하기 위한 투명도
  };

  return (
    <group>
      {/* 나선 1 */}
      <Points ref={pointsRef1} positions={strand1} stride={3} frustumCulled={false}>
        <PointMaterial {...particleMaterialProps} />
      </Points>
      {/* 나선 2 */}
      <Points ref={pointsRef2} positions={strand2} stride={3} frustumCulled={false}>
        <PointMaterial {...particleMaterialProps} />
      </Points>
    </group>
  );
};

// =========================================================
// 💡 전문가 데이터 (기존과 동일)
// =========================================================
const EXPERTS = [
  {
    role: "Lead Solution Architect",
    dna: "Extreme Optimization",
    quote: "0.1ms의 지연 시간은 타협의 대상이 아닌, 정복의 대상입니다. 우리는 시스템의 한계를 밀어붙이는 데서 쾌감을 느큽니다.",
    specialty: "High-Traffic System & Cloud Native"
  },
  {
    role: "AI Vision Researcher",
    dna: "Visual Integrity",
    quote: "기계가 인간처럼 보는 것을 넘어, 인간이 보지 못하는 것까지 데이터로 치환하는 무결점 알고리즘을 설계합니다.",
    specialty: "Deep Learning & Image Processing"
  },
  {
    role: "Creative UI Engineer",
    dna: "Interactivity DNA",
    quote: "디자인과 개발의 경계를 허뭅니다. 코드로 예술을 구현하고, 사용자의 모든 터치에 감각적인 반응을 설계합니다.",
    specialty: "WebGL & High-End Interaction"
  }
];

export default function ExpertLineage() {
  return (
    // bg-slate-900 테두리와 z-index 최적화
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative border-t border-slate-800">
      
      {/* 💡 [핵심] 배경 Three.js 아트워크: DNA Helix (z-0: 텍스트 뒤 배치) */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-90">
        <Canvas>
           {/* 카메라 위치와 FOV 설정 */}
           <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
           <ambientLight intensity={1.2} />
           <pointLight position={[10, 10, 10]} intensity={1.5} color="#e0e7ff" />
           
           {/* 느릿하고 무작위적인 부유 효과 적용 */}
           <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3} >
             <DnaHelix />
           </Float>
        </Canvas>
      </div>

      {/* 💡 Three.js 배경 위에 깊이감을 더할 오버레이 그라데이션 */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 opacity-60" />

      {/* 콘텐츠 영역 (relative z-20: Three.js 및 그라데이션 위에 배치) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="mb-24">
          <h2 className="text-indigo-400 font-mono text-sm tracking-[0.4em] mb-4">EXPERT LINEAGE</h2>
          <p className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            도구는 같아도, <br /> 비즈니스를 <span className="text-indigo-400">다루는 유전자</span>는 다릅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {EXPERTS.map((expert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{expert.role}</span>
              </div>
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-indigo-500/20 w-12 h-12" />
                <p className="text-xl md:text-2xl font-bold leading-relaxed relative z-10 text-white font-medium">
                  {expert.quote}
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-tighter mb-1 font-black">Engineering DNA</p>
                <p className="text-xl font-black tracking-tight text-white">{expert.dna}</p>
                <p className="text-sm text-slate-500 mt-2 font-medium">{expert.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}