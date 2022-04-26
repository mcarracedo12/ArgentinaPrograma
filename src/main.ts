import { enableProdMode } from '@angular/core'; //No se si va del todo
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment'; //No se si va del todo

if (environment.production) {
  enableProdMode();
} //No se si va del todo

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  //No agregar mas nada