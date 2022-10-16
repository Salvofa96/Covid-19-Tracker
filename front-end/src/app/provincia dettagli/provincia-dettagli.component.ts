import { Component, OnInit } from '@angular/core';
import { CentriVaccinaliService } from '../service/centri-vaccinali.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common'
import { CentriVaccinali } from '../model/CentriVaccinali';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provincia-dettagli',
  templateUrl: './provincia-dettagli.component.html',
  styleUrls: ['./provincia-dettagli.component.css']
})
export class ProvinciaDettagliComponent implements OnInit {
  provincia2 : CentriVaccinali[]=[];
  
  constructor(private service:CentriVaccinaliService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProvincia();
    
  }

  
  getProvincia(): void {
    const s=  this.route.snapshot.paramMap.get('s');
    this.service.getProvincia(s!).subscribe(x=> this.provincia2 = x);
  }



  /*goBack(): void {
    this.location.back();
  }*/

}
