import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Regioni } from '../model/Regioni';
import { RegioniServiceService } from '../service/regioni-service.service';
@Component({
  selector: 'app-regione-dettagli',
  templateUrl: './regione-dettagli.component.html',
  styleUrls: ['./regione-dettagli.component.css']
})
export class RegioneDettagliComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service : RegioniServiceService,
   
    private location: Location) { }

    reg : Regioni | undefined

  ngOnInit(): void {
    this.getReg();
  }

  getReg(): void {
    const id =  parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.service.getReg(id).subscribe(x=> this.reg = x);
  }

  goBack(): void {
    this.location.back();
  }

}
