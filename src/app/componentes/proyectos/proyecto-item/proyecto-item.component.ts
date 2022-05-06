import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../../assets/data/proyecto';
import { PROYECTOS } from '../../../../assets/data/mock-proyecto';



@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {
@Input()proyecto:Proyecto=PROYECTOS[0]
  constructor() { }

  ngOnInit(): void {
  }
  modificarProyecto(){
    console.log("Click en Modificar Proyecto");
  }
  borrarProyecto(){
    console.log("Click en Borrar Proyecto");
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }

}
