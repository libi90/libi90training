import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecalcComponent } from './simplecalc.component';

describe('SimplecalcComponent', () => {
  let component: SimplecalcComponent;
  let fixture: ComponentFixture<SimplecalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplecalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
