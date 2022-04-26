import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// export class LoginComponent implements OnInit {
form:FormGroup;
  // form = new FormGroup({
  //   Mail: new FormControl,
  //   Password: new FormControl
  // });
  

  email="";
  password="";
  // private authService:AuthService
  constructor(private authService:AuthService, private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      password:['',[Validators.required, Validators.email]],
      mail:['',[Validators.required, Validators.minLength(8)]],
    })
   }
  logIn(){
    //el servicio authService ya redirecciona en caso de inicio de sesion positivo
    this.authService.login(this.email, this.password)
  }

  ngOnInit(){}

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}
