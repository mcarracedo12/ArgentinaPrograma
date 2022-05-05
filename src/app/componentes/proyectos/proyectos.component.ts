import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList: any
  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      // console.log(data);
    this.proyectosList=data.proyectos})

  }
  addProyecto(){
    console.log('Click en agregar Proyecto');
  }
  modificarProyecto(){
    console.log("Click en Modificar Proyecto");
  }
  borrarProyecto(){
    console.log("Click en Borrar Proyecto");
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
}