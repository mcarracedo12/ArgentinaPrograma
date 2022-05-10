import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl,
    empresa: new FormControl,
    inicio: new FormControl,
    fin: new FormControl,
    puesto: new FormControl,
    link: new FormControl,
    img: new FormControl,
  });
  constructor(public formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      id: ['',[]],
      empresa: ['',[]],
      inicio: ['',[]],
      fin: ['',[]],
      puesto: ['',[]],
      link: ['',[]],
      img: ['',[]],
    })
   }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
    
  }
}
