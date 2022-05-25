import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Habilidad } from 'src/assets/data/habilidad';
import { HABILIDADES } from '../../../../assets/data/mock-habilidad';


@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.css']
})
export class HabilidadesItemComponent implements OnInit {
  @Input() habilidad: Habilidad = HABILIDADES[0];
  @Output() deleteHabilidad: EventEmitter<Habilidad> = new EventEmitter()
  showModal: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  modificarHabilidad() {
    console.log("Click en Modificar Habilidad");
  }
  borrarHabilidad() {
    console.log("Click en Borrar Habilidad " + this.habilidad.nombre);
    console.log("Click en Borrar Habilidad" + this.habilidad + this.habilidad.id);
    this.deleteHabilidad.emit(this.habilidad)
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  ocultar(e:boolean){
    this.showModal=e;
  }

}
