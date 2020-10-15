import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle = 'Home';
  testImg = '../assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg';
  public departments = [
    {
      linkPath: '/mattresses',
      linkImage: `${'../assets/img/matts/beautyrest_black_mariela.jpg'}`,
      linkText: 'Mattress'
    },
    {
      linkPath: '/bedrooms',
      linkImage: '../../src/assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg',
      linkText: 'Bedrooms'
    },
    {
      linkPath: '/living-rooms',
      linkImage: './assets/img/liv_rm/Compact-apartment-Moscow.jpg',
      linkText: 'Living Rooms'
    },
    {
      linkPath: '/kitchens',
      linkImage: '/src/assets/img/kitch/kitchen_image_2.jpg',
      linkText: 'Kitchens'
    },
    {
      linkPath: '/dining-rooms',
      linkImage: 'fa fa-cog fa-2x',
      linkText: 'Dining Rooms'
    },
    {
      linkPath: '/bathrooms',
      linkImage: 'fa fa-cog fa-2x',
      linkText: 'Bathrooms'
    },
    {
      linkPath: '/lamps',
      linkImage: 'fa fa-cog fa-2x',
      linkText: 'Lamps'
    },
    {
      linkPath: '/tables',
      linkImage: 'fa fa-cog fa-2x',
      linkText: 'Tables'
    },
    {
      linkPath: '/recliners',
      linkImage: 'fa fa-cog fa-2x',
      linkText: 'Recliners'
    },
    {
      linkPath: '/accessories',
      linkImage: 'fa fa-cog fa-2x',
      linkText: 'Accessories'
    }
  ];
  constructor() {}

}
