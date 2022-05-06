import { Injectable } from '@angular/core';
import { HABILIDADES } from '../../assets/data/mock-habilidad';
import { Habilidad } from 'src/assets/data/habilidad';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor() { }
  getHabilidad():Observable <Habilidad[]>{
        const habilidad = of (HABILIDADES);
        return habilidad;
      }
}

