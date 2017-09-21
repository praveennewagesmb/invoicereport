import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlistingComponent } from './formlisting.component';

describe('FormlistingComponent', () => {
  let component: FormlistingComponent;
  let fixture: ComponentFixture<FormlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
