
export interface ITask {
  name: string;
  isDone?: boolean;
  time?: Date;
  status?: Status;
}

export enum Status {
  ToDo = 'todo',
  InProgress = 'inProgress',
  Done = 'done',
}
