import { memo, type FC } from "react";
import styles from "./taskItem.module.scss";
import type { MTTask } from "../../../../utils/types";
import { useAppDispatch } from "../../../../utils/redux/store";
import completeTaskThunk from "../../../../utils/redux/thunks/completeTask";
import removeTaskThunk from "../../../../utils/redux/thunks/removeTaskThunk";

const TaskItem: FC<{ task: MTTask }> = memo(({ task }) => {
  const dispatch = useAppDispatch();

  const handleComplete = () => {
    dispatch(completeTaskThunk(task.id));
  };

  const handleDelete = () => {
    dispatch(removeTaskThunk(task.id));
  };

  return (
    <div className={styles["task-item"]}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      <div className={styles["task-item__title"]}>{task.title}</div>
      <span onClick={handleDelete} className={styles["task-item__delete"]}></span>
    </div>
  );
});

export default TaskItem;
