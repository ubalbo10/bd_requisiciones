import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, tap, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Bad115ApiCoreService {
  
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      //Authorization: 'my-auth-token'
    }),
  };
  //https://localhost:44383/api/Requisicion/Obtener
  readonly bad115ApiCoreUrl = "https://localhost:44383/api";
  constructor( private http:HttpClient) {}

  //REQUISICION
  body=JSON.stringify({"idrequisicion": "1"});
   getListaRequisiciones():Observable<any>{
    return this.http.post(this.bad115ApiCoreUrl + "/Requisicion/Obtener/",this.body, this.httpOptions);
    
  }
   //TEST-.
   getgetListaRequisiciones(){
     console.log("getgetListaRequisiciones()");
     return this.http.post(this.bad115ApiCoreUrl + "/Requisicion/Obtener", "", this.httpOptions)
     .subscribe(data => console.log(data));
   }
/*
   addRequisicion(data:any){
     return this.http.post(this.bad115ApiCoreUrl + "/Requisicion/Guardar", data);
   }
*/
   //DETALLE REQUISICION
  
 getListaDetallesRequisicion(id?:String):Observable<any>{
    return this.http.post<any>(this.bad115ApiCoreUrl + "/Detallerequisicion/Obtener",{id:id}, this.httpOptions);
  }

  //PRODUCTOS
  getListaProductos():Observable<any>{
    return this.http.post<any>(this.bad115ApiCoreUrl + "/Producto/Obtener", "", this.httpOptions);
  }

  //SUCURSALES
  getListaSucursales():Observable<any>{
    return this.http.post<any>(this.bad115ApiCoreUrl + "/Sucursal/Obtener", "", this.httpOptions);
  }
}
