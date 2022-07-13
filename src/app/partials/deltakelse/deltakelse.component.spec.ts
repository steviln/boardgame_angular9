import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltakelseComponent } from './deltakelse.component';

describe('DeltakelseComponent', () => {
  let component: DeltakelseComponent;
  let fixture: ComponentFixture<DeltakelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltakelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltakelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
