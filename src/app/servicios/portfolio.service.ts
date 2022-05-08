import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { experiencia } from 'src/assets/data/experiencia';
import { Proyecto } from 'src/assets/data/proyecto';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:3000/profile";
  
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  delete(item:any):Observable<any>{
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.delete<any>(url);
  }

  // borrarP(proyecto:Proyecto):Observable<Proyecto>{
  //   const url = `${this.apiUrl}/${proyecto.id}`;
  //   return this.http.delete<Proyecto>(url);
  // }

}

