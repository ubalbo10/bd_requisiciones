import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ListadoRequisicionesComponent } from './listado-requisiciones/listado-requisiciones.component';
import { DetalleRequisicionesComponent } from './detalle-requisiciones/detalle-requisiciones.component';
import { GenerarCompraComponent } from './generar-compra/generar-compra.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'ConsultaRequisiciones', component: ListadoRequisicionesComponent },
  { path: 'detalleRequisicion', component: DetalleRequisicionesComponent},
  { path: 'generarCompra', component: GenerarCompraComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
