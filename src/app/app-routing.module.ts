import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
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
    },
    {
        path: 'terms-conditions',
        loadChildren: () => import('./terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'sitemap',
        loadChildren: () => import('./sitemap/sitemap.module').then(m => m.SitemapPageModule)
    },
    {
        path: 'mobile-app',
        loadChildren: () => import('./mobile-app/mobile-app.module').then(m => m.MobileAppPageModule)
    },
    {
        path: 'add-product',
        loadChildren: () => import('./admin/manager/products/add-product/add-product.module').then(m => m.AddProductPageModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
    },
    {
        path: 'history',
        loadChildren: () => import('./about/history/history.module').then(m => m.HistoryPageModule)
    },
    {
        path: 'covid',
        loadChildren: () => import('./about/covid/covid.module').then(m => m.CovidPageModule)
    },
    {
        path: 'location',
        loadChildren: () => import('./about/location/location.module').then(m => m.LocationPageModule)
    },
    {
        path: 'testimonials',
        loadChildren: () => import('./about/testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
    },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'returns',
    loadChildren: () => import('./returns/returns.module').then( m => m.ReturnsPageModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./price/price.module').then( m => m.PricePageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        AdminModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
