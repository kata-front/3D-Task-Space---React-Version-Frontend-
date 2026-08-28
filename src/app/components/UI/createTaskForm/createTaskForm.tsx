import { useForm } from "react-hook-form";
import type { CreateTaskRequest, MTTask } from "../../../../utils/types";
import { useAppDispatch } from "../../../../utils/redux/store";
import styles from "./createTaskForm.module.scss";
import createTaskThunk from "../../../../utils/redux/thunks/createTaskThunk";

const СreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateTaskRequest>();
  const dispatch = useAppDispatch(); 

  const handleSubmitForm = (data: CreateTaskRequest) => {
    const newtask: MTTask = {
      id: Date.now(),
      title: data.title,
      completed: false,
    }

    dispatch(createTaskThunk(newtask));
    reset();
  };

  return (
    <form
      className={styles["create-form"]}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters long",
          },
        })}
      />
      {errors.title && <p className={styles["create-form__error"]}>{errors.title.message}</p>}
      <button type="submit">Create</button>
    </form>
  );
};

export default СreateTaskForm;
