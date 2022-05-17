import { Component } from '@angular/core';
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

  items: MenuItem[]=[];
  ngOnInit() {
    this.items = [
        {
           label:'File',
           icon:'pi pi-fw pi-file',
           
        },
        {
           label:'Edit',
           icon:'pi pi-fw pi-pencil',
           
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
