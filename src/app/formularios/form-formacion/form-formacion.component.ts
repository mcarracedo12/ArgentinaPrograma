import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.css']
})
export class FormFormacionComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl,
    institucion: new FormControl,
    inicio: new FormControl,
    fin: new FormControl,
    carrera: new FormControl,
    link: new FormControl,
    img: new FormControl,
  });
  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      id: ['',[]],
      institucion: ['',[]],
      inicio: ['',[]],
      fin: ['',[]],
      carrera: ['',[]],
      link: ['',[]],
      img: ['',[]],
    })
  }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
    
  }

}
