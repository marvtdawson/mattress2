import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentEditorRoutingModule} from './content-editor-routing.module';
import { ContentEditorPage } from './content-editor.page';
import {LayoutModule} from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentEditorRoutingModule,
    LayoutModule
  ],
  declarations: [ContentEditorPage]
})
export class ContentEditorModule {}
