import {Component, NgModule, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    // styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {


    public adminSideNav = [
        {
            userRole : 'TU',
            linkPath: '/admin/manager/add-product',
            icon: 'fad fa-concierge-bell fa-2x',
            linkText: 'Product'
        },
        {
            userRole: 'TU',
            linkPath: '/admin/select-a-machine',
            icon: 'fad fa-washer fa-2x',
            linkText: 'Weekly Ad'
        },
        {
            userRole : 'TU',
            linkPath: '/admin/notify',
            icon: 'fas fa-people-arrows fa-2x',
            linkText: 'Wish List'
        },
        {
            'user-role': 'SU',
            linkPath: '/admin/packages',
            icon: 'fad fa-box-check fa-2x',
            linkText: 'Package Notify'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/client/tasks',
            icon: 'fad fa-tasks fa-2x',
            linkText: 'Manage Requests'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/client/manage-employees',
            icon: 'icofont-users-alt-1 icofont-2x',
            linkText: 'Manage Employees'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/client/manage-parking-spaces',
            icon: 'fad fa-cars fa-2x',
            linkText: 'Manage Parking'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/client/manage-laundry-machines',
            icon: 'fad fa-washer fa-2x',
            linkText: 'Manage Machine'
        },
        {
            userRole: 'SU',
            linkPath: '/admin/contractors',
            icon: 'fad fa-user-hard-hat fa-2x',
            linkText: 'Manage Contractors'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/tenants',
            icon: 'fad fa-users fa-2x',
            linkText: 'Manage Tenants'
        },
        {
            userRole : 'SU',
            linkPath: '/admin/profile',
            icon: 'fa fa-cog fa-2x',
            linkText: 'Account Settings'
        },
    ];


    constructor() { }

    ngOnInit() {
    }

}
