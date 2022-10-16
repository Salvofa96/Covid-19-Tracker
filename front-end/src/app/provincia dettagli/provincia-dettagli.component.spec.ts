import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaDettagliComponent } from './provincia-dettagli.component';

describe('ProvinciaDettagliComponent', () => {
  let component: ProvinciaDettagliComponent;
  let fixture: ComponentFixture<ProvinciaDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciaDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
