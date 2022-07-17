import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITask} from "../../interface/tasks";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})
export class FullVersionComponent {

  constructor() {

    let getListTask: string;
    // @ts-ignore
    getListTask = localStorage.getItem('allTasks' || '[]');
    this.task = JSON.parse(getListTask);
    console.log(this.task)
  }

  public task: ITask[] = []

  drop(event: CdkDragDrop<string[]>) {
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
