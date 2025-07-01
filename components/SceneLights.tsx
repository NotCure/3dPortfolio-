"use client";

import { useRef } from "react";
import {
  SpotLight,
  DirectionalLight,
  SpotLightHelper,
  DirectionalLightHelper,
  PointLightHelper,
  PointLight,
} from "three";
import { useHelper } from "@react-three/drei";
import { blenderToThreeCoords } from "@/utils/blender";

const AreaPos = blenderToThreeCoords([-2.1674, 1.04729, 2.31498]);

export default function SceneLights() {
  const spotRef = useRef<SpotLight>(null!);
  const dirRef = useRef<DirectionalLight>(null!);
  const pointRef = useRef<PointLight>(null!);
  useHelper(spotRef, SpotLightHelper, "cyan");
  useHelper(dirRef, DirectionalLightHelper, 1);
  useHelper(pointRef, PointLightHelper, 1);

  return (
    <>
      <ambientLight intensity={0.09} />

      <spotLight
        ref={spotRef}
        color="#01AE37"
        position={AreaPos}
        angle={0.4833}
        penumbra={0.15}
        intensity={7.0}
        shadow-bias={-0.0005}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />


    </>
  );
}
