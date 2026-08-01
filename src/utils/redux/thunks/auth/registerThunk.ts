import type { RegisterRequest } from "../../../types";
import authApi from "../../api/authApi";
import type { AppThunk } from "../../store";

const registerThunk =
  (registerRequest: RegisterRequest): AppThunk =>
  async (dispatch) => {
    const { data } = await dispatch(authApi.endpoints.register.initiate(registerRequest));

    if (data) {
      localStorage.setItem("accessToken", data);
    }
  };

export default registerThunk