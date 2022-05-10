import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  portfolio:any;
  showModal:Boolean=false;
  constructor(public obtenerDatos: PortfolioService){}

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      console.log(data);
    this.portfolio=data})

  }
  
  // public login(email:string, password:string){
  //   if(email==this.portfolio.contacto && password==this.portfolio.contrasenia) {
  //       // Guardamos el token en local storage
  //       localStorage.setItem('token', 'logueado');
  //     }
  //   }

  
  public logout(){
    localStorage.removeItem("token");
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }

}
