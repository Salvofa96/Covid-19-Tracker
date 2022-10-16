import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentriVaccinaliDettagliComponent } from './centri-vaccinali-dettagli.component';

describe('CentriVaccinaliDettagliComponent', () => {
  let component: CentriVaccinaliDettagliComponent;
  let fixture: ComponentFixture<CentriVaccinaliDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentriVaccinaliDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentriVaccinaliDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
