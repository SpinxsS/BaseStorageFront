import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcentradorComponent } from './components/componentes/concentrador/concentrador.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { SistemasExternosComponent } from './components/sistemas-externos/sistemas-externos.component';

const routes: Routes = [

  /*Esta ruta es la ruta por defecto(home), lo que hace es redireccionar inmediatamente
  se corre la aplicación al login.
  */
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },

  /*Ruta para la vista de registro '/registro' */
  {
    path: 'registro',
    component: RegistroComponent
  },

  /*Ruta para la vista de la pagina principal de la aplicación '/home' */
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'sistemaExterno',
    component: SistemasExternosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
