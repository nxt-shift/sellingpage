import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SEASON_SEC = 5;
type Season = "rain" | "snow";
const SEASONS: Season[] = ["rain", "snow"];

// ─── Rain ─────────────────────────────────────────────────────────────────

const RAIN_N = 70;

function RainScene() {
  const ref = React.useRef<THREE.LineSegments>(null);

  const [positions, speeds] = React.useMemo(() => {
    const pos = new Float32Array(RAIN_N * 6);
    const spd = new Float32Array(RAIN_N);
    for (let i = 0; i < RAIN_N; i++) {
      const x = (Math.random() - 0.5) * 4.5;
      const y = (Math.random() - 0.5) * 6.5;
      const len = 0.22 + Math.random() * 0.18;
      pos[i*6]   = x;        pos[i*6+1] = y;        pos[i*6+2] = 0;
      pos[i*6+3] = x + 0.07; pos[i*6+4] = y - len;  pos[i*6+5] = 0;
      spd[i] = 3.0 + Math.random() * 2.0;
    }
    return [pos, spd];
  }, []);

  useFrame((_, dt) => {
    const ls = ref.current;
    if (!ls) return;
    const p = (ls.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    for (let i = 0; i < RAIN_N; i++) {
      const v = speeds[i];
      const len = p[i*6+1] - p[i*6+4];
      p[i*6+1] -= v * dt; p[i*6+4] -= v * dt;
      p[i*6]   += 0.1 * v * dt; p[i*6+3] += 0.1 * v * dt;
      if (p[i*6+1] < -4) {
        const x = (Math.random() - 0.5) * 4.5;
        p[i*6] = x; p[i*6+1] = 4.5;
        p[i*6+3] = x + 0.07; p[i*6+4] = 4.5 - len;
      }
    }
    (ls.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#7dd3fc" transparent opacity={0.80} />
    </lineSegments>
  );
}

// ─── Snow ─────────────────────────────────────────────────────────────────

const SNOW_N = 55;

function SnowScene() {
  const ref = React.useRef<THREE.Points>(null);

  const [pos, vel] = React.useMemo(() => {
    const p = new Float32Array(SNOW_N * 3);
    const v = new Float32Array(SNOW_N * 2);
    for (let i = 0; i < SNOW_N; i++) {
      p[i*3]   = (Math.random() - 0.5) * 4.5;
      p[i*3+1] = (Math.random() - 0.5) * 6.5;
      p[i*3+2] = (Math.random() - 0.5) * 0.8;
      v[i*2]   = (Math.random() - 0.5) * 0.12;
      v[i*2+1] = 0.16 + Math.random() * 0.20;
    }
    return [p, v];
  }, []);

  useFrame((s, dt) => {
    const t = s.clock.elapsedTime;
    for (let i = 0; i < SNOW_N; i++) {
      pos[i*3]   += vel[i*2] * dt + Math.sin(t * 0.5 + i) * 0.0025;
      pos[i*3+1] -= vel[i*2+1] * dt;
      if (pos[i*3+1] < -4) { pos[i*3+1] = 4; pos[i*3] = (Math.random() - 0.5) * 4.5; }
    }
    if (ref.current)
      (ref.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={7}
        color="#e0f2fe"
        transparent
        opacity={0.88}
        sizeAttenuation={false}
        depthWrite={false}
      />
    </points>
  );
}

// ─── Season cycle ──────────────────────────────────────────────────────────

function Cycle() {
  const [season, setSeason] = React.useState<Season>("rain");
  const timer = React.useRef(0);
  const idx   = React.useRef(0);

  useFrame((_, dt) => {
    timer.current += dt;
    if (timer.current >= SEASON_SEC) {
      timer.current = 0;
      idx.current = (idx.current + 1) % SEASONS.length;
      setSeason(SEASONS[idx.current]);
    }
  });

  if (season === "rain") return <RainScene />;
  return <SnowScene />;
}

// ─── Export ────────────────────────────────────────────────────────────────

export function HeroScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Cycle />
    </Canvas>
  );
}
