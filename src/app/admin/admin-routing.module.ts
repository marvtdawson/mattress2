import {Routes, RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {ManagerPage} from './manager/manager.page';
import {CustomersPage} from './customers/customers.page';
import {ProfilePage} from './customers/profile/profile.page';
import {AdminPage} from './admin.page';
import {AddProductPage} from './manager/products/add-product/add-product.page';
import {PrivacyPolicyPage} from './customers/privacy-policy/privacy-policy.page';
import {WishListPage} from './customers/wish-list/wish-list.page';
import {AddNewPage} from './manager/content-editor/add-new/add-new.page';
import {DeletePage} from './manager/content-editor/delete/delete.page';
import {EditPage} from './manager/content-editor/edit/edit.page';
import {ContentEditorPage} from './manager/content-editor/content-editor';
import {ManagerPageModule} from './manager/manager.module';
import {ProductsPage} from '../products/products.page';
import {CartPage} from './cart/cart.page';

const adminChildRoutes: Routes = [
    { path: 'admin', component: AdminPage,
        children: [
            {
                path: 'manage', component: CartPage,
            },
            {
               path: 'manage', component: ManagerPage,
                children: [
                    { path: 'content', component: ContentEditorPage,
                        children: [
                            { path: 'add', component: AddNewPage },
                            { path: 'edit', component: EditPage },
                            { path: 'delete', component: DeletePage }
                        ]
                    },
                    { path: 'products', component: ProductsPage,
                        children: [
                            { path: 'add', component: AddProductPage }
                        ]
                    },
                    {
                        path: 'employees',
                        loadChildren: () => import('src/app/admin/manager/employees/employees.module').then( m => m.EmployeesPageModule)
                    },
                    {
                        path: 'delivery-requests',
                        loadChildren: () => import('src/app/admin/manager/delivery-requests/delivery-requests.module').then( m => m.DeliveryRequestsPageModule)
                    },
                    {
                        path: 'departments',
                        loadChildren: () => import('src/app/admin/manager/departments/departments.module').then( m => m.DepartmentsPageModule)
                    },
                    {
                        path: 'payment-options',
                        loadChildren: () => import('src/app/admin/manager/payment-options/payment-options.module').then( m => m.PaymentOptionsPageModule)
                    },
                    {
                        path: 'social-media-accounts',
                        loadChildren: () => import('src/app/admin/manager/social-media-accounts/social-media-accounts.module').then( m => m.SocialMediaAccountsPageModule)
                    },
                    {
                        path: 'wish-list',
                        loadChildren: () => import('src/app/admin/manager/wishlist/wishlist.module').then( m => m.WishlistPageModule)
                    },
                    {
                        path: 'weekly-ads',
                        loadChildren: () => import('src/app/admin/manager/weekly-ads/weekly-ads.module').then( m => m.WeeklyAdsPageModule)
                    }
                ]
            },
            { path: 'customers',  component: CustomersPage,
                children: [
                    { path: 'profile', component: ProfilePage},
                    { path: 'privacy-policy', component: PrivacyPolicyPage},
                    { path: 'wish-list', component: WishListPage}
                ]
            }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(adminChildRoutes),
        IonicModule,
        LayoutModule,
        ManagerPageModule
    ],
    exports: [
        RouterModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminRoutingModule {}
