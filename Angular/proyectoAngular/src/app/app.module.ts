import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './elementos/encabezado/encabezado.component';
import { FormularioComponent } from './elementos/formulario/formulario.component';
import { FooterComponent } from './elementos/footer/footer.component';
import { CurriculumVitaeComponent } from './elementos/curriculum-vitae/curriculum-vitae.component';
import { EstiloPropioDirective } from './estilo-propio.directive';
import { DirectivaComponent } from './elementos/directiva/directiva.component';
import { FormularioHijoComponent } from './elementos/formulario/formulario-hijo/formulario-hijo.component';
import { FormularioAccesoComponent } from './elementos/formulario-acceso/formulario-acceso.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FormularioComponent,
    FooterComponent,
    CurriculumVitaeComponent,
    EstiloPropioDirective,
    DirectivaComponent,
    FormularioHijoComponent,
    FormularioAccesoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
