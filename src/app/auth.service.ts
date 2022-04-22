import {
  Injectable
  //, Component 
} from '@angular/core';
import {
  HttpClient
  // ,   HttpClientModule 
} from '@angular/common/http';
import {
  Router
  // , CanActivate 
} from '@angular/router';
// import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})



export class AuthService {
  url = 'https://localhost:3000/api';
  // token:any;
  constructor(private Http: HttpClient, private router: Router) { }
  login(email: string, password: string) {
    this.Http.post(this.url + "/authenticate", { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(["profile"]);
        localStorage.setItem('auth_token', resp.token);
      })
  };

  // isLoggedIn() {
  //   const token = localStorage.getItem('token'); // get token from local storage
  //   const payload = atob(token.split('.')[1]); // decode payload of token
  //   const parsedPayload = JSON.parse(payload); // convert payload into an Object

  //   return parsedPayload.exp > Date.now() / 1000; // check if token is expired

  // }

  logout() {
    localStorage.removeItem("auth_token");
  }
  public get logIn(): boolean {
    return (localStorage.getItem("token") != null);
  }
}


// import { Injectable } from '@angular/core';
// import { LoginComponent } from './componentes/login/login.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }

//   isLoggedIn() {
//     const token = localStorage.getItem('token'); // get token from local storage
//     const payload = atob(token.split('.')[1]); // decode payload of token
//     const parsedPayload = JSON.parse(payload); // convert payload into an Object

//     return parsedPayload.exp > Date.now() / 1000; // check if token is expired

//   }

// }

// routes:Routes=[
//   {path:"", redirectTo: "/home", pathMatch:"full"},
//   {path:"login", Component: LoginComponent},
//   {path:"profile", Component: profileComponent,
// CanActivate:"[AuthGuard]"
// },
// ],