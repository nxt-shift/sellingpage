import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const COUNT = 280;
const SPAN_X = 16;
const SPAN_Z = 9;
const TOP_Y = 7;
const BOTTOM_Y = -3;

interface Drop {
  x: number;
  z: number;
  y: number;
  speed: number;
  length: number;
}

function makeDrops(): Drop[] {
  return Array.from({ length: COUNT }, () => ({
    x: (Math.random() - 0.5) * SPAN_X,
    z: (Math.random() - 0.5) * SPAN_Z,
    y: TOP_Y + Math.random() * (TOP_Y - BOTTOM_Y),
    speed: 6 + Math.random() * 5,
    length: 0.45 + Math.random() * 0.55,
  }));
}

/** Falling rain drawn as real instanced 3D cylinders streaking down at an angle. */
export function RainField3D() {
  const meshRef = React.useRef<THREE.InstancedMesh>(null);
  const drops = React.useMemo(makeDrops, []);
  const dummy = React.useMemo(() => new THREE.Object3D(), []);

  useFrame((_state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      d.y -= d.speed * delta;
      d.x -= delta * 0.8;
      if (d.y < BOTTOM_Y) {
        d.y = TOP_Y;
        d.x = (Math.random() - 0.5) * SPAN_X;
      }
      dummy.position.set(d.x, d.y, d.z);
      dummy.rotation.z = 0.18;
      dummy.scale.set(1, d.length, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <cylinderGeometry args={[0.012, 0.012, 1, 4]} />
      <meshStandardMaterial color="#93A8E9" transparent opacity={0.65} />
    </instancedMesh>
  );
}
