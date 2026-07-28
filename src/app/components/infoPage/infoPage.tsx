import { useAppSelector } from "../../../utils/redux/store";
import taskSlice from "../../../utils/redux/taskSlice";
import Header from "../UI/header/header";
import styles from "../../styles/info-page.module.scss";
import CreateTaskForm from "../UI/createTaskForm/createTaskForm";
import TaskItem from "../UI/taskItem/TaskItem";

const InfoPage = () => {
  const tasks = useAppSelector(taskSlice.selectors.getTasks);
  return (
    <>
      <Header />
      <div className={styles["info-page"]}>
        <div className={styles["info-page__create-modal"]}>
          <span>Create task</span>
          <CreateTaskForm />
        </div>
        <div className={styles["info-page__tasks"]}>
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoPage;
