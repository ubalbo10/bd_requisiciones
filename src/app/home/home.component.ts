import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: any[]=[];
  valorSelecionado:any;
  fechaLimite:any;

  idProducto:any;
  nombreProducto:any;
  cantidad:any;


  products: any[]=[];

  cols: any[]=[];

  producto: any;    
  
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

     this.products = [];

      this.cols = [
          { field: 'codigo', header: 'Codigo' },
          { field: 'nombre', header: 'nombre' },
          { field: 'cantida', header: 'cantida'}
      ];
    //console.log(this.cities);
    
  }

  agregar(){
    //alert("hola");
    this.producto= {
      codigo: this.idProducto,
      nombre: this.nombreProducto,
      cantida: this.cantidad
    }
    
    this.products.push(this.producto);

    this.idProducto=null;
    this.nombreProducto=null;
    this.cantidad=null;

  }

}
