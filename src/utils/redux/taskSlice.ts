import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CreateTaskRequest, MTTask } from "../types";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [] as MTTask[],
  selectors: {
    getTasks: (state: MTTask[]) => state,
    getTaskById: (state: MTTask[], id: number) =>
      state.find((task) => task.id === id),
  },
  reducers: {
    setTasks: (_: MTTask[], action: PayloadAction<MTTask[]>) => action.payload,
    createTask: (state, action: PayloadAction<CreateTaskRequest>) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      });
    },
    completeTask: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      
      if (task) task.completed = !task?.completed;      
    },
    removeTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    }
  },
});

export default taskSlice;
