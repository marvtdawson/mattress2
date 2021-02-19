import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  pageTitle = 'Products';
  constructor() { }

  ngOnInit() {
  }

  onAddNewProduct() {}

  onEditProduct(){}

  onRemoveProduct(){}

}
