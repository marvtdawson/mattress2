import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyAdsPageRoutingModule } from './weekly-ads-routing.module';

import { WeeklyAdsPage } from './weekly-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyAdsPageRoutingModule
  ],
  declarations: [WeeklyAdsPage]
})
export class WeeklyAdsPageModule {}
