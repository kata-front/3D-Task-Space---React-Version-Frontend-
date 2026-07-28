import type { MTTask } from "./types";
// import * as index from "../index";

class StorageApi {
  static setTasks(tasks: MTTask[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  static getTasks(): MTTask[] {
    const tasks = localStorage.getItem("tasks") || "[]";
    return JSON.parse(tasks);
  }

  static setTask(task: MTTask) {
    const tasks = StorageApi.getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static completeTask(id: number) {
    const tasks = StorageApi.getTasks()
    const task = tasks.find((task) => task.id === id);

    if (task) task.completed = !task?.completed;

    StorageApi.setTasks(tasks);
  }

  static removeTask(id: number) {
    const tasks = StorageApi.getTasks().filter((task) => task.id !== id);
    StorageApi.setTasks(tasks);
  }
}

export default StorageApi;