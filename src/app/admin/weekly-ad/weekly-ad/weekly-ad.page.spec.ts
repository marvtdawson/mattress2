import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyAdPage } from './weekly-ad.page';

describe('WeeklyAdPage', () => {
  let component: WeeklyAdPage;
  let fixture: ComponentFixture<WeeklyAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
