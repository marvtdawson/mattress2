import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsConditionsPageRoutingModule } from './terms-conditions-routing.module';

import { TermsConditionsPage } from './terms-conditions.page';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsConditionsPageRoutingModule,
    LayoutModule
  ],
  declarations: [TermsConditionsPage]
})
export class TermsConditionsPageModule {}
