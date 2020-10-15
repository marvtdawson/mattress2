import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminManagerPageRoutingModule } from './admin-manager-routing.module';

import { AdminManagerPage } from './admin-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminManagerPageRoutingModule
  ],
  declarations: [AdminManagerPage]
})
export class AdminManagerPageModule {}
