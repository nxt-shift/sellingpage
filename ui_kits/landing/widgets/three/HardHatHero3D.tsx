import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { SeasonId } from "../../seasonClock.config";

const YELLOW   = "#FFD200";
const DARK     = "#1C1800";
const HARDWARE = "#B0ADAA";
const WEBBING  = "#7B6249";

// More profile points → smoother dome silhouette
const DOME_PTS: [number, number][] = [
  [0.00, 0.80],
  [0.10, 0.799],
  [0.22, 0.796],
  [0.34, 0.785],
  [0.46, 0.760],
  [0.57, 0.728],
  [0.68, 0.690],
  [0.79, 0.644],
  [0.90, 0.590],
  [0.98, 0.530],
  [1.03, 0.465],
  [1.07, 0.395],
  [1.10, 0.320],
  [1.12, 0.240],
  [1.135, 0.155],
  [1.14, 0.065],
  [1.14, 0.000],
];

function domeVec2() {
  return DOME_PTS.map(([r, y]) => new THREE.Vector2(r, y));
}

/** Canvas textures shared across all shell meshes. */
function useHatTextures() {
  return React.useMemo(() => {
    const SZ = 512;

    // --- bump map: fine injection-mould grain ---
    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = bumpCanvas.height = SZ;
    const bCtx = bumpCanvas.getContext("2d")!;
    const bImg = bCtx.createImageData(SZ, SZ);
    const bd = bImg.data;
    for (let y = 0; y < SZ; y++) {
      for (let x = 0; x < SZ; x++) {
        const i = (y * SZ + x) * 4;
        // Multi-octave grain: large + small noise
        const n1 = (Math.random() - 0.5) * 28;
        const n2 = (Math.random() - 0.5) * 10;
        const v  = Math.min(255, Math.max(0, 128 + n1 + n2));
        bd[i] = bd[i + 1] = bd[i + 2] = v;
        bd[i + 3] = 255;
      }
    }
    bCtx.putImageData(bImg, 0, 0);
    const bumpTex = new THREE.CanvasTexture(bumpCanvas);
    bumpTex.wrapS = bumpTex.wrapT = THREE.RepeatWrapping;
    bumpTex.repeat.set(3, 2);

    // --- roughness map: subtle highlight variation ---
    const roughCanvas = document.createElement("canvas");
    roughCanvas.width = roughCanvas.height = SZ;
    const rCtx = roughCanvas.getContext("2d")!;
    const rImg = rCtx.createImageData(SZ, SZ);
    const rd = rImg.data;
    const BASE = 80; // ≈ 0.31 roughness
    for (let y = 0; y < SZ; y++) {
      for (let x = 0; x < SZ; x++) {
        const i = (y * SZ + x) * 4;
        const n = (Math.random() - 0.5) * 22;
        // Slightly shinier toward apex (top = low U on lathe)
        const apexBoost = (1 - y / SZ) * 12;
        const v = Math.min(255, Math.max(30, BASE + n - apexBoost));
        rd[i] = rd[i + 1] = rd[i + 2] = v;
        rd[i + 3] = 255;
      }
    }
    rCtx.putImageData(rImg, 0, 0);
    const roughTex = new THREE.CanvasTexture(roughCanvas);
    roughTex.wrapS = roughTex.wrapT = THREE.RepeatWrapping;
    roughTex.repeat.set(3, 2);

    return { bumpTex, roughTex };
  }, []);
}

export interface HardHatHero3DProps { season: SeasonId; }

