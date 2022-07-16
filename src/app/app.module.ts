import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {TaskComponent} from './component/task/task.component';
import {FullversionComponent} from './fullversion/fullversion.component';
import {NotfullversionComponent} from './notfullversion/notfullversion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FullversionComponent,
    NotfullversionComponent
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
