import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:3000/profile";
  
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  

}

