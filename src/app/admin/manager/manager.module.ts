import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminManagerPageRoutingModule } from './manager-routing.module';

import { ManagerPage } from './manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminManagerPageRoutingModule
  ],
  declarations: [ManagerPage]
})
export class AdminManagerPageModule {}
