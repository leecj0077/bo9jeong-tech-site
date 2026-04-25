"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// =========================================================
// 💡 WebGL 커스텀 셰이더 (Stripe 효과의 핵심 비밀)
// 마우스 위치를 실시간으로 받아 면을 '꿀렁거리게' 부풀립니다.
// =========================================================

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPos;
  uniform float uTime;
  uniform vec2 uMouse; // 마우스의 노멀라이즈드 좌표 (-1 ~ 1)

  void main() {
    vUv = uv;
    vec3 pos = position;

    // 1. 기본 흐름 파동 (숨 쉬는 느낌)
    float baseWave = sin(pos.x * 0.15 + uTime * 0.4) * 2.0;
    
    // 💡 2. 인터랙션 핵심: 마우스 주변 '꿀렁임(Bulge)' 이펙트
    // 마우스 좌표와 현재 꼭짓점(Vertex) 좌표 사이의 거리를 계산합니다.
    vec2 p = vec2(pos.x / 30.0, pos.y / 8.0); // 좌표 스케일 조정
    float dist = distance(p, uMouse * vec2(1.2, 1.0)); // 마우스 영향 반경 보정

    // 마우스와 가까울수록 강해지는 지수 함수 기반의 '부풀어 오름' 팩터
    // (영향 반경과 세기를 조절할 수 있습니다.)
    float bulgeFactor = exp(-dist * dist * 3.5) * 6.0;

    // Y축(높이)과 Z축(깊이)에 동시에 영향을 주어 볼륨감 있는 꿀렁임을 만듭니다.
    pos.y += baseWave + (bulgeFactor * 1.8);
    pos.z += bulgeFactor * 2.0;

    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPos;
  uniform float uTime;

  void main() {
    // 💡 Stripe 특유의 선명하고 고급스러운 컬러 팔레트 세팅
    vec3 c1 = vec3(0.18, 0.28, 0.95); // Deep Indigo
    vec3 c2 = vec3(0.72, 0.10, 0.88); // Vibrant Purple
    vec3 c3 = vec3(0.96, 0.18, 0.48); // Magenta Pink
    vec3 c4 = vec3(1.0, 0.53, 0.1);   // Warm Orange

    // Y축(세로) 비율에 따라 4가지 색상을 물감처럼 매끄럽게 블렌딩 (가닥 형태 형성)
    float t = vUv.y;
    vec3 color = mix(c1, c2, smoothstep(0.0, 0.25, t));
    color = mix(color, c3, smoothstep(0.25, 0.55, t));
    color = mix(color, c4, smoothstep(0.55, 0.85, t));
    color = mix(color, c1, smoothstep(0.85, 1.0, t)); // 다시 남색으로 마무리

    // 굴곡에 따른 가짜 명암(Lighting)을 주어 입체감 극대화
    float lighting = sin(vPos.z * 0.4) * 0.15 + 0.95;
    color *= lighting;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function InteractiveRibbon() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) } // 마우스 좌표 초기값
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      // 시간 업데이트 (자동 흐름 애니메이션)
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // 💡 마우스 위치 추적 및 WebGL에 값 전달
      // `@react-three/fiber`가 제공하는 노멀라이즈드(-1~1) 마우스 좌표를 사용합니다.
      materialRef.current.uniforms.uMouse.value.set(state.mouse.x, state.mouse.y);
    }
  });

  return (
    // 리본을 사선으로 기울여 역동적인 구도 연출
    <mesh ref={meshRef} position={[0, 1, -10]} rotation={[0.0, 0, -Math.PI / 4.8]}>
      {/* 가로 60, 세로 16의 거대한 면을 아주 잘게 쪼개어 극강의 부드러움 확보 */}
      <planeGeometry args={[60, 16, 256, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        transparent={false}
      />
    </mesh>
  );
}

export default function EngineeringCoreCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }} className="pointer-events-none">
      <InteractiveRibbon />
    </Canvas>
  );
}