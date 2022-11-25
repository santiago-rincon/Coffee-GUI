import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Pages/home/home.component';
import { VariablesComponent } from './Pages/variables/variables.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { ErrorComponent } from './Pages/error/error.component';
import { CardComponent } from './Components/card/card.component';
import { TemperaturaComponent } from './Pages/variables/temperatura/temperatura.component';
import { HumedadComponent } from './Pages/variables/humedad/humedad.component';
import { Co2Component } from './Pages/variables/co2/co2.component';
import { ButtonComponent } from './Components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VariablesComponent,
    SettingsComponent,
    ErrorComponent,
    CardComponent,
    TemperaturaComponent,
    HumedadComponent,
    Co2Component,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
