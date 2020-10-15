import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminManagerPage } from './admin-manager.page';

describe('AdminManagerPage', () => {
  let component: AdminManagerPage;
  let fixture: ComponentFixture<AdminManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
