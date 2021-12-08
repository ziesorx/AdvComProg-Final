import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPlayerPage } from '../show-player/show-player.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'show-player',
    component: ShowPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
