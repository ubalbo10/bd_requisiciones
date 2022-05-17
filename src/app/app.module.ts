import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from "primeng/dropdown"
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';




import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
