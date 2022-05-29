import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { Proyecto } from 'src/assets/data/proyecto';
import { PROYECTOS } from '../../assets/data/mock-proyecto';
import { Habilidad } from '../../assets/data/habilidad';
import { experiencia } from '../../assets/data/experiencia';
import { Titulo } from '../../assets/data/titulo';
import { HttpHeaders } from '@angular/common/http';
import { TITULOS } from '../../assets/data/mock-titulos';
import { EXPERIENCIAS } from '../../assets/data/mock-exp';
import { HABILIDADES } from '../../assets/data/mock-habilidad';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // private apiUrl = "http://localhost:3000/profile";
  // public apiUrl = "http://localhost:8080";
  // private apiUrl = "http://localhost:3306/pueba_jpa";
  private apiUrl = "https://lit-scrubland-49117.herokuapp.com";
  

  constructor(private http: HttpClient) { }

  personaId:number=1;

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/1`, httpOptions);
  }

  getFormacion():Observable<Titulo[]>{
    const formacion=of (TITULOS);
    console.log(formacion);
    // return this.http.get<any>(`${this.apiUrl}+"/1/formacion"`, httpOptions);
    return formacion;
  }

  getExperiencias():Observable<experiencia[]>{
    const experiencias=of (EXPERIENCIAS);
    return experiencias;
  }

  getHabilidades():Observable<Habilidad[]>{
    const habilidades=of (HABILIDADES);
    return habilidades;
  }

  getProyectos():Observable<Proyecto[]>{
    const proyectos=of (PROYECTOS);
    return proyectos;
  }


  borrarProyecto(proyecto: Proyecto): Observable<any> {
    let urlProy:string=`${this.apiUrl}/${this.personaId}/proyecto/${proyecto.id}`
    return this.http.delete<Proyecto>(urlProy);
  }

  borrarHabilidad(habilidad: Habilidad): Observable<any> {
    let urlHabil:string=`${this.apiUrl}/${this.personaId}/habilidad/${habilidad.id}`
    return this.http.delete<Habilidad>(urlHabil);
  }

  borrarExperiencia(experiencia: experiencia): Observable<any> {
    let urlExp:string=`${this.apiUrl}/${this.personaId}/experiencia/${experiencia.id}`
    return this.http.delete<experiencia>(urlExp);
  }
  borrarTitulo(titulo: Titulo): Observable<any> {
    let urlTitulo:string=`${this.apiUrl}/${this.personaId}/titulo/${titulo.id}`
    return this.http.delete<Titulo>(urlTitulo);
  }











  updateDatos(nombre: any): Observable<any> {
    const url:string=`${this.apiUrl}/1`;
    return this.http.put<any>(url, nombre); 
  }



}

