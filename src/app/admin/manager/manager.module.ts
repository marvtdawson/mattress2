import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerPageRoutingModule } from './manager-routing.module';

import { ManagerPage } from './manager.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPageRoutingModule,
    LayoutModule
  ],
  declarations: [ManagerPage]
})
export class ManagerPageModule {}
