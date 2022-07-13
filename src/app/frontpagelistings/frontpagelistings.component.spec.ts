import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpagelistingsComponent } from './frontpagelistings.component';

describe('FrontpagelistingsComponent', () => {
  let component: FrontpagelistingsComponent;
  let fixture: ComponentFixture<FrontpagelistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpagelistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpagelistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
