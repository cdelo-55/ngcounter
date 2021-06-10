import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercounterDetailComponent } from './supercounter-detail.component';

describe('SupercounterDetailComponent', () => {
  let component: SupercounterDetailComponent;
  let fixture: ComponentFixture<SupercounterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupercounterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercounterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
