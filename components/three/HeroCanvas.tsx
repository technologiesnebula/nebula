"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import type { Group, Mesh } from "three";
import { colorsHex } from "@/lib/design-tokens";

/**
 * Living energy core: a molten, slowly morphing sphere wrapped in a faceted
 * "alien" wireframe shell. Both react to the pointer/touch — the core swells
 * and distorts more as you move toward the edges, the shell counter-rotates.
 */
function Core({ scale }: { scale: number }) {
  const ref = useRef<Mesh>(null);
  const shell = useRef<Mesh>(null);
  // drei's distort material exposes `distort` as a live, mutable prop.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mat = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // pointer/touch "energy": 0 at rest/center → 1 toward the edges
    const energy = Math.min(1, Math.hypot(state.pointer.x, state.pointer.y));

    if (ref.current) {
      ref.current.rotation.y = t * 0.14;
      ref.current.rotation.x = t * 0.07;
      // gentle breathing + a reactive swell that follows the pointer
      const target = scale * (1 + Math.sin(t * 0.9) * 0.018 + energy * 0.06);
      const next = MathUtils.lerp(ref.current.scale.x, target, 0.08);
      ref.current.scale.setScalar(next);
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.1;
      shell.current.rotation.z = t * 0.05;
    }
    if (mat.current) {
      mat.current.distort = MathUtils.lerp(
        mat.current.distort,
        0.3 + energy * 0.22,
        0.05,
      );
    }
  });

  return (
    <Float speed={1.25} rotationIntensity={0.4} floatIntensity={1.05}>
      {/* molten core */}
      <mesh ref={ref} scale={scale}>
        <sphereGeometry args={[1.25, 96, 96]} />
        <MeshDistortMaterial
          ref={mat}
          color={colorsHex.primaryDeep}
          emissive={colorsHex.primary}
          emissiveIntensity={1.2}
          roughness={0.14}
          metalness={0.62}
          distort={0.32}
          speed={2}
        />
      </mesh>

      {/* alien energy shell — faint faceted cage that drifts the other way */}
      <mesh ref={shell} scale={scale * 1.14}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshBasicMaterial
          color={colorsHex.primaryLight}
          wireframe
          transparent
          opacity={0.13}
        />
      </mesh>
    </Float>
  );
}

/** Whole scene with subtle pointer parallax. */
function Scene() {
  const group = useRef<Group>(null);
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  // On portrait phones the centered core hides behind the headline. Lift it
  // into the open sky above the text and pull the camera back a touch so the
  // full shape is framed with more of the starfield around it.
  const portrait = size.height > size.width;

  useEffect(() => {
    // Pull the camera further back on phones so the orb reads small and a lot
    // more of the starfield fills the frame.
    camera.position.set(0, 0, portrait ? 7.6 : 6);
    camera.updateProjectionMatrix();
  }, [camera, portrait]);

  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.32;
    const targetX = -state.pointer.y * 0.2;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.03;
  });

  return (
    <group ref={group} position={[0, portrait ? 1.45 : 0, 0]}>
      <Stars
        radius={80}
        depth={55}
        count={portrait ? 5200 : 3200}
        factor={5}
        saturation={0}
        fade
        speed={0.6}
      />
      {/* much smaller jewel orb high in the sky on phones; full presence on desktop */}
      <Core scale={portrait ? 0.4 : 1.45} />
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
