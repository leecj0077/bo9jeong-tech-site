"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Cuboid, Zap } from "lucide-react";

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

  // ... (기존 로직 동일)

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

// =========================================================
// 💡 전체 섹션 레이아웃
// =========================================================
const CORE_FEATURES = [
    {
      icon: <BrainCircuit size={20} className="text-pink-400" />,
      title: "AI-Driven Web & App",
      desc: "고도화된 AI 모델을 웹/앱 서비스에 깊숙이 연동하여 스마트한 사용자 경험을 제공합니다.",
    },
    {
      icon: <Zap size={20} className="text-orange-400" />,
      title: "Scalable Platform",
      desc: "초대용량 트래픽이 몰리는 글로벌 B2C/B2B 웹·앱에서도 지연 없이 쾌적하고 안정적인 서비스를 유지합니다.",
    },
    {
      icon: <Cuboid size={20} className="text-indigo-400" />,
      title: "Flawless Quality",
      desc: "아무리 복잡한 비즈니스 로직이라도 완벽하게 구현하여, 멈추거나 에러 없는 무결점 웹/앱을 완성합니다.",
    },
  ];

  export default function EngineeringCore() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % CORE_FEATURES.length);
      }, 4000); 
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="relative pt-24 bg-slate-950 border-y border-slate-900 overflow-hidden flex flex-col">
        
        <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
  
        {/* 💡 헤더 영역: '웹/앱 구축'이라는 본질을 명확히 드러냄 */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20 w-full mb-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-relaxed mb-4">
              초지능형 연동과 무결성 데이터 흐름 <br />
              최고의 웹/앱 플랫폼을 구축하는 보구정디벨롭의 코어
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto">
              우리는 단순한 화면 개발을 넘어, 고객의 비즈니스를 멈춤 없이 견인하는 강력한 웹/앱을 설계합니다.
            </p>
          </div>
        </div>
  
        {/* 시뮬레이션 캔버스 영역 */}
        <div className="relative w-full h-[450px] mt-auto">
          
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
              <FiberStrands />
            </Canvas>
          </div>
  
          {/* UI 컨테이너 */}
          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20 h-full pointer-events-none flex flex-col justify-between pb-8">
            
            <div className="mt-4">
              <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Platform Engine Active</span>
              </div>
            </div>
  
            <div className="w-full max-w-md mx-auto pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center bg-black/40 backdrop-blur-md px-8 py-5 rounded-3xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {CORE_FEATURES[activeIndex].icon}
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {CORE_FEATURES[activeIndex].title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {CORE_FEATURES[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
  
          </div>
        </div>
      </section>
    );
  }