import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryRequestsPage } from './delivery-requests.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRequestsPageRoutingModule {}
