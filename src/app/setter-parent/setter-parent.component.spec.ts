/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetterParentComponent } from './setter-parent.component';

describe('SetterParentComponent', () => {
  let component: SetterParentComponent;
  let fixture: ComponentFixture<SetterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
