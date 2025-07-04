"use client";

import { useRef, useMemo, useEffect } from "react";
import {
  SpotLight,
  DirectionalLight,
  SpotLightHelper,
  DirectionalLightHelper,
  PointLightHelper,
  PointLight,
  Color,
} from "three";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { blenderToThreeCoords } from "@/utils/blender";

const AreaPos = blenderToThreeCoords([-2.1674, 1.04729, 2.31498]);

type Props = {
  screen: string;
};

export default function SceneLights({ screen }: Props) {
  const spotRef = useRef<SpotLight>(null!);
  const dirRef = useRef<DirectionalLight>(null!);
  const pointRef = useRef<PointLight>(null!);

  const targetColor = useRef(new Color());
  const currentColor = useRef(new Color("#00e87b"));

  useHelper(spotRef, SpotLightHelper, "cyan");
  useHelper(dirRef, DirectionalLightHelper, 1);
  useHelper(pointRef, PointLightHelper, 1);

  const screenColorHex = useMemo(() => {
    switch (screen) {
      case "about":
        return "#0585fa";
      case "contact":
        return "#e80050";
      case "home":
      default:
        return "#00e87b";
    }
  }, [screen]);

  useEffect(() => {
    targetColor.current.set(screenColorHex);
  }, [screenColorHex]);

  useFrame(() => {
    if (spotRef.current) {
      currentColor.current.lerp(targetColor.current, 0.05);
      spotRef.current.color.set(currentColor.current);
    }
  });

  useEffect(() => {
    if (spotRef.current) {
      if (screen === "about") {
        spotRef.current.intensity = 16.0;
      } else if (screen === "contact") {
        spotRef.current.intensity = 5.4;
      } else {
        spotRef.current.intensity = 7.0;
      }
    }
  }, [screen]);

  return (
    <>
      <ambientLight intensity={0.09} />

      <spotLight
        ref={spotRef}
        color={currentColor.current}
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
