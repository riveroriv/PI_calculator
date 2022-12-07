import { TestBed } from '@angular/core/testing';

import { MacService } from './mac.service';

describe('MacService', () => {
  let service: MacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
