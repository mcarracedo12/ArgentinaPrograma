import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl,
    nombre: new FormControl,
    descripcion: new FormControl,
    anio: new FormControl,
    link: new FormControl,
  });

  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      id: ['',[]],
      nombre: ['',[]],
      descripcion: ['',[]],
      anio: ['',[]],
      link: ['',[]],
    })
   }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
    
  }

}
