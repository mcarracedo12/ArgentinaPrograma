import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
// import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  portfolio:any;

  constructor(private obtenerDatos:PortfolioService) {}

  public get logIn():boolean{
    return(localStorage.getItem("token")!=null);
  }
  logout(){
    localStorage.removeItem("token");
  }


  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      console.log(data);
    this.portfolio=data;
  });
  }

}
