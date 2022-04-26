import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AppComponent } from './app.component';

const routes:Routes =[
  { path: '', redirectTo: '/profile'
  // , pathMatch: 'full'
},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: AppComponent},
    // canActivate: [AuthGuard], // visit home only if authenticated
  // },
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule { }
