import {Component} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {ITask, Status} from "../../interface/tasks";
import {getTasksFromLocalStorage} from "../../get-tasks-from-local-storage";
import {updateLocalStorage} from "../../update-local-storage";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})

export class FullVersionComponent {

  public readonly status: typeof Status = Status;
  public allTasks: ITask[] = [];
  name: string = '';

  constructor() {
    this.allTasks = getTasksFromLocalStorage();
  }

  ngDoCheck(){
    let newAllTasks = getTasksFromLocalStorage();
    if (this.allTasks.length < newAllTasks.length) {
      this.allTasks = getTasksFromLocalStorage();
    }
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
    updateLocalStorage(this.allTasks);
  }

  drop(event: CdkDragDrop<ITask[]>, status: Status) {
    console.log(event)
    let task: ITask | undefined = this.allTasks.find((item: ITask) => item.name === event.item.data.name);
    if (task) {
      task.status = status;
    }
    updateLocalStorage(this.allTasks);
  }
}
