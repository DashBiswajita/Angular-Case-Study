import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition, keyframes, query, group} from '@angular/animations';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.scss'],
  animations: [
  trigger('animateDiv',[
       state('start',style({
         opacity : 1,
         transform : 'translate(0)',
         color : "orange"
       })),
       state('close',style({
        opacity : 1,
        transform : 'translate(0)',
        color : 'orange'
      })),
       transition('start <=> close',[
         group(
           [
            animate('5s linear',keyframes([
              style({
                opacity: 1,
                transform: 'scale(1,1)',
                offset : 0
             }) ,
             style({
                opacity: 0.8,
                transform: 'scale(0.8,0.8)',
                offset : 0.2
             }),
             style({
                opacity: 0.6,
                transform: 'scale(0.6,0.6)',
                offset : 0.4
            }),
            style({
                opacity: 0.4,
                transform: 'scale(0.3,0.3)',
                offset : 0.5
            }),
            style({
                opacity: 0.6,
                transform: 'scale(0.6,0.6)',
                offset : 0.6
            }),
            style({
                opacity: 0.8,
                transform: 'scale(0.8,0.8)',
                offset : 0.8
            }),
            style ({
                opacity: 1,
                transform: 'scale(1,1)',
                offset : 1
            })
             ])),
             query('.bannerMessage',[
              animate('5s linear',keyframes([
                style({
                  'color': 'orange',
                  'opacity' : 1,
                  'transform' : 'translateX(-30%)',
                   offset : 0
              }) ,
              style({
                'color': 'red',
                'opacity' : 0,
                'transform' : 'translateX(30%)',
                  offset : 0.5
              }),
              style({
                'color': 'orange',
                'opacity' : 1,
                'transform' : 'translateX(0)',
                  offset : 1
              }),
               ]))
             ])
           ]
         )
       ])
    ])
  ]
})
export class FloatingBannerComponent implements OnInit, OnDestroy {
  divstate : string;
  timeoutID : any ;
  constructor() { }

  ngOnInit(): void {
    this.divstate = "start";
   }
  
  ngOnDestroy(): void {
      clearInterval(this.timeoutID);
  }
  animationEnd(event) {
    this.divstate = this.divstate === "start" ?  "close" :  "start";
  }
  animationStart(event) {
    console.log(event)
  }
}
