import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: any;
  id?: number;
  nombre: string = "";
  tituloactual: string = "";
  empresa: string = "";
  puesto: string = "";
  contacto: string = "";
  ciudad: string = "";
  provincia: string = "";
  pais: string = "";
  img: string = "";
  contrasenia:string="";
  sobremi:string=""

  showModal: Boolean = false;
  constructor(private obtenerDatos: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.persona = data;
      this.nombre = data.nombre;
      this.tituloactual = data.tituloactual;
      this.empresa = data.empresa;
      this.puesto = data.puesto;
      this.contacto = data.contacto;
      this.ciudad = data.ciudad;
      this.provincia = data.provincia;
      this.pais = data.pais;
      this.img = data.img;
      this.contrasenia=data.contrasenia;
      this.sobremi=data.sobremi
    });
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  // modificarAbout(sobremi: string) {
  //   this.sobremiData.sobremi = sobremi;
  //   console.log("Click en Modificar Sobre mi..." + sobremi);
  //   this.obtenerDatos.modificarSobremi(sobremi).subscribe((sobremi)=>{
  //     this.sobremiData.sobremi = sobremi;
  //   });
  //   // this.obtenerDatos.modificarSobremi(sobremi).subscribe();
  // }

  ocultar(e: boolean) {
    this.showModal = e;
  }

  modificarDatos(persona:any) {
    // this.obtenerDatos.obtenerDatos().subscribe();
    this.persona=persona;
    this.persona.sobremi = persona.sobremi;
    console.log("Click en Modificar Datos " + persona.sobremi);
    this.showModal = true;
    // this.obtenerDatos.updateDatos(persona).subscribe();
    this.obtenerDatos.updateDatos(persona).subscribe((persona) => {
     this.sobremi = persona.sobremi;
    });
  }



}
