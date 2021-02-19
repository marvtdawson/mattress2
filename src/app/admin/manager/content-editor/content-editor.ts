import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewPage} from './add-new/add-new.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-content-editor',
    templateUrl: './content-editor.page.html',
    styleUrls: ['./content-editor.page.scss'],
})
export class ContentEditorPage implements OnInit {

    pageTitle = 'Manage Pages';

    constructor(private modalController: ModalController,
                private router: Router) {
    }


    ngOnInit() {
    }

    async onAddNewPage() {
        const modal = await this.modalController.create({
            component: AddNewPage
        });
        return await modal.present();
    }

    async onEditPage() {
        // route to confirm registration page
        this.router.navigateByUrl('/edit').then().catch();
        /*const modal = await this.modalController.create({
            component: AddNewPage
        });
        return await modal.present();*/
    }

    async onRemovePage() {
        const modal = await this.modalController.create({
            component: AddNewPage
        });
        return await modal.present();
    }

}
