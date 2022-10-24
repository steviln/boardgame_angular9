import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesessiondisplayComponent } from './gamesessiondisplay.component';

describe('GamesessiondisplayComponent', () => {
  let component: GamesessiondisplayComponent;
  let fixture: ComponentFixture<GamesessiondisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesessiondisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesessiondisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
