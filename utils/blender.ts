export function blenderToThreeCoords([x, y, z]: [number, number, number]) {
  return [x, z, -y] as const;
}
