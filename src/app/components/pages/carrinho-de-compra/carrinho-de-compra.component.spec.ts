import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoDeCompraComponent } from './carrinho-de-compra.component';

describe('CarrinhoDeCompraComponent', () => {
  let component: CarrinhoDeCompraComponent;
  let fixture: ComponentFixture<CarrinhoDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoDeCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
