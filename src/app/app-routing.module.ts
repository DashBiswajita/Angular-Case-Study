import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DynamicDivsComponent } from './dynamic-divs/dynamic-divs.component';
// import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { TimerWithSubjectComponent } from './timer-with-subject/timer-with-subject.component';
// import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path:"animation",loadChildren:() => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)},
  {path:"productCategories",loadChildren:() => import('./product-categories/product-categories.module').then(m => m.ProductCategoriesModule)},
  {path:"timer",loadChildren:() => import('./timer/timer.module').then(m => m.TimerModule)},
  {path:"studentMarks",loadChildren:() => import('./student-marks/student-marks.module').then(m => m.StudentMarksModule)},
  {path:"dynamicDivs", loadChildren:() => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)},
  {path:"",redirectTo:"animation",pathMatch:"full"},
  {path:"**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
