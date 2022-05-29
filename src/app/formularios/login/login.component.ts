// import { Component, OnInit, EventEmitter } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AuthService } from 'src/app/servicios/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   email:string="";
//   password:string="";
//   constructor(private authservice: AuthService) { }
//   logIn(){
//     this.authservice.login(this.email,this.password)
//   }
//   ngOnInit(): void {
//   }
// }

//// ACA TERMINA CODIGO ORIGINAL

////// ACA ARRANCA EL CODIGO QUE TENIA EN GIT
// import { Component, OnInit } from '@angular/core';
// // import { Router, ActivatedRoute } from '@angular/router';
// import { AuthService } from 'src/app/servicios/auth.service';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// // export class LoginComponent implements OnInit {
// export class LoginComponent implements OnInit {

//   form:FormGroup = new FormGroup({
//     email:new FormControl,
//     password:new FormControl
//   });
//   email:string="";
//   password:string="";
//   // private authService:AuthService, 
//   constructor(private authservice:AuthService, public formBuilder:FormBuilder) {
//     this.form=this.formBuilder.group({
//       password:['',[Validators.required, Validators.email]],
//       email:['',[Validators.required, Validators.minLength(2)]],
//     })
//    }

//   // logIn(){
//   //   //el servicio authService ya redirecciona en caso de inicio de sesion positivo
//   //   // this.login(this.email, this.password)
//   //   this.authservice.login(this.email, this.password)
//   //   console.log(this.email + "y" + this.password);
//   // }
//   ngOnInit(){}

//   onEnviar(event:Event){
//     // Detenemos la propagación o ejecución del compotamiento submit de un form
//     // event.preventDefault; 
//     // if (this.form.valid){
//       // if(this.form.email)
//       // Llamamos a nuestro servicio para enviar los datos al servidor
//       // También podríamos ejecutar alguna lógica extra
//       localStorage.setItem('token', 'logueado');
//       alert("Todo salio bien ¡Enviar formuario!")
//     // }else{
//       // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
//       // this.form.markAllAsTouched(); 
//     // }
//   }
// }
/////////ACA TERMINA EL CODIGO QUE TENIA EN GIT QUE NO VA

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from "src/app/servicios/portfolio.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() hideModal:EventEmitter<boolean> = new EventEmitter();
  email: string = "";
  password: string = "";
  rightPassword:string="";
  rightEmail:string="";
  showModal: boolean = true;
  constructor(private obtenerDatos: PortfolioService) { }

  portfolioDatos: any;

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.portfolioDatos = data;
      this.rightEmail=data.contacto;
      this.rightPassword=data.contrasenia;
    })
  }


  onEnviar() {

    if (this.email == this.rightEmail) {
      if (this.password == this.rightPassword) {
        localStorage.setItem('token', '1');
        alert("Iniciaste sesión!! Ya podés modificar tus datos!")
        this.showModal=false;
        this.hideModal.emit(false);
      }
      else {
        alert("Contraseña es " + this.rightPassword)
      }
    }
    else {
      alert("Usuario es " + this.rightEmail)
    }
    console.log("pressed");
  }


}