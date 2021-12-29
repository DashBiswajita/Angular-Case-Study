import { TestBed } from '@angular/core/testing';

import { TimerSubjectService } from './timer-subject.service';

describe('TimerSubjectService', () => {
  let service: TimerSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
