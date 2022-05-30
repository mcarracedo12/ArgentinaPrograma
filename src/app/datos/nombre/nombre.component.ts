import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  infoData: any;
  showModal: boolean = false;
  persona: any;

  constructor(private obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.infoData = data;
    });
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  modificarDatos(persona: any) {
    // data.nombre=nombre;
    console.log("Click en Modificar Datos " + persona);
    this.showModal=true;
    // this.obtenerDatos.updateDatos(persona).subscribe();
  }

  ocultar(e: boolean) {
    this.showModal = e;
  }

}
