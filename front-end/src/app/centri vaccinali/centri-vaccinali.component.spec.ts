import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentriVaccinaliComponent } from './centri-vaccinali.component';

describe('CentriVaccinaliComponent', () => {
  let component: CentriVaccinaliComponent;
  let fixture: ComponentFixture<CentriVaccinaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentriVaccinaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentriVaccinaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
