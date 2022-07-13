import { TestBed } from '@angular/core/testing';

import { FrontpageplayersService } from './frontpageplayers.service';

describe('FrontpageplayersService', () => {
  let service: FrontpageplayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontpageplayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
