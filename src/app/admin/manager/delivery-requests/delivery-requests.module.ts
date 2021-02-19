import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryRequestsPageRoutingModule } from './delivery-requests-routing.module';

import { DeliveryRequestsPage } from './delivery-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryRequestsPageRoutingModule
  ],
  declarations: [DeliveryRequestsPage]
})
export class DeliveryRequestsPageModule {}
