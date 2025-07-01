"use client";

import { Html, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import BinaryGrid from "./BinaryGrid";

const MODEL = "/models/tvnolight.glb";

useGLTF.preload(MODEL);

export default function Monitor(props: any) {
  const gltf: any = useGLTF(MODEL);
  const screenMaterial = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!screenMaterial.current) return;

    const t = clock.getElapsedTime();

    const base = 2.1;
    const pulse = Math.sin(t * 100) * 0.2;
    const jitter = (Math.random() - 0.5) * 0.35;
    const flash = Math.random() < 0.02 ? 1.5 : 0;

    screenMaterial.current.emissiveIntensity = base + pulse + jitter + flash;
  });

  gltf.scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  const { nodes } = gltf;

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Table} />
      <primitive object={nodes.TV} castShadow />

      <mesh geometry={nodes.Screen.geometry} position={nodes.Screen.position}>
        <meshStandardMaterial
          ref={screenMaterial}
          color="#0a0f0a"
          emissive="#001c0f"
          emissiveIntensity={2.2}
          metalness={0.05}
          roughness={0.45}
          side={THREE.DoubleSide}
        />
        <Html transform center distanceFactor={1}>
          <BinaryGrid />
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
    </group>
  );
}
