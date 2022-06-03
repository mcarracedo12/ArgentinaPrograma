import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Proyecto } from '../../../assets/data/proyecto';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  @Output() onAddProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Input() proyecto: Proyecto = this;
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter();

  id?: number;
  nombre: string = "";
  descripcion: string = "";
  anio: string = "";
  link: string = "";

  showModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.id = this.proyecto.id;
    this.nombre = this.proyecto.nombre;
    this.descripcion = this.proyecto.descripcion;
    this.anio = this.proyecto.anio;
    this.link = this.proyecto.link;
  }

  onEnviar() {
    const { id, nombre, descripcion, anio, link } = this;
    const newProyecto = { id, nombre, descripcion, anio, link };

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
            alert("Proyecto emitido!");
            this.showModal = false;
            this.hideModal.emit(this.showModal);
          }
        }
      }
    }
  }
}

