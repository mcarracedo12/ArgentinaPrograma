import { Injectable } from '@angular/core';
import { TITULOS } from 'src/assets/data/mock-titulos';
import { Titulo } from 'src/assets/data/titulo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitulosService {

  constructor() { }
  getTitulo():Observable <Titulo[]>{
    const titulo = of (TITULOS);
    return titulo;
  }
}
