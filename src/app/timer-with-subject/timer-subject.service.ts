import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, retry, Subject } from 'rxjs';
export interface Timer {
    //timeLimit : number,
  logMessage : string[],
  buttonName : string,
  countObj : {startCount : number, pauseCount: number}
}
@Injectable({
  providedIn: 'root'
})
export class TimerSubjectService {
  time : Timer;
  constructor() { }
  private  timer : BehaviorSubject<Timer> = new BehaviorSubject<Timer>( {logMessage : [],buttonName:'',countObj: {startCount : 0, pauseCount : 0}});
  private timeLimit : BehaviorSubject<number> = new BehaviorSubject<number>(0)
  castTimer = this.timer.asObservable();
  castTime = this.timeLimit.asObservable();
  setTimer(time : Timer){
    this.time = time;
    return this.timer.next(time);
  }
  setTime(time : number){
    return this.timeLimit.next(time);
  }
  // getTimer() : BehaviorSubject<Timer>{
  //   return this.timer.next(this.time);
  // }
}
