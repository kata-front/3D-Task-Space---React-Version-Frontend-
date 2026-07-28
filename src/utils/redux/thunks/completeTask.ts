import StorageApi from "../../storage";
import type { AppThunk } from "../store";
import taskSlice from "../taskSlice";

const completeTaskThunk =
  (id: number): AppThunk =>
  (dispatch) => {
    StorageApi.completeTask(id);
    dispatch(taskSlice.actions.completeTask(id));
  };

export default completeTaskThunk;
