import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const COUNT = 150;
const SPAN_X = 13;
const SPAN_Z = 7;
const TOP_Y = 6.5;
const BOTTOM_Y = -2.5;

interface Flake {
  x: number;
  z: number;
  y: number;
  speed: number;
  drift: number;
  phase: number;
  scale: number;
}

function makeFlakes(): Flake[] {
  return Array.from({ length: COUNT }, () => ({
    x: (Math.random() - 0.5) * SPAN_X,
    z: 1 + Math.random() * SPAN_Z, // bias toward camera-facing foreground
    y: TOP_Y + Math.random() * (TOP_Y - BOTTOM_Y),
    speed: 2.2 + Math.random() * 2.6,
    drift: 0.3 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    scale: 0.09 + Math.random() * 0.16,
  }));
}

/** Falling snow drawn as real instanced 3D spheres — big, fast, glowing enough to be unmistakable. */
export function SnowField3D() {
  const meshRef = React.useRef<THREE.InstancedMesh>(null);
  const flakes = React.useMemo(makeFlakes, []);
  const dummy = React.useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];
      f.y -= f.speed * delta;
      if (f.y < BOTTOM_Y) f.y = TOP_Y;
      const sway = Math.sin(state.clock.elapsedTime * f.drift + f.phase) * 0.8;
      dummy.position.set(f.x + sway, f.y, f.z);
      dummy.rotation.set(f.phase, state.clock.elapsedTime * 0.3 + f.phase, 0);
      dummy.scale.setScalar(f.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#FFFFFF" emissive="#FBF8F2" emissiveIntensity={0.6} roughness={0.8} />
    </instancedMesh>
  );
}
