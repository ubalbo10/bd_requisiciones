import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bad115ApiCoreService } from 'src/app/bad115-api-core.service';
import { ProductoModel } from 'src/modelos/producto';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-detalle-requisiciones',
  templateUrl: './detalle-requisiciones.component.html',
  styleUrls: ['./detalle-requisiciones.component.css']
})
export class DetalleRequisicionesComponent implements OnInit {
  listaDetallesRequisicion$!:Observable<any[]>;
  listaProductos$!: Observable<any[]>;
  listaProductos: any=[];
  detalleRequisicionProductoMap:Map<number, string> = new Map();

  constructor(private service:Bad115ApiCoreService) { }

  ngOnInit(): void {
    this.listaDetallesRequisicion$ = this.service.getListaDetallesRequisicion();
    this.listaProductos$ = this.service.getListaProductos();
    this.actualizarRequisicionProductoMap();
  }

  actualizarRequisicionProductoMap(){
    this.service.getListaProductos().subscribe(data =>{
      this.listaProductos = data;
      for(let i = 0; i< data.length; i++){
        this.detalleRequisicionProductoMap.set(this.listaProductos[i].id_producto, this.listaProductos[i].nombre);
      }
    });
  }  
}

