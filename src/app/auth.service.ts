import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://localhost:3000/api';
  token:any;

  constructor(private http:HttpClient, private router:Router) { }

  login(email:string, password:string){
    this.http.post(this.url+'/authenticate', {email:email,password:password})
    .subscribe((resp:any)=>{
      //redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      //guardamos el token en Local Storage
      localStorage.setItem('token', resp.token);
    })
  }

  logout(){
    localStorage.removeItem('token');
  }

  public get logIn():boolean{
    return(localStorage.getItem('token')!==null);
  }
}
