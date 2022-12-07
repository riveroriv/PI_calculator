import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './tabs/inicio/inicio.component';
import { CalculadoraComponent } from './tabs/calculadora/calculadora.component';
import { MacComponent } from './tabs/mac/mac.component';
import { RouterModule, Routes } from '@angular/router';
import { ConversionesComponent } from './tabs/conversiones/conversiones.component';

const rutas:Routes = [
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path:'pi', component: InicioComponent},
  {path:'calculadora', component: CalculadoraComponent},
  {path:'mac', component: MacComponent},
  {path:'conversiones', component: ConversionesComponent},
  
  {path:'**', component:InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CalculadoraComponent,
    MacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
