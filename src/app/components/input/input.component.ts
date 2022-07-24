import {Component, EventEmitter, Output} from '@angular/core';
import {ITask, Status} from "../../interface/tasks";
import {getFromLocalStorage} from "../../get-from-local-storage";
import {updateLocalStorage} from "../../update-local-storage";
import {storageAllTasksKey} from "../const";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() changeStatusAllTasks: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();
  public task: string = '';
  public allTasks: ITask[] = [];
  public isInvalidInput: boolean = false;

  public ngOnInit(): void {
    let getListTask:string = getFromLocalStorage(storageAllTasksKey) || '[]';
    this.allTasks = JSON.parse(getListTask);
  }

  public checkDuplicatedTask(name: string): boolean {
    return this.allTasks.some(task => task.name === name);
  }

  public addTaskToList(name: string): void {
    const newTask: string = name.trim();
    if (newTask && !this.checkDuplicatedTask(this.task)) {
      this.isInvalidInput = false;
      let dataTasks: ITask = {
        name: name,
        status: Status.ToDo
      };
      this.allTasks.push(dataTasks);
      updateLocalStorage(storageAllTasksKey, JSON.stringify(this.allTasks));
      this.task = '';
    } else {
      this.isInvalidInput = true;
    }
    this.changeStatusAllTasks.emit(this.allTasks);
  }

  public closeError(): void {
    this.isInvalidInput = false;
  }
}
