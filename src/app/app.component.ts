import {Component} from '@angular/core';
import {getFromLocalStorage} from "./get-from-local-storage";
import {updateLocalStorage} from "./update-local-storage";
import {storageDarkModeKey, storageVersionKey} from "./components/const";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isFullVersion: boolean = false;
  public isToggleDarkMode: boolean = false;

  public ngOnInit(): void {
    this.isFullVersion = getFromLocalStorage(storageVersionKey) == 'true';
    this.isToggleDarkMode = getFromLocalStorage(storageDarkModeKey) == 'true';
  }

  public toggleVersion(): void {
    this.isFullVersion = !this.isFullVersion;
    updateLocalStorage(storageVersionKey, String(this.isFullVersion));
  }

  public ToggleDarkMode(): void {
    this.isToggleDarkMode=!this.isToggleDarkMode
    updateLocalStorage(storageDarkModeKey, String(this.isToggleDarkMode));
  }
}
