import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperdupercounterDetailComponent } from './superdupercounter-detail.component';

describe('SuperdupercounterDetailComponent', () => {
  let component: SuperdupercounterDetailComponent;
  let fixture: ComponentFixture<SuperdupercounterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperdupercounterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperdupercounterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
