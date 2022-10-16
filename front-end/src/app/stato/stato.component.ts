import { Component, OnInit } from '@angular/core';
import { Stato } from '../model/Stato';
import { StatoService } from '../service/stato.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stato',
  templateUrl: './stato.component.html',
  styleUrls: ['./stato.component.css']
})
export class StatoComponent implements OnInit {
  stato : Stato=undefined!;
  constructor(private service:StatoService,private location:Location) { }

  ngOnInit(): void {
    this.getUltimoReport();
  }

  getUltimoReport():void{
    this.service.getStato().subscribe(x=>this.stato=x);
}

goBack(): void {
  this.location.back();
}

}
