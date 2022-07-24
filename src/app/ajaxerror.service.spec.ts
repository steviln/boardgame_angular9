import { TestBed } from '@angular/core/testing';

import { AjaxerrorService } from './ajaxerror.service';

describe('AjaxerrorService', () => {
  let service: AjaxerrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxerrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
