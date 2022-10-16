import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegioniServiceService } from './service/regioni-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { RegioneDettagliComponent } from './report regionale dettagli/regione-dettagli.component';
import { RegioniComponent } from './report regionale/regioni.component';
import { StatoComponent } from './stato/stato.component';
import { CentriVaccinaliComponent } from './centri vaccinali/centri-vaccinali.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar chart/bar-chart.component';
import { CentriVaccinali } from './model/CentriVaccinali';
import { CentriVaccinaliDettagliComponent } from './centri vaccinali dettagli/centri-vaccinali-dettagli.component';
import { ProvinciaDettagliComponent } from './provincia dettagli/provincia-dettagli.component';
import { NewsComponent } from './news/news.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    RegioneDettagliComponent,
    RegioniComponent,
    StatoComponent,
    CentriVaccinaliComponent,
    BarChartComponent,
    CentriVaccinaliDettagliComponent,
    ProvinciaDettagliComponent,
    NewsComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule,
    ChartsModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
