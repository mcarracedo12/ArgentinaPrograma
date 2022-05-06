import { Component, OnInit, Input } from '@angular/core';
import { Habilidad } from 'src/assets/data/habilidad';
import { HABILIDADES } from '../../../../assets/data/mock-habilidad';


@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.css']
})
export class HabilidadesItemComponent implements OnInit {
@Input()habilidad:Habilidad=HABILIDADES[0];
  constructor() { }

  ngOnInit(): void {
  }

  modificarHabilidad(){
    console.log("Click en Modificar Habilidad");
  }
  borrarHabilidad(){
    console.log("Click en Borrar Habilidad " + this.habilidad.habilidad);
  }
  public get logIn(): boolean{
    return(localStorage.getItem('token')!==null);
  }


}
