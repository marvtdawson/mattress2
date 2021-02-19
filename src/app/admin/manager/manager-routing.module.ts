import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerPage } from './manager.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerPage
  },
  {
    path: 'add-new',
    loadChildren: () => import('./content-editor/add-new/add-new.module').then(m => m.AddNewPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./content-editor/edit/edit.module').then(m => m.EditPageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./content-editor/delete/delete.module').then(m => m.DeletePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPageRoutingModule {}
