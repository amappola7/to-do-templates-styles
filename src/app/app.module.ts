import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/shared/nav-bar/nav-bar.component';
import { HeaderComponent } from './ui/shared/header/header.component';
import { SectionTitleComponent } from './ui/shared/section-title/section-title.component';
import { TaskComponent } from './ui/shared/task/task.component';
import { CreateTaskComponent } from './ui/pages/create-task/create-task.component';
import { ToDoListComponent } from './ui/pages/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    SectionTitleComponent,
    TaskComponent,
    CreateTaskComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
