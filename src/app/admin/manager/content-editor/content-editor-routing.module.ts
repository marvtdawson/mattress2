import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentEditorPage } from './content-editor.page';

const routes: Routes = [
  {
    path: '',
    component: ContentEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentEditorRoutingModule {}
