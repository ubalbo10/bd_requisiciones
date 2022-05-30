import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RequisicionUdetalle } from 'src/modelos/RequisicionUdetalle';
import { GuardarCompra } from 'src/modelos/guardarCompra';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(
    public _http:HttpClient
  ) { }

  obtenerSucursal(id?:number){
    return this._http.post(environment.urlApi+'api/Sucursal/Obtener',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }

  obtenerEmpleado(id?:number){
    return this._http.post(environment.urlApi+'api/Empleado/Obtener',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }
  
  obtenerProveedores(id?:number){
    return this._http.post(environment.urlApi+'api/Proveedor/Obtener',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }

  obtenerRequisicion(id?:String){
    return this._http.post(environment.urlApi+'api/Requisicion/ObtenerRequisicionProducto',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }
  obtenerOrdenCompra(id?:String){
    return this._http.post(environment.urlApi+'api/Orden_compra/Obtener',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }

  obtenerDetalleOrdenCompra(id?:String){
    return this._http.post(environment.urlApi+'api/Detalle_orden_compra/Obtener',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }

  ingresarCompra(body:RequisicionUdetalle){
    return this._http.post(environment.urlApi+
      'api/requisicion/GuardarRequesicionUDetalle',body)
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }


  GuardarCompra(body:GuardarCompra){
    return this._http.post(environment.urlApi+
      'api/Orden_compra/Guardar',body)
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }

  ObtenerProductos(id?:String){
    return this._http.post(environment.urlApi+
      'api/Producto/Obtener',{id:id})
    .pipe(
      map((response)=>{
        return response;
      }),
      catchError((err,c)=>{
        throw err;
      })
    )   
  }
}
