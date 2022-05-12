import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dato',
  templateUrl: './form-dato.component.html',
  styleUrls: ['./form-dato.component.css']
})
export class FormDatoComponent implements OnInit {

  dato:string=""
  constructor() { }

  ngOnInit(): void {
  }

  onEnviar(){
    console.log("clik en enviar Dato")
  }

}
