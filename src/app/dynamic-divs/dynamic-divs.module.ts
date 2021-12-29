import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

const ROUTES = [{
  path : '', component : DynamicDivsComponent
}]

@NgModule({
  declarations: [
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule.forChild(ROUTES),
    MatDialogModule
  ],
  bootstrap: [DynamicDivsComponent]
})
export class DynamicDivsModule { }
