import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle = 'Home';
  testImg = './assets/img/matts/amerisleep_mattress-iso_as3.jpg';
  socialMediaImg = './assets/img/site/social-icons/socialmediamarketing.jpg';
  thumbnailImg = false;
  public departments = [
    {
      thumbnailImg: true,
      linkPath: '/mattresses',
      linkImage: './assets/img/matts/beautyrest_black_mariela.jpg',
      linkText: 'Mattress'
    },
    {
      thumbnailImg: true,
      linkPath: '/bedrooms',
      linkImage: './assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg',
      linkText: 'Bedrooms'
    },
    {
      thumbnailImg: true,
      linkPath: '/living-rooms',
      linkImage: './assets/img/liv_rm/Compact-apartment-Moscow.jpg',
      linkText: 'Living Rooms'
    },
    {
      thumbnailImg: true,
      linkPath: '/kitchens',
      linkImage: './assets/img/kitch/kitchen_image_2.jpg',
      linkText: 'Kitchens'
    },
    {
      thumbnailImg: true,
      linkPath: '/dining-rooms',
      linkImage: './assets/img/dining_rm/dining_tables-slides-0XQB-jumbo.jpg',
      linkText: 'Dining Rooms'
    },
    {
      thumbnailImg: true,
      linkPath: '/bathrooms',
      linkImage: './assets/img/bath_rm/bathroom_1.jpg',
      linkText: 'Bathrooms'
    },
    {
      thumbnailImg: true,
      linkPath: '/lamps',
      linkImage: './assets/img/lamps/',
      linkText: 'Lamps'
    },
    {
      thumbnailImg: true,
      linkPath: '/tables',
      linkImage: './assets/img/tables/',
      linkText: 'Tables'
    },
    {
      thumbnailImg: true,
      linkPath: '/recliners',
      linkImage: './assets/img/recliners/',
      linkText: 'Recliners'
    },
    {
      thumbnailImg: true,
      linkPath: '/accessories',
      linkImage: './assets/img/accessories',
      linkText: 'Accessories'
    }
  ];
  constructor() {}

}
