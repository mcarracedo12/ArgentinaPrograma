import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {
@Output() btnClick= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }

}
