import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultiselectDropdown3Component } from './ng-multiselect-dropdown3.component';

describe('NgMultiselectDropdown3Component', () => {
  let component: NgMultiselectDropdown3Component;
  let fixture: ComponentFixture<NgMultiselectDropdown3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgMultiselectDropdown3Component]
    });
    fixture = TestBed.createComponent(NgMultiselectDropdown3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
