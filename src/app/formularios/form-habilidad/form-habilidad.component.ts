import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Habilidad } from 'src/assets/data/habilidad';


@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent implements OnInit {
  @Output() onAddHabilidad: EventEmitter<Habilidad> = new EventEmitter();
  @Input() habilidad: Habilidad = this;
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter();

  id?: number;
  nombre: string = "";
  porcentaje: number = 100;
  showModal: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.id = this.habilidad.id;
    this.nombre = this.habilidad.nombre;
    this.porcentaje = this.habilidad.porcentaje;
  }

  onEnviar() {
    const { id, nombre, porcentaje } = this;
    const newHabilidad = { id, nombre, porcentaje };

    if (!this.nombre) {
      alert("Agregar habilidad!");
    }
    else {
      if (!this.porcentaje) {
        alert("Agregar porcentaje!");
      }
      else {
        this.onAddHabilidad.emit(newHabilidad);
        console.log(newHabilidad);
        alert("Habilidad agregada!");
        this.showModal = false;
        this.hideModal.emit(this.showModal);
      }
    }
  }
}
