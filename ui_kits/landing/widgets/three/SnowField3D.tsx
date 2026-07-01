import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const COUNT   = 380;
const SPAN_X  = 15;
const SPAN_Z  = 5;   // scattered between scene and camera
const TOP_Y   = 7.5;
const BOTTOM_Y = -3;

interface Flake {
  x: number; y: number; z: number;
  speed: number;   // fall speed (slow)
  drift: number;   // sway frequency
  phase: number;   // sway phase offset
  spin: number;    // rotation speed around own axis
  scale: number;
}

function makeFlakes(): Flake[] {
  return Array.from({ length: COUNT }, () => ({
    x: (Math.random() - 0.5) * SPAN_X,
    y: BOTTOM_Y + Math.random() * (TOP_Y - BOTTOM_Y),
    z: 0.5 + Math.random() * SPAN_Z,
    speed: 0.28 + Math.random() * 0.38,   // very slow
    drift: 0.18 + Math.random() * 0.32,
    phase: Math.random() * Math.PI * 2,
    spin:  (Math.random() - 0.5) * 0.6,  // gentle clockwise or counter
    scale: 0.04 + Math.random() * 0.09,
  }));
}

/** 6-pointed star shape — looks like a snowflake when scaled small. */
function makeSnowflakeGeo() {
  const shape = new THREE.Shape();
  const ARMS = 6;
  const outer = 1.0;
  const inner = 0.30;
  for (let i = 0; i < ARMS * 2; i++) {
    const angle = (i / (ARMS * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
  }
  shape.closePath();
  return new THREE.ShapeGeometry(shape, 1);
}

export function SnowField3D() {
  const meshRef = React.useRef<THREE.InstancedMesh>(null);
  const flakes  = React.useMemo(makeFlakes, []);
  const geo     = React.useMemo(makeSnowflakeGeo, []);
  const dummy   = React.useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < COUNT; i++) {
      const f = flakes[i];
      f.y -= f.speed * delta;
      if (f.y < BOTTOM_Y) {
        f.y = TOP_Y;
        f.x = (Math.random() - 0.5) * SPAN_X;
      }
      const sway = Math.sin(t * f.drift + f.phase) * 0.55;
      dummy.position.set(f.x + sway, f.y, f.z);
      dummy.rotation.set(0, 0, t * f.spin + f.phase); // spin in plane
      dummy.scale.setScalar(f.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geo, undefined, COUNT]}>
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#D8EEF8"
        emissiveIntensity={0.55}
        transparent
        opacity={0.88}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}
