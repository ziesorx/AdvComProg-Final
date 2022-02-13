import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPlayerPage } from '../show-player/show-player.page';

import { ChartPage } from './chart.page';

const routes: Routes = [
  {
    path: '',
    component: ChartPage
  },
  {
    path: 'show-player',
    component: ShowPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartPageRoutingModule {}
