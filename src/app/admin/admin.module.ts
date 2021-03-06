import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {LayoutModule} from '../layout/layout.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminPage} from './admin.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LayoutModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [AdminPage],
    entryComponents: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AdminModule {}

