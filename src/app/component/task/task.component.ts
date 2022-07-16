import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from "../../interface/tasks";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input()
  task?: ITask;
  @Output()
  changeStatus: EventEmitter<void> = new EventEmitter<void>();

  public toggleDoneTask(): void {
    this.changeStatus.emit();
  }
}
