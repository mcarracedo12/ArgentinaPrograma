import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciasList: any
  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      // console.log(data);
    this.experienciasList=data.experiencias})

  }

  addExperiencia(){
    console.log('Click en agregar Experiencia');
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  modificarExperiencia(){
    console.log("Click en Modificar Experiencia");
  }
  borrarExperiencia(){
    console.log("Click en Borrar Experiencia");
  }
}
