import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'wish-list',
    loadChildren: () => import('./wish-list/wish-list/wish-list.module').then(m => m.WishListPageModule)
  },
  {
    path: 'weekly-ad',
    loadChildren: () => import('./weekly-ad/weekly-ad.module').then(m => m.WeeklyAdPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AdminModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
