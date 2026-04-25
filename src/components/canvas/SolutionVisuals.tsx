"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// 1. AI Vision 전용: 스캐닝하는 듯한 입자들
export const AIVisionBg = () => (
  <Canvas camera={{ position: [0, 0, 1] }}>
    <Points positions={new Float32Array(Array.from({ length: 3000 }, () => (Math.random() - 0.5) * 5))}>
      <PointMaterial transparent color="#6366f1" size={0.005} sizeAttenuation={true} depthWrite={false} />
    </Points>
  </Canvas>
);

// 2. Digital Twin 전용: 회전하는 와이어프레임 구조물
export const DigitalTwinBg = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 3, 3]} />
        <MeshDistortMaterial color="#ec4899" speed={2} distort={0.4} wireframe />
      </mesh>
    </Canvas>
  );
};

// 3. Enterprise 전용: 흐르는 데이터 스트림
export const EnterpriseBg = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <gridHelper args={[20, 20, "#1e293b", "#0f172a"]} rotation={[Math.PI / 2, 0, 0]} />
    <Sphere args={[1, 64, 64]}>
      <MeshDistortMaterial color="#f59e0b" speed={3} distort={0.2} />
    </Sphere>
  </Canvas>
);