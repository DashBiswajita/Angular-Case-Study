import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithSubjectComponent } from './timer-with-subject.component';

describe('TimerWithSubjectComponent', () => {
  let component: TimerWithSubjectComponent;
  let fixture: ComponentFixture<TimerWithSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerWithSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
