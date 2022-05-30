import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-sobremi',
  templateUrl: './form-sobremi.component.html',
  styleUrls: ['./form-sobremi.component.css']
})
export class FormSobremiComponent implements OnInit {
  @Output() onAddSobreMi:EventEmitter<string>=new EventEmitter();
  @Output() hideModal:EventEmitter<boolean>=new EventEmitter();
  
  sobremi: string = "";
  infoData: any;
  showModal:boolean=true;
  constructor(private obtenerDatos: PortfolioService) { }

  onEnviar() {
    
    if (!this.sobremi) {
      alert("Cuéntenos algo por favor!");
    } else {

      this.onAddSobreMi.emit(this.sobremi);
      console.log(this.sobremi);
      alert("Sobre mi agregado!");
      this.showModal=false;
      this.hideModal.emit(this.showModal);
    }
  }


  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.infoData = data;
      this.sobremi = data.sobremi;

    });
  }

}
