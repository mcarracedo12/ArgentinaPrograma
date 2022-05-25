import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  portfolio: any;
  showModal: boolean=false;
  constructor(public obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.portfolio = data
    })
    
  }


  public logout() {
    localStorage.removeItem("token");
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  ocultar(e:boolean){
    this.showModal=e;
  }

}
