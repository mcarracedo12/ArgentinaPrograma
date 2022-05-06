import { Injectable } from '@angular/core';
import { EXPERIENCIAS } from 'src/assets/data/mock-exp';
import { experiencia } from 'src/assets/data/experiencia';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor() { }

  getExperiencia(): Observable< experiencia[]>{
    const experiencia = of(EXPERIENCIAS);
    return experiencia;
  }
}


