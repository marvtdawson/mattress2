import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Mattress & Things';
  siteFooterName = 'Mattress & Things LLC';
  siteTagLine = 'Sleep Right';
  siteKeywords = 'Mattress, Things, Mattress and Things, Mattress & Things ' +
      'mattressandthings.com, Mattress & Things, Mattresses, Kitchen, Beds, Rooms ' +
  'Lamps, Accessories, Furniture, Tables, Bedrooms, Dinning, Dinning Rooms ' +
      'Marvin Dawson, Dawson Technical Consulting LLC';
  year: number = new Date().getFullYear();
  siteLogo = '../assets/img/site/mat_logo3_512_x_512.jpg';
  constructor() { }
}
