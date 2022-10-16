import { Component, OnInit } from '@angular/core';
import { Regioni } from '../model/Regioni';
import { RegioniServiceService } from '../service/regioni-service.service';
import { StatoService } from '../service/stato.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regioni',
  templateUrl: './regioni.component.html',
  styleUrls: ['./regioni.component.css']
})
export class RegioniComponent implements OnInit {
  regioni : Regioni[]=[]
  //selectedReg : Regioni | undefined;
  constructor(private service:RegioniServiceService, private service2: StatoService,private router: Router) { }

  ngOnInit(): void {  
    this.getAllRegioni();
  }

  getAllRegioni():void{
      this.service.getRegioni().subscribe(x=>this.regioni=x);
  }


  /*gotoDetail(): void {
    this.router.navigate(['/dettagli', this.selectedReg!.id]);
  }*/
}