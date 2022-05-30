import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/modelos/producto';
import { ServiciosService } from '../servicios/servicios.service';

import { Observable } from 'rxjs';
import { Bad115ApiCoreService } from 'src/app/bad115-api-core.service';
import { ActivatedRoute, Route } from '@angular/router';
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
  id:any;
  
  constructor(private service:Bad115ApiCoreService,
  
    private route: ActivatedRoute,
    ) { }
    idreq:number=0

  ngOnInit(): void {
    // this.route
    //   .params
    //   .subscribe(params => {
       
    //     // Defaults to 0 if no query param provided.
    //     this.id = params['id'] || 0;
    //     console.log(this.id);
        
    //   });
    this.route.params.subscribe(params => {
      this.idreq = +params['id']; 
   });
    this.listaDetallesRequisicion$ = this.service.getListaDetallesRequisicion(this.idreq.toString());

    this.listaProductos$ = this.service.getListaProductos();
    this.actualizarRequisicionProductoMap();
    //console.log("########### "+this.idreq);
    
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

