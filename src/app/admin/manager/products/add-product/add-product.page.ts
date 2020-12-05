import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadImage(event) {
    const file: File = event.target.files[0];
    // const filePath = `products/${this.products.id}/${file.name}`;
    const storage = firebase.storage();
    const storageRef = firebase.storage().ref();
    const productsRef = storageRef.child('products/');
  }

}
