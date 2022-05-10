import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Titulo } from 'src/assets/data/titulo';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  titulos: Titulo[] = [];
  showModal:boolean=false;

  constructor(public authservice:AuthService, private obtenerDatos:PortfolioService) {}

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      // console.log(data);
    this.titulos=data.formacion;
  });
  }

  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }
  addFormacion(){
    console.log('Click en agregar Formacion');
  }
  borrarTitulo(titulo:Titulo){
      this.titulos=this.titulos.filter(p=>p.id!=titulo.id);
      this.obtenerDatos.borrarTitulo(titulo).subscribe(()=>{
        console.log("Borrando Titulo... " + titulo); // Aca no llega
        this.titulos=this.titulos.filter(t=>t.id!=titulo.id);
      })
  }
  

}
