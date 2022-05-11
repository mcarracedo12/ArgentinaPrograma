import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { experiencia } from '../../../assets/data/experiencia';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {
  @Output() onAddExperiencia: EventEmitter<experiencia> = new EventEmitter();

  // id?: number;
  empresa: string = "";
  inicio: string = "";
  fin: string = "";
  puesto: string = "";
  link: string = "";
  img: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onEnviar() {
    const { empresa, inicio, fin, puesto, link, img } = this;
    const newExperiencia = { empresa, inicio, fin, puesto, link, img };
   
    // LOGICA DE FORMULARIO
    if (!this.empresa) {
          alert("Agregar empresa!");
        } else {
          if (!this.inicio) {
            alert("Agregar fecha de Inicio!");
          } else {
            if (!this.fin) {
              alert("Agregar fecha de finalizacion!")
            } else {
              if (!this.puesto) {
                alert("Agregar puesto!")
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
                    this.onAddExperiencia.emit(newExperiencia);
                    console.log(newExperiencia);
                    alert("Experiencia agregada!");
                  }
                };
              };
            };
          }
        }
    //TERMINA LOGICA DE FORMULARIO
    // this.onAddExperiencia.emit(newExperiencia);
    // console.log(newExperiencia);

  }
}

