import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  pageTitle = 'Manage Wish Lists';
  constructor() { }

  ngOnInit() {
  }

}
