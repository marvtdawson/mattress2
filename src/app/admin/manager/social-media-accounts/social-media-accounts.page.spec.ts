import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialMediaAccountsPage } from './social-media-accounts.page';

describe('SocialMediaAccountsPage', () => {
  let component: SocialMediaAccountsPage;
  let fixture: ComponentFixture<SocialMediaAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaAccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
