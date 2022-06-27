import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretaleirasCategoriasComponent } from './pretaleiras-categorias.component';

describe('PretaleirasCategoriasComponent', () => {
  let component: PretaleirasCategoriasComponent;
  let fixture: ComponentFixture<PretaleirasCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretaleirasCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretaleirasCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
