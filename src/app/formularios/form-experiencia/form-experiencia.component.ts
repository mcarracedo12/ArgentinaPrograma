import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { experiencia } from '../../../assets/data/experiencia';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {
  @Output()onAddExperiencia:EventEmitter<experiencia>=new EventEmitter();
  
  // id?: number;
  empresa: string="";
  inicio: string="";
  fin: string="";
  puesto: string="";
  link: string="";
  img: string="";
  
  constructor() {}

  ngOnInit(): void {
  }

  onEnviar(){
    const {empresa, inicio, fin, puesto, link, img} = this;
    const newExperiencia = {empresa, inicio, fin, puesto, link, img};
  }
}
