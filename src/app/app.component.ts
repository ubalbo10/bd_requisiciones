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
           label:'Users',
           icon:'pi pi-fw pi-user',
           
        },
        {
           label:'Events',
           icon:'pi pi-fw pi-calendar',
           
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
