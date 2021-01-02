import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNotFoundPageRoutingModule } from './page-not-found-routing.module';

import { PageNotFoundPage } from './page-not-found.page';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageNotFoundPageRoutingModule,
        LayoutModule
    ],
  declarations: [PageNotFoundPage]
})
export class PageNotFoundPageModule {}
