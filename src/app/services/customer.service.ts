import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  basket: Array<Product>;
  URI: string = "http://localhost:8080/rest/basket";

  constructor(private http: HttpClient) {
    this.basket = new Array<Product>();
  }

  //addProduct(product: Product) {
  //  this.basket.push(product);
  //}

  getTotal() {
    let total = 0;
    this.basket.forEach(product => total+=product.price)
    return total;
  }

  getBasket(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URI)
  }

  addProduct(product: Product) {
    return this.http.post<Product[]>(this.URI, product)
  }
}
