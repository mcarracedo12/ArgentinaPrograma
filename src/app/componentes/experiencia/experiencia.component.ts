import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { experiencia } from 'src/assets/data/experiencia';
import { EXPERIENCIAS } from '../../../assets/data/mock-exp';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: experiencia[] = [];

  showModal: boolean = false;
  constructor(private obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.getExperiencias().subscribe(experiencias => {
      this.experiencias = experiencias;
      console.log(experiencias);
    });
  }


  borrarExperiencia(experiencia: experiencia) {
    this.experiencias = this.experiencias.filter(p => p.id !== experiencia.id);
    this.obtenerDatos.borrarExperiencia(experiencia).subscribe(() => {
      // console.log("Borrando Experiencia... " + experiencia.empresa); 
      this.experiencias = this.experiencias.filter((e) =>
        //  {return
        e.id !==
        experiencia.id
        // }
      );
    }
    )
  }

  addExperiencia(experiencia: experiencia) {
    this.experiencias.push(experiencia);
    // this.experiencias= this.experiencias.push(experiencia);
    // console.log('Click en agregar Experiencia ' experiencia.empresa);
    this.obtenerDatos.agregarExperiencia(experiencia).subscribe((experiencia) => {
       this.experiencias.push(experiencia);
    })
  }


  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  ocultar(e: boolean) {
    this.showModal = e;
  }

}
