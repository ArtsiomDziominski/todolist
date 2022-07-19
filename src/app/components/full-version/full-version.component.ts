import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITask, Status} from "../../interface/tasks";
// import {getTasksFromLocalStorage} from "../../get-tasks-from-local-storage";
// import {updateLocalStorage} from "../../update-local-storage";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})

export class FullVersionComponent {

  public readonly storageAllTasksKey: string = 'allTasks';

  constructor() {


    // this.allTasks = getTasksFromLocalStorage(this.storageAllTasksKey);
  }

  ngOnInit() {
    let storageToDoTasks:string = localStorage.getItem('allTasksToDo') || '[]';
    let storageDoneTasks:string = localStorage.getItem('allTasksDone') || '[]';
    this.todoTasks = JSON.parse(storageToDoTasks);
    this.doneTasks = JSON.parse(storageDoneTasks);
    // this.todoTasks = this.allTasks.filter((task: ITask) => task.status === Status.ToDo)
    // this.doneTasks = this.allTasks.filter((task: ITask) => task.status === Status.Done)
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

    this.todoTasks.push(dataTasks);

    this.name = ''
  }

  // public get todo(): ITask[] {
  //   this.todoTasks = this.allTasks.filter((task: ITask) => task.status === Status.ToDo)
  //   return this.todoTasks
  // }
  //
  // public get inProgress(): ITask[] {
  //   return this.allTasks.filter((task: ITask) => task.status === Status.InProgress)
  // }
  //
  // public get done(): ITask[] {
  //   this.doneTasks = this.allTasks.filter((task: ITask) => task.status === Status.Done)
  //   return this.doneTasks
  // }

  drop(event: CdkDragDrop<ITask[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('moveItemInArray');
      // this.todoTasks = eventTasks;
      // this.todoTasks.forEach((task) => {
      //   task.status = Status.ToDo;
      // });
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // this.doneTasks = eventTasks;
      // this.doneTasks.forEach((task) => {
      //   task.status = Status.Done;
      // });
      console.log('transferArrayItem');
    }

    this.todoTasks.forEach((task) => {
      task.status = Status.ToDo;
    });

    this.doneTasks.forEach((task) => {
      task.status = Status.Done;
    });

    localStorage.setItem('allTasksToDo', JSON.stringify(this.todoTasks));
    localStorage.setItem('allTasksDone', JSON.stringify(this.doneTasks));
  }

}
