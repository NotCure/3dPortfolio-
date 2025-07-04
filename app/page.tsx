"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "@/components/Scene";
import { blenderToThreeCoords } from "@/utils/blender";

const cameraPos = blenderToThreeCoords([0.031287, -1.31666, 1.11133]);
export default function Home() {
  return (
    <main className="w-screen h-screen bg-black">
      <Canvas shadows camera={{ position: cameraPos, fov: 50 }}>
        <color attach="background" args={["#020101"]} />
        
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </main>
  );
}
