import { RegisterComponent } from './modules/public/register/register.component';
import { HomeComponent } from './modules/private/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/public/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path : '', redirectTo : 'login', pathMatch : 'full' },
  {path : 'cadastro',component : RegisterComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
