import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList: any
  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      // console.log(data);
    this.habilidadesList=data.habilidades})

  }
  addHabilidad(){
    console.log('Click en agregar Habilidad');
  }
  modificarHabilidad(){
    console.log("Click en Modificar Habilidad");
  }
  borrarHabilidad(){
    console.log("Click en Borrar Habilidad");
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
}
