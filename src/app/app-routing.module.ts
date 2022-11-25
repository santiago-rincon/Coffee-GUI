import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Pages/error/error.component';
import { HomeComponent } from './Pages/home/home.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { Co2Component } from './Pages/variables/co2/co2.component';
import { HumedadComponent } from './Pages/variables/humedad/humedad.component';
import { TemperaturaComponent } from './Pages/variables/temperatura/temperatura.component';
import { VariablesComponent } from './Pages/variables/variables.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'variables', component:VariablesComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'variables/temperatura', component:TemperaturaComponent},
  {path: 'variables/humedad', component:HumedadComponent},
  {path: 'variables/co2', component:Co2Component},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
