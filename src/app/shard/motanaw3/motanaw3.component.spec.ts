import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Motanaw3Component } from './motanaw3.component';

describe('Motanaw3Component', () => {
  let component: Motanaw3Component;
  let fixture: ComponentFixture<Motanaw3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Motanaw3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Motanaw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
