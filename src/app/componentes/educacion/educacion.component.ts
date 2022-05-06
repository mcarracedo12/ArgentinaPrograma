import { Component, OnInit } from '@angular/core';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { TitulosService } from 'src/app/servicios/titulos.service';
import { Titulo } from 'src/assets/data/titulo';
import { TITULOS } from '../../../assets/data/mock-titulos';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  titulos: Titulo[] = [];

  constructor(public authservice:AuthService, private tituloService:TitulosService) {}

  ngOnInit(): void {
    this.tituloService.getTitulo().subscribe(titulos=>{
      // console.log(data);
    this.titulos=titulos;
  });
  }

  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  addFormacion(){
    console.log('Click en agregar Formacion');
  }
  

}
