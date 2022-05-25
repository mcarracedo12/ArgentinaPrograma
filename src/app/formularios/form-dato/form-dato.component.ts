import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-dato',
  templateUrl: './form-dato.component.html',
  styleUrls: ['./form-dato.component.css']
})
export class FormDatoComponent implements OnInit {
  @Output() hideModal:EventEmitter<boolean> = new EventEmitter();

  
  infoData:any;
  showModal:boolean=true;

  
  constructor(private obtenerDatos:PortfolioService) { }

  nombre:string="";
  tituloactual:string="";
  empresa:string="";
  puesto:string="";
  contacto:string="";
  ciudad:string="";
  provincia:string="";
  pais:string="";
  img:string="";


  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.infoData = data;
      this.nombre=data.nombre;
      this.tituloactual=data.tituloactual;
      this.empresa=data.empresa;
      this.puesto=data.puesto;
      this.contacto=data.contacto;
      this.ciudad=data.ciudad;
      this.provincia=data.provincia;
      this.pais=data.pais;
      this.img=data.img;
    });
  }

  onEnviar(){
    console.log("clik en Guardar datos");
    this.showModal=false;
    this.hideModal.emit(false);
  }

}
