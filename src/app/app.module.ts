import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './containers/experience/experience.component';
import { HomeComponent } from './containers/home/home.component';
import { ServicesComponent } from './containers/services/services.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ExperiencesListComponent } from './components/experiences-list/experiences-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ServicesComponent,
    MenuNavComponent,
    CommentsComponent,
    CommentFormComponent,
    ServicesListComponent,
    ExperiencesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
