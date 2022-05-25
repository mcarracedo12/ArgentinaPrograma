import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { Proyecto } from 'src/assets/data/proyecto';
import { PROYECTOS } from '../../assets/data/mock-proyecto';
import { Habilidad } from '../../assets/data/habilidad';
import { experiencia } from '../../assets/data/experiencia';
import { Titulo } from '../../assets/data/titulo';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:3000/profile";
  

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  borrarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.delete<Proyecto>(this.apiUrl);
  }

  borrarHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.delete<Habilidad>(this.apiUrl);
  }

  borrarExperiencia(experiencia: experiencia): Observable<any> {
    return this.http.delete<experiencia>(this.apiUrl);
  }
  borrarTitulo(titulo: Titulo): Observable<any> {
    return this.http.delete<Titulo>(this.apiUrl);
  }
  updateNombre(nombre: string): Observable<string> {
    const url:string=`${this.apiUrl}/nombre`;
    return this.http.put<string>(url, nombre, httpOptions); // Bad request ERROR
  }



}

