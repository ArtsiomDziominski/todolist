import {Component} from '@angular/core';
import {ITask, Status} from "../../interface/tasks";
import {updateLocalStorage} from "../../update-local-storage";
import {getTasksFromLocalStorage} from "../../get-tasks-from-local-storage";


@Component({
  selector: 'app-mini-version',
  templateUrl: './mini-version.component.html',
  styleUrls: ['./mini-version.component.scss']
})

export class MiniVersionComponent {
  public readonly title = 'Angular ToDo List';
  public readonly storageAllTasksKey: string = 'allTasks';

  public task: string = '';
  public allTasks: ITask[] = [];
  public isInvalidInput: boolean = false;
  public isShowInfoContent: boolean = false;

  public countDoneTask(): number {
    return this.allTasks.filter(tasks => tasks.isDone).length;
  }

  public setValidityToInput(inputCheck: boolean): void {
    this.isInvalidInput = inputCheck;
  }

  // public updateLocalStorage(tasks: ITask[]): void {
  //   localStorage.setItem(this.storageAllTasksKey, JSON.stringify(tasks));
  // }

  // public getTasksFromLocalStorage(): ITask[] {
  //   let getListTask: string = localStorage.getItem(this.storageAllTasksKey) || '[]';
  //   return JSON.parse(getListTask);
  // }

  public checkDuplicatedTask(name: string): boolean {
    return this.allTasks.some(task => task.name === name);
  }

  constructor() {
    this.allTasks = getTasksFromLocalStorage(this.storageAllTasksKey);
  }

  public addTaskToList(task: string): void {
    const newTask: string = task.trim();

    if (newTask && !this.checkDuplicatedTask(this.task)) {
      this.setValidityToInput(false);

      let dataTasks: ITask = {
        name: newTask,
        isDone: false,
        time: new Date(),
        status: Status.ToDo
      };

      this.allTasks.push(dataTasks);

      this.task = '';

      updateLocalStorage(this.allTasks);
    } else {
      this.setValidityToInput(true);
    }
  }

  public toggleDoneTask(task: ITask): void {
    task.isDone = !task.isDone;
    if (task.status === Status.ToDo) {
      task.status = Status.Done
    } else {
      task.status = Status.ToDo
    }
    updateLocalStorage(this.allTasks, this.storageAllTasksKey);
  }

  public deleteOneTask(name: string): void {
    this.allTasks = this.allTasks.filter(task => task.name !== name);
    updateLocalStorage(this.allTasks, this.storageAllTasksKey);
  }

  public deleteDoneTask(): void {
    this.allTasks = this.allTasks.filter(task => !task.isDone);
    updateLocalStorage(this.allTasks, this.storageAllTasksKey);
  }

  public deleteAllTasks(): void {
    this.allTasks = [];
    localStorage.clear();
  }

  public toggleInfoText(): void {
    this.isShowInfoContent = !this.isShowInfoContent;
  }
}

