import { NgModule } from '@angular/core';
import { ProductCategoriesComponent } from './product-categories.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';

const ROUTES = [{path : "", component : ProductCategoriesComponent},
 {path : ":page", component : ProductCategoriesComponent}
]

@NgModule({
  declarations: [
    ProductCategoriesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProductCategoriesModule { }
