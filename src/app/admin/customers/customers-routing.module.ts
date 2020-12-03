import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersPage } from './customers.page';
import {ProfilePage} from './profile/profile.page';

const customersChildRoutes: Routes = [
  {
    path: '',
    component: CustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(customersChildRoutes)],
  exports: [RouterModule],
})
export class CustomersPageRoutingModule {}
