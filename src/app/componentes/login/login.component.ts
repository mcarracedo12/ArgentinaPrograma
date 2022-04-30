import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:any;
  constructor(private obtenerDatos: PortfolioService) { }
  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.loginData = data;
    });
  }
}

//// ACA TERMINA CODIGO ORIGINAL

////// ACA ARRANCA EL CODIGO QUE TENIA EN GIT
// import { Component, OnInit } from '@angular/core';
// // import { Router, ActivatedRoute } from '@angular/router';
// // import { AuthService } from 'src/app/auth.service';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
// export class LoginComponent implements OnInit {
// // form;
  // form:FormGroup = new FormGroup({
  //   email:new FormControl,
  //   password:new FormControl
  // });
//   email="";
//   password="";
//   // private authService:AuthService,
  // constructor( private formBuilder:FormBuilder) {
  //   this.form=this.formBuilder.group({
  //     password:['',[Validators.required, Validators.email]],
  //     email:['',[Validators.required, Validators.minLength(8)]],
  //   })
  //  }
  // logIn(){
//     //el servicio authService ya redirecciona en caso de inicio de sesion positivo
    // this.login(this.email, this.password)
//     // this.authService.login(this.email, this.password)
//     // console.log;
  // }
  // ngOnInit(){}
//   get Password(){
//     return this.form.get("password");
//   }
//   get Mail(){
//    return this.form.get("email");
//   }
//   get PasswordValid(){
//     return this.Password?.touched && !this.Password?.valid;
//   }
//   get MailValid() {
//     return false
//   }
//   onEnviar(event: Event){
//     // Detenemos la propagación o ejecución del compotamiento submit de un form
//     event.preventDefault; 
//     if (this.form.valid){
//       // Llamamos a nuestro servicio para enviar los datos al servidor
//       // También podríamos ejecutar alguna lógica extra
//       alert("Todo salio bien ¡Enviar formuario!")
//     }else{
//       // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
//       this.form.markAllAsTouched(); 
//     }
//   }
// }
/////////ACA TERMINA EL CODIGO QUE TENIA EN GIT

