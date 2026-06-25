import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { SeasonId } from "../../seasonClock.config";

export interface HardHatHero3DProps {
  season: SeasonId;
}

const SHELL_COLOR: Record<SeasonId, string> = {
  winter: "#FF5A1F",
  summer: "#FF5A1F",
  fall: "#FF5A1F",
};

const STRIPE_COLOR = "#0E1116";

/** The hi-vis hard hat as a single hero "product" — turntable rotation, dressed per season instead of a literal worker. */
export function HardHatHero3D({ season }: HardHatHero3DProps) {
  const groupRef = React.useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.32;
  });

  return (
    <group position={[0, -0.75, 0]}>
      <group ref={groupRef} scale={1.55}>
        {/* dome shell — flattened for a helmet profile, not a perfect ball */}
        <mesh position={[0, 0.12, 0]} scale={[1, 0.8, 1]}>
          <sphereGeometry args={[1, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial color={SHELL_COLOR[season]} clearcoat={1} clearcoatRoughness={0.12} roughness={0.32} metalness={0.05} />
        </mesh>

        {/* flared brim — a continuous skirt off the dome base, not a floating ring */}
        <mesh position={[0, 0.115, 0]}>
          <cylinderGeometry args={[1.0, 1.32, 0.1, 56, 1, true]} />
          <meshPhysicalMaterial color={SHELL_COLOR[season]} clearcoat={1} clearcoatRoughness={0.18} roughness={0.34} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0.065, 0]}>
          <cylinderGeometry args={[1.32, 1.32, 0.05, 56]} />
          <meshPhysicalMaterial color={SHELL_COLOR[season]} clearcoat={1} clearcoatRoughness={0.18} roughness={0.34} />
        </mesh>

        {/* front peak — the single most recognizable hard-hat cue */}
        <mesh position={[0, 0.05, 1.05]} scale={[0.6, 0.18, 0.42]}>
          <sphereGeometry args={[1, 20, 14]} />
          <meshPhysicalMaterial color={SHELL_COLOR[season]} clearcoat={1} clearcoatRoughness={0.18} roughness={0.34} />
        </mesh>

        {/* crown reinforcement ribs, front-to-back and side-to-side */}
        <mesh position={[0, 0.66, 0]}>
          <boxGeometry args={[0.09, 0.07, 1.7]} />
          <meshPhysicalMaterial color={STRIPE_COLOR} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.66, 0]}>
          <boxGeometry args={[1.4, 0.07, 0.09]} />
          <meshPhysicalMaterial color={STRIPE_COLOR} roughness={0.5} />
        </mesh>

        {season === "winter" && <SnowDusting />}
        {season === "fall" && <LeafLitter />}
      </group>
    </group>
  );
}

function SnowDusting() {
  const specks = React.useMemo(() => Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2;
    const r = 0.4 + (i % 3) * 0.25;
    return [Math.cos(angle) * r, 0.95 + (i % 2) * 0.05, Math.sin(angle) * r] as [number, number, number];
  }), []);
  return (
    <>
      {specks.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#FBF8F2" roughness={0.8} />
        </mesh>
      ))}
    </>
  );
}

function LeafLitter() {
  const leaves = React.useMemo(() => Array.from({ length: 4 }, (_, i) => {
    const angle = (i / 4) * Math.PI * 2 + 0.4;
    const r = 1.0;
    return {
      pos: [Math.cos(angle) * r, 0.16, Math.sin(angle) * r] as [number, number, number],
      color: i % 2 === 0 ? "#FF5A1F" : "#F5C518",
      rot: angle,
    };
  }), []);
  return (
    <>
      {leaves.map((l, i) => (
        <mesh key={i} position={l.pos} rotation={[-Math.PI / 2, 0, l.rot]}>
          <boxGeometry args={[0.22, 0.16, 0.02]} />
          <meshStandardMaterial color={l.color} roughness={0.7} />
        </mesh>
      ))}
    </>
  );
}
