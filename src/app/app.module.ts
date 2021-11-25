import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
