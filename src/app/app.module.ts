import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {TaskComponent} from './components/task/task.component';
import {FullVersionComponent} from './components/full-version/full-version.component';
import {MiniVersionComponent} from './components/mini-version/mini-version.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FullVersionComponent,
    MiniVersionComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
