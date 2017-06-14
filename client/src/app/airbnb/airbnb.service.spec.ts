import { TestBed, inject } from '@angular/core/testing';

import { AirbnbService } from './airbnb.service';

describe('AirbnbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirbnbService]
    });
  });

  it('should ...', inject([AirbnbService], (service: AirbnbService) => {
    expect(service).toBeTruthy();
  }));
});
