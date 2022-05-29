export class ProductoModel{
    activo : boolean
    es_exportado : boolean
    fecha_vencimiento : Date
    id_admin_catalogo : number
    id_producto : number
    modificado_por : number
    modificador_en : Date
    nombre : string
    precio_minimo : number
    
    
    
    constructor(){
    this.activo = true
    this.es_exportado = true
    this.fecha_vencimiento = new Date()
    this.id_admin_catalogo = -1
    this.id_producto = -1
    this.modificado_por = 0
    this.modificador_en = new Date()
    this.nombre = ''
    this.precio_minimo = 0
    }
    }