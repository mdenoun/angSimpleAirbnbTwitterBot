import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnbCardComponent } from './airbnb-card.component';

describe('AirbnbCardComponent', () => {
  let component: AirbnbCardComponent;
  let fixture: ComponentFixture<AirbnbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirbnbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbnbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
