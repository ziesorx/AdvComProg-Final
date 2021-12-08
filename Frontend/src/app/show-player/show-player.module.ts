import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPlayerPageRoutingModule } from './show-player-routing.module';

import { ShowPlayerPage } from './show-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPlayerPageRoutingModule
  ],
  declarations: [ShowPlayerPage]
})
export class ShowPlayerPageModule {}
