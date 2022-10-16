import { TestBed } from '@angular/core/testing';

import { RegioniServiceService } from './regioni-service.service';

describe('RegioniServiceService', () => {
  let service: RegioniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegioniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
