import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TITULOS } from '../../../../assets/data/mock-titulos';
import { Titulo } from 'src/assets/data/titulo';
import { ModificarComponent } from '../../modificar/modificar.component';
import { PortfolioService } from '../../../servicios/portfolio.service';


@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  @Input() titulo: Titulo = TITULOS[0];
  @Output() deleteTitulo: EventEmitter<Titulo> = new EventEmitter;
  // @Output() modifyTitulo: EventEmitter<Titulo> = new EventEmitter;

  showModal: Boolean = false;


  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
  }

  modificarFormacion(titulo: Titulo) {
    console.log("Click en Modificar Titulo  item ts 26" + this.titulo.carrera);
    // proyecto=this.proyecto;
    this.titulo=titulo;
    this.titulo.id=titulo.id;
    this.titulo.carrera=titulo.carrera;
    this.titulo.institucion=titulo.institucion;
    this.titulo.inicio=titulo.inicio;
    this.titulo.fin=titulo.fin;
    this.titulo.img=titulo.img;
    this.titulo.link=titulo.link

    console.log("Click en Modificar Titulo  item ts 37" + this.titulo.carrera);
    this.obtenerDatos.modificarTitulo(titulo).subscribe();
     
  }

  borrarTitulo() {
    // console.log("Click en Borrar Titulo" + this.titulo.carrera + this.titulo.id);
    this.deleteTitulo.emit(this.titulo);
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  ocultar(e: boolean) {
    this.showModal = e;
  }


}
