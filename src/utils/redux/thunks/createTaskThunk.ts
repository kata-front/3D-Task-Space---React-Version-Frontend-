import StorageApi from "../../storage";
import type { MTTask } from "../../types";
import type { AppThunk } from "../store";
import taskSlice from "../taskSlice";

const createTaskThunk =
  (task: MTTask): AppThunk =>
  (dispatch) => {
    StorageApi.setTask(task);
    dispatch(taskSlice.actions.createTask(task));
  };

export default createTaskThunk;
