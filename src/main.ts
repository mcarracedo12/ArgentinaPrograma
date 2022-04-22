import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
import { environment } from './environments/environment.prod';

// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import{AppComponent} from "./app/app.component";
// import { LoginComponent } from './app/componentes/login/login.component';

// @NgModule({
//   imports: [BrowserModule, FormsModule, ReactiveFormsModule],
//   declarations: [AppComponent, LoginComponent],
//   bootstrap: [AppComponent]
// })

// export class AppModule{}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AppComponent} from "./app/app.component";
import { LoginComponent } from './app/componentes/login/login.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent,
    // canActivate: [AuthGuard], // visit home only if authenticated
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
