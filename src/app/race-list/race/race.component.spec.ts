/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaceComponent } from './race.component';

describe('RaceComponent', () => {
  let component: RaceComponent;
  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
