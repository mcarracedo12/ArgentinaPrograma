import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Habilidad } from 'src/assets/data/habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[] = [];
  showModal: Boolean = false;
  constructor(private obtenerDatos: PortfolioService) { }


  ngOnInit(): void {
    this.obtenerDatos.getHabilidades().subscribe(habilidades => {
      console.log(habilidades);
      this.habilidades = habilidades
    })
  }


  borrarHabilidad(habilidad: Habilidad) {
    this.obtenerDatos.borrarHabilidad(habilidad).subscribe((h) => {
      this.habilidades = this.habilidades.filter((h) =>
        h.id !==
        habilidad.id
      );
    }
    )
  }

  addHabilidad(habilidad: Habilidad) {
    this.obtenerDatos.agregarHabilidad(habilidad).subscribe((habilidad) => {
      this.habilidades.push(habilidad);
    })
  }



  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  ocultar(e: boolean) {
    this.showModal = e;
  }

}
