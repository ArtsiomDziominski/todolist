import {Component, Input} from '@angular/core';
import {ITask, Status} from "../../interface/tasks";
import {updateLocalStorage} from "../../update-local-storage";
import {getFromLocalStorage} from "../../get-from-local-storage";
import {storageAllTasksKey} from "../const";

@Component({
  selector: 'app-mini-version',
  templateUrl: './mini-version.component.html',
  styleUrls: ['./mini-version.component.scss']
})

export class MiniVersionComponent {
  public readonly title = 'Angular ToDo List';
  public readonly Status: typeof Status = Status;

  public task: string = '';
  public allTasks: ITask[] = [];
  public isShowInfoContent: boolean = false;
  public dateTime: Date = new Date();

  @Input()
  isToggleDarkMode?: boolean;

  public countDoneTask(): number {
    return this.allTasks.filter((task) => task.status === Status.Done).length;
  }

  constructor() {
    this.updateTime();
    let getListTask:string = getFromLocalStorage(storageAllTasksKey) || '[]';
    this.allTasks = JSON.parse(getListTask);
  }

  public toggleDoneTask(task: ITask): void {
    if (task.status === Status.Done) {
      task.status = Status.ToDo;
    } else {
      task.status = Status.Done;
    }
    updateLocalStorage(storageAllTasksKey, JSON.stringify(this.allTasks));
  }

  public deleteOneTask(name: string): void {
    this.allTasks = this.allTasks.filter(task => task.name !== name);
    updateLocalStorage(storageAllTasksKey, JSON.stringify(this.allTasks));
  }

  public deleteDoneTask(): void {
    this.allTasks = this.allTasks.filter((task) => task.status === Status.ToDo);
    updateLocalStorage(storageAllTasksKey, JSON.stringify(this.allTasks));
  }

  public deleteAllTasks(): void {
    this.allTasks = [];
    localStorage.removeItem(storageAllTasksKey);
  }

  public toggleInfoText(): void {
    this.isShowInfoContent = !this.isShowInfoContent;
  }

  public updateTime(): void {
    setInterval(() => this.dateTime = new Date(), 1000);
  }

  public updateAllTasks($event: ITask[]): void {
    this.allTasks = $event;
  }
}
