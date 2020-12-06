import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer-backup.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  siteName = this.siteData.siteName;
  siteFooterName = this.siteData.siteFooterName;
  date = new Date().getFullYear();
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {}

  getContactForm() {}

  askMAT() {}

  getWeeklyAd() {}

}
