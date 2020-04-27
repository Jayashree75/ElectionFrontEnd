import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencywiseComponent } from './constituencywise.component';

describe('ConstituencywiseComponent', () => {
  let component: ConstituencywiseComponent;
  let fixture: ComponentFixture<ConstituencywiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstituencywiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstituencywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
