import {
  useEffect,
  useMemo,
  useRef,
  type FC,
} from "react";
import type { MTPlanet } from "../../../utils/types";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Planet: FC<{
  planet: MTPlanet;
  setRef: (id: number, refs: THREE.Mesh) => void;
  onclick: (id: number) => void;
}> = ({ planet, setRef, onclick }) => {
  const orbitRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  const texture = useTexture(planet.texture);

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += planet.speedDelay * 0.5;
    }
  });

  const orbitGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 128;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * planet.distance,
          0,
          Math.sin(angle) * planet.distance,
        ),
      );
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [planet.distance]);

  useEffect(() => {
    if (planetRef.current) {
      setRef(planet.id, planetRef.current);
    }
  }, [planetRef]);

  return (
    <group ref={orbitRef} rotation={[0, Math.random() * Math.PI * 2, 0]}>
      <lineLoop geometry={orbitGeometry}>
        <lineBasicMaterial color="white" />
      </lineLoop>

      <mesh
        ref={planetRef}
        position={[planet.distance, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onclick(planet.id);
        }}
      >
        <sphereGeometry args={[planet.radius, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

export default Planet;
