import { useRef } from "react";
import { useActiveTaskId } from "../../../utils/hooks/useActiveTaskId";
import StorageApi from "../../../utils/storage";
import styles from "../../styles/update-task-window.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppDispatch } from "../../../utils/redux/store";
import completeTaskThunk from "../../../utils/redux/thunks/completeTask";

const UpdateTaskWindow = () => {
  const dispatch = useAppDispatch();
  const { activePlanetId, setActivePlanetId } = useActiveTaskId()!;
  const task = StorageApi.getTasks().find(
    (task) => task.id === activePlanetId,
  )!;

  const modalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      modalRef.current,
      {
        xPercent: 100,
        opacity: 0,
        duration: 0.5,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
      },
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActivePlanetId(null);
      },
    });
  };

  const handleComplete = () => {
    dispatch(completeTaskThunk(task.id));
  };

  return (
    <div className={styles.background} onClick={handleClose}>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__title}>{task.title}</div>
        <div className={styles.modal__description}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              handleComplete();
            }}
          />
          {task.completed ? "Completed" : "Active"}
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskWindow;
