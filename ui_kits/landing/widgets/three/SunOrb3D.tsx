import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/** A glowing sun: emissive core sphere + a slowly spinning ring of hi-vis ray blocks. */
export function SunOrb3D() {
  const raysRef = React.useRef<THREE.Group>(null);
  const coreRef = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (raysRef.current) raysRef.current.rotation.z += delta * 0.15;
    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.04;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  const rayCount = 14;

  return (
    <group position={[2.6, 2.4, -2]}>
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshStandardMaterial color="#FF5A1F" emissive="#FF5A1F" emissiveIntensity={1.4} />
      </mesh>
      <pointLight color="#FF8A55" intensity={6} distance={12} />
      <group ref={raysRef}>
        {Array.from({ length: rayCount }, (_, i) => {
          const angle = (i / rayCount) * Math.PI * 2;
          const radius = 1.6;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]} rotation={[0, 0, angle]}>
              <boxGeometry args={[0.45, 0.09, 0.09]} />
              <meshStandardMaterial color="#FF8A55" emissive="#FF8A55" emissiveIntensity={0.6} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
