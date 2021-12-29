import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort : CdkVirtualScrollViewport;
   arr = new Array(100);
   divNumber : number;
  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(number) : void {
    alert("Clicked on Div : " + number)
  }

}
