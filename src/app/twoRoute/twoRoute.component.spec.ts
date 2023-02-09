/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoRouteComponent } from './twoRoute.component';

describe('TwoRouteComponent', () => {
  let component: TwoRouteComponent;
  let fixture: ComponentFixture<TwoRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
