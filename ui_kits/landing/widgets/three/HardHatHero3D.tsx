import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { SeasonId } from "../../seasonClock.config";

const YELLOW   = "#FFD200";
const DARK     = "#1C1800";
const HARDWARE = "#B0ADAA";
const WEBBING  = "#7B6249";

// Dome profile shared between geometry + rib placement
// [radius, height] pairs — apex at top, brim base at y=0
const DOME_PTS: [number, number][] = [
  [0.00, 0.80],
  [0.22, 0.79],
  [0.46, 0.75],
  [0.70, 0.67],
  [0.90, 0.54],
  [1.03, 0.37],
  [1.11, 0.19],
  [1.14, 0.00],
];

function domeVec2() {
  return DOME_PTS.map(([r, y]) => new THREE.Vector2(r, y));
}

export interface HardHatHero3DProps { season: SeasonId; }

export function HardHatHero3D({ season }: HardHatHero3DProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  useFrame((_s, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.32;
  });

  const brimProfile = React.useMemo(() => [
    new THREE.Vector2(1.14,  0.00),
    new THREE.Vector2(1.28, -0.022),
    new THREE.Vector2(1.46, -0.058),
    new THREE.Vector2(1.60, -0.090),
    new THREE.Vector2(1.63, -0.108),
  ], []);

  const linerProfile = React.useMemo(() => [
    new THREE.Vector2(0.00,  0.70),
    new THREE.Vector2(0.22,  0.69),
    new THREE.Vector2(0.45,  0.65),
    new THREE.Vector2(0.68,  0.58),
    new THREE.Vector2(0.87,  0.46),
    new THREE.Vector2(0.99,  0.30),
    new THREE.Vector2(1.04,  0.14),
  ], []);

  return (
    <group position={[0, -0.65, 0]}>
      <group ref={groupRef} scale={1.55}>

        {/* Dome shell */}
        <mesh>
          <latheGeometry args={[domeVec2(), 80]} />
          <meshStandardMaterial color={YELLOW} roughness={0.72} metalness={0} envMapIntensity={0} />
        </mesh>

        {/* Full 360° brim */}
        <mesh>
          <latheGeometry args={[brimProfile, 80]} />
          <meshStandardMaterial color={YELLOW} roughness={0.72} metalness={0} envMapIntensity={0} side={THREE.DoubleSide} />
        </mesh>

        {/* Interior liner — same yellow as shell */}
        <mesh>
          <latheGeometry args={[linerProfile, 48]} />
          <meshStandardMaterial color={YELLOW} roughness={0.85} envMapIntensity={0} side={THREE.BackSide} />
        </mesh>

        {/* Three crown ribs using TubeGeometry */}
        <CrownRib xOffset={0} />
        <CrownRib xOffset={0.30} />
        <CrownRib xOffset={-0.30} />

        {/* Extended front peak */}
        <FrontPeak />

        {/* Front logo slot plate */}
        <mesh position={[0, 0.09, 1.145]} rotation={[-0.14, 0, 0]}>
          <boxGeometry args={[0.38, 0.14, 0.04]} />
          <meshStandardMaterial color={DARK} roughness={0.6} />
        </mesh>

        {/* Back ratchet housing */}
        <mesh position={[0, 0.26, -1.08]}>
          <boxGeometry args={[0.26, 0.15, 0.09]} />
          <meshStandardMaterial color={DARK} roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.26, -1.13]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.055, 0.055, 14]} />
          <meshStandardMaterial color={HARDWARE} metalness={0.7} roughness={0.35} />
        </mesh>

        {/* Suspension band */}
        <mesh position={[0, 0.22, 0]}>
          <torusGeometry args={[0.70, 0.018, 8, 56]} />
          <meshStandardMaterial color={WEBBING} roughness={0.78} />
        </mesh>

        {/* Chin-strap D-rings */}
        {([-1.08, 1.08] as const).map((x) => (
          <mesh key={x} position={[x, 0.10, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.048, 0.012, 6, 14]} />
            <meshStandardMaterial color={HARDWARE} metalness={0.80} roughness={0.30} />
          </mesh>
        ))}

        {season === "winter" && <SnowDusting />}
        {season === "fall"   && <LeafLitter />}
      </group>
    </group>
  );
}

/** A rib that rides the dome surface front-to-back using TubeGeometry. */
function CrownRib({ xOffset }: { xOffset: number }) {
  const curve = React.useMemo(() => {
    const LIFT = 0.052; // how far the rib stands proud of the dome

    // Build points from brim → apex on the front (+Z) side
    const front: THREE.Vector3[] = [];
    for (let i = DOME_PTS.length - 1; i >= 0; i--) {
      const [r, y] = DOME_PTS[i];
      const z2 = r * r - xOffset * xOffset;
      if (z2 < 0) continue;
      const z = Math.sqrt(z2);
      const v = new THREE.Vector3(xOffset, y, z);
      const len = v.length() || 1;
      v.multiplyScalar((len + LIFT) / len);
      front.push(v);
    }
    if (front.length < 2) return null;

    // Mirror front to back (-Z), skipping duplicate apex
    const back = [...front].reverse().slice(1).map(
      (p) => new THREE.Vector3(p.x, p.y, -p.z)
    );

    return new THREE.CatmullRomCurve3([...front, ...back]);
  }, [xOffset]);

  if (!curve) return null;

  return (
    <mesh>
      <tubeGeometry args={[curve, 36, 0.032, 5, false]} />
      <meshStandardMaterial color={DARK} roughness={0.55} envMapIntensity={0} />
    </mesh>
  );
}

/** Front peak — ring sector, flat in XZ plane, angled slightly downward. */
function FrontPeak() {
  const HALF_ARC = 0.50;
  return (
    <mesh position={[0, -0.108, 0]} rotation={[Math.PI / 2 + 0.08, 0, 0]}>
      <ringGeometry args={[1.63, 2.10, 12, 2, Math.PI / 2 - HALF_ARC, HALF_ARC * 2]} />
      <meshStandardMaterial color={YELLOW} roughness={0.72} metalness={0} envMapIntensity={0} side={THREE.DoubleSide} />
    </mesh>
  );
}

function SnowDusting() {
  const specks = React.useMemo(() => Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const r = 0.35 + (i % 3) * 0.18;
    return [Math.cos(angle) * r, 0.75 + (i % 2) * 0.05, Math.sin(angle) * r] as [number, number, number];
  }), []);
  return (
    <>
      {specks.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#EEF0F2" roughness={0.9} />
        </mesh>
      ))}
    </>
  );
}

function LeafLitter() {
  const leaves = React.useMemo(() => Array.from({ length: 4 }, (_, i) => {
    const angle = (i / 4) * Math.PI * 2 + 0.4;
    return {
      pos: [Math.cos(angle) * 1.38, -0.065, Math.sin(angle) * 1.38] as [number, number, number],
      color: i % 2 === 0 ? "#CC4A18" : "#E8A820",
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
