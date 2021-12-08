import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Data } from '../../model/data.model';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.page.html',
  styleUrls: ['./show-player.page.scss'],
})
export class ShowPlayerPage implements OnInit {
  data$: Observable<Data>;
  url: string = 'http://2352-35-237-122-64.ngrok.io';
  public showDetails: boolean = false;

  constructor(public http: HttpClient, private router: Router) { 
      this.data$ = this.http.get<Data>(this.url + "/allplayers");
  }

  ngOnInit() {
  }

  chart(){
      this.router.navigate(['/chart'])
  }

  powerRanking(){
      this.data$ = this.http.get<Data>(this.url + "/allplayers");
  }

  highToLowPts(){
      this.data$ = this.http.get<Data>(this.url + "/hightolowpts");
  }
  
  toggleDetails() {
      this.showDetails = !this.showDetails;
  }
}
