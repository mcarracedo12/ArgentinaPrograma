import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  infoData: any;
  constructor(private obtenerDatos: PortfolioService) {
    }

    ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.infoData = data;
    });
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  modificarFoto(){
    console.log("Click en Modificar Foto");
  }
  modificarDatos(){
    console.log("Click en Modificar Datos");
  }
}

