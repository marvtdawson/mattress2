import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishListPageRoutingModule } from './wish-list-routing.module';

import { WishListPage } from './wish-list.page';
import {LayoutModule} from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishListPageRoutingModule,
    LayoutModule
  ],
  declarations: [WishListPage]
})
export class WishListPageModule {}
