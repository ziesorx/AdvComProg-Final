import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  nbaPlayer: string;
  nbaTeam: string;
  constructor(private router: Router) {}

    showPlayer(){
      if(this.name){
        this.router.navigate(['/show-player'])
      } 
    }
}
