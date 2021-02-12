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
import {WishListPage} from './customers/wish-list/wish-list/wish-list.page';
import {AddNewPage} from './manager/content-editor/add-new/add-new.page';
import {DeletePage} from './manager/content-editor/delete/delete.page';
import {EditPage} from './manager/content-editor/edit/edit.page';
import {ContentEditorPage} from './manager/content-editor/content-editor';
import {ProductsPage} from '../products/products.page';
import {ManagerPageModule} from './manager/manager.module';

const adminChildRoutes: Routes = [
    { path: 'admin', component: AdminPage,
        children: [
            {
               path: 'manager', component: ManagerPage,
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
