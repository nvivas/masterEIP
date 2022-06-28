import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './elementos/menu/menu.component';
import { Error404Component } from './elementos/error404/error404.component';
import { AdministracionComponent } from './elementos/administracion/administracion.component';
import { NosotrosComponent } from './elementos/nosotros/nosotros.component';
import { FooterComponent } from './elementos/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Error404Component,
    AdministracionComponent,
    NosotrosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
