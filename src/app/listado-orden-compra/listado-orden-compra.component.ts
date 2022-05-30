import { Component, OnInit } from '@angular/core';
import { DetalleOrdenCompraModel } from 'src/modelos/detalle_orden_compra.model';
import { OrdenCompraModel } from 'src/modelos/orden_compra.models';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-listado-orden-compra',
  templateUrl: './listado-orden-compra.component.html',
  styleUrls: ['./listado-orden-compra.component.css']
})
export class ListadoOrdenCompraComponent implements OnInit {

  constructor(
    public _service:ServiciosService
  ) {
   
   }
   listadoOrdenCompra:OrdenCompraModel[]=[]
   ordenCmpraSelecionada:OrdenCompraModel=new OrdenCompraModel();
   detalleOrdenCompraSelected:DetalleOrdenCompraModel=new DetalleOrdenCompraModel();
   listadoDetalleOrdenCompra:DetalleOrdenCompraModel[]=[]

  ngOnInit(): void {
    this.obtenerOrdenCompra();
  }
  obtenerOrdenCompra(){
    this._service.obtenerOrdenCompra().subscribe
    ((data:any)=>{
      this.listadoOrdenCompra=data;
    })
  }
  obtenerDetalleOrdenCompra(){
    debugger
    this._service.obtenerDetalleOrdenCompra(this.ordenCmpraSelecionada.id_orden_compra.toString())
    .subscribe((data:any)=>{
      this.listadoDetalleOrdenCompra=data;
      console.log(this.listadoDetalleOrdenCompra);
      
    })
  }


}
