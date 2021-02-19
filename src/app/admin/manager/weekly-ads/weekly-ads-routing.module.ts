import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyAdsPage } from './weekly-ads.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyAdsPageRoutingModule {}
