import { Component, OnInit, Input } from '@angular/core';
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
    console.log("Click en Borrar Experiencia");
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }

}
