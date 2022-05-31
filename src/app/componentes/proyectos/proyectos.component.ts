import { Component, OnInit, Output } from '@angular/core';
import { Proyecto } from '../../../assets/data/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PROYECTOS } from '../../../assets/data/mock-proyecto';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
  // proyectos: Proyecto[] = [];
  proyectos: Proyecto[] = PROYECTOS;
  showModal: boolean = false;
  constructor(private obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.getProyectos().subscribe(proyectos => {
      console.log(proyectos);
      this.proyectos = proyectos;
    })
  }


  borrarProyecto(proyecto: Proyecto) {
    this.obtenerDatos.borrarProyecto(proyecto).subscribe((p) => {
      this.proyectos = this.proyectos.filter((p) =>
        p.id !==
        proyecto.id
      );
    }
    )
  }

  addProyecto(proyecto: Proyecto) {
    this.obtenerDatos.agregarProyecto(proyecto).subscribe((proyecto) => {
      this.proyectos.push(proyecto);
    })
  }


  ocultar(e: boolean) {
    this.showModal = e;
  }


  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}