import {Component} from '@angular/core';
import {ITask} from "../../interface/tasks";


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

  public updateLocalStorage(tasks: ITask[]): void {
    localStorage.setItem(this.storageAllTasksKey, JSON.stringify(tasks));
  }

  public getTasksFromLocalStorage(): ITask[] {
    let getListTask: string = localStorage.getItem(this.storageAllTasksKey) || '[]';
    return JSON.parse(getListTask);
  }

  public checkDuplicatedTask(name: string): boolean {
    return this.allTasks.some(task => task.name === name);
  }

  constructor() {
    this.allTasks = this.getTasksFromLocalStorage();
  }

  public addTaskToList(task: string): void {
    const newTask: string = task.trim();
    if (newTask && !this.checkDuplicatedTask(this.task)) {
      this.setValidityToInput(false);

      let dataTasks: ITask = {
        name: newTask,
        isDone: false,
        time: new Date()
      };

      this.allTasks.push(dataTasks);

      this.task = '';

      this.updateLocalStorage(this.allTasks);
    } else {
      this.setValidityToInput(true);
    }
  }

  public toggleDoneTask(task: ITask): void {
    task.isDone = !task.isDone;
    this.updateLocalStorage(this.allTasks);
  }

  public deleteOneTask(name: string): void {
    this.allTasks = this.allTasks.filter(task => task.name !== name);
    this.updateLocalStorage(this.allTasks);
  }

  public deleteDoneTask(): void {
    this.allTasks = this.allTasks.filter(task => !task.isDone);
    this.updateLocalStorage(this.allTasks);
  }

  public deleteAllTasks(): void {
    this.allTasks = [];
    localStorage.clear();
  }

  public toggleInfoText(): void {
    this.isShowInfoContent = !this.isShowInfoContent;
  }
}

