"use client";

import { useRef, useEffect } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { blenderToThreeCoords } from "@/utils/blender";
import Monitor from "./Monitor";
import * as THREE from "three";

const cameraPos = blenderToThreeCoords([0.071287, -1.04666, 0.98133]);

function FixedCamera() {
  const camRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    if (camRef.current) {
      camRef.current.lookAt(0.06, 0.96, 0);
    }
  }, []);

  return (
    <PerspectiveCamera ref={camRef} makeDefault fov={50} position={cameraPos} />
  );
}

export default function Scene() {
  return (
    <>
      <FixedCamera />
      <Monitor position={[0, 0, 0]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
      {/* <OrbitControls
        enablePan={false}
        minDistance={0}
        maxDistance={6}
        target={[0, 0.7, 0]}
      /> */}
    </>
  );
}
