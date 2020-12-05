import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidPageRoutingModule } from './covid-routing.module';

import { CovidPage } from './covid.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CovidPageRoutingModule,
        LayoutModule
    ],
  declarations: [CovidPage]
})
export class CovidPageModule {}
