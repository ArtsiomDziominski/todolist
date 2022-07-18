import {ITask} from "./interface/tasks";

export function updateLocalStorage(tasks: ITask[], storageAllTasksKey: string = 'allTasks'): void {
  localStorage.setItem(storageAllTasksKey, JSON.stringify(tasks));
}
