import { Component, OnInit } from '@angular/core';
import { GuardarCompra } from 'src/modelos/guardarCompra';
import { ProductoModel } from 'src/modelos/producto';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-generar-compra',
  templateUrl: './generar-compra.component.html',
  styleUrls: ['./generar-compra.component.css']
})
export class GenerarCompraComponent implements OnInit {
  
    listadoProveedores: any[]=[];
    listadoProductos: any[]=[];
  
    
    //aqui recuperamos la seleccion 
    valorSelecionadoProveedor:any;
    idRequisicion="0";
    cols: any[]=[];
  
    constructor(public _servicios:ServiciosService) { }
  
    ngOnInit(): void {
  
      this.obtenerProveedores();
      this.obtenerRequisicion();
      //columnas a pintar en la tabla
      this.cols = [
        //field es el que viene de la api
        { field: 'id_producto', header: 'ID_PRODUCTO' },
        { field: 'nombre_producto', header: 'nombrE_PRODUCTO' },
        { field: 'cantidad', header: 'cantida'},
        { field: 'precio_minimo', header: 'precio'},
        
       ];
    }
  
    generar(){
     this.obtenerRequisicion(); 
    }
  
    obtenerProveedores(){
      this._servicios.obtenerProveedores()
      .subscribe((data:any)=>{
        console.log(data);
       this.listadoProveedores=data;
      })
      
    }
  
    obtenerRequisicion(){
      //console.log(this.idRequisicion);
      
      this._servicios.obtenerRequisicion(this.idRequisicion).subscribe(
        (data:any)=>{
          this.listadoProductos=data;
          console.log(data)
        }
      )
    }
    aceptar(){
      //guarda orden de compra

      //debo de mandarle {
	// "id_Empresa":1,
	// "id_orden_compra":-1,
	// "id_Proveedor":1,
	// "idRequisicion":1017
  
  var id_Proveedor= this.valorSelecionadoProveedor
  //id_Proveedor.id_Proveedor
  console.log(this.valorSelecionadoProveedor.id_proveedor)
  
  var idRequisicion=parseInt(this.idRequisicion);
  var ingCompra=new GuardarCompra(this.valorSelecionadoProveedor.id_proveedor,idRequisicion)
  console.log(ingCompra);
  
  this._servicios.GuardarCompra(ingCompra).subscribe(
    (data:any)=>{
      this.listadoProductos=data;
      console.log(data)
    }
  )

      
  
    }
    cancelar(){
      //limpiar todo 
      this.idRequisicion="0";
      this.listadoProductos=[];
      this.valorSelecionadoProveedor=null;
    }
  
}
  


