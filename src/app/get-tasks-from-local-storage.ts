import {ITask} from "./interface/tasks";

export function getTasksFromLocalStorage(storageAllTasksKey: string = 'allTasks'): ITask[] {
  let getListTask: string = localStorage.getItem(storageAllTasksKey) || '[]';
  return JSON.parse(getListTask);
}
