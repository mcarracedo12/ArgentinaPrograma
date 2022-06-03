import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { experiencia } from 'src/assets/data/experiencia';
import { EXPERIENCIAS } from '../../../../assets/data/mock-exp';
import { PortfolioService } from '../../../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia: experiencia = EXPERIENCIAS[0];
  @Output() deleteExperiencia: EventEmitter<experiencia> = new EventEmitter();
  // @Output() onAddExperiencia: EventEmitter<experiencia>=new EventEmitter();
  
  showModal: Boolean = false;
  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    
  }

  // modificarExperiencia(experiencia) {
  //   console.log("Click en Modificar Experiencia" + this.experiencia);
  //   this.onAddExperiencia.emit(this.experiencia);
  // }

  modificarExperiencia(experiencia: experiencia) {
    console.log("Click en Modificar Proyecto  item ts 22" + this.experiencia.empresa);
    // proyecto=this.proyecto;
    this.experiencia=experiencia;
    this.experiencia.id=experiencia.id;
    this.experiencia.empresa=experiencia.empresa;
    this.experiencia.puesto=experiencia.puesto;
    this.experiencia.inicio=experiencia.inicio;
    this.experiencia.fin=experiencia.fin;
    this.experiencia.link=experiencia.link;
    this.experiencia.img=experiencia.img;

    console.log("Click en Modificar Proyecto  item ts 31" + this.experiencia.empresa);
    this.obtenerDatos.modificarExperiencia(experiencia).subscribe();
     
  }



  borrarExperiencia() {
   // console.log("Click en Borrar Experiencia 25 " + this.experiencia.empresa + this.experiencia.id);
    this.deleteExperiencia.emit(this.experiencia);
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  ocultar(e:boolean){
    this.showModal=e;
  }

}
