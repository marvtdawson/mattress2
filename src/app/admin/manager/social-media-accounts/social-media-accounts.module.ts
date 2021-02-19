import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialMediaAccountsPageRoutingModule } from './social-media-accounts-routing.module';

import { SocialMediaAccountsPage } from './social-media-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialMediaAccountsPageRoutingModule
  ],
  declarations: [SocialMediaAccountsPage]
})
export class SocialMediaAccountsPageModule {}
