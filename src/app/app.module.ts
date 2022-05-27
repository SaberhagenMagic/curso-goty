import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
