import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyAdPage } from './weekly-ad.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyAdPageRoutingModule {}
