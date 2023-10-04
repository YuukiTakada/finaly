import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
=======

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule],
>>>>>>> e8d2e1ee00acd0da90489d3cff4d83020429c7a4
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
