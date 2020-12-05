import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageName = 'About Us';
  siteName = this.siteData.siteName;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
