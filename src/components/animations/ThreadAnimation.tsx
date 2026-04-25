"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei"; // 💡 굵은 선을 그리기 위한 특수 컴포넌트

// 개별적인 굵은 선(가닥)을 관리하는 컴포넌트
function ThickStrand({ t, color, length }: { t: any, color: string, length: number }) {
  const lineRef = useRef<any>(null);

  // 선을 구성할 뼈대(좌표) 배열을 미리 생성해 둡니다.
  const points = useMemo(() => Array.from({ length }, () => new THREE.Vector3()), [length]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const time = state.clock.getElapsedTime();

    // =========================================================
    // 🎛️ 형태 및 속도 조절 패널
    // =========================================================
    const SPEED = 0.1;   
    const TWIST = 0.3;  
    const RADIUS = 0.8;  
    // =========================================================

    for (let j = 0; j < length; j++) {
      const x = (j / length) * 50; 
      const spread = Math.pow(x, 1.4) * 0.04; 

      const angle = x * TWIST + time * SPEED;

      const helixY = Math.sin(angle + t.strandPhase) * (spread * RADIUS);
      const helixZ = Math.cos(angle + t.strandPhase) * (spread * RADIUS);

      const y = helixY + (t.offsetY * spread);
      const z = helixZ + (t.offsetZ * spread);

      points[j].set(x, y, z);
    }

    // 💡 핵심 최적화: 매 프레임마다 React 렌더링을 거치지 않고, 
    // 그래픽 카드의 기하학 데이터(Positions)만 직접 업데이트하여 성능을 방어합니다.
    lineRef.current.geometry.setPositions(points.flatMap(p => [p.x, p.y, p.z]));
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      // =========================================================
      // 🎛️ 굵기 조절 패널 (여기서 선의 두께를 마음대로 바꾸세요!)
      // =========================================================
      lineWidth={0.2} // 💡 0.1 (얇음) ~ 5.0 (매우 두꺼움)
      transparent
      opacity={0.6}
    />
  );
}

function FlowingThickThreads() {
  // 💡 가닥 수(threadCount)를 800에서 60으로 줄여 굵직한 뼈대만 남깁니다.
  const threadCount = 300; 
  const length = 40; 

  const threadsConfig = useMemo(() => {
    const config = [];
    const colorGroups = [
      { name: 'Deep Blue', h: [0.55, 0.65] }, 
      { name: 'Soft Gold', h: [0.08, 0.15] }, 
      { name: 'Vibrant Purple', h: [0.75, 0.85] }  
    ];

    for (let i = 0; i < threadCount; i++) {
      let selectedGroup = colorGroups[0];
      const randomWeight = Math.random();
      if (randomWeight > 0.4 && randomWeight <= 0.7) selectedGroup = colorGroups[1];
      else if (randomWeight > 0.7) selectedGroup = colorGroups[2];

      const color = new THREE.Color().setHSL(
        selectedGroup.h[0] + Math.random() * (selectedGroup.h[1] - selectedGroup.h[0]), 
        0.85, 0.5 
      ).getStyle(); // Line 컴포넌트 호환을 위해 css 색상 문자열로 변환
      
      const strandPhase = i % 2 === 0 ? 0 : Math.PI;

      config.push({
        strandPhase,
        offsetY: (Math.random() - 0.5) * 1.5,
        offsetZ: (Math.random() - 0.5) * 1.5,
        color
      });
    }
    return config;
  }, []);

  return (
    <group position={[-10, 5, 0]} rotation={[0, 0, -0.2]}>
      {threadsConfig.map((t, index) => (
        <ThickStrand key={index} t={t} color={t.color} length={length} />
      ))}
    </group>
  );
}

export default function ThreadAnimation() {
  return (
    <div className="absolute inset-0 z-0 bg-[#fafafa] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-400/15 rounded-full blur-[140px]" />
      <div className="absolute top-[30%] left-[30%] w-[50%] h-[50%] bg-pink-400/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-400/15 rounded-full blur-[140px]" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <FlowingThickThreads />
      </Canvas>
      
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
      />
    </div>
  );
}