import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  pageTitle = 'Private Policy';
  siteName = this.siteData.siteName;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
