import { useTexture } from "@react-three/drei";
import type { FC } from "react";

const Sun: FC<{radius: number}> = ({ radius }) => {
  const sunTexture = useTexture("/textures/sun-texture.webp");
  return (
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial
        color="yellow"
        map={sunTexture}
      />
    </mesh>
  );
};

export default Sun;
