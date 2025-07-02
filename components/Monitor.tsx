"use client";

import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { blenderToThreeCoords } from "@/utils/blender";
import * as THREE from "three";
import LandAnimation from "./LandAnimation";
import BinaryGrid from "./Screens/BinaryGrid";
import AboutScreen from "./Screens/AboutScreen";
import ContactScreen from "./Screens/ContactScreen";
const MODEL = "/models/tvnolight.glb";

const PointPos = blenderToThreeCoords([0.22319, -0.087753, 0.73635]);
useGLTF.preload(MODEL);

export default function Monitor(props: any) {
  const gltf: any = useGLTF(MODEL);
  const screenMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const monitorRef = useRef<THREE.Group>(null);
  useEffect(() => {
    if (monitorRef.current) {
      monitorRef.current.position.y = 10;
    }
  }, []);

  useFrame(({ clock }) => {
    if (!screenMaterial.current) return;

    const t = clock.getElapsedTime();

    const base = 1.4;
    const pulse = Math.sin(t * 100) * 0.2;
    const jitter = (Math.random() - 0.5) * 0.15;
    const flash = Math.random() < 0.02 ? 1.5 : 0;

    screenMaterial.current.emissiveIntensity = base + pulse + jitter + flash;
  });

  gltf.scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  const [screen, setScreen] = useState("home");

  const { nodes } = gltf;

  return (
    <>
      <primitive object={nodes.Table} />
      <LandAnimation
        fromY={10}
        toY={0}
        speed={0.006}
        fromRotationY={Math.PI * 6}
        toRotationY={0}
      >
        <primitive object={nodes.TV} castShadow />

        <mesh geometry={nodes.Screen.geometry} position={nodes.Screen.position}>
          <meshStandardMaterial
            ref={screenMaterial}
            color="#0a0f0a"
            emissive="#001c0f"
            emissiveIntensity={1.4}
            metalness={0.05}
            roughness={0.45}
            side={THREE.DoubleSide}
          />
          <Html transform distanceFactor={1}>
            <div className="transition-opacity duration-300 ease-in-out">
              {screen === "home" && <BinaryGrid setScreen={setScreen} />}
              {screen === "about" && <AboutScreen setScreen={setScreen} />}
              {screen === "contact" && <ContactScreen />}
            </div>
          </Html>
        </mesh>
        {[
          "Curve",
          "Curve001",
          "Curve002",
          "Curve003",
          "Curve004",
          "Curve005",
          "Curve006",
          "Curve007",
          "Curve008",
          "Curve009",
          "Curve010",
          "Curve011",
        ].map((name) => {
          const mesh = nodes[name];
          return (
            <mesh
              key={name}
              geometry={mesh.geometry}
              position={mesh.position}
              rotation={mesh.rotation}
              scale={mesh.scale}
              castShadow
              receiveShadow
            >
              <meshStandardMaterial {...mesh.material} />
            </mesh>
          );
        })}
        <pointLight
          position={PointPos}
          intensity={0.8}
          color="#FF2E31"
          distance={0.017}
        />
      </LandAnimation>
    </>
  );
}
