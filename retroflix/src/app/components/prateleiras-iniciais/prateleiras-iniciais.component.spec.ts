import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrateleirasIniciaisComponent } from './prateleiras-iniciais.component';

describe('PrateleirasIniciaisComponent', () => {
  let component: PrateleirasIniciaisComponent;
  let fixture: ComponentFixture<PrateleirasIniciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrateleirasIniciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrateleirasIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
