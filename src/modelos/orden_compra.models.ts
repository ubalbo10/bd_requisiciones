export class OrdenCompraModel {
    nombre_proveedor: string;
    nrc:              string;
    nombre_empresa:   string;
    fechaLimite:      Date;
    activo:           boolean;
    aprobada_por:     number;
    fecha_aprobacion: Date;
    fecha_entrega:    Date;
    fecha_orden:      Date;
    fecha_revision:   Date;
    id_empresa:       number;
    id_orden_compra:  number;
    id_proveedor:     number;
    idrequisicion:    number;
    modificado_en:    Date;
    modificado_por:   number;
    numero_orden:     string;

    observaciones:    string;
    revisado_por:     number;

    constructor(){
        this.nombre_proveedor= '';
    this.nrc=              '';
    this.nombre_empresa=   '';
    this.fechaLimite=      new Date();
    this.activo=           true;
    this.aprobada_por=     0;
    this.fecha_aprobacion= new Date();
    this.fecha_entrega=    new Date();
    this.fecha_orden=      new Date();
    this.fecha_revision=   new Date();
    this.id_empresa=       0;
    this.id_orden_compra=  0;
    this.id_proveedor=     0;
    this.idrequisicion=    0;
    this.modificado_en=    new Date();
    this.modificado_por=   0;
    this.numero_orden=     '';
    this.observaciones=    '';
    this.revisado_por=     0;
    }
}