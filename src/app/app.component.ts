import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isToggleVersion: boolean = true;
  public dateTime: Date = new Date();

  constructor() {
    this.updateTime()
  }

  public updateTime(): void {
    setInterval(() => this.dateTime = new Date(), 1000);
  }

}
