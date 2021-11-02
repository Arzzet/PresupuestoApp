import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { GastoComponent } from './gasto/gasto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { GastoServicio } from './gasto/gasto.servicio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresoComponent,
    GastoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IngresoServicio, GastoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
