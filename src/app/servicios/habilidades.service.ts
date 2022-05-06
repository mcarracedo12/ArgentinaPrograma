import { Injectable } from '@angular/core';
import { Habilidad } from 'src/assets/data/habilidad';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  HABILIDADES:Habilidad[]=[ ];
  constructor() { }
  getHabilidad():Observable <Habilidad[]>{
        const habilidad = of (this.HABILIDADES);
        return habilidad;
      }
}

