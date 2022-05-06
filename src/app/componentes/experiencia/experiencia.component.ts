import { Component, OnInit } from '@angular/core';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { EXPERIENCIAS } from 'src/assets/data/mock-exp';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { experiencia } from 'src/assets/data/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:experiencia[]=[];
  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(experiencias=>[
      // console.log(data);
    this.experiencias=experiencias])
  }

  addExperiencia(){
    console.log('Click en agregar Experiencia');
  }

  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  
  
}
