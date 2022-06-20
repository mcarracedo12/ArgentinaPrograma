import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  data: any;
  showModal: boolean = false;
  persona: any;

  nombre: string = "";
  puesto: string = "";
  empresa: string = "";
  tituloactual: string = "";
  contacto: string = "";
  contrasenia: string = "";
  ciudad: string = "";
  provincia: string = "";
  pais: string = "";
  img: string = "";
  sobremi: string = "";


  constructor(private obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.nombre = data.nombre;
      this.puesto = data.puesto;
      this.empresa = data.empresa;
      this.tituloactual = data.tituloactual;
      this.contacto = data.contacto;
      this.contrasenia = data.contrasenia;
      this.ciudad = data.ciudad;
      this.provincia = data.provincia;
      this.pais = data.pais;
      this.img = data.img;
      this.sobremi = data.sobremi
    });
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  modificarDatos(persona: any) {
    this.obtenerDatos.obtenerDatos().subscribe();
    this.persona = persona;
    this.nombre = persona.nombre;
    this.puesto = persona.puesto;
    this.empresa = persona.empresa;
    this.tituloactual = persona.tituloactual;
    this.contacto = persona.contacto;
    this.ciudad = persona.ciudad;
    this.provincia = persona.provincia;
    this.pais = persona.pais;
    this.img = persona.img;
    this.sobremi = persona.sobremi;

    console.log("Click en Modificar Datos " + this.nombre);
    this.showModal = true;
    
    this.obtenerDatos.updateDatos(persona).subscribe();
    
  }

  ocultar(e: boolean) {
    this.showModal = e;
  }

}
