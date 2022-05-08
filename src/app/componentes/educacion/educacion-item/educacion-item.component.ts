import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TITULOS } from '../../../../assets/data/mock-titulos';
import { Titulo } from 'src/assets/data/titulo';


@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
@Input()titulo:Titulo=TITULOS[0];
@Output()deleteTitulo:EventEmitter<Titulo>= new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  modificarFormacion(){
    console.log('Click en Modificar Formacion');
  }
  borrarFormacion(){
    console.log("Click en Borrar Titulo" + this.titulo.carrera + this.titulo.id);
    this.deleteTitulo.emit(this.titulo);
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  

}
