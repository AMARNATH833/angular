/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetterChildComponent } from './setter-child.component';

describe('SetterChildComponent', () => {
  let component: SetterChildComponent;
  let fixture: ComponentFixture<SetterChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetterChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
