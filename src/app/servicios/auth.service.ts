import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PortfolioService } from './portfolio.service';

@Injectable({
  providedIn: 'root'
})


// export class AuthService {
//   url= 'http://localhost:3000/api'; //La url que corresponda
//   // token;
//   constructor(private http: HttpClient, private router: Router) { }
//   login(email:string, password:string){
//     this.http.post(this.url + '/authenticate', {email:email, password:password})
//       .subscribe((resp:any)=>{
//         // Redireccionamos al usuario a su perfil
//         this.router.navigate(['profile']);
//         // Guardamos el token en local storage
//         localStorage.setItem('token', resp.token);
//       })
//   }
//   logout(){
//     localStorage.removeItem('token');
//   }
//   public get logIn(): boolean{
//     return(localStorage.getItem('token')!==null);
//   }
// }



export class AuthService {
  url = 'http://localhost:3000/api'; //La url que corresponda
  // token;
  constructor(private obtenerDatos: PortfolioService, private http: HttpClient) { }


  portfolioDatos: any;

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.portfolioDatos = data
    })
  }

  login(email: string, password: any) {
    // email = "marinacarracedo14@gmail.com";
    // password = 123;
    if (email == this.portfolioDatos.contacto && password == this.portfolioDatos.contrasenia) {
      // Guardamos el token en local storage
      localStorage.setItem('token', 'logueado');
    }
  }
  // logout(){
  //   localStorage.removeItem('token');
  // }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
}

