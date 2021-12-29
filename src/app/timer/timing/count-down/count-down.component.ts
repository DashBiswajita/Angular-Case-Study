import { AfterViewChecked, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Timer, TimerSubjectService } from 'src/app/timer-with-subject/timer-subject.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit,OnChanges,OnDestroy,AfterViewChecked {
  @Input('timeLimit') timeLimitValue : number;
  @Input('buttonName') buttonNameInput : string;
  timerID : any;
  constructor(private timerService : TimerSubjectService) { }

  ngOnInit(): void {
    if(!this.timeLimitValue){
      this.timerService.castTime.subscribe(
           (time) => this.timeLimitValue = time,
           (err) => console.log(err),
           () => console.log("completed")
      )
      this.timerService.castTimer.subscribe(
       (time) =>{
         this.buttonNameInput = time.buttonName;  
         this.timerID = setInterval(()=>{
          if(this.timeLimitValue > 0 && this.buttonNameInput !== "start"){
            this.timeLimitValue = this.timeLimitValue - 1;
          }
        },1)
        } ,
       (err) => console.log(err),
       () => console.log('completed')
     )
   }
  }
  ngOnChanges(changes: SimpleChanges): void {
     if(changes.timeLimitValue && changes.timeLimitValue.previousValue !== changes.timeLimitValue.currentValue){
       this.timeLimitValue = changes.timeLimitValue.currentValue;
     }
     if(changes.buttonNameInput && changes.buttonNameInput.currentValue !== changes.buttonNameInput.previousValue){
       this.buttonNameInput = changes.buttonNameInput.currentValue;
     }
   this.timerID = setInterval(()=>{
    if(this.timeLimitValue > 0 && this.buttonNameInput !== "start"){
      this.timeLimitValue = this.timeLimitValue - 1;
    }
  },1)
  }
  ngAfterViewChecked(): void {
    
     
  }
  ngOnDestroy(): void {
      clearInterval(this.timerID);
  }
}
