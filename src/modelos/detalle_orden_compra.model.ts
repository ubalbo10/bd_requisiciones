export class DetalleOrdenCompraModel {
    activo:            boolean;
    cantidad:          number;
    fecha_creacion:    Date;
    id_detalle_compra: number;
    id_divisas:        number;
    id_orden_compra:   number;
    modificado_en:     Date;
    modificado_por:    number;
    numero_detalle:    string;
    precio_unitario:   number;
    valor_total:       number;
    constructor(){
        this.activo=            true;
    this.cantidad=          0;
    this.fecha_creacion=    new Date();
    this.id_detalle_compra= 0;
    this.id_divisas=        0;
    this.id_orden_compra=   0;
    this.modificado_en=     new Date();
    this.modificado_por=    0;
    this.numero_detalle=    '';
    this.precio_unitario=   0;
    this.valor_total=       0;
    }
}