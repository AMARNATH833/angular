/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormFunctionComponent } from './formFunction.component';

describe('FormFunctionComponent', () => {
  let component: FormFunctionComponent;
  let fixture: ComponentFixture<FormFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
