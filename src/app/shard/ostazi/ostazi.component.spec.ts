import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstaziComponent } from './ostazi.component';

describe('OstaziComponent', () => {
  let component: OstaziComponent;
  let fixture: ComponentFixture<OstaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
