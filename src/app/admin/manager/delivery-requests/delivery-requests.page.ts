import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-requests',
  templateUrl: './delivery-requests.page.html',
  styleUrls: ['./delivery-requests.page.scss'],
})
export class DeliveryRequestsPage implements OnInit {

  pageTitle = 'Manage Delivery Requests';
  constructor() { }

  ngOnInit() {
  }

}
