import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {getFromLocalStorage} from "../../../get-from-local-storage";
import {ITask, Status} from "../../../interface/tasks";
import {STORAGE_ALL_TASKS_KEY} from "../../const";
import {updateLocalStorage} from "../../../update-local-storage";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  public readonly status: typeof Status = Status;
  public taskId: number;
  public task: ITask[] = [];
  public allTasks: ITask[] = [];
  public isEditTask: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.taskId = Number(this.route.snapshot.params['id']);
    let tasks: string = getFromLocalStorage(STORAGE_ALL_TASKS_KEY) || '[]';
    this.allTasks = JSON.parse(tasks);
    this.task = this.allTasks.filter((task) => task.id === this.taskId);
  }

  public deleteOneTask(id: number): void {
    let isDeleteTask: boolean = confirm('Delete?');
    if (isDeleteTask) {
      this.allTasks = this.allTasks.filter(task => task.id !== id);
      updateLocalStorage(STORAGE_ALL_TASKS_KEY, JSON.stringify(this.allTasks));
    }
  }

  public editTask(id: number, name: string) {
    this.isEditTask = !this.isEditTask;
    this.allTasks.forEach(task => {
      if (Number(task.id) === id) {
        task.name = name;
      }
    })
    updateLocalStorage(STORAGE_ALL_TASKS_KEY, JSON.stringify(this.allTasks));
  }

  public changeStatus(name: string, status: Status): void {
    this.allTasks.forEach(task => {
      if (task.name === name) {
        task.status = status;
      }
    });
    updateLocalStorage(STORAGE_ALL_TASKS_KEY, JSON.stringify(this.allTasks));
  }
}
