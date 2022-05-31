import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';

import { Proyecto } from 'src/assets/data/proyecto';
import { Habilidad } from '../../assets/data/habilidad';
import { experiencia } from '../../assets/data/experiencia';
import { Titulo } from '../../assets/data/titulo';

// import { TITULOS } from '../../assets/data/mock-titulos';
import { EXPERIENCIAS } from '../../assets/data/mock-exp';
// import { HABILIDADES } from '../../assets/data/mock-habilidad';
// import { PROYECTOS } from '../../assets/data/mock-proyecto';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'access-control-allow-origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:3000";
  // public apiUrl = "http://localhost:8080/1/allow-cors";
  // private apiUrl = "http://localhost:3306/pueba_jpa";
  // private apiUrl = "https://lit-scrubland-49117.herokuapp.com/1/allow-cors";


  constructor(private http: HttpClient) { }



  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/1`, httpOptions);
  }

  getFormacion(): Observable<Titulo[]> {
    // const formacion=of (TITULOS);
    // console.log(formacion);
    // return formacion;

    //////CON GET DESDE JSON SERVER
    return this.http.get<Titulo[]>(`${this.apiUrl}/formacion`, httpOptions);

    ///////CON GET DESDE OTRO SERVER (DA CORS ERROR)
    // return this.http.get<Titulo[]>(`${this.apiUrl}/formacion`, httpOptions);  SACAR ESTE 1 DE LOS ENDPOINTS
    // let path:string="http://localhost:8080/1/formacion/allow-cors"
    // return this.http.get<Titulo[]>(path, httpOptions);
  }


  getExperiencias(): Observable<experiencia[]> {
    // const experiencias=of (EXPERIENCIAS);
    // return experiencias;
    // console.log("Las experiencias segun portfolo service ln 59 son: " + experiencias);
    return this.http.get<experiencia[]>(`${this.apiUrl}/experiencias`);
    
  }

  getHabilidades(): Observable<Habilidad[]> {
    // const habilidades=of (HABILIDADES);
    // return habilidades;
    return this.http.get<Habilidad[]>(`${this.apiUrl}/habilidades`);
  }

  getProyectos(): Observable<Proyecto[]> {
    // const proyectos=of (PROYECTOS);
    // return proyectos;
    return this.http.get<Proyecto[]>(`${this.apiUrl}/proyectos`);
  }


  borrarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.delete<Proyecto>(`${this.apiUrl}/proyecto/${proyecto.id}`, httpOptions);
  }

  borrarHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.delete<Habilidad>(`${this.apiUrl}/habilidad/${habilidad.id}`, httpOptions);
  }

  borrarExperiencia(experiencia: experiencia): Observable<any> {
   // console.log("Service line 88 " + experiencia.empresa  );
    return this.http.delete<experiencia>(`${this.apiUrl}/experiencias/${experiencia.id}`, httpOptions);
  }
  borrarTitulo(titulo: Titulo): Observable<any> {
    return this.http.delete<Titulo>(`${this.apiUrl}/titulo/${titulo.id}`, httpOptions);
  }





  agregarExperiencia(experiencia: experiencia): Observable<any> {
    const url:string=`${this.apiUrl}/experiencias`;
    console.log(experiencia.empresa + " " + url);
    return this.http.post<experiencia>(url, experiencia, httpOptions);
    
  }

  agregarTitulo(titulo: Titulo): Observable<any> {
    const url:string=`${this.apiUrl}/formacion`;
    console.log(titulo.carrera + " " + url);
    return this.http.post<Titulo>(url, titulo, httpOptions);
  }


  agregarHabilidad(habilidad: Habilidad): Observable<any> {
    const url:string=`${this.apiUrl}/habilidades`;
    console.log(habilidad.nombre + " " + url);
    return this.http.post<Habilidad>(url, habilidad, httpOptions);
  }

  agregarProyecto(proyecto: Proyecto): Observable<any> {
    const url:string=`${this.apiUrl}/proyectos`;
    console.log(proyecto.nombre + " " + url);
    return this.http.post<Proyecto>(url, proyecto, httpOptions);  
  }




  updateDatos(persona: any): Observable<any> {
    const url: string = `${this.apiUrl}/1`;
    return this.http.put<any>(url, persona);
  }

  modificarSobremi(sobremi: string): Observable<any> {
    return this.http.put<string>(`${this.apiUrl}/1/sobremi`, sobremi, httpOptions);
  }


}

