/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonserverComponent } from './jsonserver.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('JsonserverComponent', () => {
  let component: JsonserverComponent;
  let fixture: ComponentFixture<JsonserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonserverComponent ],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
