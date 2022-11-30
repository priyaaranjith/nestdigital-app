import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute: Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home1",
    component:Home1Component
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    NavBarComponent
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
