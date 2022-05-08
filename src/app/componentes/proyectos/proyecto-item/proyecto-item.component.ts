import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from '../../../../assets/data/proyecto';
import { PROYECTOS } from '../../../../assets/data/mock-proyecto';



@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {
@Input()proyecto:Proyecto=PROYECTOS[0]
@Output() deleteProyecto:EventEmitter<Proyecto>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  modificarProyecto(){
    console.log("Click en Modificar Proyecto" + this.proyecto);
  }
  borrarProyecto(){
    console.log("Click en Borrar Proyecto" + this.proyecto + this.proyecto.id);
    this.deleteProyecto.emit(this.proyecto)
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }

}
