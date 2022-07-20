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
  public readonly Status: typeof Status = Status;

  public task: string = '';
  public allTasks: ITask[] = [];
  public isShowInfoContent: boolean = false;
  public dateTime: Date = new Date();

  public countDoneTask(): number {
    return this.allTasks.filter((task) => task.status === Status.Done).length;
  }

  constructor() {
    this.updateTime()
    this.allTasks = getTasksFromLocalStorage();
  }

  ngDoCheck(){
    let newAllTasks = getTasksFromLocalStorage();
    if (this.allTasks.length < newAllTasks.length) {
      this.allTasks = getTasksFromLocalStorage();
    }
  }

  public toggleDoneTask(task: ITask): void {
    if (task.status === Status.Done) {
      task.status = Status.ToDo
    } else {
      task.status = Status.Done
    }
    updateLocalStorage(this.allTasks);
  }

  public deleteOneTask(name: string): void {
    this.allTasks = this.allTasks.filter(task => task.name !== name);
    updateLocalStorage(this.allTasks);
  }

  public deleteDoneTask(): void {
    this.allTasks = this.allTasks.filter((task) => task.status === Status.ToDo);
    updateLocalStorage(this.allTasks);
  }

  public deleteAllTasks(): void {
    this.allTasks = [];
    localStorage.clear();
  }

  public toggleInfoText(): void {
    this.isShowInfoContent = !this.isShowInfoContent;
  }

  public updateTime(): void {
    setInterval(() => this.dateTime = new Date(), 1000);
  }

}

