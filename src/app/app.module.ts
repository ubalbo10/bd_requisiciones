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
import { SlideMenuModule } from 'primeng/slidemenu';




import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { HomeComponent } from './home/home.component';
import { PaisComponent } from './pais/pais.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SucursalComponent } from './sucursal/sucursal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaisComponent,
    ProductoComponent,
    ProveedorComponent,
    EmpleadoComponent,
    SucursalComponent,
    
    
    
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
    SlideMenuModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
