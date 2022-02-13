import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../../model/data.model';
import { Router } from '@angular/router';
import { baseColors } from 'ng2-charts';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  data$: Observable<Data>;
  reset: any;
  url: string = 'http://9f2d-35-239-50-167.ngrok.io';
  selectedPlayer: any = {};
  selectedPlayer1: string;
  selectedPlayer2: string;
  selectPlayer: any;
  bars: any;
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  chartData: ChartDataset[]=[{data:[], label:'Points per Game'}];
  chartLabel = [];
  public barChartType = 'bar';
  data: any;
    

  constructor(public http: HttpClient, public router: Router) { 
    this.data$ = this.http.get<Data>(this.url + "/allplayers");
    console.log(this.selectedPlayer)
  }

  ngOnInit(){
  }

  // ionViewDidEnter(){
  //   this.createBarChart()
  // }

  timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  backHome() {
    this.router.navigate(['/show-player'])
    this.reset = this.http.get(this.url + "/resetselectplayer").subscribe((data) => {
      console.log("reset")
    });
  }

  async compare(){
    this.selectedPlayer['1'] = this.selectedPlayer1;
    this.selectedPlayer['2'] = this.selectedPlayer2;
    await this.sentpost();
    await this.timeout(3000);
    // this.ngAfterViewInit();
    this.createBarChart();
    console.log(JSON.stringify(this.selectedPlayer))
  }

  sentpost(){
    this.http.post(this.url + "/selectplayer", JSON.stringify(this.selectedPlayer), {headers : {'content-type':'application/json'}}).subscribe(data => {
      console.log("Success")
     }, error => {
      console.log(error);
    });
  }

  createBarChart() {
    this.http.get<Data>(this.url + "/chart").subscribe((res) => {
      console.log("Got info", res)
      this.timeout(3000)
      this.data = res;
      console.log(this.data)

      this.chartData[0].data=[];
      this.chartLabel = [];
      for (let entry of this.data.x){
        this.chartLabel.push(entry)
      }
      for (let entry of this.data.y){
        this.chartData[0].data.push(entry)
      }
      console.log(this.chartData)
      console.log(this.chartLabel)
    })
  }
} 