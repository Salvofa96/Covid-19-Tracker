import { TestBed } from '@angular/core/testing';

import { StatoService } from './stato.service';

describe('StatoService', () => {
  let service: StatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
