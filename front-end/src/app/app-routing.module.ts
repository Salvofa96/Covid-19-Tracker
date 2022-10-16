import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegioneDettagliComponent } from './report regionale dettagli/regione-dettagli.component';
import { StatoComponent } from './stato/stato.component';
import { RegioniComponent } from './report regionale/regioni.component';
import { BarChartComponent } from './bar chart/bar-chart.component';
import { CentriVaccinaliDettagliComponent } from './centri vaccinali dettagli/centri-vaccinali-dettagli.component';
import { CentriVaccinaliComponent } from './centri vaccinali/centri-vaccinali.component';
import { ProvinciaDettagliComponent } from './provincia dettagli/provincia-dettagli.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'dettagli',component: RegioneDettagliComponent},
  {path: 'report regionale',component: RegioniComponent},
  {path: 'stato',component: StatoComponent},
  {path: 'report nazionale',component: StatoComponent},
  {path:'chartHome',component:BarChartComponent},
  {path:'centriVaccinali',component :CentriVaccinaliComponent},
  {path:'centri vaccinali',component :CentriVaccinaliComponent},
  {path:'provincia',component:ProvinciaDettagliComponent},
  {path:'news',component:NewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
