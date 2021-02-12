import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  pageTitle = 'Your Cart';
  pageDescription = 'Learn all about Mattress & Things history and growth.';
  siteName = this.siteData.siteName;
  constructor(private siteData: SiteDataService,
              private titleService: Title,
              private metaData: Meta) {
    // set page title
    this.titleService.setTitle(this.pageTitle);
    // set page meta data
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteFooterName}
    ]);
  }

  ngOnInit() {
  }

}
