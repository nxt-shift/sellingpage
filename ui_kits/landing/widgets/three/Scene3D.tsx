import { Environment, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { SnowField3D } from "./SnowField3D";
import { RainField3D } from "./RainField3D";
import { SunOrb3D } from "./SunOrb3D";
import { HardHatHero3D } from "./HardHatHero3D";
import type { SeasonId } from "../../seasonClock.config";

export interface Scene3DProps {
  season: SeasonId;
}

const SKY_COLOR: Record<SeasonId, string> = {
  winter: "#142A4E",
  summer: "#1A1B1E",
  fall: "#15171C",
};

/** A single, calmly lit hero object — not a busy scene. Studio lighting + reflections + soft contact shadow do the work. */
export function Scene3D({ season }: Scene3DProps) {
  return (
    <Canvas camera={{ position: [0, 0.5, 6.2], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <color attach="background" args={[SKY_COLOR[season]]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} color="#FFF1EA" />
      <directionalLight position={[-4, 2, -3]} intensity={0.35} color="#93A8E9" />

      <Environment preset="city" />

      {season === "winter" && <SnowField3D />}
      {season === "fall" && <RainField3D />}
      {season === "summer" && <SunOrb3D />}

      <HardHatHero3D season={season} />

      <ContactShadows position={[0, -1.05, 0]} opacity={0.55} scale={9} blur={2.6} far={3} resolution={512} color="#000000" />

      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.35} luminanceSmoothing={0.25} mipmapBlur />
        <Vignette eskil={false} offset={0.15} darkness={0.6} />
      </EffectComposer>
    </Canvas>
  );
}
