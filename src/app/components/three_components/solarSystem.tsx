import { useEffect, useMemo, useRef, type ElementRef, type FC } from "react";
import Sun from "./Sun";
import type { MTPlanet, MTTask } from "../../../utils/types";
import Planet from "./planet";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useActiveTaskId } from "../../../utils/hooks/useActiveTaskId";

export const SolarSystem: FC<{
  tasks: MTTask[];
}> = ({ tasks }) => {
  const planets: MTPlanet[] = useMemo(
    () =>
      tasks.map((task, index) => ({
        id: task.id,
        name: task.title,
        texture: `/textures/planets/planet-${Math.floor(Math.random() * 3) + 1}.webp`,
        radius: Math.random() + 1 * 2,
        distance: 10 + (index + 1) * 10,
        speedDelay: Math.random() * 0.01,
      })),
    [tasks],
  );

  const orbitControlsRef = useRef<ElementRef<typeof OrbitControls>>(null);
  const planetsRefs = useRef<Map<number, THREE.Mesh>>(new Map());

  const {activePlanetId, setActivePlanetId} = useActiveTaskId()!;
  
  useEffect(() => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.enabled = activePlanetId === null;
    }
  }, [activePlanetId]);

  useFrame(({ camera }) => {
    if (activePlanetId !== null) {
      const planetMeshCoords = planetsRefs.current
        .get(activePlanetId)
        ?.getWorldPosition(new THREE.Vector3());

      const decidesCameraPosition = planetMeshCoords
        ?.clone()
        .add(new THREE.Vector3(0, 5, 5));

      camera.position.lerp(decidesCameraPosition!, 0.05);
      camera.lookAt(planetMeshCoords!);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} distance={100} intensity={1000} />

      <Sun radius={10} />
      {planets.map((planet) => (
        <Planet
          key={planet.id}
          planet={planet}
          setRef={(id: number, ref: THREE.Mesh) => {
            planetsRefs.current.set(id, ref);
          }}
          onclick={(id: number) => setActivePlanetId(id)}
        />
      ))}

      <OrbitControls
        enablePan={false}
        maxDistance={300}
        minDistance={50}
        ref={orbitControlsRef}
      />
    </>
  );
};
