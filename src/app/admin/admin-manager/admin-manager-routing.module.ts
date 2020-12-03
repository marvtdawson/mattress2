import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminManagerPage } from './admin-manager.page';

const routes: Routes = [
  {
    path: '',
    component: AdminManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminManagerPageRoutingModule {}
