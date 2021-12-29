import { Component, Input, OnInit } from '@angular/core';
import { TimerSubjectService } from 'src/app/timer-with-subject/timer-subject.service';

@Component({
  selector: 'app-start-pause-count',
  templateUrl: './start-pause-count.component.html',
  styleUrls: ['./start-pause-count.component.scss']
})
export class StartPauseCountComponent implements OnInit {
  @Input() countObj : {startCount : number, pauseCount: number};
  constructor(private timerService : TimerSubjectService) { }

  ngOnInit(): void {
    if(!this.countObj) {
       this.timerService.castTimer.subscribe(
          (timer) => this.countObj = timer.countObj,
          (err) => console.log(err),
          () => console.log("completed")
       )
    }
  }

}
