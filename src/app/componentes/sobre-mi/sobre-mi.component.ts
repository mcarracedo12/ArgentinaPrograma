import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  sobremiData: any;
  showModal: Boolean = false;
  constructor(private obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.sobremiData = data;
    });
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  modificarAbout() {
    console.log("Click en Modificar Sobre mi...");
  }
}
