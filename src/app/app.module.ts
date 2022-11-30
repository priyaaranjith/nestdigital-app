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
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    NavBarComponent,
    ContactUsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
