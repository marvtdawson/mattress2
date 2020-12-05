import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimonialsPageRoutingModule } from './testimonials-routing.module';

import { TestimonialsPage } from './testimonials.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TestimonialsPageRoutingModule,
        LayoutModule
    ],
  declarations: [TestimonialsPage]
})
export class TestimonialsPageModule {}
