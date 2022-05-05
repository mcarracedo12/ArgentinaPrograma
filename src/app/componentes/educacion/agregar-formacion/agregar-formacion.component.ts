import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar-formacion',
  templateUrl: './agregar-formacion.component.html',
  styleUrls: ['./agregar-formacion.component.css']
})
export class AgregarFormacionComponent implements OnInit {
@Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
