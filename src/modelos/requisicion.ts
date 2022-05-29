export class requisicion{
    estado : number
    fechaingresada : Date
    fechalimite : Date
    id_sucursal : number
    id_usuario : number
    idrequisicion : number
    usuarioencargado : string
    
    
    
    constructor(){
    this.estado = 0
    this.fechaingresada = new Date()
    this.fechalimite = new Date()
    this.id_sucursal = -1
    this.id_usuario = -1
    this.idrequisicion = -1
    this.usuarioencargado = ''
    }
    }