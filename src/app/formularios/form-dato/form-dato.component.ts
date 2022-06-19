import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-dato',
  templateUrl: './form-dato.component.html',
  styleUrls: ['./form-dato.component.css']
})
export class FormDatoComponent implements OnInit {
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter();
  @Output() onAddPersona: EventEmitter<any> = new EventEmitter();

  persona: any;
  // newPersona:any;
  showModal: boolean = true;


  constructor(private obtenerDatos: PortfolioService) { }

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

  onEnviar() {

    const { id, nombre, tituloactual, empresa, puesto, contacto, contrasenia, ciudad, provincia, pais, img, sobremi } = this;
    const newPersona = { id, nombre, tituloactual, empresa, puesto, contacto, contrasenia, ciudad, provincia, pais, img, sobremi };

    console.log("clik en Guardar datos");
    this.onAddPersona.emit(newPersona);
    console.log("Persona enviada: " + this.puesto);
    this.showModal = false;
    this.hideModal.emit(false);
  }

}
