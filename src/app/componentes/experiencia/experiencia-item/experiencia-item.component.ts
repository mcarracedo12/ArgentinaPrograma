import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { experiencia } from 'src/assets/data/experiencia';
import { EXPERIENCIAS } from '../../../../assets/data/mock-exp';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  // @Input()task:Task=TASKS[0];
  // experiencias:any=[];
  @Input()experiencia:experiencia=EXPERIENCIAS[0];
  @Output() deleteExperiencia:EventEmitter<experiencia>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    // this.obtenerDatos.obtenerDatos().subscribe(data=>{
    //   // console.log(data);
    // this.experienciasList=data.experiencias})
  }
  
  modificarExperiencia(){
    console.log("Click en Modificar Experiencia");
  }
  borrarExperiencia(){
    console.log("Click en Borrar Experiencia" + this.experiencia.empresa + this.experiencia.id);
    this.deleteExperiencia.emit(this.experiencia);
  }
  
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }

}
