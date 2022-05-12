import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatoComponent } from './form-dato.component';

describe('FormDatoComponent', () => {
  let component: FormDatoComponent;
  let fixture: ComponentFixture<FormDatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
