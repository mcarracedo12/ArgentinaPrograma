import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.btnClick.emit();
  }

}
