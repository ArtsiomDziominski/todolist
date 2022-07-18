import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITask, Status} from "../../interface/tasks";
import {getTasksFromLocalStorage} from "../../get-tasks-from-local-storage";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})

export class FullVersionComponent {

  public readonly storageAllTasksKey: string = 'allTasks';

  constructor() {

    this.allTasks = getTasksFromLocalStorage(this.storageAllTasksKey);
  }

  public allTasks: ITask[] = []
  public todoTasks: ITask[] = []
  public inProgressTasks: ITask[] = []
  public doneTasks: ITask[] = []
  name: string = ''

  addTask(name: string): void {
    let dataTasks: ITask = {
      name: name,
      isDone: false,
      time: new Date(),
      status: Status.ToDo
    };

    this.allTasks.push(dataTasks);

    this.name = ''
  }

  public get todo(): ITask[] {
    this.todoTasks = this.allTasks.filter((task: ITask) => task.status === Status.ToDo)
    return this.todoTasks
  }

  public get inProgress(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.InProgress)
  }

  public get done(): ITask[] {
    this.doneTasks = this.allTasks.filter((task: ITask) => task.status === Status.Done)
    return this.doneTasks
  }

  // public get inProgress(): ITask[] {
  //   return
  // }
  //
  // public get done(): ITask[] {
  //   return
  // }


  drop(event: CdkDragDrop<ITask[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
