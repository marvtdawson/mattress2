import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle = 'Home';
  testImg = '../assets/img/bed_rm/Tabasco_Storage_King_Bed_Styled.jpg';
  constructor() {}

}
