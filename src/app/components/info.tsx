import { useRef } from "react";
import styles from "../styles/info.module.scss";
import useInfoAnimate from "../../utils/hooks/useInfoAnimate";
import { useNavigate } from "react-router";

const InfoSection = () => {
  const navigate = useNavigate();

  const aboutSpanRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  const listRef = useRef<HTMLOListElement>(
    null,
  ) as React.RefObject<HTMLOListElement>;

  const infoRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  const buttonsRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  useInfoAnimate({ aboutSpanRef, listRef, infoRef, buttonsRef });

  return (
    <div className={styles["info-section"]} ref={infoRef}>
      <span className={styles["info-section__title"]}>How it works</span>

      <div ref={aboutSpanRef} className={styles["info-section__about-this"]}>
        Every task becomes a planet. Its distance from the Sun reflects priority
        – the closer, the more urgent. Color shows status: green for completed,
        red for active. Watch your to‑do list come alive in a 3D solar system
        where productivity feels like exploring space.
      </div>
      <ol ref={listRef} className={styles["info-section__list"]}>
        <li>Create a task – give it a name, deadline, and priority.</li>
        <li>
          See it become a planet – it automatically takes its place in your
          solar system.
        </li>
        <li>
          Track progress – watch planets move, change color, and react to your
          updates.
        </li>
        <li>
          Stay in control – the overview of your universe helps you never miss
          an important deadline.
        </li>
      </ol>
      <div className={styles["info-section__btns-container"]} ref={buttonsRef}>
        <button onClick={() => navigate("/solarSystem")}>Get started!</button>
        <button onClick={() => navigate("/infoTasks")}>Check Tasks</button>
      </div>
    </div>
  );
};

export default InfoSection;
