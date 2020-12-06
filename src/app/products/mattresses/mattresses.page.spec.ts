import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MattressesPage } from './mattresses.page';

describe('MattressesPage', () => {
  let component: MattressesPage;
  let fixture: ComponentFixture<MattressesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattressesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MattressesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
