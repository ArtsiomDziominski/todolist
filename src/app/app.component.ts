import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isFullVersion: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.isFullVersion = localStorage.getItem('version') == 'true';
  }

  public toggleVersion(): void {
    this.isFullVersion = !this.isFullVersion;
    localStorage.setItem('version', String(this.isFullVersion))
  }
}
