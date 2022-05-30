export class sucursal{
    id_sucursal: Number;
    id_pais:Number;
    nombre:String;
    direccion:string;
    latitud:String;
    longitud:String;
    modificado_por:Number;
    modificado_en:Date;
    activo:Number;

    constructor( id_sucursal: Number,
        id_pais:Number,
        nombre:String,
        direccion:string,
        latitud:String,
        longitud:String,
        modificado_por:Number,
        modificado_en:Date,
        activo:Number){

            this.id_sucursal=id_sucursal;
            this.id_pais=id_pais;
            this.nombre=nombre;
            this.direccion=direccion;
            this.latitud=latitud;
            this.longitud=longitud;
            this.modificado_por=modificado_por;
            this.modificado_en=modificado_en;
            this.activo=activo;

    }


}