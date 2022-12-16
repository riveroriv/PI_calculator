import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './tabs/inicio/inicio.component';
import { CalculadoraComponent } from './tabs/calculadora/calculadora.component';
import { GraficoComponent } from './grafico/grafico.component';
import { MacComponent } from './tabs/mac/mac.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConversionesComponent } from './tabs/conversiones/conversiones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

const rutas:Routes = [
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'ip', component: CalculadoraComponent},
  {path:'mac', component: MacComponent},
  {path:'conversiones', component: ConversionesComponent},
  {path:'grafico', component: GraficoComponent},
  
  {path:'**', component:InicioComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioModule
  ],
  declarations: [
    AppComponent,
    InicioComponent,
    ConversionesComponent,
    CalculadoraComponent,
    MacComponent,
    GraficoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