export function HardHatHero3D({ season }: HardHatHero3DProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  useFrame((_s, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.32;
  });

  const { bumpTex, roughTex } = useHatTextures();

  const brimProfile = React.useMemo(() => [
    new THREE.Vector2(1.14,  0.000),
    new THREE.Vector2(1.19, -0.018),
    new THREE.Vector2(1.25, -0.042),
    new THREE.Vector2(1.30, -0.068),
    new THREE.Vector2(1.34, -0.090),
    new THREE.Vector2(1.37, -0.108),
    new THREE.Vector2(1.39, -0.122),
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

  /* Shared physical material props for the yellow shell */
  const shellMat = (
    <meshPhysicalMaterial
      color={YELLOW}
      roughness={0.32}
      metalness={0}
      clearcoat={0.55}
      clearcoatRoughness={0.22}
      envMapIntensity={0.18}
      bumpMap={bumpTex}
      bumpScale={0.005}
      roughnessMap={roughTex}
    />
  );

  return (
    <group position={[0, -0.65, 0]}>
      <group ref={groupRef} scale={1.55}>

        {/* Dome shell */}
        <mesh>
          <latheGeometry args={[domeVec2(), 96]} />
          {shellMat}
        </mesh>

        {/* Full 360° brim */}
        <mesh>
          <latheGeometry args={[brimProfile, 96]} />
          <meshPhysicalMaterial
            color={YELLOW}
            roughness={0.38}
            metalness={0}
            clearcoat={0.4}
            clearcoatRoughness={0.28}
            envMapIntensity={0.18}
            bumpMap={bumpTex}
            bumpScale={0.004}
            roughnessMap={roughTex}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Interior liner */}
        <mesh>
          <latheGeometry args={[linerProfile, 48]} />
          <meshPhysicalMaterial
            color={YELLOW}
            roughness={0.68}
            metalness={0}
            clearcoat={0.1}
            envMapIntensity={0.05}
            bumpMap={bumpTex}
            bumpScale={0.003}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Three crown ribs */}
        <CrownRib xOffset={0} />
        <CrownRib xOffset={0.30} />
        <CrownRib xOffset={-0.30} />

        {/* Extended front peak */}
        <FrontPeak bumpTex={bumpTex} roughTex={roughTex} />

        {/* Front logo slot plate */}
        <mesh position={[0, 0.09, 1.145]} rotation={[-0.14, 0, 0]}>
          <boxGeometry args={[0.38, 0.14, 0.04]} />
          <meshPhysicalMaterial color={DARK} roughness={0.5} clearcoat={0.3} clearcoatRoughness={0.4} />
        </mesh>

        {/* Back ratchet housing */}
        <mesh position={[0, 0.26, -1.08]}>
          <boxGeometry args={[0.26, 0.15, 0.09]} />
          <meshPhysicalMaterial color={DARK} roughness={0.45} clearcoat={0.2} clearcoatRoughness={0.5} />
        </mesh>
        <mesh position={[0, 0.26, -1.13]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.055, 0.055, 14]} />
          <meshStandardMaterial color={HARDWARE} metalness={0.75} roughness={0.28} />
        </mesh>

        {/* Suspension band */}
        <mesh position={[0, 0.22, 0]}>
          <torusGeometry args={[0.70, 0.018, 8, 64]} />
          <meshStandardMaterial color={WEBBING} roughness={0.75} />
        </mesh>

        {/* Chin-strap D-rings */}
        {([-1.08, 1.08] as const).map((x) => (
          <mesh key={x} position={[x, 0.10, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.048, 0.012, 6, 14]} />
            <meshStandardMaterial color={HARDWARE} metalness={0.85} roughness={0.22} />
          </mesh>
        ))}

        {season === "winter" && <SnowDusting />}
        {season === "fall"   && <LeafLitter />}
      </group>
    </group>
  );
}

function CrownRib({ xOffset }: { xOffset: number }) {
  const curve = React.useMemo(() => {
    const LIFT = 0.052;
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
    const back = [...front].reverse().slice(1).map(
      (p) => new THREE.Vector3(p.x, p.y, -p.z)
    );
    return new THREE.CatmullRomCurve3([...front, ...back]);
  }, [xOffset]);

  if (!curve) return null;

  return (
    <mesh>
      <tubeGeometry args={[curve, 48, 0.032, 7, false]} />
      <meshPhysicalMaterial color={DARK} roughness={0.42} clearcoat={0.4} clearcoatRoughness={0.35} envMapIntensity={0.1} />
    </mesh>
  );
}

function FrontPeak({ bumpTex, roughTex }: { bumpTex: THREE.CanvasTexture; roughTex: THREE.CanvasTexture }) {
  const HALF_ARC = 0.50;
  return (
    <mesh position={[0, -0.122, 0]} rotation={[Math.PI / 2 + 0.08, 0, 0]}>
      <ringGeometry args={[1.39, 1.72, 16, 2, Math.PI / 2 - HALF_ARC, HALF_ARC * 2]} />
      <meshPhysicalMaterial
        color={YELLOW}
        roughness={0.32}
        metalness={0}
        clearcoat={0.55}
        clearcoatRoughness={0.22}
        envMapIntensity={0.18}
        bumpMap={bumpTex}
        bumpScale={0.005}
        roughnessMap={roughTex}
        side={THREE.DoubleSide}
      />
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
