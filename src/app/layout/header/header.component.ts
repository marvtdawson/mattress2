import { Component, OnInit } from '@angular/core';

import {SiteDataService} from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  appTitle = this.siteData.siteName;
  appLogo = this.siteData.siteLogo;
  isLoggedOut$: any;
  isLoggedIn$: any;
  displayName$: any;

  onLogUserOut() {}

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {}

}
