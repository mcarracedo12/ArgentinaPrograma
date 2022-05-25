import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule} from '@angular/common/http';
import { InfoComponent } from './componentes/info/info.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './formularios/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { ExperienciaItemComponent } from './componentes/experiencia/experiencia-item/experiencia-item.component';
import { EducacionItemComponent } from './componentes/educacion/educacion-item/educacion-item.component';
import { HabilidadesItemComponent } from './componentes/habilidades/habilidades-item/habilidades-item.component';
import { ProyectoItemComponent } from './componentes/proyectos/proyecto-item/proyecto-item.component';
import { FormExperienciaComponent } from './formularios/form-experiencia/form-experiencia.component';
import { FormHabilidadComponent } from './formularios/form-habilidad/form-habilidad.component';
import { FormProyectoComponent } from './formularios/form-proyecto/form-proyecto.component';
import { FormFormacionComponent } from './formularios/form-formacion/form-formacion.component';
import { FormDatoComponent } from './formularios/form-dato/form-dato.component';
import { NombreComponent } from './datos/nombre/nombre.component';
import { FormSobremiComponent } from './formularios/form-sobremi/form-sobremi.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InfoComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    AgregarComponent,
    ModificarComponent,
    BorrarComponent,
    ExperienciaItemComponent,
    EducacionItemComponent,
    HabilidadesItemComponent,
    ProyectoItemComponent,
    FormExperienciaComponent,
    FormHabilidadComponent,
    FormProyectoComponent,
    FormFormacionComponent,
    FormDatoComponent,
    NombreComponent,
    FormSobremiComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule { }
