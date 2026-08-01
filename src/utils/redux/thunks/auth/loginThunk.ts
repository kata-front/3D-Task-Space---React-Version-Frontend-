import type { LoginRequest } from "../../../types";
import authApi from "../../api/authApi";
import type { AppThunk } from "../../store";

const loginthunk =
  (loginRequest: LoginRequest): AppThunk =>
  async (dispatch) => {
    const { data } = await dispatch(
      authApi.endpoints.login.initiate(loginRequest),
    );

    if (data) {
      localStorage.setItem("accessToken", data);
    }
  };

export default loginthunk;
