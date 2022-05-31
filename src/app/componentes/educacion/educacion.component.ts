import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Titulo } from 'src/assets/data/titulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  titulos: Titulo[] = [];
  showModal: boolean = false;
  public apiUrl = "http://localhost:8080/1";
  constructor(public authservice: AuthService, private obtenerDatos: PortfolioService, private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.obtenerDatos.obtenerDatos().subscribe(data => {
  //     // console.log(data);
  //     this.titulos = data.formacion;
  //   });
  // }

  ngOnInit(): void {
    this.obtenerDatos.getFormacion().subscribe(formacion => {
      console.log(formacion);
      this.titulos = formacion;
    });
  }

  borrarTitulo(titulo: Titulo) {
    this.obtenerDatos.borrarTitulo(titulo).subscribe((t) => {
      this.titulos = this.titulos.filter((t) =>
        t.id !==
        titulo.id
      );
    }
    )
  }

  addTitulo(titulo: Titulo) {
    this.obtenerDatos.agregarTitulo(titulo).subscribe((titulo) => {
      this.titulos.push(titulo);
    })
  }




  // modificarFormacion(titulo: Titulo) {
  //   let urlModif: string = `${this.apiUrl}/1/titulo/${titulo.id}`;
  //   console.log('Click en Modificar Formacion Titulo: ' + titulo);
  //   return this.http.put<Titulo>(urlModif, httpOptions);
  // }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  ocultar(e: boolean) {
    this.showModal = e;
  }

}
