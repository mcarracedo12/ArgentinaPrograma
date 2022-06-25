import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from '../../../../assets/data/proyecto';
import { PROYECTOS } from '../../../../assets/data/mock-proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {
  @Input() proyecto: Proyecto = PROYECTOS[0]
  @Output() deleteProyecto: EventEmitter<Proyecto> = new EventEmitter()
  showModal: Boolean = false;
  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
  }


  modificarProyecto(proyecto: Proyecto) {
    console.log("Click en Modificar Proyecto  item ts 22" + this.proyecto.nombre);
    // proyecto=this.proyecto;
    this.proyecto=proyecto;
    this.proyecto.id=proyecto.id;
    this.proyecto.nombre=proyecto.nombre;
    this.proyecto.descripcion=proyecto.descripcion;
    this.proyecto.anio=proyecto.anio;
    this.proyecto.link=proyecto.link;
   
    console.log("Click en Modificar Proyecto  item ts 31" + this.proyecto.nombre);
    this.obtenerDatos.modificarProyecto(proyecto).subscribe();
     
  }





  // this.obtenerDatos.borrarHabilidad(habilidad).subscribe((h) => {
  //   this.habilidades = this.habilidades.filter((h) => h.id !== habilidad.id);
  // })


  borrarProyecto() {
    console.log("Click en Borrar Proyecto" + this.proyecto + this.proyecto.id);
    this.deleteProyecto.emit(this.proyecto)
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  ocultar(e:boolean){
    this.showModal=e;
  }

}
