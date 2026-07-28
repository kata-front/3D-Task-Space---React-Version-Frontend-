import { Canvas } from "@react-three/fiber";
import { type FC } from "react";
import { SolarSystem } from "../three_components/solarSystem";
import UpdateTaskWindow from "./updateTaskWindow";
import { useActiveTaskId } from "../../../utils/hooks/useActiveTaskId";
import { useAppSelector } from "../../../utils/redux/store";
import taskSlice from "../../../utils/redux/taskSlice";
import Header from "../UI/header/header";

export const Scene: FC = () => {
  const tasks = useAppSelector(taskSlice.selectors.getTasks);
  const {activePlanetId} = useActiveTaskId()!;

  console.log(tasks);

  return (
    <>
      <Header />
      <Canvas
        camera={{
          position: [0, 20, 100],
          fov: 75,
        }}
        style={{
          width: "100vw",
          height: "100vh",
          background: "#000",
        }}
      >
        <SolarSystem tasks={tasks} />
      </Canvas>
      {activePlanetId !== null && <UpdateTaskWindow />}
    </>
  );
};
