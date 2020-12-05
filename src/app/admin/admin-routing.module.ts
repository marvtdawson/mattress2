import {Routes, RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {ManagerPage} from './manager/manager.page';
import {CustomersPage} from './customers/customers.page';
import {ProfilePage} from './customers/profile/profile.page';

const adminChildRoutes: Routes = [
    { path: 'admin', component: ManagerPage,
        children: [
            {
               path: 'manager', component: ManagerPage,
            },
            { path: 'customers',  component: CustomersPage,
                children: [
                    { path: 'profile', component: ProfilePage}
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
        LayoutModule
    ],
    exports: [
        RouterModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminRoutingModule {}
