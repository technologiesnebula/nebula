"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import { colorsHex } from "@/lib/design-tokens";

/** Glowing, slowly morphing energy core. */
function Core() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.14;
    ref.current.rotation.x = t * 0.07;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={ref} scale={1.45}>
        <sphereGeometry args={[1.25, 64, 64]} />
        <MeshDistortMaterial
          color={colorsHex.primaryDeep}
          emissive={colorsHex.primary}
          emissiveIntensity={1.15}
          roughness={0.18}
          metalness={0.55}
          distort={0.34}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

/** Whole scene with subtle pointer parallax. */
function Scene() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.32;
    const targetX = -state.pointer.y * 0.2;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.03;
  });

  return (
    <group ref={group}>
      <Stars
        radius={70}
        depth={45}
        count={2200}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      <Core />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight
        position={[5, 4, 5]}
        intensity={55}
        color={colorsHex.primaryLight}
      />
      <pointLight
        position={[-6, -3, -4]}
        intensity={32}
        color={colorsHex.primaryDeep}
      />
      <Scene />
      <EffectComposer>
        <Bloom
          intensity={1.05}
          luminanceThreshold={0.12}
          luminanceSmoothing={0.9}
          radius={0.78}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
