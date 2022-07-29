import {Component} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {ITask, Status} from "../../interface/tasks";
import {getFromLocalStorage} from "../../get-from-local-storage";
import {updateLocalStorage} from "../../update-local-storage";
import {STORAGE_ALL_TASKS_KEY} from "../const";
import {DialogBoxForDeleteComponent} from "../dialog-box-for-delete/dialog-box-for-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})

export class FullVersionComponent {
  public readonly status: typeof Status = Status;
  public allTasks: ITask[] = [];
  public name: string = '';

  public countToDoTask(): number {
    return this.allTasks.filter((task) => task.status === Status.ToDo).length;
  }

  public countInProgressTask(): number {
    return this.allTasks.filter((task) => task.status === Status.InProgress).length;
  }

  public countDoneTask(): number {
    return this.allTasks.filter((task) => task.status === Status.Done).length;
  }

  constructor(public dialog: MatDialog) {
    let getListTask:string = getFromLocalStorage(STORAGE_ALL_TASKS_KEY) || '[]';
    this.allTasks = JSON.parse(getListTask);
  }

  public openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogBoxForDeleteComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteOneTask(id);
      }
    });
  }

  public get todo(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.ToDo);
  }

  public get inProgress(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.InProgress);
  }

  public get done(): ITask[] {
    return this.allTasks.filter((task: ITask) => task.status === Status.Done);
  }

  public deleteOneTask(id: number): void {
    this.allTasks = this.allTasks.filter((task) => task.id !== id);
    updateLocalStorage(STORAGE_ALL_TASKS_KEY, JSON.stringify(this.allTasks));
  }

  public dropDown(event: CdkDragDrop<ITask[]>, status: Status): void {
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
