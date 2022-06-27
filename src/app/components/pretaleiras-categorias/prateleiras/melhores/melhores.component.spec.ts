import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresComponent } from './melhores.component';

describe('MelhoresComponent', () => {
  let component: MelhoresComponent;
  let fixture: ComponentFixture<MelhoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
