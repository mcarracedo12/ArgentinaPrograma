import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Titulo } from 'src/assets/data/titulo';
import { Input } from '@angular/core';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.css']
})
export class FormFormacionComponent implements OnInit {
  @Output() onAddFormacion: EventEmitter<Titulo> = new EventEmitter();
  @Input() titulo: Titulo = this;
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter();

  id?: number;
  institucion: string = "";
  inicio: string = "";
  fin: string = "";
  carrera: string = "";
  link: string = "";
  img: string = "";

  showModal: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.id = this.titulo.id;
    this.institucion = this.titulo.institucion;
    this.inicio = this.titulo.inicio;
    this.fin = this.titulo.fin;
    this.carrera = this.titulo.carrera;
    this.link = this.titulo.link;
    this.img = this.titulo.img;
  }

  onEnviar() {
    const { id, institucion, inicio, fin, carrera, link, img } = this;
    const newFormacion = { id, institucion, inicio, fin, carrera, link, img };


    if (!this.institucion) {
      alert("Agregar institucion!");
    } else {
      if (!this.inicio) {
        alert("Agregar fecha de Inicio!");
      } else {
        if (!this.fin) {
          alert("Agregar fecha de finalizacion!")
        } else {
          if (!this.carrera) {
            alert("Agregar carrera!")
          } else {
            if (!this.link) {
              alert("Agregar link a la pagina de la empresa!")
            } else {
              if (!this.img) {
                alert("Agregar link del logo de la empresa!");
              }
              else {
                this.onAddFormacion.emit(newFormacion);
                console.log(newFormacion);
                alert("Carrera agregada!");
                this.showModal = false;
                this.hideModal.emit(this.showModal);
              }
            };
          };
        };
      }
    }
  }

}
