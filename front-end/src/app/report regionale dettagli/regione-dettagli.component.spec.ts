import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioneDettagliComponent } from './regione-dettagli.component';

describe('RegioneDettagliComponent', () => {
  let component: RegioneDettagliComponent;
  let fixture: ComponentFixture<RegioneDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegioneDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegioneDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
