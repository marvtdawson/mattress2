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
  mattressImg = '../../assets/img/matts/beautyrest_black_mariela.png';
  bedroomImg = '../../assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg';
  livingroomImg = '../../assets/img/liv_rm/Compact-apartment-Moscow.jpg';
  kitchenImg = './assets/img/kitch/kitchen_image_2.jpg';
  diningroomImg = './assets/img/dining_rm/dining-tables-slide-0XQB-jumbo.jpg';
  bathroomImg = './assets/img/bath_rm/bathroom_1.jpg';
  lampImg = './assets/img/lamps/1-splash-mobile-Table-Lamps.jpg';
  tableImg = './assets/img/tables/tyler-creek-counter-height-dining-room-table-0.jpg';
  reclinerImg = './assets/img/recliners/lansing-tufted-leather-recliner-with-nailheads-o.jpg';
  accessoriesImg = './assets/img/accessories/eb079052b1972b81297106d1c55c573e.jpg';
  public departments = [
    {
      thumbnailImg: true,
      linkPath: '/mattresses',
      linkImage: '../../assets/img/matts/beautyrest_black_mariela.png',
      linkText: 'Mattress'
    },
    {
      thumbnailImg: true,
      linkPath: '/bedrooms',
      linkImage: '../../assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg',
      linkText: 'Bedrooms'
    },
    {
      thumbnailImg: true,
      linkPath: '/living-rooms',
      linkImage: '../../assets/img/liv_rm/Compact-apartment-Moscow.jpg',
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
      linkImage: './assets/img/dining_rm/dining-tables-slide-0XQB-jumbo.jpg',
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
      linkImage: './assets/img/lamps/1-splash-mobile-Table-Lamps.jpg',
      linkText: 'Lamps'
    },
    {
      thumbnailImg: true,
      linkPath: '/tables',
      linkImage: './assets/img/tables/tyler-creek-counter-height-dining-room-table-0.jpg',
      linkText: 'Tables'
    },
    {
      thumbnailImg: true,
      linkPath: '/recliners',
      linkImage: './assets/img/recliners/lansing-tufted-leather-recliner-with-nailheads-o.jpg',
      linkText: 'Recliners'
    },
    {
      thumbnailImg: true,
      linkPath: '/accessories',
      linkImage: './assets/img/accessories/eb079052b1972b81297106d1c55c573e.jpg',
      linkText: 'Accessories'
    }
  ];
  constructor() {}

}
