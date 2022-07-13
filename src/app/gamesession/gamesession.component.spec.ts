import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesessionComponent } from './gamesession.component';

describe('GamesessionComponent', () => {
  let component: GamesessionComponent;
  let fixture: ComponentFixture<GamesessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
