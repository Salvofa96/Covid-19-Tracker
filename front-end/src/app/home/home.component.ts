import { Component, OnInit } from '@angular/core';
import { Regioni } from '../model/Regioni';
import { RegioniServiceService } from '../service/regioni-service.service';
import { Stato } from '../model/Stato';
import { StatoService } from '../service/stato.service';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  regioni : Regioni[]=[]
  stato : Stato[]=[];

 public searchInput!: string;
 public pages= [
   'news','report nazionale','report regionale','centri vaccinali'
]
  constructor(private service:RegioniServiceService, private service2: StatoService,private route:Router) { }


  ngOnInit(): void {
    this.getAllStato();
    this.getAllRegioni();
  }   
  


  getAllRegioni():void{
      this.service.getRegioni().subscribe(x=>this.regioni=x);
  }

  getAllStato():void{
    this.service2.getAllStato().subscribe(x=>this.stato=x);
  }
}
