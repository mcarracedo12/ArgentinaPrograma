import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { experiencia } from 'src/assets/data/experiencia';
import { EXPERIENCIAS } from '../../../../assets/data/mock-exp';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia: experiencia = EXPERIENCIAS[0];
  @Output() deleteExperiencia: EventEmitter<experiencia> = new EventEmitter()
  
  showModal: Boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  modificarExperiencia() {
    console.log("Click en Modificar Experiencia" + this.experiencia);
  }
  borrarExperiencia() {
    console.log("Click en Borrar Experiencia" + this.experiencia.empresa + this.experiencia.id);
    this.deleteExperiencia.emit(this.experiencia);
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
