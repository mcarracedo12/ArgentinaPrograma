import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSobremiComponent } from './form-sobremi.component';

describe('FormSobremiComponent', () => {
  let component: FormSobremiComponent;
  let fixture: ComponentFixture<FormSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSobremiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
