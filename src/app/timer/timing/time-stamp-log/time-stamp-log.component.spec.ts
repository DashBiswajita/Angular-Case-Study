import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampLogComponent } from './time-stamp-log.component';

describe('TimeStampLogComponent', () => {
  let component: TimeStampLogComponent;
  let fixture: ComponentFixture<TimeStampLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStampLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStampLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
