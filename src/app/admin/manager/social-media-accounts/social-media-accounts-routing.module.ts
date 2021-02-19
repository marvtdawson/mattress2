import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialMediaAccountsPage } from './social-media-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: SocialMediaAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialMediaAccountsPageRoutingModule {}
