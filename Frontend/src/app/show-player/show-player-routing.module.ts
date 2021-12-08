import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartPage } from '../chart/chart.page';

import { ShowPlayerPage } from './show-player.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPlayerPage
  },
  {
    path: 'chart',
    component: ChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPlayerPageRoutingModule {}
