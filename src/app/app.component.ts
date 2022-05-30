import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      :host ::ng-deep .ui-slidemenu {
          width: 13.5em
      }
  `]
  })
export class AppComponent {
  title = 'Ordenes_Requisiciones';
  value1='o';
  
   constructor(public router:Router){
         
   }
  items: MenuItem[]=[];
  ngOnInit() {
    this.items = [
        {
           label:'Crear Requisicion',
           icon:'pi pi-fw pi-file',
           command: (event: any) => {
              
                this.router.navigateByUrl("home");
            }
           
        },
        {
           label:'Consultar Requisiciones',
           icon:'pi pi-fw pi-pencil',
           command: (event: any) => {
              
            this.router.navigateByUrl("ConsultaRequisiciones");
        }
       
        },
        {
         
            label:'Generar Orden de compra',
            icon:'pi pi-fw pi-file',
            command: (event: any) => {
               
                 this.router.navigateByUrl("generarCompra");
             }
            
         
        },
        {
           label:'Consultar Orden compra',
           icon:'pi pi-fw pi-calendar',
           visible:true,
           command: (event: any) => {
               
            this.router.navigateByUrl("ConsultaOrdenCompra");
        }
        },
        {
           separator:true
        },
        {
           label:'Quit',
           icon:'pi pi-fw pi-power-off'
        }
    ];

  }
  
  
  metodo(){
    alert ('hola');
  }
}
