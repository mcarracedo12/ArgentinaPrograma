import { Injectable } from '@angular/core';
import { Proyecto } from 'src/assets/data/proyecto';
import { PROYECTOS } from '../../assets/data/mock-proyecto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  getProyecto():Observable <Proyecto[]>{
    const proyecto = of (PROYECTOS);
    return proyecto;
  }
}
