import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { TimerSubjectService,Timer } from 'src/app/timer-with-subject/timer-subject.service';
@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})

export class TimerLimitComponent implements OnInit {
  @Input() withSubject : boolean;
  timeModified : boolean;
  timeLimit : number;
  buttonName : string;
  logMessage : string[] = [];
  countObj : {startCount : number, pauseCount: number} = {startCount: 0, pauseCount: 0}
  constructor(private timerService : TimerSubjectService, private fb : FormBuilder) { }
  timer;
  ngOnInit(): void {
    this.buttonName = "start";
    this.timer = this.fb.group(
      {
        "time" : ["", Validators.required]
      }
    )
    this.timer.valueChanges.pipe(debounceTime(1000)).subscribe(
      (data) => {
        if(this.withSubject){
          if( this.timer.get('time').valid && (this.timer.get('time').touched || this.timer.controls.time.dirty)){
            //this.timerService.setTime(+data);
            this.timeModified = true
            console.log("data :" + data)
          }
        }
      }
    )
  }
  timerSubmit(){
    
      if(!!this.timer.controls.time.value && !isNaN(+this.timer.controls.time.value)){
        this.logMessage.push(this.buttonName === "start" ? "Started at: "+ new Date() : "Paused at: " + new Date());
        this.buttonName === "start" ? this.countObj.startCount++ : this.countObj.pauseCount++;
        this.buttonName = this.buttonName === "start" ? "pause" : "start";
        if(this.withSubject){
             if(this.timeModified) this.timerService.setTime(+this.timer.get('time').value);
             this.timeModified = !this.timeModified;
             console.log("is Dirty :" + this.timer.get('time').dirty)
             this.timerService.setTimer({logMessage : this.logMessage,buttonName : this.buttonName,countObj : this.countObj});
        }else {
          this.timeLimit = +this.timer.get('time').value; 
        }
        
      }else {
        alert("Plese Enter a valid Number Value.");
        this.timer.reset();
      }
  }
  resetForm(timerForm){
    timerForm.reset();
    this.buttonName = "start";
  }
}
