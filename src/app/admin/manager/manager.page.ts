import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase/app';
@Component({
  selector: 'app-admin-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {
  private productDir = ['mattresses', 'bedrooms'];

  constructor() { }

  ngOnInit() {
  }

  uploadImage(event) {
    // const storage = firebase.storage();
    // const storageRef = firebase.storage().ref();
    // const productRef = storageRef.child(`products/${this.productDir}`).put(event.file.name);
  }

}
