import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-habilidad',
  templateUrl: './form-habilidad.component.html',
  styleUrls: ['./form-habilidad.component.css']
})
export class FormHabilidadComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl,
    habilidad: new FormControl,
    porcentaje: new FormControl,
  });

  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      id: ['',[]],
      habilidad: ['',[]],
      porcentaje: ['',[]],
    })
  }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
  }

}
