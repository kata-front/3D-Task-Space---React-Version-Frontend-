import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { LoginRequest } from "../../../../utils/types";
import styles from "../../../styles/auth.module.scss";
import { useAppDispatch } from "../../../../utils/redux/store";
import loginthunk from "../../../../utils/redux/thunks/auth/loginThunk";

const LoginComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginRequest>();

  const dispatch = useAppDispatch();

  const handleSubmitForm = handleSubmit((data) => {
    dispatch(loginthunk(data));
  });

  return (
    <form onSubmit={handleSubmitForm} className={styles.form}>
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
        })}
        placeholder="password"
      />
      <span>{errors.password?.message}</span>
      <span>{errors.root?.message}</span>

      <button type="submit" disabled={isLoading}>
        Login
      </button>
    </form>
  );
};

export default LoginComponent;
