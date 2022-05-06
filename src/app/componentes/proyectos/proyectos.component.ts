import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../assets/data/proyecto';
import { PROYECTOS } from '../../../assets/data/mock-proyecto';
import { ProyectosService } from '../../servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:Proyecto[]=[];
  constructor(private proyectoService:ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(proyectos=>{
      // console.log(data);
    this.proyectos=proyectos})

  }
  addProyecto(){
    console.log('Click en agregar Proyecto');
  }
  
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
}