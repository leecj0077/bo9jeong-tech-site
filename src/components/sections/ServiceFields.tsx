"use client";

import { Layout, Smartphone, Database, Zap, BrainCircuit, Cuboid } from "lucide-react";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================
// 💡 WebGL: 마우스에 반응하는 광섬유(Fiber Optic) 가닥 이펙트
// =========================================================
function FiberStrands() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, pointer } = useThree();

  const count = 350; 
  
  const { positions, originalEnds, colors } = useMemo(() => {
    const pos = new Float32Array(count * 6);
    const ends = new Float32Array(count * 3);
    const cols = new Float32Array(count * 6);

    const palette = [
      new THREE.Color("#6366f1"), 
      new THREE.Color("#ec4899"), 
      new THREE.Color("#f59e0b"), 
    ];

    // 💡 카메라 시야각(FOV 45)의 하단 경계선에 맞춘 완벽한 바닥 좌표 (-4.5)
    const BOTTOM_Y = -4.5; 

    for (let i = 0; i < count; i++) {
      // 시작점 (화면 맨 밑바닥에 밀착)
      pos[i * 6] = (Math.random() - 0.5) * 1.5; 
      pos[i * 6 + 1] = BOTTOM_Y; 
      pos[i * 6 + 2] = (Math.random() - 0.5) * 1.5;

      const angle = Math.PI * (0.15 + Math.random() * 0.7); 
      
      // =========================================================
      // 💡 수정: 선의 길이(반경)를 확 줄여서 화면 안에 쏙 들어오게 합니다.
      // 기존 '8 + Math.random() * 6' 에서 수치를 낮췄습니다.
      // 5는 최소 길이, 3.5는 랜덤하게 더해지는 추가 길이입니다.
      // =========================================================
      const radius = 5 + Math.random() * 2.5; 
      
      const endX = Math.cos(angle) * radius;
      const endY = BOTTOM_Y + Math.sin(angle) * radius;
      const endZ = (Math.random() - 0.5) * 4;

      // ... (아래 코드는 기존과 동일) ...
      pos[i * 6 + 3] = endX;
      pos[i * 6 + 4] = endY;
      pos[i * 6 + 5] = endZ;

      ends[i * 3] = endX;
      ends[i * 3 + 1] = endY;
      ends[i * 3 + 2] = endZ;

      const color = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 6] = color.r * 0.1; cols[i * 6 + 1] = color.g * 0.1; cols[i * 6 + 2] = color.b * 0.1;
      cols[i * 6 + 3] = color.r;   cols[i * 6 + 4] = color.g;   cols[i * 6 + 5] = color.b;
    }
    return { positions: pos, originalEnds: ends, colors: cols };
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = linesRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const origX = originalEnds[i * 3];
      const origY = originalEnds[i * 3 + 1];

      const waveX = Math.sin(time * 1.5 + origY) * 0.3;
      const waveY = Math.cos(time * 1.0 + origX) * 0.3;

      let targetX = origX + waveX;
      let targetY = origY + waveY;

      const dx = targetX - mouseX;
      const dy = targetY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 4.0) { 
        const force = (4.0 - dist) / 4.0;
        targetX += (dx / dist) * force * 2.5; 
        targetY += (dy / dist) * force * 2.5;
      }

      array[i * 6 + 3] += (targetX - array[i * 6 + 3]) * 0.1;
      array[i * 6 + 4] += (targetY - array[i * 6 + 4]) * 0.1;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        {/* 💡 args prop을 추가하여 생성자 인자를 명시적으로 전달합니다. */}
        <bufferAttribute 
          attach="attributes-position" 
          args={[positions, 3]}     // [배열, 아이템사이즈]
          count={count * 2} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          args={[colors, 3]}        // [배열, 아이템사이즈]
          count={count * 2} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <lineBasicMaterial 
        vertexColors 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending} 
      />
    </lineSegments>
  );
}

const fields = [
  {
    title: "고품격 웹사이트",
    desc: "브랜드의 가치를 시각적으로 전달하고 사용자가 쓰기 편한 웹사이트를 구축합니다.",
    icon: <Layout className="text-indigo-600" size={32} />
  },
  {
    title: "성능 좋은 전용 앱",
    desc: "아이폰부터 안드로이드까지, 비즈니스를 한 손안에 담는 강력한 앱을 만듭니다.",
    icon: <Smartphone className="text-indigo-600" size={32} />
  },
  {
    title: "기관/기업 맞춤형 시스템",
    desc: "복잡한 행정 및 내부 업무를 자동화하고 효율적으로 관리하는 지능형 시스템을 개발합니다.",
    icon: <Database className="text-indigo-600" size={32} />
  },
  {
    title: "미래형 AI 기술",
    desc: "반복되는 어려운 업무를 컴퓨터가 스스로 학습하고 처리하도록 인공지능을 결합합니다.",
    icon: <Zap className="text-indigo-600" size={32} />
  }
];

export default function ServiceFields() {
  return (
    <section className="relative pt-24 bg-slate-950 border-y border-slate-900 overflow-hidden flex flex-col">
       <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {fields.map((field, idx) => (
            <div key={idx} className="group">
              <div className="mb-6 inline-block p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                {field.icon}
              </div>
              <h3 className="text-xl text-white text-slate-900 mb-4">{field.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {field.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[450px] mt-auto">
          
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
              <FiberStrands />
            </Canvas>
          </div>
        </div>
    </section>
  );
}