import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarksComponent } from './student-marks.component';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';

const ROUTES = [{path : "",component : StudentMarksComponent}]

@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AgGridModule.withComponents([])
  ]
})
export class StudentMarksModule { }
