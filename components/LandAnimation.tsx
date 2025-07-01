"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

type LandAnimationProps = {
  children: React.ReactNode;
  fromY?: number;
  toY?: number;
  speed?: number;
  fromRotationY?: number;
  toRotationY?: number;
};

export default function LandAnimation({
  children,
  fromY = 10,
  toY = 0,
  speed = 0.05,
  fromRotationY = Math.PI * 2,
  toRotationY = 0,
}: LandAnimationProps) {
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.position.y = fromY;
      ref.current.rotation.y = fromRotationY;
    }
  }, [fromY, fromRotationY]);

  useFrame(() => {
    if (!ref.current) return;

    const group = ref.current;

    const y = group.position.y;
    if (Math.abs(y - toY) > 0.001) {
      group.position.y = THREE.MathUtils.lerp(y, toY, speed);
    } else {
      group.position.y = toY;
    }

    const ry = group.rotation.y;
    if (Math.abs(ry - toRotationY) > 0.001) {
      group.rotation.y = THREE.MathUtils.lerp(ry, toRotationY, speed);
    } else {
      group.rotation.y = toRotationY;
    }
  });

  return <group ref={ref}>{children}</group>;
}
