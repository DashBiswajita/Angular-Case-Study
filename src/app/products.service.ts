import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable, tap } from 'rxjs';
import { Product } from './product-categories/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  itemsPerPage : number = 10;
  noOfPages : number;
  startIndex : number;
  totalProducts : number = 0;
  endIndex : number;
  currPage : number;
  constructor(private http : HttpClient) {}

  getProducts(price = 0, page : number = 1) : Observable<Product[]> {
    if(!!price) {
      return  this.http.get('../assets/products.json').pipe(
        map(data => {return JSON.parse(JSON.stringify(data))}),
        map(data => {this.totalProducts = JSON.parse(JSON.stringify(data)).length; return data.filter(prod => prod.price === price)}),
        map(data => {
          this.noOfPages = Math.ceil(data.length / this.itemsPerPage);
          this.currPage = +page;
          this.startIndex = (this.currPage - 1) * this.itemsPerPage ;
          this.endIndex = (this.itemsPerPage * this.currPage) > data.length + 1 ? data.length : (this.itemsPerPage * this.currPage) + 1;
          data = data.slice(this.startIndex , this.endIndex);
          return data;
        })
      )
    }else {
      return  this.http.get('../assets/products.json').pipe(
        map(data => {this.totalProducts = JSON.parse(JSON.stringify(data)).length; return JSON.parse(JSON.stringify(data))}),
        map(data => {
          this.noOfPages = Math.ceil(data.length / this.itemsPerPage);
          this.currPage = +page;
          this.startIndex = (this.currPage - 1) * this.itemsPerPage;
          this.endIndex = (this.itemsPerPage * this.currPage) > data.length ? data.length : this.itemsPerPage * this.currPage;
          data = data.slice(this.startIndex , this.endIndex);
          return data;
        })
      )
    }
    
  }
}
