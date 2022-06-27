import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaReembolsoComponent } from './politica-reembolso.component';

describe('PoliticaReembolsoComponent', () => {
  let component: PoliticaReembolsoComponent;
  let fixture: ComponentFixture<PoliticaReembolsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaReembolsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
