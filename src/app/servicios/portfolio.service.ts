import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  obtenerDatos(){
    console.log("Servicio ObtenerDatos esta corriendo")
  }
}

