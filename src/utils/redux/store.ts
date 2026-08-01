import {
  configureStore,
  type ThunkAction,
  type UnknownAction,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import taskSlice from "./taskSlice";
import StorageApi from "../storage";
import baseApi from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [taskSlice.name]: taskSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

store.dispatch(taskSlice.actions.setTasks(StorageApi.getTasks()));

export type AppThunk<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  UnknownAction
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
