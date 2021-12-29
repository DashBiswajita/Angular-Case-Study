import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import {Product} from './product.model';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit,OnDestroy {
   products : Product[];
  pageArr : any[];
  currPage : number;
  listActive : boolean = false;
  productsSubscription : Subscription;
  gridActive: boolean = true;
  price : number;
  constructor(private productService : ProductsService , private router : Router,private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(
      (param) => {
        this.currPage = +param["page"] || 1;
        this.getProducts(0,this.currPage);
      }
    )
  }
  previousClick(){
    this.router.navigate(['/','productCategories',this.currPage - 1 || 1])
  }
  nextClick(){
    let endPage = this.pageArr.length > this.currPage + 1 ? this.currPage + 1 : this.pageArr.length;
    this.router.navigate(['/','productCategories',endPage])
  }
  getProducts(price = 0, page): any {
    this.productsSubscription = this.productService.getProducts(price,page).subscribe(
      (products) => {
        this.products = products; 
        this.pageArr = new Array(+this.productService.noOfPages);
      },
      (err) => console.log(err.message),
      () => {
        console.log("completed");
      }
    )
  }
  ngOnDestroy(): void {
      this.productsSubscription.unsubscribe();
  }
  listClick(event){
    this.listActive = true;
    this.gridActive = false;
  }
  gridClick(event){
    this.listActive = false;
    this.gridActive = true;
  }
  searchClick(form){
   //this.products = this.products.filter(prod => prod.price === form.controls["price"].value);
   let searchPrice = +form.controls["price"].value;
   this.getProducts(searchPrice,this.currPage);
  }
  isList(): boolean {
    if(this.listActive){
      return true
    }
  }
  isGrid(): boolean {
    if(this.gridActive){
      return true
    }
  }
}
