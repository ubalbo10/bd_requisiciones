import { DetallerequisicionModel } from "./detalleRequisicion";
import { ProductoModel } from "./producto";
import { requisicion } from "./requisicion";

 export class RequisicionUdetalle{
    
    requisicion: requisicion;
    detalleRequisicion: DetallerequisicionModel[];


    constructor( 
       
    ){
         
         this.requisicion=new requisicion();
        this.detalleRequisicion=[]
    }


}