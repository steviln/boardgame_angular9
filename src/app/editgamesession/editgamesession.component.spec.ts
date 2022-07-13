import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgamesessionComponent } from './editgamesession.component';

describe('EditgamesessionComponent', () => {
  let component: EditgamesessionComponent;
  let fixture: ComponentFixture<EditgamesessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgamesessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgamesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
