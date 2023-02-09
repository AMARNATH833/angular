/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneRouteComponent } from './oneRoute.component';

describe('OneRouteComponent', () => {
  let component: OneRouteComponent;
  let fixture: ComponentFixture<OneRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
