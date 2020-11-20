import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ConcentradorComponent } from './components/componentes/concentrador/concentrador.component';
import { MedidorComponent } from './components/componentes/medidor/medidor.component';
import { TransformadorComponent } from './components/componentes/transformador/transformador.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { SistemasExternosComponent } from './components/sistemas-externos/sistemas-externos.component';





@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ConcentradorComponent,
    MedidorComponent,
    TransformadorComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    SistemasExternosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
