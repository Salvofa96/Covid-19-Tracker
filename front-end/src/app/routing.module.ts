import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegioneDettagliComponent } from './report regionale dettagli/regione-dettagli.component';
import { StatoComponent } from './stato/stato.component';
import { RegioniComponent } from './report regionale/regioni.component';
import { CentriVaccinaliComponent } from './centri vaccinali/centri-vaccinali.component';
import { CentriVaccinaliDettagliComponent } from './centri vaccinali dettagli/centri-vaccinali-dettagli.component';
import { ProvinciaDettagliComponent } from './provincia dettagli/provincia-dettagli.component';
import { NewsComponent } from './news/news.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'dettagli/:id',component: RegioneDettagliComponent},
  {path: 'regioni',component: RegioniComponent},
  {path: 'stato',component: StatoComponent},
  {path: 'centri/:s',component:CentriVaccinaliDettagliComponent},
  {path: 'provincia/:s',component:ProvinciaDettagliComponent},
  {path:'news',component:NewsComponent}
];

@NgModule({
  declarations: [],
  
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class RoutingModule { }
