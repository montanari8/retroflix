import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaCadastroComponent } from './atualiza-cadastro.component';

describe('AtualizaCadastroComponent', () => {
  let component: AtualizaCadastroComponent;
  let fixture: ComponentFixture<AtualizaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
