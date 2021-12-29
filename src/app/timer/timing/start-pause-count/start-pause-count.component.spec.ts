import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseCountComponent } from './start-pause-count.component';

describe('StartPauseCountComponent', () => {
  let component: StartPauseCountComponent;
  let fixture: ComponentFixture<StartPauseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
