import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerServicePage } from './customer-service.page';

describe('CustomerServicePage', () => {
  let component: CustomerServicePage;
  let fixture: ComponentFixture<CustomerServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
