import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Titulo } from 'src/assets/data/titulo';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.css']
})
export class FormFormacionComponent implements OnInit {
  @Output() onAddFormacion: EventEmitter<Titulo> = new EventEmitter();
  // id?: number;
  institucion: string = "";
  inicio: string = "";
  fin: string = "";
  carrera: string = "";
  link: string = "";
  img: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onEnviar() {
    const { institucion, inicio, fin, carrera, link, img } = this;
    const newFormacion = { institucion, inicio, fin, carrera, link, img };


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
                // const { empresa, inicio, fin, puesto, link, img } = this;
                // const newExperiencia = { empresa, inicio, fin, puesto, link, img };
                this.onAddFormacion.emit(newFormacion);
                console.log(newFormacion);
                alert("Carrera agregada!");
              }
            };
          };
        };
      }
    }

    // this.onAddFormacion.emit(newFormacion);
    // console.log(newFormacion);
  }

}
