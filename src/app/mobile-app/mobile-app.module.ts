import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileAppPageRoutingModule } from './mobile-app-routing.module';

import { MobileAppPage } from './mobile-app.page';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileAppPageRoutingModule,
      LayoutModule
  ],
  declarations: [MobileAppPage]
})
export class MobileAppPageModule {}
