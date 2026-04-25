"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// =====================================================================
// 💡 WebGL 커스텀 셰이더 (Stripe 효과의 핵심 비밀)
// 격자무늬가 깨지는 현상을 원천 차단하고, 픽셀 단위로 색을 칠합니다.
// =====================================================================

// 1. 형태를 구부리는 셰이더 (Vertex Shader)
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPos;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // 리본이 바람에 펄럭이며 우아하게 꼬이는 수학 공식
    float wave = sin(pos.x * 0.08 + uTime * 0.4) * 2.5;
    float twist = cos(pos.x * 0.05 + uTime * 0.3) * 4.0;

    // Y축(세로) 위치에 따라 비틀어지도록 설정하여 입체적인 나선 형성
    pos.y += wave;
    pos.z += twist * (pos.y / 6.0);

    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// 2. 색상과 질감을 칠하는 셰이더 (Fragment Shader)
const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPos;
  uniform float uTime;

  void main() {
    // 💡 Stripe 특유의 고채도 프리미엄 컬러 팔레트 세팅
    vec3 c1 = vec3(0.24, 0.35, 0.98); // Deep Blue
    vec3 c2 = vec3(0.76, 0.15, 0.85); // Vibrant Purple
    vec3 c3 = vec3(0.98, 0.18, 0.45); // Neon Pink
    vec3 c4 = vec3(1.0, 0.55, 0.1);   // Bright Orange

    // X축을 따라 4가지 색상을 물감처럼 매끄럽게 블렌딩 (격자무늬 제로)
    float t = vUv.x;
    vec3 color = mix(c1, c2, smoothstep(0.0, 0.35, t));
    color = mix(color, c3, smoothstep(0.35, 0.65, t));
    color = mix(color, c4, smoothstep(0.65, 1.0, t));

    // 💡 핵심 디테일: Stripe 리본에 있는 '실크 같은 미세한 가로 결(Striation)' 추가
    float fibers = sin(vUv.y * 300.0 + uTime * 1.5) * 0.025;
    float fibers2 = cos(vUv.y * 600.0 - uTime * 2.0) * 0.015;
    color += fibers + fibers2;

    // 3D 굴곡에 따른 가짜 명암(Lighting)을 주어 입체감 극대화
    float lighting = sin(vPos.z * 0.4 + uTime) * 0.1 + 0.9;
    color *= lighting;

    // 살짝 투명도를 주어 뒤쪽 꼬인 면이 비치게 함
    gl_FragColor = vec4(color, 0.95);
  }
`;

// =====================================================================

function StripeRibbon() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // 프레임마다 시간(uTime)을 흘려보내 애니메이션 작동
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), []);

  return (
    // 리본을 사선으로 기울여 역동적인 구도 연출
    <mesh position={[0, 0, -8]} rotation={[-0.1, 0, -Math.PI / 5]}>
      {/* 가로 50, 세로 15의 거대한 천(Plane)을 아주 잘게 쪼개어 극강의 부드러움 확보 */}
      <planeGeometry args={[50, 15, 256, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        transparent={true}
      />
    </mesh>
  );
}

export default function ThreadAnimation() {
  return (
    // 깨끗하고 밝은 화이트톤 캔버스 유지
    <div className="absolute inset-0 z-0 bg-[#ffffff] overflow-hidden">
      
      {/* 바탕에 은은하게 깔리는 색상 스포트라이트 */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-500/10 rounded-full blur-[120px]" />
      
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <StripeRibbon />
      </Canvas>

      {/* 미세 노이즈 오버레이: 디지털 밴딩(색상 계단) 현상을 막는 마지막 터치 */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
      />
    </div>
  );
}