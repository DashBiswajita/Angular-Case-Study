import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { TimerWithSubjectComponent } from '../timer-with-subject/timer-with-subject.component';
import { TimerComponent } from './timer.component';
import { CountDownComponent } from './timing/count-down/count-down.component';
import { StartPauseCountComponent } from './timing/start-pause-count/start-pause-count.component';
import { TimeStampLogComponent } from './timing/time-stamp-log/time-stamp-log.component';
import { TimerLimitComponent } from './timing/timer-limit/timer-limit.component';
//import { CommonModule } from '@angular/common';

const ROUTES = [{path : "timerWithInput", component : TimerComponent},
{path:"timerWithSubject",component:TimerWithSubjectComponent},
]

@NgModule({
  declarations: [
    CountDownComponent,
    StartPauseCountComponent,
    TimeStampLogComponent,
    TimerLimitComponent,
    TimerComponent,
    TimerWithSubjectComponent
  ],
  imports: [
    //CommonModule,
    //FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class TimerModule { }
