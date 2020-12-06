import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MattressesPageRoutingModule } from './mattresses-routing.module';

import { MattressesPage } from './mattresses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MattressesPageRoutingModule
  ],
  declarations: [MattressesPage]
})
export class MattressesPageModule {}
