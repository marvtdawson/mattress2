import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricePageRoutingModule } from './price-routing.module';

import { PricePage } from './price.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PricePageRoutingModule,
        LayoutModule
    ],
  declarations: [PricePage]
})
export class PricePageModule {}
