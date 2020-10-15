import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyAdPageRoutingModule } from './weekly-ad-routing.module';

import { WeeklyAdPage } from './weekly-ad.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyAdPageRoutingModule,
    LayoutModule
  ],
  declarations: [WeeklyAdPage]
})
export class WeeklyAdPageModule {}
