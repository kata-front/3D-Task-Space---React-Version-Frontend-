import { useRef, type FC } from "react";
import styles from "../styles/hero.module.scss";
import { Canvas } from "@react-three/fiber";
import SolarSystemMaket from "./UI/maketSolarSystem/solarSystemMaket";
import useHeroAnimate from "../../utils/hooks/useHeroAnimate";
import * as index from "../../index.ts";
import { useMediaQuery } from "react-responsive";

export const Hero: FC = () => {
  const titleSpanRef = useRef<HTMLSpanElement>(null) as React.RefObject<HTMLSpanElement>;
  const titleSectionRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const heroRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const canvasRef = useRef<HTMLCanvasElement>(null) as React.RefObject<HTMLCanvasElement>;

  useHeroAnimate({
    titleSpanRef,
    titleSectionRef,
    heroRef,
    canvasRef,
  });

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <div className={styles.hero} ref={heroRef}>
      <div ref={titleSectionRef} className={styles["hero__title-section"]}>
        <span ref={titleSpanRef}>
          Task System - task manager of new generation
        </span>
      </div>
      <Canvas
        ref={canvasRef}
        camera={{
          position: [0, 2, isMobile ? 15 : 10],
          fov: 75,
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <SolarSystemMaket planets={index.planet_maket} />
      </Canvas>
    </div>
  );
};
