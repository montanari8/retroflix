import { TestBed } from '@angular/core/testing';

import { ListProdutosService } from './list-produtos.service';

describe('ListProdutosService', () => {
  let service: ListProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
