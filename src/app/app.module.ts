import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewCourseComponent } from './view-course/view-course.component';

const myRoute: Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home1",
    component:Home1Component
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"viewcourse",
    component:ViewCourseComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    NavBarComponent,
    ContactUsComponent,
    GalleryComponent,
    AdminComponent,
    AddCourseComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
