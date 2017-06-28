import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PagesDirective } from './pages.directive';
import { DogsComponent } from './dogs-profile/dogs.component';
import { CarsProfileComponent } from './cars-profile/cars-profile.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PageService } from "./page.service"

@NgModule({
  declarations: [
    AppComponent,
    PagesDirective,
    DogsComponent,
    CarsProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule


  ],
  providers: [PageService],
  entryComponents: [DogsComponent, CarsProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
