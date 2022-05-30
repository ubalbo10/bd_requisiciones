import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bad115ApiCoreService } from 'src/app/bad115-api-core.service';


@Component({
  selector: 'app-listado-requisiciones',
  templateUrl: './listado-requisiciones.component.html',
  styleUrls: ['./listado-requisiciones.component.css']
})
export class ListadoRequisicionesComponent implements OnInit {

  listaRequisiones$!: Observable<any[]>;
  listaSucursales: any=[];
  requisicionSucursalMap: Map<number, string> = new Map();
  constructor(private service:Bad115ApiCoreService) { }

  ngOnInit(): void {
    this.service.getgetListaRequisiciones();
    this.listaRequisiones$ = this.service.getListaRequisiciones();
    
    this.actualizarRequisicionSucursalMap();
  }

  actualizarRequisicionSucursalMap(){
    this.service.getListaSucursales().subscribe(data =>{
      this.listaSucursales = data;
      for(let i = 0; i< data.length; i++){
        this.requisicionSucursalMap.set(this.listaSucursales[i].id_sucursal, this.listaSucursales[i].nombre);
      }
    });
  }

}
