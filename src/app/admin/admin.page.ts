import {Component, OnInit} from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    // styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {

    pageTitle = '';
    defaultImage = '';
    siteLogo = this.siteData.siteLogo;

    public adminSideNav = [
        {
            userRole : 'SU',
            linkPath: '/admin/manage/products',
            icon: 'fas fa-cash-register fa-2x',
            linkText: 'Manage Products'
        },
        {
            'user-role': 'SU',
            linkPath: '/admin/manage/content',
            icon: 'fas fa-pencil-alt fa-2x',
            linkText: 'Manage Pages'
        },
        {
            'user-role': 'SU',
            linkPath: '/admin/manage/departments',
            icon: 'fas fa-store fa-2x',
            linkText: 'Manage Departments'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/manage/weekly-ads',
            icon: 'fas fa-ad fa-2x',
            linkText: 'Manage Weekly Ads'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manage/wish-list',
            icon: 'fas fa-star-shooting fa-2x',
            linkText: 'Manage Wish List'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/manage/delivery-requests',
            icon: 'fad fa-truck fa-2x',
            linkText: 'Manage Delivery Requests'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manage/social-media-accounts',
            icon: 'fas fa-hashtag fa-2x',
            linkText: 'Manage Social Media'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manage/employees',
            icon: 'fas fa-users fa-2x',
            linkText: 'Manage Employees'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/manage/payment-options',
            icon: 'fas fa-credit-card fa-2x',
            linkText: 'Manage Payment Options'
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
