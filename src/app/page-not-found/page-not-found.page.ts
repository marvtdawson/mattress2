import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss'],
})
export class PageNotFoundPage implements OnInit {

  pageName = 'Page Not Found';
  siteLogo = this.siteData.siteLogo;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
