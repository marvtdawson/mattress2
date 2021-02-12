import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentEditorPageRoutingModule} from './content-editor-routing.module';
import { ContentEditorPage } from './content-editor';
import {LayoutModule} from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentEditorPageRoutingModule,
    LayoutModule
  ],
  declarations: [ContentEditorPage]
})
export class ContentEditorPageModule {}
