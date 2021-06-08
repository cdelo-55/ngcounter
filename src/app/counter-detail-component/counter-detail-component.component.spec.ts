import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponentComponent } from './counter-detail-component.component';

describe('CounterDetailComponentComponent', () => {
  let component: CounterDetailComponentComponent;
  let fixture: ComponentFixture<CounterDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
