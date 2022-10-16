import { Component, OnInit } from '@angular/core';
import { CentriVaccinaliService } from '../service/centri-vaccinali.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CentriVaccinali } from '../model/CentriVaccinali';
import { Location } from '@angular/common';
@Component({
  selector: 'app-centri-vaccinali-dettagli',
  templateUrl: './centri-vaccinali-dettagli.component.html',
  styleUrls: ['./centri-vaccinali-dettagli.component.css']
})
export class CentriVaccinaliDettagliComponent implements OnInit {

 
  constructor(private route: ActivatedRoute,private service : CentriVaccinaliService,private location: Location) { }

    province : String[]=[];
   
     ngOnInit(): void {
    this.getReg();
  }

  getReg(): void {
    const s=  this.route.snapshot.paramMap.get('s');
    this.service.getCentriReg(s!).subscribe(x=> this.province = x);
    
  }



  goBack(): void {
    this.location.back();
  }

}
