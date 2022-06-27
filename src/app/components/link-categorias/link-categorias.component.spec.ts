import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCategoriasComponent } from './link-categorias.component';

describe('LinkCategoriasComponent', () => {
  let component: LinkCategoriasComponent;
  let fixture: ComponentFixture<LinkCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
