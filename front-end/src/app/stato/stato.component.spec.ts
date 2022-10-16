import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoComponent } from './stato.component';

describe('StatoComponent', () => {
  let component: StatoComponent;
  let fixture: ComponentFixture<StatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
