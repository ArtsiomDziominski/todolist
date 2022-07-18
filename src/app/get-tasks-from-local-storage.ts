import {ITask} from "./interface/tasks";

export function getTasksFromLocalStorage(storageAllTasksKey: string): ITask[] {
  let getListTask: string = localStorage.getItem(storageAllTasksKey) || '[]';
  return JSON.parse(getListTask);
}
