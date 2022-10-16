import { TestBed } from '@angular/core/testing';

import { CentriVaccinaliService } from './centri-vaccinali.service';

describe('CentriVaccinaliService', () => {
  let service: CentriVaccinaliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentriVaccinaliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
