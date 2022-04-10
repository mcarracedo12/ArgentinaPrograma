import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './compenentes/encabezado/encabezado.component';

import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule { }
