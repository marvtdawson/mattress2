import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitemapPageRoutingModule } from './sitemap-routing.module';

import { SitemapPage } from './sitemap.page';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitemapPageRoutingModule,
    LayoutModule
  ],
  declarations: [SitemapPage]
})
export class SitemapPageModule {}
