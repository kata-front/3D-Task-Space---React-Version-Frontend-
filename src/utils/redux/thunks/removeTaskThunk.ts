import StorageApi from "../../storage";
import type { AppThunk } from "../store";
import taskSlice from "../taskSlice";

const removeTaskThunk =
  (id: number): AppThunk =>
  (dispatch) => {
    StorageApi.removeTask(id);
    dispatch(taskSlice.actions.removeTask(id));
  };

export default removeTaskThunk;