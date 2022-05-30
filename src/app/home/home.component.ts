import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DetallerequisicionModel } from 'src/modelos/detalleRequisicion';
import {  ProductoModel } from 'src/modelos/producto';
import { requisicion } from 'src/modelos/requisicion';
import { RequisicionUdetalle } from 'src/modelos/RequisicionUdetalle';
import { sucursal } from 'src/modelos/sucursal';
import { ServiciosService } from '../servicios/servicios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  //atributos para selecionar una opcion
  listadoPersonal: any[]=[];
  listadoSucursales: sucursal[]=[];
  listadoProductos:ProductoModel[]=[];
  productoSeleccionado:ProductoModel[]=[];

  listaSucursalesItem: SelectItem[]=[];
  listaUsuarioItem: SelectItem[]=[];

  //aqui recuperamos la seleccion 
  valorSelecionadoPersonal:any;
  valorSelecionadoSucursal:any;
  
  fechaLimite:Date=new Date();

  idProducto:any;
  nombreProducto:any;
  cantidad:any;


  products: any[]=[];
  listadoDetRequi:DetallerequisicionModel[]=[];

  cols: any[]=[];

  producto: any;    
  
  
  constructor(
    public _servicios:ServiciosService
  ) {
    
    //me escuchas   noooooo vos si me escuchas???

  }

  ngOnInit(): void {
    this.obtenerSucursales();
    this.obtenerEmpleado(); 
    this.obtenerProductos();
    

     this.products = [];

      this.cols = [
          { field: 'id_producto', header: 'id_producto' },
          { field: 'nombre', header: 'nombre' },
          { field: 'cantidad', header: 'cantidad'}
      ];
    //console.log(this.cities);
    
    
  }
  onchangeUsuario(value:SelectItem){
    this.valorSelecionadoPersonal=value;
  }
  obtenerSucursales(){
    this._servicios.obtenerSucursal()
    .subscribe((data:any)=>{
      //console.log(data);
     //this.listaSucursalesItem=data;
     this.listadoSucursales=data;
      //this.listaSucursalesItem.forEach(element => {
       // this.listaSucursalesItem.push({
       //   label:element.nombre
      //  })
      //});
    })
    
  }

  obtenerProductos(){
    this._servicios.ObtenerProductos()
    .subscribe((data:any)=>{
      //console.log(data);
     //this.listaSucursalesItem=data;
     this.listadoProductos=data;
      //this.listaSucursalesItem.forEach(element => {
       // this.listaSucursalesItem.push({
       //   label:element.nombre
      //  })
      //});
    })
    
  }

  obtenerEmpleado(){
    this._servicios.obtenerEmpleado().subscribe(
      (data:any)=>{
        this.listadoPersonal=data;
        this.listadoPersonal.forEach(personal => {
          this.listaUsuarioItem.push({label:personal.nombre ,value:personal.idempleado})
        });
      }
    )
  }

  

  agregar(){
    let detalleRequi:DetallerequisicionModel=new DetallerequisicionModel();
    this.listadoDetRequi=[];
    // detalleRequi.id_producto=this.productoSeleccionado.id_producto;
    // detalleRequi.nombre=this.productoSeleccionado.nombre;
    // this.listadoDetRequi.push(detalleRequi);
    if(this.productoSeleccionado.length>0){
      this.productoSeleccionado.forEach(producto => {
        detalleRequi=new DetallerequisicionModel();
       detalleRequi.id_producto=producto.id_producto;
       detalleRequi.nombre=producto.nombre;
       this.listadoDetRequi.push(detalleRequi)
      });
    }

  }
  aceptar(){

    //guardar en la api la requisicion , se debe crear requisicion con los datos nombre, fecha etc y la lista de podructs
    // this.IngresarCompra(this.fechaLimite,this.valorSelecionadoPersonal.idempleado,this.products)
    // console.log(this.valorSelecionadoPersonal.idempleado);
    
    //alert('aceptado');
    let reqUDet:RequisicionUdetalle=new RequisicionUdetalle();
    let req:requisicion=new requisicion();
    req.estado=1;
    req.fechalimite=this.fechaLimite;
    req.id_sucursal=1;
    req.id_usuario=this.valorSelecionadoPersonal.value;
    req.usuarioencargado=this.valorSelecionadoPersonal.label;
    reqUDet.requisicion=req;
    reqUDet.detalleRequisicion=this.listadoDetRequi;
    console.log(reqUDet);
    this._servicios.ingresarCompra(reqUDet)
    .subscribe((data:any)=>{
      console.log(data);
      
    })
    
  }
  cancelar(){
      alert('cancelado');
      this.products=[];
      this.fechaLimite=new Date();
     // this.valorSelecionadoPersonal=null;
      this.valorSelecionadoSucursal=null;
  }

  
}
