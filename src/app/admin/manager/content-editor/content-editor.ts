import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddNewPage} from './add-new/add-new.page';

@Component({
    selector: 'app-content-editor',
    templateUrl: './content-editor.page.html',
    styleUrls: ['./content-editor.page.scss'],
})
export class ContentEditorPage implements OnInit {

    pageTitle = 'Page Manager';

    constructor(private modalController: ModalController) {
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
        const modal = await this.modalController.create({
            component: AddNewPage
        });
        return await modal.present();
    }

    async onRemovePage() {
        const modal = await this.modalController.create({
            component: AddNewPage
        });
        return await modal.present();
    }

}
