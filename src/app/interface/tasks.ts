
export interface ITask {
  name: string;
  status: Status;
}

export enum Status {
  ToDo = 'todo',
  InProgress = 'inProgress',
  Done = 'done',
}
