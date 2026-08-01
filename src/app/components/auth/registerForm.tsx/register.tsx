import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../../../../utils/types";
import styles from "../../../styles/auth.module.scss";
import { useAppDispatch } from "../../../../utils/redux/store";
import registerThunk from "../../../../utils/redux/thunks/auth/registerThunk";

const RegisterComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<RegisterRequest>();

  const dispatch = useAppDispatch();

  const handleSubmitForm = handleSubmit((data) => {
    dispatch(registerThunk(data));
  });

  return (
    <form onSubmit={handleSubmitForm} className={styles.form}>
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
          maxLength: {
            value: 10,
            message: "Name must be at most 10 characters",
          },
        })}
        placeholder="name"
      />
      <span>{errors.name?.message}</span>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        placeholder="email"
      />
      <span>{errors.email?.message}</span>
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
          maxLength: {
            value: 20,
            message: "Password must be at most 20 characters",
          },
        })}
        placeholder="password"
      />
      <span>{errors.password?.message}</span>
      <span>{errors.root?.message}</span>
      <button type="submit" disabled={isLoading}>
        Register
      </button>
    </form>
  );
};

export default RegisterComponent;
