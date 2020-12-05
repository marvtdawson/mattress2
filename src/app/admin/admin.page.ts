import {Component, NgModule, OnInit} from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    // styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {

    siteLogo = this.siteData.siteLogo;

    public adminSideNav = [
        {
            userRole : 'SU',
            linkPath: '/admin/manager/add-product',
            icon: 'fas fa-cash-register fa-2x',
            linkText: 'Manage Products'
        },
        {
            'user-role': 'SU',
            linkPath: '/admin/manager/departments',
            icon: 'fas fa-store fa-2x',
            linkText: 'Manage Departments'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/manager/weekly-ads',
            icon: 'fas fa-ad fa-2x',
            linkText: 'Manage Weekly Ads'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manager/wish-lists',
            icon: 'fas fa-star-shooting fa-2x',
            linkText: 'Manage Wish List'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/manager/requests',
            icon: 'fad fa-tasks fa-2x',
            linkText: 'Manage Requests'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manager/social-media-accounts',
            icon: 'fas fa-hashtag fa-2x',
            linkText: 'Manage Social Media'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manager/manage-employees',
            icon: 'fas fa-users fa-2x',
            linkText: 'Manage Employees'
        },
        {
            userRole : 'CP',
            linkPath: '/admin/customers/profile',
            icon: 'fa fa-cog fa-2x',
            linkText: 'Account Settings'
        },
    ];


    constructor(private siteData: SiteDataService) { }

    ngOnInit() {
    }

}
