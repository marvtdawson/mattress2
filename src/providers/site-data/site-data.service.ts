import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Mattress & Things';
  siteFooterName = 'Mattress & Things LLC';
  siteTagLine = 'Sleep Right';
  siteKeywords = 'Mattress, Things, Mattress and Things, Mattress & Things' +
      'Marvin Dawson, Dawson Technical Consulting LLC';
  year: number = new Date().getFullYear();
  siteLogo = '../assets/shapes.svg';
  constructor() { }
}
