import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListingComponent } from './admin-listing.component';

describe('AdminListingComponent', () => {
  let component: AdminListingComponent;
  let fixture: ComponentFixture<AdminListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
