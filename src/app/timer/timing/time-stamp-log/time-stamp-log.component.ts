import { Component, Input, OnInit } from '@angular/core';
import { TimerSubjectService } from 'src/app/timer-with-subject/timer-subject.service';

@Component({
  selector: 'app-time-stamp-log',
  templateUrl: './time-stamp-log.component.html',
  styleUrls: ['./time-stamp-log.component.scss']
})
export class TimeStampLogComponent implements OnInit {
  @Input() message : string[] ;
  constructor(private timerService : TimerSubjectService) { }

  ngOnInit(): void {
    if(!this.message) {
      this.timerService.castTimer.subscribe(
         (timer) => this.message = timer.logMessage,
         (err) => console.log(err),
         () => console.log("completed")
      )
   }
  }
  
}
