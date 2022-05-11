import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Habilidad } from 'src/assets/data/habilidad';


@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent implements OnInit {
  @Output()onAddHabilidad:EventEmitter<Habilidad>=new EventEmitter();
  habilidad: string = "";
  porcentaje: number=100;

  constructor() { }

  ngOnInit(): void {
  }

  onEnviar() {
    const { habilidad, porcentaje } = this;
    const newHabilidad = { habilidad, porcentaje };

    if (!this.habilidad) {
      alert("Agregar habilidad!");
    } else {
      // if (!this.porcentaje) {
      //   alert("Agregar porcentaje!");
      // }
      // else {
        this.onAddHabilidad.emit(newHabilidad);
        console.log(newHabilidad);
        alert("Habilidad agregada!");
      // }
    }
  }
}
