import {Component} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {ITask, Status} from "../../interface/tasks";
import {getFromLocalStorage} from "../../get-from-local-storage";
import {updateLocalStorage} from "../../update-local-storage";
import {STORAGE_ALL_TASKS_KEY} from "../const";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})

export class FullVersionComponent {
  public readonly status: typeof Status = Status;
  public allTasks: ITask[] = [];
  public name: string = '';

  constructor() {
    let getListTask:string = getFromLocalStorage(STORAGE_ALL_TASKS_KEY) || '[]';
    this.allTasks = JSON.parse(getListTask);
  }

  public todo(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.ToDo);
  }

  public inProgress(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.InProgress);
  }

  public done(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.Done);
  }

  public deleteOneTask(name: string): void {
    this.allTasks = this.allTasks.filter(task => task.name !== name);
    updateLocalStorage(STORAGE_ALL_TASKS_KEY, JSON.stringify(this.allTasks));
  }

  public drop(event: CdkDragDrop<ITask[]>, status: Status): void {
    let task: ITask | undefined = this.allTasks.find((item: ITask) => item.name === event.item.data.name);
    if (task) {
      task.status = status;
    }
    updateLocalStorage(STORAGE_ALL_TASKS_KEY, JSON.stringify(this.allTasks));
  }

  public updateAllTasks($event: ITask[]): void {
    this.allTasks = $event;
  }
}
