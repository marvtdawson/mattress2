import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPageRoutingModule } from './delivery-routing.module';

import { DeliveryPage } from './delivery.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DeliveryPageRoutingModule,
        LayoutModule
    ],
  declarations: [DeliveryPage]
})
export class DeliveryPageModule {}
