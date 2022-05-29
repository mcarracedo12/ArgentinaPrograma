import { Component, OnInit, Output } from '@angular/core';
import { Proyecto } from '../../../assets/data/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  showModal:boolean=false;
  constructor(private obtenerDatos: PortfolioService) { }
  
  ngOnInit(): void {
      this.obtenerDatos.getProyectos().subscribe(proyectos=>{
        console.log(proyectos);
        this.proyectos=proyectos;
      })
  }
  addProyecto() {
    console.log('Click en agregar Proyecto');
  }

  borrarProyecto(proyecto: Proyecto) {
    this.proyectos=this.proyectos.filter(p=>p.id!=proyecto.id);
    this.obtenerDatos.borrarProyecto(proyecto).subscribe(() => {
      console.log("Borrando proyecto ... " + proyecto); // Aca no llega
      this.proyectos=this.proyectos.filter(p=>p.id!=proyecto.id);
      // data.proyectos = this.proyectos;
    })
  
  }

  ocultar(e:boolean){
    this.showModal=e;
  }


  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}