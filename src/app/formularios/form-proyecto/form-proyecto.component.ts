import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyecto } from '../../../assets/data/proyecto';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  @Output() onAddProyecto: EventEmitter<Proyecto> = new EventEmitter();
  nombre: string = "";
  descripcion: string = "";
  anio: string = "";
  link: string = "";
  constructor() { }
  
  ngOnInit(): void {
  }

  onEnviar() {
    const { nombre, descripcion, anio, link } = this;
    const newProyecto = { nombre, descripcion, anio, link };

    if (!this.nombre) {
      alert("Agregar nombre del proyecto!");
    } else {
      if (!this.descripcion) {
        alert("Agregar descripción del proyecto!");
      } else {
        if (!this.anio) {
          alert("Agregar año de proyecto!");
        } else {
          if (!this.link) {
            alert("Agregar link al proyecto!");
          } else {
            this.onAddProyecto.emit(newProyecto);
            console.log(newProyecto);
            alert("Proyecto agregado!");
          }
        }
      }
    }
  }
}

