import {Component, EventEmitter, Output} from '@angular/core';
import {ITask, Status} from "../../interface/tasks";
import {getTasksFromLocalStorage} from "../../get-tasks-from-local-storage";
import {updateLocalStorage} from "../../update-local-storage";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Output() changeStatusInput: EventEmitter<string> = new EventEmitter<string>();
  task: string = '';
  public allTasks: ITask[] = [];
  public isInvalidInput: boolean = false;

  ngOnInit() {
    this.allTasks = getTasksFromLocalStorage();
  }

  ngDoCheck() {
    this.allTasks = getTasksFromLocalStorage();
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
      updateLocalStorage(this.allTasks);
      this.task = '';
    } else {
      this.isInvalidInput = true;
    }
  }

  public closeError():void {
    this.isInvalidInput = false;
  }
}
