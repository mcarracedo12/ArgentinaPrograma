import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Habilidad } from 'src/assets/data/habilidad';


@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent implements OnInit {
  @Output()onAddHabilidad:EventEmitter<Habilidad>=new EventEmitter();
  @Input() habilidad:Habilidad=this;
  nombre: string = "";
  porcentaje: number=100;

  constructor() { }

  ngOnInit(): void {
    this.nombre=this.habilidad.nombre;
    this.porcentaje=this.habilidad.porcentaje;
  }

  onEnviar() {
    const { nombre, porcentaje } = this;
    const newHabilidad = { nombre, porcentaje };

    if (!this.nombre) {
      alert("Agregar habilidad!");
    } else {
        this.onAddHabilidad.emit(newHabilidad);
        console.log(newHabilidad);
        alert("Habilidad agregada!");
    }
  }
}
