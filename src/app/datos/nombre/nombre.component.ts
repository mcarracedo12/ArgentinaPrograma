import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
infoData:any;
showNombre:boolean=false;
nombre:string=""

  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.infoData = data;
      this.nombre=data.nombre;
    });
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  modificarDato(nombre:string){
    // data.nombre=nombre;
    console.log("Click en Modificar Datos" + nombre);
    this.obtenerDatos.updateNombre(nombre).subscribe();
  }
}
