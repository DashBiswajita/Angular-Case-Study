import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingBannerComponent } from './floating-banner.component';
import { RouterModule } from '@angular/router';

const ROUTES = [{path : "", component : FloatingBannerComponent}]

@NgModule({
  declarations: [
    FloatingBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FloatingBannerModule { }
