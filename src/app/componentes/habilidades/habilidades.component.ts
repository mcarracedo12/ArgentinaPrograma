import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Habilidad } from 'src/assets/data/habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[]=[];
  constructor(private obtenerDatos:PortfolioService) { }
  

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      // console.log(data);
    this.habilidades=data.habilidades})

  }
  addHabilidad(){
    console.log('Click en agregar Habilidad');
  }
  
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
}
