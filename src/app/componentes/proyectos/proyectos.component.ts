import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../assets/data/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  constructor(private obtenerDatos: PortfolioService) { }
  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.proyectos = data.proyectos})
  }
  addProyecto() {
    console.log('Click en agregar Proyecto');
  }
  borrarProyecto(proyecto:Proyecto){
    this.obtenerDatos.delete(proyecto).subscribe(()=>[
      this.proyectos=this.proyectos.filter(p=>p.id!=proyecto.id)
    ])
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}