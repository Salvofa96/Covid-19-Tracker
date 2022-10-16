import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentriVaccinali } from '../model/CentriVaccinali';
import { CentriVaccinaliService } from '../service/centri-vaccinali.service';
@Component({
  selector: 'app-centri-vaccinali',
  templateUrl: './centri-vaccinali.component.html',
  styleUrls: ['./centri-vaccinali.component.css']
})
export class CentriVaccinaliComponent implements OnInit {
  centri : CentriVaccinali[]=[]
  regioni:String[]=[]
  selected : CentriVaccinali | undefined;
  constructor(private service:CentriVaccinaliService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRcentri();
  }

  getAllRcentri():void{
    this.service.getAllCentri().subscribe(x=>this.regioni=x);
  }



}
