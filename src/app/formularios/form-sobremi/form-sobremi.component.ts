import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-sobremi',
  templateUrl: './form-sobremi.component.html',
  styleUrls: ['./form-sobremi.component.css']
})
export class FormSobremiComponent implements OnInit {
  @Output() onAddSobreMi:EventEmitter<any>=new EventEmitter();
  @Output() hideModal:EventEmitter<boolean>=new EventEmitter();
  
  
  persona: any;
  showModal:boolean=true;
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
    
    if (!this.sobremi) {
      alert("Cuéntenos algo por favor!");
    } else {
      const { id, nombre, tituloactual, empresa, puesto, contacto, contrasenia, ciudad, provincia, pais, img, sobremi } = this;
      const newPersona = { id, nombre, tituloactual, empresa, puesto, contacto, contrasenia, ciudad, provincia, pais, img, sobremi };
  

      this.onAddSobreMi.emit(newPersona);
      console.log(this.sobremi + "form sobre mi ln 25. Evento enviado");
      alert("Sobre mi agregado!");
      this.showModal=false;
      this.hideModal.emit(this.showModal);
      
    }
  }


  

}
