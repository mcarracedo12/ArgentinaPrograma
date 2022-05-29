import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { experiencia } from 'src/assets/data/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:experiencia[]=[];
  showModal:boolean=false;
  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.getExperiencias().subscribe(experiencias => {
      console.log(experiencias);
      this.experiencias = experiencias;
    });
  }

  addExperiencia(){
    console.log('Click en agregar Experiencia');
  }
  borrarExperiencia(experiencia:experiencia){
      this.experiencias=this.experiencias.filter(p=>p.id!=experiencia.id);
      this.obtenerDatos.borrarExperiencia(experiencia).subscribe(()=>{
        console.log("Borrando Experiencia... " + experiencia); // Aca no llega
        this.experiencias=this.experiencias.filter(e=>e.id!=experiencia.id);
      })
  }


  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }

  ocultar(e:boolean){
    this.showModal=e;
  }

}
