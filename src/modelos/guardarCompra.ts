export class GuardarCompra{
    
   id_empresa:Number=1;
   id_orden_compra:Number;
   id_Proveedor:Number;
   idRequisicion:Number;

   constructor(
    id_Proveedor:Number,
    idRequisicion:Number){
            this.id_empresa=1;
            this.id_orden_compra=-1;
            this.id_Proveedor=id_Proveedor;
            this.idRequisicion=idRequisicion;
   }





}