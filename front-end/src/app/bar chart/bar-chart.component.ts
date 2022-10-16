import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Gennaio', 'Febbraio', 'Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  public barChartType : ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [0, 12428, 27967, 33415, 34767, 35141, 35483,35894,38618,55576,74159], label: 'Morti anno 2020'},
    {data: [88516, 97699, 109346, 120807, 126128, 127566, 128063,129221,130921,132100,133828,137402], label: 'Morti Anno 2021'},
    {data: [146498, 154767, 159383, 163507, 166697, 168353, 172086,175595,177092], label: 'Morti Anno 2022'}
  ];
  ngOnInit() {
  }
}